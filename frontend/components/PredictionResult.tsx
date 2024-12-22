"use client";

import { motion } from "framer-motion";

interface PredictionResultProps {
  prediction: number;
}

export default function PredictionResult({
  prediction,
}: PredictionResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 p-4 bg-yellow-100 rounded-md"
    >
      <h2 className="text-lg font-semibold text-yellow-800 mb-2">
        Prediction Result
      </h2>
      <p className="text-2xl font-bold text-yellow-900">
        ${prediction.toFixed(2)}
      </p>
    </motion.div>
  );
}
