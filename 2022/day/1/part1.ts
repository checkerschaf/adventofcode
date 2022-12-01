// deno read file input.txt
const input = await Deno.readTextFile("input.txt");

const elves = input.split("\n\n");
const elvesWithCalories = elves.map((elf) => {
  return {
    calories: elf
      .split("\n")
      .map((callory) => parseInt(callory))
      .reduce((a, b) => a + b),
  };
});

const mostCalories = elvesWithCalories.reduce((a, b) =>
  a.calories > b.calories ? a : b
);

console.log(mostCalories);
