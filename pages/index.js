import Header from "../components/Header";
import Meta from "../components/Meta";
import List from "../components/List";
import BottomNavigation from "../components/BottomNavigation";

export default function Home() {
  return (
    <div>
      <Meta title="Freshwater Fish" />

      <Header />

      <List />

      <BottomNavigation />
    </div>
  );
}
