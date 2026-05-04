import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, Lock, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import nasiGoreng from "@/assets/nasi-goreng.jpg";
import nasiRawon from "@/assets/nasi-rawon.jpg";
import nasiPadang from "@/assets/nasi-padang.jpg";

type Item = { id: number; name: string; desc: string; price: number; img: string; qty: number };

const initial: Item[] = [
  { id: 1, name: "Nasi Goreng Spesial", desc: "Rice with fried rice", price: 20000, img: nasiGoreng, qty: 0 },
  { id: 2, name: "Nasi Goreng", desc: "Rice with fried rice", price: 18000, img: nasiGoreng, qty: 0 },
  { id: 3, name: "Nasi Rawon", desc: "Beef black soup with rice", price: 22000, img: nasiRawon, qty: 0 },
  { id: 4, name: "Nasi Padang", desc: "Rendang with rice & vegetables", price: 25000, img: nasiPadang, qty: 0 },
];

const Cart = () => {
  const [items, setItems] = useState<Item[]>(initial);
  const update = (id: number, d: number) => setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: Math.max(0, i.qty + d) } : i)));
  const remove = (id: number) => setItems((p) => p.filter((i) => i.id !== id));
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <section id="cart" className="bg-cream py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Keranjang Pesanan Saya</h2>
        <p className="mt-2 text-muted-foreground">Pastikan Pesananmu Sudah Benar!</p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 soft-card p-6 md:p-8">
            <h3 className="font-bold mb-5">Daftar Pesanan :</h3>
            <ul className="divide-y divide-border">
              {items.map((i) => (
                <li key={i.id} className="flex items-center gap-4 py-4">
                  <img src={i.img} alt={i.name} className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">{i.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{i.desc}</p>
                    <p className="text-xs text-muted-foreground">Color: Pink &nbsp;&nbsp; Size: Worker size</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-muted rounded-full px-2 py-1">
                    <button onClick={() => update(i.id, -1)} className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-card hover:bg-primary hover:text-primary-foreground"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-6 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => update(i.id, 1)} className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-card hover:bg-primary hover:text-primary-foreground"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <span className="w-20 text-right text-sm font-bold">Rp. {(i.price * i.qty).toLocaleString("id-ID")}</span>
                  <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-sm">
              <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> Continue Shopping</button>
              <button onClick={() => setItems([])} className="inline-flex items-center gap-2 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /> Clear Cart</button>
            </div>
          </div>

          <aside className="soft-card p-6 md:p-7 h-fit">
            <h3 className="font-bold">Harga Pesanan Sementara :</h3>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground"><dt>Subtotal ({items.length} items)</dt><dd>Rp. {subtotal.toLocaleString("id-ID")}</dd></div>
              <div className="flex justify-between text-muted-foreground"><dt>Diskon</dt><dd>Rp. 0</dd></div>
              <div className="border-t border-border pt-3 flex justify-between text-lg font-bold"><dt>Total</dt><dd>Rp. {subtotal.toLocaleString("id-ID")}</dd></div>
            </dl>
            <div className="mt-5">
              <label className="text-xs font-medium">Kode Promo</label>
              <div className="mt-1 flex gap-2">
                <Input placeholder="Enter code" className="rounded-full" />
                <Button variant="soft" className="rounded-full">Apply</Button>
              </div>
            </div>
            <Button asChild variant="dark" className="mt-5 w-full h-12">
              <Link to="/checkout"><Lock className="h-4 w-4" /> Proceed to Checkout</Link>
            </Button>
            <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Secure checkout with SSL encryption</li>
              <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-blue-500" /> Free shipping on orders over $75</li>
              <li className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-primary" /> 30-day return policy</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
