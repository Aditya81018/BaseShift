import { Delete, Divide, Minus, Parentheses, Plus, X } from "lucide-react";
import Key from "./Key";
import type { Base, KeyID } from "@/lib/types";

interface KeypadProps {
  onKeyPress?: (id: KeyID) => void;
  layoutOfBase?: Base;
}

export default function Keypad({ onKeyPress, layoutOfBase = 16 }: KeypadProps) {
  return (
    <div
      className="w-full h-full flex flex-col gap-1"
      id="keypad"
      onClick={(e) => {
        let target = e.target as HTMLElement;
        while (!target.classList.contains("key")) {
          target = target.parentElement!;
          if (target.id === "keypad") break;
        }
        if (onKeyPress && target.classList.contains("key"))
          onKeyPress(target.id as KeyID);
      }}
    >
      <div className="w-full h-full flex gap-1">
        <Key variant="number" id="D" disabled={layoutOfBase < 16}>
          D
        </Key>
        <Key variant="number" id="E" disabled={layoutOfBase < 16}>
          E
        </Key>
        <Key variant="number" id="F" disabled={layoutOfBase < 16}>
          F
        </Key>
        <Key variant="clear" id="AC">
          AC
        </Key>
      </div>
      <div className="w-full h-full flex gap-1">
        <Key variant="number" id="A" disabled={layoutOfBase < 16}>
          A
        </Key>
        <Key variant="number" id="B" disabled={layoutOfBase < 16}>
          B
        </Key>
        <Key variant="number" id="C" disabled={layoutOfBase < 16}>
          C
        </Key>
        <Key variant="special" disabled id="Parentheses">
          <Parentheses />
        </Key>
      </div>
      <div className="w-full h-full flex gap-1">
        <Key variant="number" id="7" disabled={layoutOfBase < 8}>
          7
        </Key>
        <Key variant="number" id="8" disabled={layoutOfBase < 10}>
          8
        </Key>
        <Key variant="number" id="9" disabled={layoutOfBase < 10}>
          9
        </Key>
        <Key variant="operator" id="Divide">
          <Divide />
        </Key>
      </div>
      <div className="w-full h-full flex gap-1">
        <Key variant="number" id="4" disabled={layoutOfBase < 8}>
          4
        </Key>
        <Key variant="number" id="5" disabled={layoutOfBase < 8}>
          5
        </Key>
        <Key variant="number" id="6" disabled={layoutOfBase < 8}>
          6
        </Key>
        <Key variant="operator" id="Multiply">
          <X />
        </Key>
      </div>
      <div className="w-full h-full flex gap-1">
        <Key variant="number" id="1" disabled={layoutOfBase < 2}>
          1
        </Key>
        <Key variant="number" id="2" disabled={layoutOfBase < 8}>
          2
        </Key>
        <Key variant="number" id="3" disabled={layoutOfBase < 8}>
          3
        </Key>
        <Key variant="operator" id="Minus">
          <Minus />
        </Key>
      </div>
      <div className="w-full h-full flex gap-1">
        <Key variant="number" id="0">
          0
        </Key>
        <Key variant="special" id="Decimal">
          .
        </Key>
        <Key variant="special" id="Delete">
          <Delete />
        </Key>
        <Key variant="operator" id="Plus">
          <Plus />
        </Key>
      </div>
    </div>
  );
}
