import { Dispatch, SetStateAction } from "react";
import BetButton from "./BetButton.tsx";

type Props = {
  betDirection: string;
  setBetDirection: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  valStored: number;
  hasWon: boolean;
};

function BetBox({
  betDirection,
  setBetDirection,
  isLoading,
  valStored,
  hasWon,
}: Props) {
  return (
    <div className="mt-6">
      <div className="py-4 border text-right bg-gray-800 text-white pr-6">
        {isLoading ? "loading..." : `Random number: ${valStored}`}
      </div>
      <div className="flex flex-row justify-between py-2 border">
        <BetButton
          direction="down"
          betDirection={betDirection}
          setBetDirection={setBetDirection}
        />
        <BetButton
          direction="up"
          betDirection={betDirection}
          setBetDirection={setBetDirection}
        />
      </div>
      <div className="py-2 border bg-gray-200 text-center text-4xl font-bold">
        {valStored != 0 && (
          <div className={"" + (hasWon ? "text-green-500" : "text-red-500")}>
            {hasWon ? "YOU WON" : "BAD LUCK"}
          </div>
        )}
      </div>
    </div>
  );
}

export default BetBox;
