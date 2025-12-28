import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 section-dark relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-white/70">
              Join the waitlist for early access
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
            Ready to build a
            <br />
            <span className="text-gradient-blue">self-running business?</span>
          </h2>

          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
            Stop being the bottleneck. Capture your knowledge, systemize your
            operations, and regain your freedom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero-dark" size="xl">
              Add Me to the Wishlist
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-secondary-dark" size="xl">
              See How It Works
            </Button>
          </div>

          {/* Feature preview */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Video & Meeting Recording",
                desc: "Capture every decision",
              },
              {
                title: "AI-Powered SOPs",
                desc: "Generate processes automatically",
              },
              {
                title: "Execution Dashboards",
                desc: "See everything at a glance",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                <p className="text-white/40 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
