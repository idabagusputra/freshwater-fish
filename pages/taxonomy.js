import { Tab } from "@headlessui/react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import TaxonomyList from "../components/TaxonomyList";
import BottomNavigation from "../components/BottomNavigation";

export default function Taxonomy() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Meta title="Freshwater Fish: Taxonomy" />

      <Header />

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-emerald-900/20 p-1 mx-10 lg:mx-20 mt-8 drop-shadow-lg">
          <Tab
            key="aspidoras"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-emerald-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-emerald-400 focus:outline-none",
                selected
                  ? "bg-white shadow"
                  : "text-emerald-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Aspidoras
          </Tab>
          <Tab
            key="brochis"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-emerald-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-emerald-400 focus:outline-none",
                selected
                  ? "bg-white shadow"
                  : "text-emerald-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Brochis
          </Tab>
          <Tab
            key="corydoras"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-emerald-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-emerald-400 focus:outline-none",
                selected
                  ? "bg-white shadow"
                  : "text-emerald-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Corydoras
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel key="aspidoras">
            <TaxonomyList taxonomy="aspidoras" />
          </Tab.Panel>
          <Tab.Panel key="brochis">
            <TaxonomyList taxonomy="brochis" />
          </Tab.Panel>
          <Tab.Panel key="corydoras">
            <TaxonomyList taxonomy="corydoras" />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <BottomNavigation />
    </div>
  );
}
