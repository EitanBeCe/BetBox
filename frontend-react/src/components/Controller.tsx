import { useState } from "react";
import PlaceBetButton from "./PlaceBetButton.tsx";
import BetBox from "./BetBox.tsx";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");

  const handlePlaceBet = () => {
    setHasWon(true);
    console.log(hasWon);
    
  };

  return (
    <div className="w-full md:w-[850px] lg:w-[1200px] mx-auto px-5 py-12">
      <PlaceBetButton handlePlaceBet={handlePlaceBet} />
      <BetBox betDirection={betDirection} setBetDirection={setBetDirection} />
    </div>
  );
}

export default Controller;
