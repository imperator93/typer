export type GameState = {
  gameHasStarted: boolean;
  wordCounter: number;
  inputWord: string;
  currentWord: string;
  wrongLetterCounter: number;
  currentLetterIndex: number;
};
