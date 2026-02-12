import { motion } from "framer-motion";
import HeartRain from "@/components/HeartRain";

const Celebration = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <HeartRain count={60} />

      {/* Warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_72%_50%/0.15)_0%,transparent_60%)]" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="text-8xl mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
        >
          💕
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl text-foreground text-glow mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          You just made me the happiest person alive
        </motion.h1>

        <motion.p
          className="font-elegant text-3xl md:text-4xl text-accent italic mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Navina
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <p className="font-elegant text-2xl text-foreground/80 italic">
            Forever yours,
          </p>
          <p className="font-display text-3xl text-foreground mt-2">
            Naveen ❤️
          </p>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          {["❤️", "💕", "🌹", "💖", "✨"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Celebration;
