import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";

interface OutputProps {
  base: number;
  value: string;
  answer: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Output({
  base,
  value,
  answer,
  active = false,
  onClick,
}: OutputProps) {
  return (
    <div onClick={onClick} className="flex flex-col border-b-2">
      <div
        className={cn(
          "text-sm font-bold uppercase",
          active ? "opacity-100" : "opacity-50"
        )}
      >
        Base {base} {active && <Dot className="inline -ml-2 -my-1" />}
      </div>
      <div className="text-2xl h-8 overflow-x-auto uppercase">{value}</div>
      <div className="text-end h-8 opacity-50 uppercase">{answer}</div>
    </div>
  );
}
