import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const Header = dynamic(() => import("@/components/ui/Header"));
const Hero = dynamic(() => import("@/components/ui/Hero"));
const Features = dynamic(() => import("@/components/ui/Features"));
const Showcase = dynamic(() => import("@/components/ui/Showcase"));
const Testimonials = dynamic(() => import("@/components/ui/Testimonials"));
const Pricing = dynamic(() => import("@/components/ui/Pricing"));
const FAQ = dynamic(() => import("@/components/ui/FAQ"));
const CTA = dynamic(() => import("@/components/ui/CTA"));
const Footer = dynamic(() => import("@/components/ui/Footer"));

export default function Home() {
  return (
    <>
      <main className="bg-background text-foreground">
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Features />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Showcase />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <CTA />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

function Loading() {
  return (
    <div className="flex justify-center py-10">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  );
}
