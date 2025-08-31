import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import Output from "./components/Output";
import Keypad from "./components/Keypad";
import type { Base, KeyID } from "./lib/types";
import { useEffect, useState } from "react";
import { shiftTo } from "./lib/helpers";

export default function App() {
  const [selectedBase, setSelectedBase] = useState<Base>(10);
  const [eq2, setEq2] = useState("");
  const [eq8, setEq8] = useState("");
  const [eq10, setEq10] = useState("");
  const [eq16, setEq16] = useState("");
  const [answer, setAnswer] = useState("");

  function onKeyPress(id: KeyID) {
    const [eq, setEq] = {
      2: [eq2, setEq2],
      8: [eq8, setEq8],
      10: [eq10, setEq10],
      16: [eq16, setEq16],
    }[selectedBase];

    if (typeof setEq === "string" || typeof eq !== "string") return;

    let newEq = eq;

    switch (id) {
      case "Delete":
        if (eq.at(-1) !== " ") newEq = eq.substring(0, eq.length - 1);
        else newEq = eq.substring(0, eq.length - 3);
        break;
      case "Decimal":
        if (
          eq !== "" &&
          eq.at(-1) !== " " &&
          eq.split(" ").at(-1)?.indexOf(".") === -1
        )
          newEq = eq + ".";
        break;
      case "AC":
        newEq = "";
        break;
      case "Divide":
        if (eq !== "" && eq.at(-1) !== " ") newEq = eq + " ÷ ";
        break;
      case "Multiply":
        if (eq !== "" && eq.at(-1) !== " ") newEq = eq + " × ";
        break;
      case "Minus":
        if (eq !== "" && eq.at(-1) !== " ") newEq = eq + " - ";
        break;
      case "Plus":
        if (eq !== "" && eq.at(-1) !== " ") newEq = eq + " + ";
        break;
      default:
        newEq = eq + id;
        break;
    }

    if (selectedBase !== 2) setEq2(shiftTo(newEq, selectedBase, 2));
    if (selectedBase !== 8) setEq8(shiftTo(newEq, selectedBase, 8));
    if (selectedBase !== 10) setEq10(shiftTo(newEq, selectedBase, 10));
    if (selectedBase !== 16) setEq16(shiftTo(newEq, selectedBase, 16));

    setEq(newEq);
  }

  useEffect(() => {
    if (eq10 === "" || eq10.at(-1) === " " || eq10.at(-1) === ".")
      return setAnswer("");

    const newEq = eq10.replaceAll("÷", "/").replaceAll("×", "*");
    setAnswer(String(eval(newEq)));
  }, [eq10]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div className="w-screen h-svh flex flex-col justify-end gap-2 p-2">
        <div>
          <Output
            active={selectedBase === 2}
            base={2}
            value={eq2}
            answer={shiftTo(answer, 10, 2)}
            onClick={() => setSelectedBase(2)}
          />
          <Output
            active={selectedBase === 8}
            base={8}
            value={eq8}
            answer={shiftTo(answer, 10, 8)}
            onClick={() => setSelectedBase(8)}
          />
          <Output
            active={selectedBase === 10}
            base={10}
            value={eq10}
            answer={shiftTo(answer, 10, 10)}
            onClick={() => setSelectedBase(10)}
          />
          <Output
            active={selectedBase === 16}
            base={16}
            value={eq16}
            answer={shiftTo(answer, 10, 16)}
            onClick={() => setSelectedBase(16)}
          />
        </div>

        <Keypad layoutOfBase={selectedBase} onKeyPress={onKeyPress} />
      </div>
    </ThemeProvider>
  );
}
