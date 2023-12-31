import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

import {
  $tabs,
  HeaderData,
  getAllTabs,
  removeTab,
  selectTab,
} from "../../stores/dashboard";
import TokenTab from "./TokenTab";

const TabsList = () => {
  const tabs = useStore($tabs);
  const [headerTabs, setHeaderTabs] = useState([...tabs]);

  useEffect(() => {
    setHeaderTabs(getAllTabs());
    console.log(tabs, "::: useStore_Tabs");
    console.log(headerTabs, "::: localStorage_Tabs");
  }, [headerTabs]);

  return (
    <div className="flex-auto md:flex items-center justify-start px-2 lg:max-w-2xl max-w-xs overflow-x-scroll w-full no-scrollbar hidden">
      {headerTabs.map((item: HeaderData, index: number) => (
        <TokenTab
          {...item}
          key={index}
          selected={item.selected}
          selectTab={({ coinId }) => {
            selectTab({ coinId });
            setHeaderTabs(getAllTabs());
            window.location.reload();
          }}
          removeTab={({ coinId }) => {
            removeTab({ coinId });
            setHeaderTabs(getAllTabs());
            window.location.reload();
          }}
        />
      ))}
    </div>
  );
};

export default TabsList;
