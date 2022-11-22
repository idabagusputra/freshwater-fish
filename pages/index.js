import Header from "../components/Header";
import Meta from "../components/Meta";
import List from "../components/List";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Meta title="Freshwater Fish" />

      <Header />

      <div class="container px-5 py-5 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Halo Ajeng
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Aku adalah sebuah website berisikan catalog ikan air tawar, selamat
            menikmati!
          </p>
        </div>
      </div>

      <List />

      <Footer />
    </div>
  );
}
