import { useMemo } from "react";

const FloatingHearts = ({ count = 8 }: { count?: number }) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 4,
        size: 8 + Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.2,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-primary"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: h.size,
            opacity: h.opacity,
            animation: `float ${h.duration}s ease-in-out ${h.delay}s infinite`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
