import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  companyName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().min(2),
  website: z.string().optional(),
  productCategory: z.string().min(1),
  serviceType: z.string().min(1),
  estimatedMOQ: z.string().optional(),
  targetDelivery: z.string().optional(),
  fabricPreference: z.string().optional(),
  message: z.string().min(20),
  honeypot: z.string().max(0),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Save to Payload CMS if configured
    const payloadUrl = process.env.PAYLOAD_URL || "http://localhost:3000";
    const payloadApiKey = process.env.PAYLOAD_API_KEY;

    if (payloadApiKey) {
      await fetch(`${payloadUrl}/api/rfq-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `users API-Key ${payloadApiKey}`,
        },
        body: JSON.stringify({
          companyName: data.companyName,
          contactName: data.contactName,
          email: data.email,
          phone: data.phone,
          country: data.country,
          website: data.website,
          productCategory: data.productCategory,
          serviceType: data.serviceType,
          estimatedMOQ: data.estimatedMOQ,
          targetDelivery: data.targetDelivery,
          fabricPreference: data.fabricPreference,
          message: data.message,
          status: "new",
        }),
      }).catch(console.error);
    }

    // Send notification email
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const categoryLabels: Record<string, string> = {
        boys: "Boys (0–14y)",
        girls: "Girls (0–14y)",
        infants: "Infants (0–12m)",
        toddlers: "Toddlers (1–3y)",
        mixed: "Mixed / Full Range",
      };

      const serviceLabels: Record<string, string> = {
        "private-label": "Private Label / OEM",
        "cut-sew": "Cut & Sew",
        "full-package": "Full Package",
        embellishment: "Embroidery / Printing",
      };

      await transporter.sendMail({
        from: `"RaheDeen Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.RFQ_EMAIL || "rfq@rahedeen.com",
        replyTo: data.email,
        subject: `New RFQ: ${data.companyName} — ${categoryLabels[data.productCategory] || data.productCategory}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#3730a3;">New Quote Request</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;width:40%">Company</td><td style="padding:8px;border-bottom:1px solid #eee">${data.companyName}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Contact</td><td style="padding:8px;border-bottom:1px solid #eee">${data.contactName}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${data.phone || "—"}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Country</td><td style="padding:8px;border-bottom:1px solid #eee">${data.country}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Category</td><td style="padding:8px;border-bottom:1px solid #eee">${categoryLabels[data.productCategory] || data.productCategory}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Service</td><td style="padding:8px;border-bottom:1px solid #eee">${serviceLabels[data.serviceType] || data.serviceType}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">MOQ</td><td style="padding:8px;border-bottom:1px solid #eee">${data.estimatedMOQ || "—"}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Target Delivery</td><td style="padding:8px;border-bottom:1px solid #eee">${data.targetDelivery || "—"}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:600">Fabric</td><td style="padding:8px;border-bottom:1px solid #eee">${data.fabricPreference || "—"}</td></tr>
            </table>
            <h3 style="color:#374151;margin-top:20px;">Project Brief</h3>
            <p style="color:#6b7280;line-height:1.6;">${data.message}</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: err.issues }, { status: 422 });
    }
    console.error("RFQ error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
