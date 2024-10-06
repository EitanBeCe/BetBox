import { useState } from "react";
import BetButton from "./Button.tsx";

function Controller() {
  const [hasWon, setHasWon] = useState(false);

  const handlePlaceBet = () => {
    setHasWon(true);
  };

  return (
    <div className="container bg-green-500 mx-auto">
      <BetButton handlePlaceBet={handlePlaceBet} />
    </div>
  );
}

export default Controller;
