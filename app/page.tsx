import Hero from "@/components/hero";
import Services from "@/components/services";
import Reviews from "@/components/reviews";
import OpeningAndLocation from "@/components/opening&location/opening&location";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Reviews />
      <OpeningAndLocation />
    </main>
  );
}
