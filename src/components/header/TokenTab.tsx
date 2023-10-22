import { X } from "lucide-react";
import { FC } from "react";

interface Props {
  exchange: string;
  pair: string;
  price: number;
  selected: boolean;
  coinId: string;
  selectTab: ({ coinId }: { coinId: string }) => void;
  removeTab: ({ coinId }: { coinId: string }) => void;
}

const TokenTab: FC<Props> = ({
  exchange,
  pair,
  price,
  selected,
  coinId,
  selectTab,
  removeTab,
}: Props) => {
  return (
    <div
      className={`bg-slate-700/90 rounded-lg mx-2 border-b-4 ${
        selected ? "border-b-blue-500" : "border-b-transparent"
      } px-4 py-2 grid items-start justify-center gap-2 hover:cursor-pointer`}
      onClick={() => selectTab({ coinId })}>
      <span className="text-sm text-white font-mono">
        {exchange}:{pair}
      </span>
      <div className="flex justify-between items-center">
        <span className="text-xs text-red-600 font-bold">
          {price.toFixed(2)}
        </span>
        <X
          className="h-4 w-4 text-white"
          onClick={() => removeTab({ coinId })}
        />
      </div>
    </div>
  );
};

export default TokenTab;
