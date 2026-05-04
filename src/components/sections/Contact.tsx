import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Compass, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontak" className="bg-charcoal py-24 text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="badge-pill">Hubungi Kami</span>
          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold gradient-text">Mari Berkunjung</h2>
          <p className="mt-4 text-white/70">Kami siap melayani Anda. Jangan ragu untuk menghubungi kami.</p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-charcoal-soft border border-white/5 p-8 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 inline-flex items-center justify-center rounded-2xl bg-rose-500 shadow-card">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold">Lokasi Kami</h3>
              <p className="text-sm text-white/60">Kunjungi kami di alamat berikut</p>
            </div>
            <Button variant="soft" className="rounded-full"><Compass className="h-4 w-4" /> Navigasi</Button>
          </div>
          <div className="mt-6 space-y-1 text-white/85 text-sm leading-relaxed">
            <p>Indah E5, Jl. Perum Asrikaton</p>
            <p>Jl. Kebun Cengkeh 4 No.2, RT.4/RW.9</p>
            <p>Bunut Kidul, Asrikaton, Kec. Pakis</p>
            <p>Kabupaten Malang, Jawa Timur 65154</p>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Phone, color: "bg-emerald-500", title: "Telepon / WhatsApp", value: "+62 812-3456-7890" },
            { icon: Mail, color: "bg-blue-500", title: "Email", value: "takewayresto@gmail.com" },
            { icon: Clock, color: "bg-primary", title: "Jam Operasional", value: "Senin - Minggu\n08.00 - 21.00 WIB" },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl bg-charcoal-soft border border-white/5 p-6 shadow-card hover:-translate-y-1 transition-transform">
              <div className={`h-11 w-11 inline-flex items-center justify-center rounded-2xl ${c.color}`}>
                <c.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-bold">{c.title}</h4>
              <p className="mt-1 text-sm text-white/70 whitespace-pre-line">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-charcoal-soft border border-white/5 p-7 text-center">
          <h4 className="font-bold">Ikuti Kami di Media Sosial</h4>
          <div className="mt-4 flex justify-center gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-colors border border-white/10">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-white/40">© {new Date().getFullYear()} TakeWay Resto. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
