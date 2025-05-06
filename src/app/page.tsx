import Banner from "@/components/home/Banner";
import Cards from "@/components/home/Cards";
import Features from "@/components/home/Features";
import GenderHousing from "@/components/home/GenderHousing";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Banner />
        <Features />
        <GenderHousing />
        <Cards />
        <CallToAction />
      </div>
    </main>
  );
}
