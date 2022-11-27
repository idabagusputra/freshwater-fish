import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import placeholder from "../public/assets/placeholder.webp";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!router.query.data) return;
    setData(JSON.parse(router.query.data).data);
  }, []);

  return (
    <div>
      <Meta title="Freshwater Fish: Detail" />
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="lg:w-1/3 w-full lg:pr-10 lg:py-0 mb-0 lg:mb-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {data ? data.name : ""}
              </h1>
              <p className="leading-relaxed mb-4">
                Taxonomy : {data ? data.taxonomy : ""}
              </p>
              <p className="leading-relaxed mb-4">
                Temprange : {data ? data.temprange : " "}
              </p>
              <p className="leading-relaxed mb-4">
                Remark : {data ? data.remarks : ""}
              </p>
              <p className="leading-relaxed mb-4">
                pH Range : {data ? data.phRange : ""}
              </p>
              <div className="flex"></div>
            </div>
            <Image
              alt="detail"
              width="500"
              height="500"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              onError={() => setImageError(true)}
              src={imageError ? placeholder : data ? data.imageURL : ""}
            />
          </div>
        </div>
      </section>
      <BottomNavigation />
    </div>
  );
}
