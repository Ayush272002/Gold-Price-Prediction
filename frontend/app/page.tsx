"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PredictionForm from "@/components/PredictionForm";
import PredictionResult from "@/components/PredictionResult";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home() {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: Record<string, number>) => {
    setIsLoading(true);
    try {
      const result = await await axios.post(`${API_BASE_URL}/predict`, data);
      setPrediction(result.data.prediction);
    } catch (error) {
      console.error("Error predicting gold price:", error);
      alert(
        "An error occurred while predicting the gold price. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-yellow-800 mb-8"
      >
        Gold Price Predictor
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
      >
        <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
        {prediction !== null && <PredictionResult prediction={prediction} />}
      </motion.div>
    </main>
  );
}
