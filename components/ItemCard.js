import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import placeholder from "../public/assets/placeholder.webp";

export default function ItemCard(props) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="p-4 md:w-1/4 w-full">
      <Link
        href={{
          pathname: "/detail",
          query: {
            data: JSON.stringify(props),
          },
        }}
      >
        <div className="h-full bg-white rounded-lg overflow-hidden drop-shadow-md">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={imageError ? placeholder : props.data.imageURL}
            onError={() => setImageError(true)}
            alt="thumbnail"
            width="720"
            height="400"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-bold text-emerald-400 mb-1">
              {props.data.taxonomy}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900">
              {props.data.name}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
