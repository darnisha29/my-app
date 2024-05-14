"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#4B5563", "bg-black", "#1A202C"
  ];
  const linearGradients = [
    "bg-gradient-to-r from-purple-600 to-blue-600",
    "bg-gradient-to-r from-purple-600 to-blue-600",
    "bg-gradient-to-r from-purple-600 to-blue-600",
    // "bg-gradient-to-br from-[#06B6D4] to-[#20C997]",
    // "bg-gradient-to-br from-[#06B6D4] to-[#20C997]",
    // "bg-gradient-to-br from-[#06B6D4] to-[#20C997]",
    
// "bg-gradient-to-br from-pink-500 to-indigo-500",
// "bg-gradient-to-br from-orange-500 to-yellow-500",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          `hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 ${contentClassName}`
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};



// "bg-gradient-to-br from-cyan-500 to-emerald-500",
// "bg-gradient-to-br from-pink-500 to-indigo-500",
// "bg-gradient-to-br from-orange-500 to-yellow-500",

// "#4B5563", "bg-black", "#1A202C"