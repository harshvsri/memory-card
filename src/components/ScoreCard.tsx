import { useState } from "react";

interface Props {
  currentScore: number;
}

function ScoreCard({ currentScore }: Props) {
  const [bestScore, setBestScore] = useState(0);

  if (currentScore > bestScore) {
    setBestScore(currentScore);
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card m-2 border border-dark" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Best Score : {bestScore}</li>
            <li className="list-group-item">Current Score : {currentScore}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ScoreCard;

/* In the provided code snippet, the double curly brackets ({{ }}) 
are used to denote an OBJECT literal in JSX.  */
