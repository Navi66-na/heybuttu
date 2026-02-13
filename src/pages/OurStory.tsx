import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RosePetals from "@/components/RosePetals";

const storyMoments = [
  { emoji: "🏫", title: "Where It All Began", text: "We met at school — a place where everything was ordinary, until you walked into my life and made it extraordinary." },
  { emoji: "📞", title: "The First Call", text: "I could only call you at first... too shy to say what I really felt. My heart raced every time I heard your voice." },
  { emoji: "🫣", title: "The Confession", text: "Then one day, I gathered all my courage and told you — 'I have a crush on you.' That moment changed everything." },
  { emoji: "👀", title: "Her Eyes, Her Beauty", text: "Your eyes pulled me in like a spell. Your beauty, inside and out, made falling in love feel like the most natural thing in the world." },
  { emoji: "💛", title: "Her Heart For Me", text: "But what truly made me fall was your heart — the way you cared, the way you loved me back. That's when I knew this was real." },
  { emoji: "🤫", title: "Our Quiet Moments", text: "The best memories aren't always the loudest. Our quiet moments together — just us, no words needed — those are the ones I treasure most." },
  { emoji: "🔥", title: "An Unbreakable Bond", text: "Your personality, your energy, your kindness — everything about you makes me love you more each day. What we have is forever." },
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
