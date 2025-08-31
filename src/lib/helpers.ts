import type { Base } from "./types";

export function shiftTo(eq: string, from: Base, to: Base) {
    if (eq === "") return ""

    let newEq = "";

    const args = eq.split(" ")
    for (let i = 0; i < args.length; i++ ) {
        if (i % 2 === 0) {
            if (args[i] === "") continue
            const decVal = parseInt(args[i], from)
            const newVal = decVal.toString(to)
            newEq += newVal
            console.log(args[i], newVal)
        } else newEq += " " + args[i] + " "
    }

    return newEq
}