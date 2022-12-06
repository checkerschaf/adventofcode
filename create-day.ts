import { day, dayPath, dayString, year } from "./day-path.ts";

// Create directory for day and add input.txt and part1.ts
await Deno.mkdir(dayPath, { recursive: true });
await Deno.writeTextFile(`${dayPath}/input.txt`, "");
const codeContent = `// Description: https://adventofcode.com/${dayString}
const input = await Deno.readTextFile("input.txt");

`;
await Deno.writeTextFile(`${dayPath}/part1.ts`, codeContent);
await Deno.writeTextFile(`${dayPath}/part2.ts`, codeContent);

console.log(`Created files for day ${day} of ${year}:`);
console.log(`Input file: ${dayPath}/input.txt`);
console.log(`Code for part1: ${dayPath}/part1.ts`);
console.log(`Read the description at https://adventofcode.com/${dayString}`);
