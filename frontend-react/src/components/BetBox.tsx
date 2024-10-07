import BetButton from "./BetButton.tsx"

function BetBox() {
  return (
    <div className="mt-6">
      <div className="py-2 border">LAYER 1</div>
      <div className="flex flex-row justify-between py-2 border">
        <BetButton direction="down"/>
        <BetButton direction="up"/>
      </div>
      <div className="py-2 border">LAYER 3</div>
    </div>
  )
}

export default BetBox
