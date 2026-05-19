import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-brand-700 flex items-center justify-center mx-auto mb-6 shadow-brand/30 shadow-lg">
          <Package className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-7xl font-bold text-brand-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h2>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact/rfq">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
