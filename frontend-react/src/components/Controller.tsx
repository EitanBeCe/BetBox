import { useState } from "react";
import PlaceBetButton from "./PlaceBetButton.tsx";
import BetBox from "./BetBox.tsx";
import axios from "axios";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");
  const [isLoading, setIsLoading] = useState(false);
  const [valStored, setValStored] = useState(0);

  const handlePlaceBet = async () => {
    let isWinner = false;

    setIsLoading(true);

    await axios
      .get(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
      )
      .then((res) => {
        if (res.status == 200) {
          setIsLoading(false);

          const result = res.data;
          setValStored(result)

          // Game logic
          if (
            (result >= 50 && betDirection == "up") ||
            (result < 50 && betDirection == "down")
          ) {
            isWinner = true;
          }
        } else {
          setIsLoading(false);

          console.error("Fetch error");
        }

        console.log(isWinner);

        // setHasWon(isWinner)
      })
      .catch((err) => {
        console.log(err.data, err.message);
        setIsLoading(false);
      });

    setHasWon(isWinner);
  };

  return (
    <div className="w-full md:w-[850px] lg:w-[1200px] mx-auto px-5 py-12">
      <PlaceBetButton handlePlaceBet={handlePlaceBet} />

      <BetBox
        betDirection={betDirection}
        setBetDirection={setBetDirection}
        isLoading={isLoading}
        valStored={valStored}
        hasWon={hasWon}
      />
    </div>
  );
}

export default Controller;
