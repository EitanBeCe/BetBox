const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
);

const arrowUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
    />
  </svg>
);

type Props = {
  direction: string;
};

function BetButton({ direction }: Props) {
  return (
    <div className="transition-all duration-300">
      {direction == "up" ? (
        <button className="transition-all duration-300 p-10 rounded-full bg-gray-200 hover:bg-green-400">
          {arrowUp}
        </button>
      ) : (
        <button className="p-10 rounded-full bg-gray-200 hover:bg-red-400">
          {arrowDown}
        </button>
      )}
    </div>
  );
}

export default BetButton;
