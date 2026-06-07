import FloatingHearts from "@/components/FloatingHearts";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import LoveLetter from "@/components/LoveLetter";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingHearts />
      <Hero />
      <Countdown />
      <Timeline />
      <LoveLetter />
      <Gallery />
      <RSVP />
      <Footer />
    </main>
  );
}
