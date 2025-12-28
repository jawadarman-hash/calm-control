import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4">
      <div className="container mx-auto px-6">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">
                C
              </span>
            </div>
            <span className="font-serif text-lg font-semibold text-foreground">
              Coordexa
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Product", "Features", "Pricing", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button size="sm">Add Me to the Wishlist</Button>
        </div>
      </div>
    </header>
  );
};
