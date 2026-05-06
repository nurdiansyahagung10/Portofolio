"use client"
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TextAnimate from "../components/textAnimate";
import { ScrollTrigger } from "gsap/all";
import { playFair } from "../lib/font";

export default function About() {

    const [time, setTime] = useState("");
    const elementRef = useRef<HTMLDivElement>(null);
    const textCarousel = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);


        const ctx = gsap.context(() => {


            if (!elementRef.current) return;

            const obj = { val: 0 };
            const length = pathRef.current?.getTotalLength() ?? 0;
            const isMobile = window.innerWidth < 768;


            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: pathRef.current,
                    start: "top 100%",
                    end: "top -70%",
                    scrub: true,
                    toggleActions: "play reset play reset",
                },
            });

            gsap.to(obj, {
                val: 30,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: countRef.current,
                    start: "top 80%",
                    once: true
                },
                onUpdate: () => {
                    if (countRef.current) {
                        countRef.current.textContent = Math.floor(obj.val) + '+';
                    }
                },

            });

            gsap.to(textCarousel.current, {
                xPercent: -50,
                duration: 20,
                ease: "none",
                repeat: -1,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top bottom",
                    end: "top 60%",
                    scrub: true,
                },
            }).fromTo(
                elementRef.current,
                { y: isMobile ? 150 : 300 },
                { y: isMobile ? 50 : 100, ease: "none" }
            );

            gsap.timeline({
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top bottom",
                    end: "top 30%",
                    scrub: true,
                },
            }).fromTo(
                elementRef.current,
                { borderRadius: "4rem" },
                { ease: "none", borderRadius: "0rem" }
            );

            gsap.timeline({
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top 60%",
                    end: "top 0%",
                    scrub: true,
                },
            }).fromTo(
                elementRef.current,
                { scale: 0.85 },
                { scale: 1, ease: "none" }
            );


        }, elementRef);

        return () => ctx.revert();

    }, []);



    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-stone-950">
            <div ref={elementRef} className="bg-white relative w-full overflow-hidden -translate-y-50 mb-18 ">
                <div className="bg-white relative w-full overflow-hidden">
                    <svg width="100%" className="h-auto z-10 absolute md:mt-0 mt-10 opacity-30" viewBox="0 0 800 580">
                        <path
                            ref={pathRef}
                            d="M800 50 Q200 50 600 300 T0 640 "
                            stroke="#0c0a09"
                            strokeWidth="90"
                            strokeLinecap="round"
                            fill="transparent"
                        />
                    </svg>
                    <div id="about" className="w-full overflow-hidden">

                        <div ref={textCarousel} className="flex pt-20  whitespace-nowrap text-[9rem] gap-10">

                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex gap-10">
                                    <span>FULLSTACK DEVELOPER</span>
                                    <span>•</span>
                                    <span>AI ENGINEER</span>
                                    <span>•</span>
                                    <span>Deisgn Grafis</span>
                                    <span>•</span>
                                </div>
                            ))}

                        </div>

                    </div>
                    <div className="container mx-auto z-0 relative overflow-hidden w-full mt-5  group">
                        <div className="relative w-full bg-stone-100 overflow-hidden" style={{ transform: "scale(1.04786)" }}>
                            <Image alt="Rasya sitting" width="2200" height="2500" decoding="async" data-nimg="1" className="w-full h-auto object-cover" src="/images/fd.png" style={{ color: " transparent" }} />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">

                    <div className="bg-white z-10 w-full  ">
                        <div className="flex flex-col gap-6">
                            <div className="grid xl:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-10 md:pt-20 pt-10 pb-10 border-b border-stone-300">
                                <div className={`xl:text-7xl md:text-6xl text-4xl md:px-0 px-6 col-span-1 ${playFair.className}`}>
                                    <TextAnimate start="120%" text="Creator & thinker problem solve with gen z ideas." />
                                </div>
                                <div className="flex flex-col md:px-0 px-6 xl:col-span-1 col-span-2 gap-3">
                                    <p className="text-stone-500">
                                        Not just a Fullstack and Mobile Developer, but someone who thinks deeply, solves problems intentionally, and transforms ideas into scalable digital products and meaningful user experiences.
                                        My work spans web and mobile development, UI design, and interactive systems — from concept and interface design to development, optimization, and deployment.

                                        I focus on building solutions that actually make sense: web platforms, mobile apps, and interactive interfaces designed to solve real problems, simplify complexity, and create experiences that feel intuitive, useful, and genuinely enjoyable to use.
                                    </p>
                                    <div className="grid sm:grid-cols-3 grid-cols-1 mt-8 gap-3 border-stone-300">
                                        <div className="border-t flex flex-col gap-3 border-stone-300 pt-3">
                                            <span className="text-sm">Structured Thinking</span>
                                            <p className="text-sm text-stone-500">
                                                Approaching problems with clarity and structure, breaking down complex challenges into logical steps to create solutions that are efficient, scalable, and easy to maintain.
                                            </p>
                                        </div>

                                        <div className="border-t flex flex-col gap-3 border-stone-300 pt-3">
                                            <span className="text-sm">Intentional Problem Solving</span>
                                            <p className="text-sm text-stone-500">
                                                Solving problems with purpose, not just making things work, but understanding why they matter and ensuring each solution is meaningful.
                                            </p>
                                        </div>

                                        <div className="border-t flex flex-col gap-3 border-stone-300 pt-3">
                                            <span className="text-sm">User-Centered Mindset</span>
                                            <p className="text-sm text-stone-500">
                                                Thinking from the users perspective, focusing on simplicity, usability, and clarity to build experiences that feel natural, intuitive, and genuinely helpful.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-5 border-b border-stone-300 justify-around">
                                <div className="flex border-r w-full py-8 border-stone-300 text-center flex-col gap-1">
                                    <span className="text-sm text-stone-500">Location</span>
                                    <span className="xl:text-xl text-lg">Indonesia</span>
                                </div>
                                <div className="flex text-center w-full py-8 flex-col gap-1">
                                    <span className="text-sm text-stone-500">Local Time</span>
                                    <span className="xl:text-xl text-lg">{time} IDT</span>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="flex gap-5 py-10 md:px-0 px-6  justify-around">
                                <div className="flex border-r w-full py-6 pe-2 border-stone-300  flex-col gap-1">
                                    <span className="text-stone-500" >Years of Experience</span>
                                    <span className="xl:text-9xl md:text-8xl text-7xl">3+</span>
                                </div>
                                <div className="flex  w-full py-6 flex-col gap-1">
                                    <span className="text-stone-500" >Projects Completed</span>
                                    <span className="xl:text-9xl md:text-8xl text-7xl"><span ref={countRef}>-</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}