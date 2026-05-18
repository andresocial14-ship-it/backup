import { Link } from "react-router-dom";
import { useState } from "react";
import type { ReactNode } from "react";
import { MapPin, Map as MapIcon, Info, ArrowLeft, Check, Building2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

type Pay = "transfer" | "qris";
type DeliveryType = "delivery" | "pickup";

const methods: { id: Pay; title: string; desc: string; icon: ReactNode }[] = [
  { id: "transfer", title: "Transfer Bank", desc: "BCA, Mandiri, BNI, BRI", icon: <Building2 className="h-5 w-5" /> },
  { id: "qris", title: "QRIS", desc: "Scan & bayar dengan e-wallet apa pun", icon: <QrCode className="h-5 w-5" /> },
];

const Checkout = () => {
  const [pay, setPay] = useState<Pay>("transfer");
  const [deliveryType, setDeliveryType] =
  useState<DeliveryType>("delivery");
  const subtotal = 65000;
  const fee = 0;
  const total = subtotal + fee;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16">
        <div className="container">
          <Link to="/#cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Cart
          </Link>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-foreground">Checkout</h1>
          <p className="mt-1 text-muted-foreground">Lengkapi informasi pengiriman dan pilih metode pembayaran.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">
            <button
              type="button"
              onClick={() => setDeliveryType("delivery")}
              className={`rounded-2xl border-2 p-5 text-left transition-all ${
                deliveryType === "delivery"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
              }`}
            >
              <p className="font-bold">Diantar ke Tempat</p>

              <p className="text-sm text-muted-foreground mt-1">
                Pesanan akan dikirim ke alamat Anda
              </p>
            </button>

            <button
              type="button"
              onClick={() => setDeliveryType("pickup")}
              className={`rounded-2xl border-2 p-5 text-left transition-all ${
                deliveryType === "pickup"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
              }`}
            >
              <p className="font-bold">Ambil Langsung</p>

              <p className="text-sm text-muted-foreground mt-1">
                Ambil pesanan langsung di resto
              </p>
            </button>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="soft-card p-7 space-y-6">
              <h3 className="font-bold text-lg">Informasi Pengiriman</h3>
              <div className="grid gap-4">
                <div><Label>Nama Pemesan</Label><Input placeholder="Enter your full name" className="mt-1.5 rounded-2xl h-11" /></div>
                <div><Label>Nomor Telepon</Label><Input placeholder="08..." className="mt-1.5 rounded-2xl h-11" /></div>
                {deliveryType === "delivery" && (
                <>
                  <div>
                    <Label>Alamat Lengkap</Label>

                    <Input
                      placeholder="Jl. ..."
                      className="mt-1.5 rounded-2xl h-11"
                    />
                  </div>

                  <div>
                    <Label>Catatan Tambahan</Label>

                    <Textarea
                      placeholder="Patokan, lantai, dll."
                      className="mt-1.5 rounded-2xl min-h-24"
                    />
                  </div>
                </>
              )}
              </div>
            </div>

            <div className="soft-card p-7">
              <h3 className="font-bold text-lg">Lokasi Pengiriman</h3>
              <div className="mt-4 aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapIcon className="h-10 w-10 mx-auto" />
                  <p className="mt-2 font-semibold text-foreground">Interactive Map</p>
                  <p className="text-xs">Google Maps Integration</p>
                </div>
              </div>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Estimated Arrival</dt><dd className="font-semibold">25–35 minutes</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Delivery Fee</dt><dd className="font-semibold">Rp. {fee.toLocaleString("id-ID")}</dd></div>
              </dl>
              <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1.5"><Info className="h-3.5 w-3.5" /> We deliver within a 5-mile radius.</p>
            </div>
          </div>

          <div className="mt-10 soft-card p-7">
            <h3 className="font-bold text-lg">Pilih Cara Pembayaran</h3>
            <div className="mt-5 grid md:grid-cols-3 gap-4">
              {methods.map((m) => {
                const active = pay === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPay(m.id)}
                    className={`text-left bg-card rounded-2xl p-5 border-2 transition-all ${active ? "border-primary shadow-card" : "border-transparent hover:border-border"}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="h-10 w-10 rounded-xl bg-muted inline-flex items-center justify-center text-foreground">{m.icon}</div>
                      <span className={`h-6 w-6 rounded-full inline-flex items-center justify-center transition-colors ${active ? "bg-blue-600 text-white" : "bg-muted text-transparent"}`}>
                        <Check className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-4 font-semibold">{m.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 border-t border-border pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Total Harga</p>
                <p className="text-3xl font-extrabold text-primary">Rp. {total.toLocaleString("id-ID")}</p>
              </div>
              <div className="flex gap-3">
                <Link to="/#cart"><Button variant="soft" className="h-12 rounded-full px-6"><ArrowLeft className="h-4 w-4" /> Back to Cart</Button></Link>
                <Button variant="dark" className="h-12 rounded-full px-8">Complete Payment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
