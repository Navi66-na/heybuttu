import { useMemo } from "react";

const RosePetals = ({ count = 15 }: { count?: number }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        size: 10 + Math.random() * 15,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background: `radial-gradient(ellipse, hsl(0 72% 50% / 0.8), hsl(0 60% 35% / 0.4))`,
            borderRadius: "50% 0 50% 50%",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default RosePetals;
