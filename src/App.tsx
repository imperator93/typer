import { useEffect, useState } from "react";

import { WordScreen } from "./components/WordScreen";
import { TitleComponent } from "./components/TitleComponents";

import { WordArray1 } from "./assets/inputArrays/WordArrays";
import { GameState } from "./Types/GameState";

export const App = () => {
  const [words, setWords] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    gameHasStarted: false,
    inputWord: "",
    counter: 0,
    keyInput: "",
    currentLetterIndex: 0,
    currentWord: "",
  });

  useEffect(() => {
    setWords(WordArray1);
  }, [words]);

  const handleInputOnChangeEvent = (event: React.BaseSyntheticEvent) => {
    const playerInput: string = event.target.value;
    const inputLength = playerInput.length;

    setGameState((prev) => ({
      ...prev,
      currentLetterIndex: inputLength,
      inputWord: playerInput,
      keyInput: playerInput[gameState.currentLetterIndex],
      gameHasStarted: true,
      currentWord: words[gameState.counter],
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const keyCode = event.keyCode;
    //need to move this logic to onChage handler because this hadler fires of before the space key is registered in onChange
    if (keyCode == 32) {
      setGameState((prev) => ({
        ...prev,
        currentWord: words[gameState.counter++],
        inputWord: "",
      }));
    }

    if (keyCode == 8 && gameState.currentLetterIndex > 0)
      setGameState((prev) => ({
        ...prev,
        currentLetterIndex: gameState.currentLetterIndex--,
      }));
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
            value={gameState.inputWord}
            onKeyDown={(event) => handleKeyDown(event)}
            onChange={(event) => handleInputOnChangeEvent(event)}
            style={{ width: "500px", margin: "auto", marginTop: "10px" }}
            type="text"
          />
        </div>
      </main>
    </>
  );
};
