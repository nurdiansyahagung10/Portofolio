"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
    value: string,
    className?: string,
}

export default function ButtonAnimate({ value, className }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;

        if (!el) return;
        const bgEls = el.querySelectorAll(".bg");
        const topChars = el.querySelectorAll(".text-top .char");
        const bottomChars = el.querySelectorAll(".text-bottom .char");

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ paused: true });
            tl.to(bgEls, {
                delay: 0.2,
                duration: 0.2,
                width: "100%",
                ease: "power2.out",
                stagger: 0.05
            }, 0);
            tl.to(topChars, {
                y: -30,
                opacity: 0,
                stagger: 0.02,
                duration: 0.25,
                ease: "power2.in"
            }, 0);
            tl.fromTo(bottomChars, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.02,
                duration: 0.3,
                ease: "power2.out"
            }, 0.1);

            const enter = () => tl.play();
            const leave = () => tl.reverse();

            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);

            return () => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            };
        }, el);

        return () => ctx.revert();
    }, []);


    const split = (str: string) =>
        str.split("").map((c, i) => (
            <span key={i} className="inline-block char">
                {c === " " ? "\u00A0" : c}
            </span>
        ));
    return (
        <div className="flex items-center gap-px ">
            <div ref={wrapperRef} className={`relative cursor-pointer bg-black text-white  text-[15px] px-6 py-2 rounded-full overflow-hidden ${className}`}>
                <div className="bg absolute inset-0 bg-white w-0 " />
                <div className="relative z-10 h-6 overflow-hidden flex flex-col items-center">
                    <div className="flex text-top">
                        {split(value)}
                    </div>
                    <div className="flex text-bottom text-black! absolute ">
                        {split(value)}
                    </div>

                </div>
            </div>
        </div>
    );
}