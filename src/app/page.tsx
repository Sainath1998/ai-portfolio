import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about">
        {/* About section can be integrated into Hero or separate, 
            for now Hero covers the high level about. */}
      </div>
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
