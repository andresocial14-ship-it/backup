import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/About";
import Ordering from "@/components/sections/Ordering";
import Cart from "@/components/sections/Cart";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Ordering />
      <Cart />
      <Contact />
    </main>
  );
};

export default Index;
