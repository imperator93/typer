import { useEffect, useState } from "react";

import { WordScreen } from "./components/WordScreen";
import { TitleComponent } from "./components/TitleComponents";

import { WordArray1 } from "./assets/inputArrays/WordArrays";
import { GameState } from "./Types/GameState";

import { INIT_GAMESTATE } from "./CONSTANTS/INIT_GAMESTATE";

export const App = () => {
  const [words, setWords] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameState>(INIT_GAMESTATE);

  useEffect(() => {
    setWords(WordArray1);
  }, [words]);

  const handleInputOnChangeEvent = (event: React.BaseSyntheticEvent) => {
    const playerInput: string = event.target.value;

    setGameState((prev) => ({
      ...prev,
      inputWord: playerInput,
      gameHasStarted: true,
      currentWord: words[gameState.wordCounter],
      currentLetterIndex: playerInput.length,
    }));
  };
  console.log(gameState.currentLetterIndex);
  const handleKeyUp = (event: React.KeyboardEvent) => {
    const keyCode = event.keyCode;
    if (keyCode == 32) {
      calcNumOfWrongAns();
      setGameState((prev) => ({
        ...prev,
        currentWord: words[++prev.wordCounter],
        inputWord: "",
        wordCounter: prev.wordCounter,
        currentLetterIndex: 0,
      }));
    }
    if (gameState.wordCounter > words.length - 1) {
      setGameState((prev) => ({
        ...prev,
        gameHasStarted: false,
        wordCounter: 0,
        currentWord: words[prev.wordCounter],
        wrongLetterCounter: 0,
      }));
    }
  };

  const calculateResult = () => {
    let maxResult = 0;
    words.forEach((word) => (maxResult += word.length));
    return maxResult;
  };
  //bad implementation... should compare word[index.of(l)] in gameState
  const MAX_RESULT = calculateResult();
  const RESULT = `
  ${(
    ((MAX_RESULT - gameState.wrongLetterCounter) / MAX_RESULT) *
    100
  ).toLocaleString()}
  % Correct`;

  const calcNumOfWrongAns = () => {
    let counter = 0;
    if (words[gameState.wordCounter] != undefined) {
      for (let i = 0; i < words[gameState.wordCounter].length; i++) {
        if (words[gameState.wordCounter][i] != gameState.inputWord[i])
          counter++;
      }
    }
    setGameState((prev) => ({
      ...prev,
      wrongLetterCounter: prev.wrongLetterCounter + counter,
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
          <div>
            <input
              onKeyUp={(event) => handleKeyUp(event)}
              onChange={(event) => handleInputOnChangeEvent(event)}
              value={gameState.inputWord}
              style={{ width: "400px", margin: "auto", marginTop: "10px" }}
              type="text"
            />
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => setGameState(INIT_GAMESTATE)}
            >
              RESET
            </button>
          </div>
        </div>
        <p
          style={{ justifySelf: "center", marginTop: "20px", fontSize: "20px" }}
        >
          {RESULT}
        </p>
      </main>
    </>
  );
};
