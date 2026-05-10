import { TrendingUp, Heart, Users, Award } from "lucide-react";

const values = [
  { icon: Heart, color: "bg-pink-500", title: "Kualitas Terjaga", desc: "Setiap hidangan dibuat dengan bahan pilihan dan proses yang higienis." },
  { icon: Users, color: "bg-blue-500", title: "Memberdayakan Lokal", desc: "Melibatkan masyarakat sekitar dalam proses produksi pesanan besar." },
  { icon: Award, color: "bg-primary", title: "Cita Rasa Autentik", desc: "Resep tradisional yang diwariskan dengan sentuhan modern." },
];

const About = () => {
  return (
    <section id="tentang" className="bg-cream py-24">
      <div className="container">
        <div className="text-center">
          <span className="badge-pill">Tentang Kami</span>
          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold text-primary">TakeWay Resto</h2>
        </div>

        <div className="mt-12 max-w-4xl mx-auto soft-card p-10 md:p-14">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Takeway Resto merupakan bisnis kuliner online asal Malang yang melayani pemesanan makanan untuk kebutuhan harian, acara keluarga, kegiatan komunitas, hingga event dalam jumlah besar dengan layanan antar langsung ke lokasi pelanggan. 
              Nama “Takeway” sendiri terinspirasi dari istilah take away yang dipelesetkan agar terasa lebih unik, modern, dan mudah diingat.
            </p>
            <p>
              Usaha ini dibangun oleh sekelompok sahabat SMA yang memiliki semangat untuk berkembang bersama melalui dunia kuliner. 
              Di tengah masa pandemi COVID-19, Takeway Resto tetap bertahan dengan mengandalkan sistem pemesanan online dan layanan delivery yang praktis.
            </p>
            <p>
              Selain menjaga kualitas rasa dan pelayanan, Takeway Resto juga aktif melibatkan masyarakat sekitar serta mendukung kolaborasi bersama UMKM lokal. 
              Bagi Takeway Resto, makanan bukan hanya soal rasa, tetapi juga tentang kebersamaan, peluang, dan perjalanan untuk tumbuh bersama dari waktu ke waktu.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="soft-card p-7 hover:-translate-y-1 transition-transform">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${v.color} text-white shadow-card`}>
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
