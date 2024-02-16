import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Preview from "@/components/partials/Preview";
import About from "@/components/partials/About";
import Feature from "@/components/partials/Feature";
import CoursesFor from "@/components/partials/CoursesFor";
import Reviews from "@/components/partials/Reviews";
import Footer from "@/components/layout/Footer";
import Farhat from "@/components/partials/Farhat";
import Video from "@/components/partials/Video";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Preview />
      <About />
      <CoursesFor />
      <Feature />
      <Farhat />
      <Video />
      <Reviews />
      <Footer />
    </main>
  );
}
