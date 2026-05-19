"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const schema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  country: z.string().min(2, "Country is required"),
  website: z.string().optional(),
  productCategory: z.string().min(1, "Select a product category"),
  serviceType: z.string().min(1, "Select a service type"),
  estimatedMOQ: z.string().optional(),
  targetDelivery: z.string().optional(),
  fabricPreference: z.string().optional(),
  message: z.string().min(20, "Please describe your project (min 20 characters)"),
  honeypot: z.string().max(0, "Bot detected"),
});

type FormData = z.infer<typeof schema>;

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({ label, error, required, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <Label>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Submission failed. Please try again.");
      }
      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Quote Request Received</h3>
        <p className="text-gray-500 max-w-sm">
          Our merchandising team will review your brief and respond within 24 hours with
          preliminary pricing and lead times.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Honeypot */}
      <input type="text" className="hidden" tabIndex={-1} aria-hidden {...register("honeypot")} />

      {/* Section: Contact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">
          Contact Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Company Name" error={errors.companyName?.message} required>
            <Input placeholder="ACME Kids Retail Ltd." {...register("companyName")} className={cn(errors.companyName && "border-red-300")} />
          </FormField>
          <FormField label="Your Name" error={errors.contactName?.message} required>
            <Input placeholder="Sarah Johnson" {...register("contactName")} className={cn(errors.contactName && "border-red-300")} />
          </FormField>
          <FormField label="Email Address" error={errors.email?.message} required>
            <Input type="email" placeholder="sarah@acmekids.com" {...register("email")} className={cn(errors.email && "border-red-300")} />
          </FormField>
          <FormField label="Phone / WhatsApp" error={errors.phone?.message}>
            <Input placeholder="+44 7700 900000" {...register("phone")} />
          </FormField>
          <FormField label="Country" error={errors.country?.message} required>
            <Input placeholder="United Kingdom" {...register("country")} className={cn(errors.country && "border-red-300")} />
          </FormField>
          <FormField label="Website" error={errors.website?.message}>
            <Input placeholder="acmekids.com" {...register("website")} />
          </FormField>
        </div>
      </div>

      {/* Section: Product Details */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">
          Project Details
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Product Category" error={errors.productCategory?.message} required>
            <Select {...register("productCategory")} className={cn(errors.productCategory && "border-red-300")}>
              <option value="">Select category</option>
              <option value="boys">Boys (0–14y)</option>
              <option value="girls">Girls (0–14y)</option>
              <option value="infants">Infants (0–12m)</option>
              <option value="toddlers">Toddlers (1–3y)</option>
              <option value="mixed">Mixed / Full Range</option>
            </Select>
          </FormField>
          <FormField label="Service Type" error={errors.serviceType?.message} required>
            <Select {...register("serviceType")} className={cn(errors.serviceType && "border-red-300")}>
              <option value="">Select service</option>
              <option value="private-label">Private Label / OEM</option>
              <option value="cut-sew">Cut & Sew (buyer supplies fabric)</option>
              <option value="full-package">Full Package (design to delivery)</option>
              <option value="embellishment">Embroidery / Printing only</option>
            </Select>
          </FormField>
          <FormField label="Estimated MOQ" error={errors.estimatedMOQ?.message}>
            <Select {...register("estimatedMOQ")}>
              <option value="">Select range</option>
              <option value="under-300">Under 300 pcs / style</option>
              <option value="300-1000">300 – 1,000 pcs / style</option>
              <option value="1000-5000">1,000 – 5,000 pcs / style</option>
              <option value="5000-plus">5,000+ pcs / style</option>
            </Select>
          </FormField>
          <FormField label="Target Ex-Factory Date" error={errors.targetDelivery?.message}>
            <Input placeholder="e.g. Q1 2026 or March 2026" {...register("targetDelivery")} />
          </FormField>
          <div className="sm:col-span-2">
            <FormField label="Fabric Preference" error={errors.fabricPreference?.message}>
              <Input placeholder="e.g. GOTS organic cotton jersey, polyester fleece" {...register("fabricPreference")} />
            </FormField>
          </div>
        </div>
        <div className="mt-4">
          <FormField label="Project Brief" error={errors.message?.message} required>
            <Textarea
              rows={5}
              placeholder="Describe your collection: styles, quantity per style, target markets, compliance requirements, anything special about the collection..."
              {...register("message")}
              className={cn(errors.message && "border-red-300")}
            />
          </FormField>
        </div>
      </div>

      {serverError && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Quote Request
          </>
        )}
      </Button>

      <p className="text-xs text-gray-400">
        We respond within 24 hours. No spam, no commitment required.
      </p>
    </form>
  );
}
