import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, CupSoda, Plus } from "lucide-react";
import nasiGoreng from "@/assets/nasi-goreng.jpg";
import nasiRawon from "@/assets/nasi-rawon.jpg";
import nasiPadang from "@/assets/nasi-padang.jpg";
import esTeh from "@/assets/es-teh.jpg";
import esJeruk from "@/assets/es-jeruk.jpg";

type Category = "all" | "makanan" | "minuman";

const items = [
  { id: 1, name: "Nasi Goreng Spesial", desc: "Nasi goreng dengan bumbu rahasia, telur, ayam, dan sayuran segar.", price: 20000, img: nasiGoreng, cat: "makanan" as const },
  { id: 2, name: "Nasi Goreng", desc: "Nasi goreng klasik dengan kerupuk dan acar.", price: 18000, img: nasiGoreng, cat: "makanan" as const },
  { id: 3, name: "Nasi Rawon", desc: "Sup daging hitam khas Jawa Timur dengan kuah kluwek.", price: 22000, img: nasiRawon, cat: "makanan" as const },
  { id: 4, name: "Nasi Padang", desc: "Rendang empuk, sayur nangka, dan sambal hijau.", price: 25000, img: nasiPadang, cat: "makanan" as const },
  { id: 5, name: "Es Teh Manis", desc: "Teh tradisional segar dengan es batu pilihan.", price: 5000, img: esTeh, cat: "minuman" as const },
  { id: 6, name: "Es Jeruk Peras", desc: "Jeruk peras asli, segar dan menyegarkan.", price: 8000, img: esJeruk, cat: "minuman" as const },
];

const Menu = () => {
  const [cat, setCat] = useState<Category>("all");
  const filtered = cat === "all" ? items : items.filter((i) => i.cat === cat);

  const FilterBtn = ({ value, icon: Icon, label }: { value: Category; icon?: any; label: string }) => {
    const active = cat === value;
    return (
      <button
        onClick={() => setCat(value)}
        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
          active
            ? "bg-primary text-primary-foreground shadow-glow"
            : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10"
        }`}
      >
        {Icon && <Icon className="h-4 w-4" />} {label}
      </button>
    );
  };

  return (
    <section id="menu" className="bg-charcoal py-24 text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="badge-pill">Menu Pilihan</span>
          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold gradient-text">Hidangan Terbaik Kami</h2>
          <p className="mt-4 text-white/70">Nikmati berbagai pilihan makanan dan minuman dengan cita rasa autentik Indonesia.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <FilterBtn value="all" label="Semua Menu" />
            <FilterBtn value="makanan" icon={UtensilsCrossed} label="Makanan" />
            <FilterBtn value="minuman" icon={CupSoda} label="Minuman" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article key={item.id} className="group rounded-3xl bg-charcoal-soft border border-white/5 overflow-hidden hover:-translate-y-1 transition-transform shadow-soft">
              <div className="relative h-52 overflow-hidden">
                <img src={item.img} alt={item.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/15 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {item.cat === "makanan" ? <UtensilsCrossed className="h-3 w-3" /> : <CupSoda className="h-3 w-3" />}
                  {item.cat === "makanan" ? "Makanan" : "Minuman"}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="mt-1 text-sm text-white/60 line-clamp-2">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">Rp {item.price.toLocaleString("id-ID")}</span>
                  <Button variant="hero" size="sm" className="rounded-full">
                    <Plus className="h-3.5 w-3.5" /> TAMBAH
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
