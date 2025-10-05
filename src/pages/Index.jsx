import Navbar from "../components/Navbar";
import Hero from "@/components/Hero.jsx";
import Stats  from "../components/Stas";
import Footer from "@/components/Footer.jsx";
import About from "@/components/About.jsx";
import Product from "../components/Product";
import { useSmoothScroll } from "../hooks/useSmoothScroll"; // Add this line
import { Contact } from "lucide-react";

const Index = () => {
  useSmoothScroll(); // Add this line
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Product />
      </main>
      <Footer />
    </div>
  );
};

export default Index;