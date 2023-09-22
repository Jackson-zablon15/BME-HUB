import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import News from "@/components/News";
import ContactForm from "@/components/forms/ContactForm";
import FQA from "@/components/forms/FQA";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-xs:w-[90vw] max-sm:w-[75vw] mx-auto">
        <News />
        <About />
        <FQA/>
        <ContactForm/>
      </div>
      <Footer/>
    </>
  );
}
