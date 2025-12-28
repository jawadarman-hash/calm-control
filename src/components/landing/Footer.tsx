export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

          <nav className="flex items-center gap-8">
            {["Product", "Pricing", "About", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 Coordexa. Building self-running businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};
