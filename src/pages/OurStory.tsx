import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RosePetals from "@/components/RosePetals";

const storyMoments = [
  { emoji: "✨", title: "The First Glance", text: "The moment our eyes met, the universe whispered — this is the one." },
  { emoji: "🌹", title: "The First Conversation", text: "Words turned into hours, hours turned into a beautiful beginning we never wanted to end." },
  { emoji: "💫", title: "Falling In Love", text: "Slowly then all at once — my heart chose you before my mind even knew." },
  { emoji: "🌙", title: "Late Night Talks", text: "In the quiet of the night, we built a world only we could understand." },
  { emoji: "💕", title: "Growing Together", text: "Every challenge made us stronger, every laugh made us closer. We became unstoppable." },
  { emoji: "🔥", title: "An Unbreakable Bond", text: "What we have isn't just love — it's destiny, written in the stars long before we met." },
];

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <RosePetals count={8} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(0_72%_50%/0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
        <motion.h1
          className="font-display text-4xl md:text-6xl text-center mb-4 text-foreground text-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Love Story
        </motion.h1>
        <motion.p
          className="font-elegant text-xl text-center text-muted-foreground mb-16 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A tale written by destiny...
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          {storyMoments.map((moment, i) => (
            <motion.div
              key={i}
              className={`relative flex items-center mb-20 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Content */}
              <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <h3 className="font-display text-2xl text-foreground mb-2">{moment.title}</h3>
                <p className="font-elegant text-lg text-muted-foreground italic leading-relaxed">{moment.text}</p>
              </div>

              {/* Center dot */}
              <div className="w-2/12 flex justify-center">
                <motion.div
                  className="w-14 h-14 rounded-full bg-secondary border-2 border-primary/50 flex items-center justify-center text-2xl"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {moment.emoji}
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => navigate("/the-question")}
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-display text-lg tracking-wider"
            style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            What comes next... 💫
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
