import type { KeyID } from "@/lib/types";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface KeyProps extends HTMLAttributes<HTMLButtonElement> {
  id: KeyID;
  disabled?: boolean;
}

export default function Key({
  className,
  disabled = false,
  ...props
}: KeyProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        className,
        "key",
        "w-full h-full bg-secondary text-foreground flex justify-center items-center rounded-full disabled:opacity-50"
      )}
      {...props}
    />
  );
}
