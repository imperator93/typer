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
              color: words[gameState.counter] == word ? "white" : "black",
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
                      words.indexOf(gameState.currentWord) == wordIndex &&
                      gameState.currentWord.slice(0, letterIndex) ==
                        gameState.inputWord
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
