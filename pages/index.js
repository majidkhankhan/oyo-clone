import { Inter } from "next/font/google";
import MainBanner from "./MainBanner";
import MainHeader from "@/components/headers/MainHeader";
import Footer from "@/components/footers/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <MainHeader/>
    <MainBanner/>
    <Footer/>
      </>
  );
}
