import Image from "next/image";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
// import Blogs from "@/components/sections/Blogs";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      {/* <Blogs /> */}
      <Contact />
    </>
  );
}
