import type { KeyID } from "@/lib/types";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface KeyProps extends HTMLAttributes<HTMLButtonElement> {
  id: KeyID;
  disabled?: boolean;
  highlighted?: boolean;
}

export default function Key({
  className,
  disabled = false,
  highlighted = false,
  ...props
}: KeyProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        className,
        "key",
        "w-full h-full bg-card text-foreground text-3xl font-bold flex justify-center items-center rounded-full disabled:opacity-50 target:scale-80 transition-all select-none active:scale-90",
        highlighted && "bg-accent text-accent-foreground"
      )}
      {...props}
    />
  );
}
