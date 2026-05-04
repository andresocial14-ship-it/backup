import { Menu } from "lucide-react";


const links = [
  { label: "Kontak", href: "#kontak" },
  { label: "Menu", href: "#menu" },
  { label: "Pemesanan", href: "#pemesanan" },
  { label: "Tentang", href: "#tentang" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-navbar/90 backdrop-blur-md border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-1 font-extrabold text-xl">
          <span className="text-primary">TakeWay</span>
          <span className="text-foreground">Resto</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
