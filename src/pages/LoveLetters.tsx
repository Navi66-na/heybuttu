import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RosePetals from "@/components/RosePetals";

const loveMessages = [
  { id: 1, title: "Your Smile", closedEmoji: "🎀", openedEmoji: "🌺", modalEmoji: "🌺", message: "Your smile lights up my entire world. Every time I see it, I fall in love all over again." },
  { id: 2, title: "Every Moment", closedEmoji: "🎐", openedEmoji: "🦋", modalEmoji: "🦋", message: "Every moment with you is pure magic. Time stops when I'm looking into your eyes." },
  { id: 3, title: "My Heart", closedEmoji: "🔮", openedEmoji: "💗", modalEmoji: "💗", message: "My heart beats only for you, Navina. You are the reason it keeps going." },
  { id: 4, title: "Your Laugh", closedEmoji: "🪷", openedEmoji: "🎶", modalEmoji: "🎶", message: "Your laugh is my favorite melody. I could listen to it forever and never get tired." },
  { id: 5, title: "My Dream", closedEmoji: "🌙", openedEmoji: "✨", modalEmoji: "✨", message: "You are the dream I never want to wake up from. My reality with you is better than any fantasy." },
  { id: 6, title: "Forever", closedEmoji: "💎", openedEmoji: "🫀", modalEmoji: "🫀", message: "I knew from the moment I met you — you were the one I'd love forever." },
];

const Landing = () => {
  const navigate = useNavigate();
  const [openedLetters, setOpenedLetters] = useState<Set<number>>(new Set());
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpenedLetters((prev) => new Set(prev).add(id));
    setActiveLetter(id);
  };

  const canContinue = openedLetters.size >= 3;

  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-16 px-4">
      <RosePetals count={10} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_72%_50%/0.06)_0%,transparent_60%)]" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground text-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Love Letters for You
        </motion.h1>
        <motion.p
          className="font-elegant text-xl text-center text-muted-foreground mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Click each letter to reveal what's inside...
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {loveMessages.map((letter, i) => (
            <motion.div
              key={letter.id}
              className={`relative cursor-pointer rounded-lg border p-6 text-center transition-all duration-300
                ${openedLetters.has(letter.id) ? "bg-secondary border-primary/40" : "bg-card border-border hover:border-primary/50"}
              `}
              style={{ animation: `letter-drift ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite` }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              onClick={() => handleOpen(letter.id)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="text-4xl mb-3">
                {openedLetters.has(letter.id) ? letter.openedEmoji : letter.closedEmoji}
              </div>
              <p className="font-display text-lg text-foreground">{letter.title}</p>
              {openedLetters.has(letter.id) && (
                <motion.p
                  className="mt-2 font-body text-sm text-muted-foreground"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  Tap to read again
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Active letter modal */}
        <AnimatePresence>
          {activeLetter && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLetter(null)}
            >
              <motion.div
                className="bg-card border border-primary/30 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{ boxShadow: "0 0 40px hsl(0 72% 50% / 0.2)" }}
              >
                <div className="text-5xl mb-4">{loveMessages.find((l) => l.id === activeLetter)?.modalEmoji}</div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {loveMessages.find((l) => l.id === activeLetter)?.title}
                </h3>
                <p className="font-elegant text-xl italic text-foreground/90 leading-relaxed">
                  "{loveMessages.find((l) => l.id === activeLetter)?.message}"
                </p>
                <button
                  className="mt-6 text-muted-foreground font-body text-sm hover:text-foreground transition-colors"
                  onClick={() => setActiveLetter(null)}
                >
                  Close ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue button */}
        <AnimatePresence>
          {canContinue && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => navigate("/our-story")}
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-display text-lg tracking-wider"
                style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue the journey... ✨
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Landing;
