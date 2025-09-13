import { motion } from "motion/react";

interface OutputProps {
  base: number;
  value: string;
  answer: string;
  active: boolean;
  onClick?: () => void;
}

export default function Output({
  base,
  value,
  answer,
  active,
  onClick,
}: OutputProps) {
  const getBaseLabel = (base: number) => {
    switch (base) {
      case 2:
        return "BIN";
      case 8:
        return "OCT";
      case 10:
        return "DEC";
      case 16:
        return "HEX";
      default:
        return "UNK";
    }
  };

  const getBaseColor = (base: number) => {
    switch (base) {
      case 2:
        return "from-blue-500 to-blue-600";
      case 8:
        return "from-green-500 to-green-600";
      case 10:
        return "from-purple-500 to-purple-600";
      case 16:
        return "from-orange-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <motion.div
      onClick={onClick}
      className={`bg-gray-800/80 backdrop-blur-sm my-2 min-h-[6.4rem] rounded-md p-2 border transition-all duration-300 *:uppercase ${
        active
          ? "border-blue-400/40 shadow-lg shadow-blue-500/20"
          : "border-gray-700/50"
      }`}
      animate={{
        scale: active ? 1.02 : 1,
        y: active ? -2 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-1">
        <div
          className={`bg-gradient-to-r ${getBaseColor(
            base
          )} text-white px-3 py-1 rounded-lg shadow-sm`}
        >
          <span className="text-sm font-medium">{getBaseLabel(base)}</span>
        </div>
        <div className="text-xs text-white/50">Base {base}</div>
      </div>

      <div className="space-y-2">
        <span className="break-all text-gray-100 text-xl">{value}</span>

        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-sm text-white/50 min-h-[20px] break-all text-right">
            {answer}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
