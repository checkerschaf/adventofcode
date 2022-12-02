const input = await Deno.readTextFile("input.txt");

type RockPaperScissors = "rock" | "paper" | "scissors";

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

const getWinner = (
  player1: RockPaperScissors,
  player2: RockPaperScissors
): "player1" | "player2" | "draw" => {
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

const getScore = (
  player1: RockPaperScissors,
  player2: RockPaperScissors
): number => {
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
      acc +
      getScore(getRockPaperScissors(player1), getRockPaperScissors(player2))
    );
  }, 0);

console.log(totalScore);
