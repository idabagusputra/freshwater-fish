import Link from "next/link";
import Image from "next/image";
import icon from "../public/assets/icon.webp";

export default function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        ></Link>
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/" class="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/reference" class="mr-5 hover:text-gray-900">
            Reference
          </Link>
          <Link href="/faq" class="mr-5 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/about" class="mr-5 hover:text-gray-900">
            About Us
          </Link>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <Image alt="icon" src={icon} width="40" height="40" />
          <span class="ml-3 text-xl">Freshwater Fish</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
      </div>
    </header>
  );
}
