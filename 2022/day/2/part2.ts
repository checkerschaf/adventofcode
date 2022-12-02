const input = await Deno.readTextFile("input.txt");

type RockPaperScissors = "rock" | "paper" | "scissors";
type GameResult = "player1" | "player2" | "draw";

const getRockPaperScissors = (selected: string): RockPaperScissors => {
  switch (selected) {
    case "A":
    case "X":
      return "rock";
    case "B":
    case "Y":
      return "paper";
    case "C":
    case "Z":
      return "scissors";
    default:
      throw new Error("Invalid input");
  }
};

const getGameResult = (selected: string): GameResult => {
  switch (selected) {
    case "X":
      return "player1";
    case "Y":
      return "draw";
    case "Z":
      return "player2";
    default:
      throw new Error("Invalid input");
  }
};

const getRockPaperScissorsScore = (rps: RockPaperScissors): number => {
  switch (rps) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
};

const getWhatPlayer2ShouldPlay = (
  player1: RockPaperScissors,
  result: GameResult
): RockPaperScissors => {
  switch (result) {
    case "player1":
      switch (player1) {
        case "paper":
          return "rock";
        case "scissors":
          return "paper";
        case "rock":
          return "scissors";
        default:
          throw new Error("Invalid input");
      }
    case "player2":
      switch (player1) {
        case "rock":
          return "paper";
        case "paper":
          return "scissors";
        case "scissors":
          return "rock";
        default:
          throw new Error("Invalid input");
      }
    case "draw":
      return player1;
  }
};

const getWinner = (
  player1: RockPaperScissors,
  player2: RockPaperScissors
): GameResult => {
  if (player1 === player2) {
    return "draw";
  }
  if (player1 === "rock" && player2 === "scissors") {
    return "player1";
  }
  if (player1 === "rock" && player2 === "paper") {
    return "player2";
  }
  if (player1 === "paper" && player2 === "rock") {
    return "player1";
  }
  if (player1 === "paper" && player2 === "scissors") {
    return "player2";
  }
  if (player1 === "scissors" && player2 === "paper") {
    return "player1";
  }
  if (player1 === "scissors" && player2 === "rock") {
    return "player2";
  }
  throw new Error("Invalid input");
};

const getScore = (player1: RockPaperScissors, result: GameResult): number => {
  const player2 = getWhatPlayer2ShouldPlay(player1, result);
  const winner = getWinner(player1, player2);
  let score = 0;
  if (winner === "player2") {
    score += 6;
  } else if (winner === "draw") {
    score += 3;
  }

  return score + getRockPaperScissorsScore(player2);
};

const totalScore = input
  .split("\n")
  .map((line) => line.split(" "))
  .reduce((acc, [player1, player2]) => {
    return (
      acc + getScore(getRockPaperScissors(player1), getGameResult(player2))
    );
  }, 0);

console.log(totalScore);
