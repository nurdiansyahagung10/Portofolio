"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Props = {
    onFinish: () => void,
}

export default function Preloader({ onFinish }: Props) {
    const loaderRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (window.scrollY < 2100) {
            window.lenis?.stop();
        }

        const tl = gsap.timeline();

        const target = dotRef.current;

        if (!target || !textRef.current) return;

        const parentRect = textRef.current.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const originX = targetRect.left - parentRect.left + targetRect.width / 2;
        const originY = targetRect.top - parentRect.top + targetRect.height / 2;

        gsap.set(textRef.current, {
            transformOrigin: `${originX}px ${originY}px`
        });

        const finalText = "Hello";
        const state = { index: 0 };

        tl.fromTo(textRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        tl.to(state, {
            index: finalText.length,
            duration: 1,
            ease: "steps(5)",
            onUpdate: () => {
                const dynamic = textRef.current?.querySelector(".dynamic");
                if (!dynamic) return;

                const current = Math.floor(state.index);
                dynamic.textContent = finalText.slice(0, current);
            }
        });

        tl.to(".cursor", {
            opacity: 0,
            repeat: 3,
            yoyo: true,
            duration: 0.2
        });

        tl.to(dotRef.current, {
            scale: 200,
            duration: 1,
            ease: "power4.inOut"
        })
            .to(loaderRef.current, {
                opacity: 0,
                onComplete: () => setLoading(false)
            }).call(() => {
                onFinish();
            });

    }, [onFinish]);

    if (!loading) return null;

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 bg-black z-9999 flex items-center justify-center overflow-hidden"
        >
            <div
                ref={textRef}
                className="text-white text-5xl translate-y-10 opacity-0 md:text-6xl font-medium flex items-center"
            >
                <span ref={dotRef}>•</span>
                <span className="dynamic ml-1"></span>
                <span className="cursor -translate-y-1">|</span>
            </div>
        </div>
    );
}