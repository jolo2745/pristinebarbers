export const metadata = {
  title: "Pristine Barbers | Barber Shop in Bournemouth",
  description:
    "Pristine Barbers in Bournemouth offering modern haircuts, fades, beard trims and professional grooming. Book your cut today.",
};

import Hero from "@/components/hero";
import Services from "@/components/services";
import Reviews from "@/components/reviews";
import OpeningAndLocation from "@/components/opening&location/opening&location";

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
