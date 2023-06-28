import { useState } from "react";

function Rules() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Welcome to Memory Card Game !</strong> Your goal is to
          successfully select all 12 cards without choosing the same card twice.
          Each time you select a card, the positions of the cards will shuffle,
          challenging your memory and strategy. Pay close attention to the cards
          you have already chosen, as remembering their positions will help you
          avoid repeating your selections. Be careful not to touch the same card
          twice, as that will end the game. Good luck and enjoy the challenge of
          this memory-based card game!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setDisplay(false);
            }}
          ></button>
        </div>
      )}
    </>
  );
}

export default Rules;
