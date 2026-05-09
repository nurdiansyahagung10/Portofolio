"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [cursor, setCursor] = useState({
    hovered: false,
    isBlob: false,
    text: "",
  });


  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const targets = document.querySelectorAll<HTMLElement>(".hover-target");

    targets.forEach((el) => {
      const enter = () => {
        if (el.classList.contains('hover-blob')) {
          setCursor({
            hovered: true,
            isBlob: true,
            text: el.dataset.cursorText || "",
          });
        } else {
          setCursor({
            hovered: true,
            isBlob: false,
            text: el.dataset.cursorText || "",
          });

        };
      }

      const leave = () => {
        setCursor({
          hovered: false,
          isBlob: false,
          text: "",
        });
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 11,
        y: position.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="pointer-events-none md:block hidden fixed left-0 top-0 z-9999 mix-blend-difference"
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            h-6 w-6 rounded-full border-2 border-white
            transition-all duration-300
            ${cursor.hovered ? (cursor.isBlob ? "scale-130" : "scale-40") : "scale-100"}
          `}
        />

        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: cursor.hovered ? 1 : 0,
            x: cursor.hovered ? 0 : -10,
          }}
          transition={{ duration: 0.2 }}
          className="whitespace-nowrap text-sm  text-white"
        >
          {cursor.text}
        </motion.span>
      </div>
    </motion.div>
  );
}