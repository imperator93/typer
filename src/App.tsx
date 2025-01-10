import { useEffect, useState } from "react";

import { WordScreen } from "./components/WordScreen";
import { TitleComponent } from "./components/TitleComponents";

import { WordArray1 } from "./assets/inputArrays/WordArrays";
import { GameState } from "./Types/GameState";

export const App = () => {
  const [words, setWords] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    currentLetterIndex: 0,
    gameHasStarted: false,
    keyInput: "",
    counter: 0,
  });
  console.log(gameState.counter);

  useEffect(() => {
    setWords(WordArray1);
  }, [words]);

  const handleInputOnChangeEvent = (event: React.BaseSyntheticEvent) => {
    setGameState((prev) => {
      return { ...prev, counter: prev.counter + 1 };
    });
  };
  return (
    <>
      <header>
        <TitleComponent />
      </header>
      <main>
        <div
          style={{
            width: "500px",
            display: "flex",
            flexWrap: "wrap",
            justifySelf: "center",
          }}
          className="main"
        >
          <WordScreen gameState={gameState} words={words}></WordScreen>
          <input
            onChange={(event) => handleInputOnChangeEvent(event)}
            style={{ width: "500px", margin: "auto", marginTop: "10px" }}
            type="text"
          />
        </div>
      </main>
    </>
  );
};
