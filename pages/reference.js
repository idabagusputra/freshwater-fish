import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import pic1 from "../public/assets/rapidapi.png";
import pic2 from "../public/assets/logolele.png";
import pic3 from "../public/assets/tailwind.png";
import pic4 from "../public/assets/github.png";
import pic5 from "../public/assets/tailblocks.png";

export default function Reference() {
  return (
    <div>
      <Meta title="Freshwater Fish - References" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image alt="icon" src={pic1} className="rounded-full" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Rapid API
              </h2>
              <p class="leading-relaxed text-base">
                The world's largest API hub, is used by over three million
                developers to find, test, and connect to thousands of APIs — all
                with a single API key and dashboard
              </p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Freshwater API
              </h2>
              <p class="leading-relaxed text-base">
                List of freshwater aquarium fish species API Documentation by
                pdewouters
              </p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image alt="icon" src={pic2} className="rounded-full" />
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image alt="icon" src={pic3} className="rounded-full" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Tailwind
              </h2>
              <p class="leading-relaxed text-base">
                Wrestling with a bunch of complex media queries in your CSS
                sucks, so Tailwind lets you build responsive designs right in
                your HTML instead. Throw a screen size in front of literally any
                utility class and watch it magically apply at a specific
                breakpoint
              </p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"></div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Github
              </h2>
              <p class="leading-relaxed text-base">
                A code hosting platform for version control and collaboration.
                It lets you and others work together on projects from anywhere.
                This tutorial teaches you GitHub essentials like repositories,
                branches, commits, and pull requests.
              </p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image alt="icon" src={pic4} className="rounded-full" />
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Image alt="icon" src={pic5} className="rounded-full" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Tailblocks
              </h2>
              <p class="leading-relaxed text-base">
                Tailblocks is a Next js app to provide best web design
                components for free. It uses React, NextJs, Tailwind CSS and
                deployed on Digital Ocean
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
