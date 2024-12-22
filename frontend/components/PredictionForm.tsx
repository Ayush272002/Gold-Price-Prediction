"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PredictionFormProps {
  onSubmit: (data: Record<string, number>) => void;
  isLoading: boolean;
}

export default function PredictionForm({
  onSubmit,
  isLoading,
}: PredictionFormProps) {
  const [formData, setFormData] = useState({
    SPX: "",
    USO: "",
    SLV: "",
    "EUR/USD": "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, parseFloat(value)])
    );
    onSubmit(numericData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-md"
    >
      {Object.keys(formData).map((key) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <label
            htmlFor={key}
            className="block text-sm font-medium text-gray-700"
          >
            {key}
          </label>
          <input
            type="number"
            id={key}
            name={key}
            value={formData[key as keyof typeof formData]}
            onChange={handleChange}
            required
            step="any"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-gray-900 px-3 py-2"
          />
        </motion.div>
      ))}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-yellow-500 text-white py-3 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 disabled:opacity-50 font-medium"
      >
        {isLoading ? "Predicting..." : "Predict Gold Price"}
      </motion.button>
    </form>
  );
}
