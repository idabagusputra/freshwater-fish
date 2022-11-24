import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import placeholder from "../public/assets/placeholder.webp";

export default function ItemCard(props) {
  const [imageError, setImageError] = useState(false);

  return (
    <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
      {/* <div class="bg-gray-50 p-6 rounded-lg"> */}
      <Link
        href={{
          pathname: "/detail",
          query: {
            data: JSON.stringify(props),
          },
        }}
      >
        <div class="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            class="object-cover object-center h-full w-full"
            width="1203"
            height="503"
            src={imageError ? placeholder : props.data.imageURL}
            onError={() => setImageError(true)}
          />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
          {props.data.name}
        </h2>
        <p class="text-base leading-relaxed mt-2">{props.data.taxonomy}</p>
      </Link>
    </div>
    // </div>
  );
}
