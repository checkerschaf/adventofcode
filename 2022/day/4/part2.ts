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

const getOverlapCount = (range1: number[], range2: number[]) => {
  const [start1, end1] = range1;
  const [start2, end2] = range2;
  if (start1 > end2 || start2 > end1) {
    return 0;
  }
  return Math.min(end1, end2) - Math.max(start1, start2) + 1;
};

console.log(
  elfPairRanges.filter(([elf1, elf2]) => getOverlapCount(elf1, elf2) > 0).length
);
