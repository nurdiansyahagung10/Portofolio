"use client";

import { useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ParallaxHover({
  children,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.15;
    const moveY = (y - rect.height / 2) * 0.2;

    gsap.to(ref.current, {
      x: moveX,
      y: moveY,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </div>
  );
}