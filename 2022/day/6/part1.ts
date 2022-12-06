// Description: https://adventofcode.com/2022/day/6
const input = await Deno.readTextFile("input.txt");

const areAllDifferent = (arr: string) => {
  const set = new Set(arr.split(""));
  return set.size === arr.length;
};

for (let i = 4; i < input.length; i += 1) {
  const fourChars = input.slice(i - 4, i);
  if (areAllDifferent(fourChars)) {
    console.log(i);
    break;
  }
}
