// Description: https://adventofcode.com/2020/day/1
const input = await Deno.readTextFile("input.txt");

const elves = input.split("\n\n");
const elvesWithCalories = elves.map((elf) =>
  elf
    .split("\n")
    .map((callory) => parseInt(callory))
    .reduce((a, b) => a + b)
);

const top3mostCalories = elvesWithCalories.sort((a, b) => b - a).slice(0, 3);

const sum = top3mostCalories.reduce((a, b) => a + b);
console.log(sum);
