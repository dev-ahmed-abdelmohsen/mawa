import Banner from "@/components/home/Banner";
import Cards from "@/components/home/Cards";
import Features from "@/components/home/Features";
import GenderHousing from "@/components/home/GenderHousing";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="space-y-12 py-8">
      <Banner />
      <Cards />
      <GenderHousing />
      <Features />
      <CallToAction />
    </div>
  );
}
