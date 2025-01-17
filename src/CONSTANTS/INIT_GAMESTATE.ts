export const INIT_GAMESTATE = {
  gameHasStarted: false,
  inputWord: "",
  wordCounter: 0,
  currentWord: "",
  wrongLetterCounter: 0,
  currentLetterIndex: 0,
};

type Position = {
  letterIndex: number;
  wordIndex: number;
};

const slova = ["prvi", "drugi", "treci"];

const mapArrToObj = (arr: string[], obj: Record<string, Position>) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!(arr[i][j] in obj)) {
        obj[arr[i][j]] = {
          wordIndex: i,
          letterIndex: j,
        };
      } else {
        obj[`${arr[i][j]}w${i}l${j}`] = {
          wordIndex: i,
          letterIndex: j,
        };
      }
    }
  }
};

const obj = {};

mapArrToObj(slova, obj);
console.log(obj);
