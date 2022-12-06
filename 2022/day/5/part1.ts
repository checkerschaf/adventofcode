// Description: https://adventofcode.com/2022/day/5
const input = await Deno.readTextFile("input.txt");

const [stackStr, moves] = input.split("\n\n");
const stackArr = stackStr.split("\n").slice(0, -1).reverse();

const stacks: string[][] = [];

// Loop through each stack and add the letter to the correct stack
for (const stack of stackArr) {
  const line = stack.match(/.{1,4}/g) || [];
  for (let i = 0; i < line.length; i++) {
    const letter = line[i].match(/[A-Z]/g);
    if (letter) {
      stacks[i] = stacks[i] || [];
      stacks[i].push(letter.toString());
    }
  }
}

// Loop through each move and move the letters
for (const move of moves.split("\n")) {
  const [amount, from, to] = move.match(/\d+/g) || ["0", "0", "0"];

  for (let i = 0; i < parseInt(amount); i++) {
    const letter = stacks[parseInt(from) - 1].pop();
    if (letter) {
      stacks[parseInt(to) - 1].push(letter);
    }
  }
}

const topCrates = stacks.map((stack) => stack[stack.length - 1]);
console.log(topCrates.join(""));
