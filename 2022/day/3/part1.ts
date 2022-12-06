// Description: https://adventofcode.com/2020/day/3
const input = await Deno.readTextFile("input.txt");

const rucksacks = input
  .split("\n")
  .map((line) => [
    line.slice(0, line.length / 2),
    line.slice(line.length / 2, line.length),
  ]);

const common = (a: string, b: string): string => {
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) !== -1) {
      return a[i];
    }
  }
  throw new Error(`No common letter found in ${a} and ${b}`);
};

const commonLetters = rucksacks.map((rucksack) =>
  common(rucksack[0], rucksack[1])
);

const priority = (char: string): number => {
  const ascii = char.charCodeAt(0);
  if (ascii >= 97 && ascii <= 122) {
    return ascii - 96;
  }
  if (ascii >= 65 && ascii <= 90) {
    return ascii - 64 + 26;
  }
  throw new Error("Invalid character");
};

const priorities = commonLetters.map((commonLetters) =>
  priority(commonLetters)
);

const sumOfPriorities = priorities.reduce((acc, priority) => acc + priority, 0);

console.log(sumOfPriorities);
