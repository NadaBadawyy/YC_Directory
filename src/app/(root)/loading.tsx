"use client"

import { motion } from "framer-motion"

export default function GlobalLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Animated logo / circle */}
      <motion.div
        className="w-16 h-16 rounded-full bg-primary mb-6 shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0px var(--color-primary)",
            "0 0 20px var(--color-primary)",
            "0 0 0px var(--color-primary)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Loading text */}
      <motion.p
        className="text-xl font-bold tracking-widest text-black-200"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>

      {/* Accent bar */}
      <motion.div
        className="mt-8 h-2 w-40 rounded-full bg-black"
        animate={{ scaleX: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
