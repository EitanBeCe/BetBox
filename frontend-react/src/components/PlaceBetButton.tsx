type Props = {
  handlePlaceBet: () => void;
};

function PlaceBetButton({ handlePlaceBet }: Props) {
  return (
    <button
      onClick={handlePlaceBet}
      className="transition-all duration-300 border border-black px-4 w-full py-12 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white"
    >
      Place Bet
    </button>
  );
}

export default PlaceBetButton;
