import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Diseños", href: "#disenos" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "FAQ", href: "#faq" },
  { label: "Pedir", href: "#pedir" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="AFDAM" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-2xl text-foreground tracking-wider">AFDAM</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pedir"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Pedir ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pedir"
            onClick={() => setOpen(false)}
            className="block mt-2 bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold text-center"
          >
            Pedir ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
