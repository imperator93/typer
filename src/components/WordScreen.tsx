import { WordContainer } from "../styles/Styles";
import { GameState } from "../Types/GameState";

export const WordScreen = ({
  words,
  gameState,
}: {
  words: string[];
  gameState: GameState;
}) => {
  return (
    <div style={WordContainer}>
      {words.map((word, wordIndex) => {
        return (
          <div
            className="word"
            key={Math.random()}
            style={{
              display: "flex",
              margin: "0px",
            }}
          >
            {word.split("").map((letter, letterIndex) => {
              return (
                <p
                  className="letter"
                  key={Math.random()}
                  style={{
                    margin: "0px",
                    color:
                      letter == gameState.inputWord[letterIndex] &&
                      gameState.currentWord == words[gameState.wordCounter] &&
                      wordIndex == gameState.wordCounter
                        ? "blue"
                        : "red",
                  }}
                >
                  {letter}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
