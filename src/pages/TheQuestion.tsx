import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TheQuestion = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500),
      setTimeout(() => setPhase(2), 3500),
      setTimeout(() => setPhase(3), 5500),
      setTimeout(() => setPhase(4), 7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleNoHover = useCallback(() => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ background: "radial-gradient(circle at center, transparent 0%, hsl(0 10% 5%) 0%)" }}
        animate={
          phase >= 3
            ? { background: "radial-gradient(circle at center, hsl(0 72% 50% / 0.12) 0%, hsl(0 10% 5%) 70%)" }
            : {}
        }
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 text-center px-6">
        <AnimatePresence mode="wait">
          {phase >= 1 && phase < 4 && (
            <motion.p
              key="name"
              className="font-display text-5xl md:text-7xl text-foreground text-glow mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              Navina...
            </motion.p>
          )}
        </AnimatePresence>

        {phase >= 2 && phase < 4 && (
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-5 h-5 rounded-full bg-primary"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </motion.div>
        )}

        {phase >= 4 && (
          <>
            <motion.h1
              className="font-display text-5xl md:text-7xl text-foreground text-glow mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 60 }}
              style={{ animation: "heartbeat 2s ease-in-out infinite" }}
            >
              Will You Be Mine Forever?
            </motion.h1>

            <motion.p
              className="font-elegant text-2xl text-accent italic mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              💕 My heart awaits your answer 💕
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <motion.button
                onClick={() => navigate("/celebration")}
                className="px-12 py-5 rounded-full bg-primary text-primary-foreground font-display text-2xl tracking-wider"
                style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes 💕
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-display text-lg border border-border"
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                Let me think... 🤔
              </motion.button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default TheQuestion;
