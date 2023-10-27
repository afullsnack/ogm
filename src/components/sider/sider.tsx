import {
  Calculator,
  ChevronFirst,
  ChevronLast,
  Hash,
  History,
  PieChart,
  Plus,
  User,
  X,
} from "lucide-react";
import { FC, createContext, useContext, useEffect, useState } from "react";

const PanesContext = createContext(null);
const Sider: FC = () => {
  const navItems = [
    {
      title: "BOARD",
      icon: <PieChart className="w-6 h-6 text-white" />,
      link: "dashboard",
    },
    {
      title: "HISTORY",
      icon: <History className="w-6 h-6 text-white" />,
    },
    {
      title: "CONVERTER",
      icon: <Calculator className="w-6 h-6 text-white" />,
    },
    {
      title: "TODAY",
      icon: <Hash className="w-6 h-6 text-white" />,
      link: "today",
    },
    {
      title: "PROFILE",
      icon: <User className="w-6 h-6 text-white" />,
      link: "settings",
    },
  ];

  const [watchListExpanded, setWatchListExpanded] = useState(false);
  const [historyExpanded, setHistoryExpanded] = useState(false);
  const [converterExpanded, setConverterExpanded] = useState(false);
  const [todayExpanded, setTodayExpanded] = useState(false);
  const [waitListPosition, setWaitListPosition] = useState(70);
  const [converterPosition, setConverterPosition] = useState(70);
  const [todayPosition, setTodayPosition] = useState(70);

  const computeWaitListLeftPosition = () => {
    if (historyExpanded && converterExpanded && todayExpanded)
      return 250 + 250 + 250 + 70;
    if (historyExpanded && converterExpanded) return 250 + 250 + 70;
    if (historyExpanded && todayExpanded) return 250 + 250 + 70;
    if (converterExpanded && todayExpanded) return 250 + 250 + 70;
    if (historyExpanded) return 250 + 70;
    if (converterExpanded) return 250 + 70;
    if (todayExpanded) return 250 + 70;
    return 70;
  };

  const computeConverterLeftPosition = () => {
    if (historyExpanded) return 250 + 70;
    return 70;
  };

  useEffect(() => {
    setWaitListPosition(computeWaitListLeftPosition());
    setConverterPosition(computeConverterLeftPosition());
  }, [historyExpanded, converterExpanded, todayExpanded]);

  useEffect(() => {
    console.log(waitListPosition, ":::Wait list position");
  }, [watchListExpanded]);

  return (
    <aside className="sticky left-0 top-20 bottom-0 w-[70px] h-calc bg-slate-900/80 grid items-start justify-center justify-items-center z-10">
      <PanesContext.Provider
        value={{
          historyExpanded,
          setHistoryExpanded,
          converterExpanded,
          setConverterExpanded,
          todayExpanded,
          setTodayExpanded,
          converterPosition,
          todayPosition,
        }}>
        <nav className="h-full flex flex-col">
          {navItems.map((item) => (
            <div key={item.title}>
              {item.link || typeof item.link !== "undefined" ? (
                <a
                  href={`/user/${item.link}`}
                  className="w-full h-[70px] bg-transparent flex flex-col items-center justify-items-center justify-center hover:bg-slate-800/80 hover:cursor-pointer"
                  key={item.title}>
                  {item.icon}
                  <span className="text-[9px] font-bold text-white">
                    {item.title}
                  </span>
                </a>
              ) : (
                <div
                  className="w-full h-[70px] bg-transparent flex flex-col items-center justify-items-center justify-center hover:bg-slate-800/80 hover:cursor-pointer"
                  key={item.title}
                  onClick={() =>
                    item.title === "HISTORY"
                      ? setHistoryExpanded((_prev) => !_prev)
                      : item.title === "CONVERTER"
                      ? setConverterExpanded((_prev) => !_prev)
                      : item.title === "TODAY"
                      ? setTodayExpanded((_prev) => !_prev)
                      : null
                  }>
                  {item.icon}
                  <span className="text-[9px] font-bold text-white">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div
          className={`fixed left-[${waitListPosition}px] h-calc ${
            watchListExpanded ? "w-[300px]" : "w-0"
          } transition-all bg-slate-800/80 shadow-md`}>
          <button
            className="w-6 h-10 flex items-center justify-center rounded-sm bg-red-400 absolute left-full top-[calc(50%-40px)]"
            onClick={() => setWatchListExpanded((_prev: boolean) => !_prev)}>
            {watchListExpanded ? (
              <ChevronFirst className="w-4 h-4 text-white" />
            ) : (
              <ChevronLast className="w-4 h-4 text-white" />
            )}
          </button>
          <div className="flex items-start justify-center w-full h-full overflow-hidden">
            <h1 className="capitalize flex-auto p-2 text-white font-semibold text-sm">
              WATCH LIST
            </h1>
            <input type="text" className="w-full flex-1 m-2 rounded-sm px-2" />
          </div>
        </div>

        {/* History pull out pane */}
        <HistoryPane />
        {/* Converter pull out pane */}
        <ConverterPane />
      </PanesContext.Provider>
    </aside>
  );
};

const HistoryPane: FC<{ className?: string }> = ({ className }) => {
  const { historyExpanded, setHistoryExpanded } = useContext(PanesContext);
  return (
    <div
      className={`absolute left-[70px] h-calc ${
        historyExpanded ? "w-[250px]" : "w-0"
      } transition-all bg-slate-800/70 shadow-md ${className}`}>
      <div className="grid items-start place-content-start justify-items-center justify-stretch w-full h-full overflow-hidden text-white">
        <div className="w-full h-8 bg-slate-900 px-2 mx-auto mb-4 my-0 flex items-center justify-between">
          <span className="text-xs">Trade History</span>
          <button
            className="w-3 h-3 rounded-sm text-xs flex items-center justify-center"
            onClick={() => setHistoryExpanded((_prev) => !_prev)}>
            <X className="w-4 h-4" />
          </button>
        </div>
        <h1>NO ORDER TO SHOW</h1>
      </div>
    </div>
  );
};

const ConverterPane: FC<{ className?: string }> = ({ className }) => {
  const { converterExpanded, setConverterExpanded, converterPosition } =
    useContext(PanesContext);
  const convertList = [
    {
      asset: "Bitcoin",
      price: 1,
    },
    {
      asset: "Ethereum",
      price: 16.87,
    },
    {
      asset: "Euro",
      price: 26604.72,
    },
    {
      asset: "Dollar US",
      price: 28011.23,
    },
    {
      asset: "Litecoin",
      price: 432.89,
    },
  ];

  return (
    <div
      className={`absolute left-[${converterPosition}px] h-calc ${
        converterExpanded ? "w-[250px]" : "w-0"
      } transition-all bg-slate-800/70 shadow-md ${className} z-50`}>
      <div className="grid items-start place-content-start justify-items-center justify-stretch w-full h-full overflow-hidden text-white">
        <div className="w-full h-8 bg-slate-900 px-2 mx-auto mb-4 my-0 flex items-center justify-between">
          <span className="text-xs font-mono">CONVERTER</span>
          <button
            className="w-3 h-3 rounded-sm text-xs flex items-center justify-center"
            onClick={() => setConverterExpanded((_prev) => !_prev)}>
            <X className="w-4 h-4" />
          </button>
        </div>
        {convertList.map((item) => (
          <div
            className="p-2 my-1 bg-slate-950 focus-within:bg-green-700 w-full mx-auto flex items-center justify-between"
            key={item.asset}>
            <div className="flex gap-1">
              <div className="w-6 h-6 rounded-full mr-2 bg-slate-600"></div>
              <span>{item.asset}</span>
            </div>
            <input
              type="number"
              value={item.price}
              className="outline-none border-b border-b-gray-300 px-1 text-white bg-transparent py-1 text-end max-w-xs w-20 font-bold flex items-center justify-center justify-items-end h-8"
            />
          </div>
        ))}

        <div className="w-8 h-8 flex items-center justify-center mt-4 rounded-full bg-orange-600">
          <Plus className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sider;
