import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://list-of-freshwater-aquarium-fish-species.p.rapidapi.com/species",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.slice(0, 99)))
      .catch((err) => console.error(err));
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto mb-20">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data === null ? (
            <p className="mx-auto text-center font-bold mt-2">Loading...</p>
          ) : (
            data.map((item, index) => <ItemCard key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
