import { motion } from "motion/react";
import { type ReactNode } from "react";
import type { KeyID } from "@/lib/types";

interface KeyProps {
  children: ReactNode;
  id: KeyID;
  variant?: "number" | "operator" | "special" | "clear";
  disabled?: boolean;
  className?: string;
}

export default function KeypadButton({
  children,
  id,
  variant = "number",
  disabled = false,
  className = "",
}: KeyProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "number":
        return "bg-gray-700/80 text-gray-100 shadow-sm hover:shadow-md";
      case "operator":
        return "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg";
      case "special":
        return "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg";
      case "clear":
        return "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-md hover:shadow-lg";
      default:
        return "bg-gray-700/80 hover:bg-gray-600/90 border-gray-600 text-gray-100 shadow-sm hover:shadow-md";
    }
  };

  return (
    <motion.button
      id={id}
      className={`w-full h-full key 
        rounded-xl p-4 transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        target:scale-80 select-none active:scale-90
        ${getVariantStyles()}
        ${className}
      `}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      <div className="flex items-center justify-center">{children}</div>
    </motion.button>
  );
}
