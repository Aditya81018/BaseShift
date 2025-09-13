import type { Base } from "./types";

export function shiftTo(eq: string, from: Base, to: Base) {
  if (eq === "") return "";

  let newEq = "";

  const args = eq.split(" ");
  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      if (args[i] === "") continue;
      const decVal = toBase10(args[i], from);
      console.log(decVal);
      const newVal = decVal.toString(to);
      newEq += newVal;
    } else newEq += " " + args[i] + " ";
  }

  return newEq;
}

export function toBase10(number: string, fromBase: number) {
  let sum = 0;
  const index = number.indexOf(".");
  if (index === -1) {
    return parseInt(number, fromBase);
  }

  let args = number.split("")
  args.splice(index, 1)

  for (let i = 0; i < args.length; i++) {
    let value = parseInt(args[i], fromBase);
    sum += value * Math.pow(fromBase, index - i - 1)
  }

  return sum;
}