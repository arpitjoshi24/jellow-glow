
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedMusic from "./components/FeaturedMusic";
import Members from "./components/Members";
import LiveArchive from "./components/LiveArchive";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedMusic />
        <Members />
        <LiveArchive />
      </main>

      <Footer />
    </>
  );
}
