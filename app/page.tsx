import Hero from "@/components/hero";
import Services from "@/components/services";
import Reviews from "@/components/reviews";
import OpeningAndLocation from "@/components/opening&location/opening&location";
import type { Metadata } from "next";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  title: "Barber Shop in Bournemouth",
  description:
    "Visit Pristine Barbers on Charminster Road in Bournemouth for skin fades, haircuts, beard trims and professional grooming. Book online today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: SITE_URL,
  },
};

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
