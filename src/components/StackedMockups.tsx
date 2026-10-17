import { useState } from "react";
import { motion } from "framer-motion";
import group2 from "../assets/images/Group 2.webp";
import group33 from "../assets/images/Group 33.webp";
import group38 from "../assets/images/Group 38 (1).webp";

const spring = { type: "spring", stiffness: 100, damping: 20 } as const;

const previews = [
  { image: group33, label: "Skincare" },
  { image: group38, label: "Mentorship" },
  { image: group2, label: "Real estate" },
];

const cardClass =
  "absolute inset-0 m-0 cursor-pointer overflow-hidden rounded-lg border-0 bg-[#f2f2f2] p-0 text-left shadow-[0_20px_40px_rgba(0,0,0,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export default function StackedMockups() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isSpread = isHovered || hoveredIndex !== null;

  return (
    <motion.section
      className="relative mx-auto aspect-[4/3] w-full max-w-[400px] md:max-w-[460px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        setHoveredIndex(null);
      }}
      aria-label="Project previews"
    >
      {previews.map((preview, index) => {
        const offset = index - activeIndex;
        const isActive = index === activeIndex;
        const isCardHovered = index === hoveredIndex;

        return (
          <motion.button
            key={preview.label}
            type="button"
            className={cardClass}
            animate={{
              x: `${offset * (isSpread ? 18 : 6)}%`,
              y: `${offset === 0 ? -8 : Math.abs(offset) * 5}px`,
              rotate: offset * (isSpread ? 8 : 2) - 1,
              scale: isCardHovered ? 1.035 : isActive ? 1 : 0.98,
              zIndex: isCardHovered ? 5 : isActive ? 4 : index + 1,
            }}
            transition={spring}
            onClick={() => setActiveIndex(index)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() =>
              setHoveredIndex((current) => (current === index ? null : current))
            }
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            aria-label={`Show ${preview.label} project preview`}
          >
            <img
              src={preview.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.button>
        );
      })}
    </motion.section>
  );
}
