import { Store, Smartphone, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Ordering = () => {
  return (
    <section id="pemesanan" className="bg-cream pb-24">
      <div className="container">
        <div className="text-center">
          <span className="badge-pill">Cara Pemesanan</span>
          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold gradient-text">Pesan dengan Mudah</h2>
          <p className="mt-3 text-muted-foreground">Kami melayani pemesanan dengan dua cara untuk kemudahan Anda.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="soft-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-card">
              <Store className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Pemesanan Langsung</h3>
            <p className="mt-2 text-muted-foreground">Datang langsung ke lokasi kami untuk menikmati makanan segar atau membawa pulang.</p>
            <ol className="mt-5 space-y-3">
              {["Kunjungi lokasi TakeWay Resto", "Pilih menu yang Anda inginkan", "Lakukan pembayaran dan nikmati"].map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="h-6 w-6 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="soft-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-card">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Pemesanan Online</h3>
            <p className="mt-2 text-muted-foreground">Pesan melalui WhatsApp atau telepon untuk pre-order dan pesanan dalam jumlah besar.</p>
            <ol className="mt-5 space-y-3">
              {["Pilih menu di halaman menu website", "Masukkan informasi pesanan", "Lakukan pembayaran dan tunggu pesanan datang"].map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="h-6 w-6 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <Button variant="link" className="mt-4 px-0 text-primary">Mulai Pesan →</Button>
          </div>

          <div className="soft-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-card">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Pre-Order</h3>
            <p className="mt-2 text-muted-foreground">Untuk pesanan besar atau acara khusus, kami sarankan untuk pre-order minimal H-1 agar kami dapat mempersiapkan dengan maksimal.</p>
          </div>

          <div className="soft-card p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-card">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Pesanan Besar</h3>
            <p className="mt-2 text-muted-foreground">Melayani pesanan dalam jumlah besar untuk acara keluarga, kantor, atau gathering. Hubungi kami untuk paket khusus.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ordering;
