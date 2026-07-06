import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Reservations from "@/components/Reservations";
import LocationHours from "@/components/LocationHours";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <MenuPreview />
      <Gallery />
      <Reservations />
      <LocationHours />
    </>
  );
}
