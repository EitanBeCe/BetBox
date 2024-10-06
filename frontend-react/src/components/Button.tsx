type Props = {
  handlePlaceBet: () => void;
};

function BetButton({ handlePlaceBet }: Props) {
  return (
    <button
      onClick={handlePlaceBet}
      className="transition-all duration-300 border border-black px-4 w-full mt-4 py-2 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-white"
    >
      Place Bet
    </button>
  );
}

export default BetButton;
