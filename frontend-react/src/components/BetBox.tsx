import { Dispatch, SetStateAction } from "react";
import BetButton from "./BetButton.tsx";

type Props = {
  betDirection: string;
  setBetDirection: Dispatch<SetStateAction<string>>;
};

function BetBox({ betDirection, setBetDirection }: Props) {
  return (
    <div className="mt-6">
      <div className="py-2 border">LAYER 1</div>
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
      <div className="py-2 border">LAYER 3</div>
    </div>
  );
}

export default BetBox;
