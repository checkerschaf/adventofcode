const year = new Date().getFullYear();
// Read day from command line arguments or fallback to current day
const day = parseInt(Deno.args[0]) || new Date().getDate();

const dayPath = `./${year}/day/${day}`;
console.log(dayPath);

// Create directory for day and add input.txt and part1.ts
await Deno.mkdir(dayPath, { recursive: true });
await Deno.writeTextFile(`${dayPath}/input.txt`, "");
const codeContent = `// Description: https://adventofcode.com/${year}/day/${day}
const input = await Deno.readTextFile("input.txt");

`;
await Deno.writeTextFile(`${dayPath}/part1.ts`, codeContent);
await Deno.writeTextFile(`${dayPath}/part2.ts`, codeContent);

console.log(`Created files for day ${day} of ${year}:`);
console.log(`Input file: ${dayPath}/input.txt`);
console.log(`Code for part1: ${dayPath}/part1.ts`);
console.log(
  `Read the description at https://adventofcode.com/${year}/day/${day}`
);
