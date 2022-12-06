export const year = new Date().getFullYear();
// Read day from command line arguments or fallback to current day
export const day = parseInt(Deno.args[0]) || new Date().getDate();

export const dayString = `${year}/day/${day}`;
export const dayPath = `./${dayString}`;
