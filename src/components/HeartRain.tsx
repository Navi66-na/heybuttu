import { useMemo } from "react";

const HeartRain = ({ count = 50 }: { count?: number }) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 12 + Math.random() * 20,
        opacity: 0.4 + Math.random() * 0.6,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-primary"
          style={{
            left: `${h.left}%`,
            top: "-5%",
            fontSize: h.size,
            opacity: h.opacity,
            animation: `heart-rain ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartRain;
