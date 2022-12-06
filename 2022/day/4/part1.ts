// Description: https://adventofcode.com/2020/day/4
const input = await Deno.readTextFile("input.txt");

const elfPairs = input.split("\n").map((line) => line.split(","));

const elfPairRanges = elfPairs.map((elfPair) => {
  const [firstStart, firstEnd] = elfPair[0].split("-");
  const [secondStart, secondEnd] = elfPair[1].split("-");
  return [
    [parseInt(firstStart), parseInt(firstEnd)],
    [parseInt(secondStart), parseInt(secondEnd)],
  ];
});

const isInRange = (value: number, range: [number, number]): boolean => {
  return value >= range[0] && value <= range[1];
};

const isPairInRangeOfAnotherPair = (
  pair: [number, number],
  otherPair: [number, number]
): boolean => {
  return (
    (isInRange(pair[0], otherPair) && isInRange(pair[1], otherPair)) ||
    (isInRange(otherPair[0], pair) && isInRange(otherPair[1], pair))
  );
};

const overlappingPairs = elfPairRanges.filter(([elf1, elf2]) =>
  isPairInRangeOfAnotherPair([elf1[0], elf1[1]], [elf2[0], elf2[1]])
);

console.log(overlappingPairs.length);
