import Image from "next/image";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import banner from "../public/assets/aboutus.webp";
import mypic from "../public/assets/ida.webp";
import BottomNavigation from "../components/BottomNavigation";

export default function Aboutus() {
  return (
    <div>
      <Meta title="About Us" />
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="banner"
                className="object-cover object-center h-full w-full"
                width="1200"
                height="50"
                src={banner}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image alt="profile" className="rounded-full" src={mypic} />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Ida Bagus Putu Putra Manuaba
                  </h2>
                  <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Diponegoro University</p>
                  <p className="text-base">Computer Engineering</p>
                  <p className="text-base">2020 Batch</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-justify">
                  Nearly half of all fish species live in fresh water, which
                  means they swim in the rivers, lakes, and wetlands that make
                  up less than 3 percent of Earth’s water supply. There are more
                  than 800 known freshwater fish species in North America alone.
                  Worldwide, the number is over 10,000 species.
                </p>
                <p className="leading-relaxed text-lg mb-4 text-justify">
                  Some species of freshwater fish, such as salmon and trout, are
                  called anadromous. They hatch in fresh water, head out to sea,
                  where they live until they return to fresh water to reproduce.
                  Then there are catadromous species, or those that do it in
                  reverse, such as freshwater eels. These animals hatch at sea,
                  live most of their lives in fresh water, then return to the
                  ocean to reproduce.
                </p>
                <p className="leading-relaxed text-lg mb-4 text-justify">
                  Freshwater fish face threats from human activity, such as
                  overfishing, marine pollution, habitat loss, dam building, and
                  the introduction of invasive species. Around 40 percent of
                  North American freshwater fish species have become imperiled
                  in recent decades. And since 1900, at least 57 species of
                  freshwater fish in North America have gone extinct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomNavigation />
    </div>
  );
}
