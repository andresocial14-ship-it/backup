import { MapPin, Map as MapIcon, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Delivery = () => {
  return (
    <section id="delivery" className="bg-cream pb-24">
      <div className="container">
        <h2 className="text-4xl font-extrabold text-foreground">Informasi Pengiriman</h2>
        <p className="mt-1 text-muted-foreground">Please provide your delivery details to complete your order.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="soft-card p-7 space-y-6">
            <div>
              <h3 className="font-bold">Informasi Pemesan</h3>
              <div className="mt-4 grid gap-4">
                <div><Label>Nama Pemesan</Label><Input placeholder="Enter your full name" className="mt-1.5 rounded-2xl h-11" /></div>
                <div><Label>Nomor Telepon</Label><Input placeholder="08..." className="mt-1.5 rounded-2xl h-11" /></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Informasi Alamat</h3>
              <div className="mt-4 grid gap-4">
                <div><Label>Alamat Lengkap</Label><Input placeholder="Jl. ..." className="mt-1.5 rounded-2xl h-11" /></div>
                <div><Label>Informasi Tambahan</Label><Textarea placeholder="Patokan, lantai, dll." className="mt-1.5 rounded-2xl min-h-24" /></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="soft" className="rounded-2xl flex-1 h-11"><MapPin className="h-4 w-4" /> Gunakan Lokasi Saya</Button>
              <Button variant="dark" className="rounded-2xl flex-1 h-11">Lanjut Ke Pembayaran</Button>
            </div>
          </div>

          <div className="soft-card p-7">
            <h3 className="font-bold">Lokasi Pengiriman</h3>
            <div className="mt-4 aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapIcon className="h-10 w-10 mx-auto" />
                <p className="mt-2 font-semibold text-foreground">Interactive Map</p>
                <p className="text-xs">Google Maps Integration</p>
              </div>
            </div>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Estimasi Pesanan Sampai</dt><dd className="font-semibold">25-35 minutes</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Delivery Fee:</dt><dd className="font-semibold">Rp. 0</dd></div>
            </dl>
            <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1.5"><Info className="h-3.5 w-3.5" /> We deliver within a 5-mile radius.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
