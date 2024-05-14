import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (

    <main className="min-h-screen  bg-black/[0.96] antialised bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Music Academy</h1> */}
      <div className="" >

      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCard />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
      </div>
    </main>
  );
}
