import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    setData(JSON.parse(router.query.data).data);
  }, []);

  return (
    <div>
      <Meta title="Freshwater Fish: Detail" />
      <Header />
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-8 mx-auto">
          <div class="lg:w-3/5 mx-auto flex flex-wrap justify-center">
            <div class="lg:w-1/3 w-full lg:pr-10 lg:py-0 mb-0 lg:mb-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                {data ? data.name : ""}
              </h1>
              <p class="leading-relaxed mb-4">
                Taxonomy : {data ? data.taxonomy : ""}
              </p>
              <p class="leading-relaxed mb-4">
                Temprange : {data ? data.temprange : " "}
              </p>
              <p class="leading-relaxed mb-4">
                Remark : {data ? data.remarks : ""}
              </p>
              <p class="leading-relaxed mb-4">
                pH Range : {data ? data.phRange : ""}
              </p>
              <div class="flex"></div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={data ? data.imageURL : ""}
            />
          </div>
        </div>
        <div class="my-80 ..."></div>
      </section>
      <Footer />
    </div>
  );
}
