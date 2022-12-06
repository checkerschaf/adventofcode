// Description: https://adventofcode.com/2022/day/6
const input = await Deno.readTextFile("input.txt");

const areAllDifferent = (arr: string) => {
  const set = new Set(arr.split(""));
  return set.size === arr.length;
};

const size = 14;
for (let i = size; i < input.length; i++) {
  const fourChars = input.slice(i - size, i);
  if (areAllDifferent(fourChars)) {
    console.log(i);
    break;
  }
}
