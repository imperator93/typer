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
      {words.map((item) => {
        return (
          <p key={item} style={{ display: "flex", margin: "0px" }}>
            {item.split("").map((letter) => (
              <p
                style={{
                  margin: "0px",
                  color:
                    gameState.gameHasStarted &&
                    gameState.counter == item.indexOf(letter)
                      ? "blue"
                      : "black",
                }}
              >
                {letter}
              </p>
            ))}
          </p>
        );
      })}
    </div>
  );
};
