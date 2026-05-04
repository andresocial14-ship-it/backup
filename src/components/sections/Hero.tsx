import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-resto.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[88vh] min-h-[600px] w-full">
        <img
          src={heroImg}
          alt="Interior cozy TakeWay Resto"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/85" />
        <div className="relative container flex h-full flex-col items-center justify-center text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/20 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Kuliner Berkualitas untuk Keluarga Indonesia
          </span>
          <h1 className="mt-6 font-black tracking-tight text-7xl md:text-9xl leading-[0.9] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            TakeWay
            <br />
            <span className="gradient-text">Resto</span>
          </h1>
          <div className="mt-8 max-w-xl rounded-3xl bg-charcoal/40 backdrop-blur-md border border-white/10 px-8 py-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg font-semibold">Makanan Harian Berkualitas & Minuman Tradisional</p>
            <p className="mt-1 text-sm text-white/80">Melayani pemesanan langsung dan pre-order dengan cita rasa autentik yang terjaga.</p>
          </div>
          <Button variant="hero" size="xl" className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }} asChild>
            <a href="#menu">Jelajahi Menu Kami</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
