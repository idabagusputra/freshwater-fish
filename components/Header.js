import Link from "next/link";
import Image from "next/image";
import icon from "../public/assets/icon.webp";

export default function Header() {
  return (
    <header className="sticky top-0 text-black body-font z-50 bg-emerald-400 drop-shadow-2xl">
      <div className="container mx-auto flex p-4 items-center flex justify-center">
        <Link href="/" className="flex title-font font-semibold items-center">
          <Image alt="icon" src={icon} width="35" height="35" />
          <span className="ml-4 text-xl">Freshwater Fish</span>
        </Link>
      </div>
    </header>
  );
}
