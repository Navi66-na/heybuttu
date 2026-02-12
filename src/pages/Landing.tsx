import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RosePetals from "@/components/RosePetals";
import FloatingHearts from "@/components/FloatingHearts";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <RosePetals count={20} />
      <FloatingHearts count={10} />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_72%_50%/0.08)_0%,transparent_70%)]" />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Envelope */}
        <motion.div
          className="mx-auto mb-10 text-8xl"
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 80 }}
          style={{ animation: "heartbeat 2s ease-in-out infinite" }}
        >
          💌
        </motion.div>

        <motion.p
          className="font-elegant text-2xl md:text-4xl text-foreground italic mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Navina, someone has a secret for you...
        </motion.p>

        <motion.p
          className="font-body text-muted-foreground text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Are you ready to discover it?
        </motion.p>

        <motion.button
          onClick={() => navigate("/love-letters")}
          className="relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-display text-xl tracking-wider
                     hover:scale-105 transition-transform duration-300"
          style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Open 💕
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Landing;
