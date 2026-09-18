import About from "@/components/sections/About";
import Access from "@/components/sections/Access";
import Contact from "@/components/sections/ContactLazy";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Access />
      <Contact />
    </>
  );
}
