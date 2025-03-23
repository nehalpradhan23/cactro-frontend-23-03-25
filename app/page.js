import Image from "next/image";
import Page from "../components/Page";
import Navbar from "../components/sections/Navbar";
import Banner from "@/components/sections/Banner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-amber-50 h-full pb-10 relative">
      <Page>
        <Navbar />
        <Banner />
        <Footer />
      </Page>
      <div className="fixed z-10 right-5 bottom-5">
        <div className="w-[350px] px-3 py-5 shadow-md bg-white flex flex-col gap-5">
          <p className="font-semibold">
            This website used cookies to enhance user experience and to analyze
            performance and traffic on out website. We also share information
            about your use of our site with our social media, advertising and
            analytics partners.{" "}
            <span className="text-blue-300 underline">More info</span>
          </p>
          <div className="w-full text-center font-semibold bg-primary p-4 rounded-sm">
            ACCEPT ALL COOKIES
          </div>
        </div>
      </div>
    </div>
  );
}
