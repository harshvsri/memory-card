import { useState } from "react";
import Card from "./ColorCard";
import ScoreCard from "./ScoreCard";

function Canvas() {
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Purple", hex: "#800080" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Brown", hex: "#A52A2A" },
  ];

  // Fisher-Yates shuffle algorithm
  interface Color {
    name: string;
    hex: string;
  }

  function shuffleColors(colors: Color[]): Color[] {
    // Fisher-Yates shuffle algorithm
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
  }

  // Usage
  const shuffledColors = shuffleColors(colors);

  // Handling colors.

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  console.log(selectedColors);

  function handleColorClick(colorName: string) {
    if (!selectedColors.includes(colorName)) {
      setSelectedColors((prevSelectedColors) => [
        ...prevSelectedColors,
        colorName,
      ]);
    } else {
      setSelectedColors([]);
      console.log("Game Over");
    }
  }

  return (
    <>
      <ScoreCard currentScore={selectedColors.length} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {shuffledColors.map((color, index) => (
          <Card color={color} key={index} onClick={handleColorClick} />
        ))}
      </div>
    </>
  );
}

export default Canvas;
