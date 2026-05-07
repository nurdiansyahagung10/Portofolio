"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { playFair } from "../lib/font";


export default function Footer() {

    const containerRef = useRef<HTMLDivElement>(null);

    const logos = [
        { src: "/images/logos/chat-gpt (1).png", top: "0%", left: "53%" },
        { src: "/images/logos/cloud.png", top: "7%", left: "97%" },
        { src: "/images/logos/f.png", top: "14%", left: "16%" },
        { src: "/images/logos/photoshop.png", top: "2%", left: "-5%" },
        { src: "/images/logos/i.jpg", top: "20%", left: "73%" },
        { src: "/images/logos/visual-studio-code.webp", top: "81%", left: "1%" },
        { src: "/images/logos/g.png", top: "69%", left: "90%" },
    ];



    useEffect(() => {
        const logos = gsap.utils.toArray<HTMLElement>(".logo");
        const text = gsap.utils.toArray<HTMLElement>(".text");

        logos.forEach((el) => {

            gsap.registerPlugin(ScrollTrigger);

            const animate = () => {
                gsap.to(el, {
                    x: gsap.utils.random(-40, 40),
                    y: gsap.utils.random(-50, 50),
                    duration: gsap.utils.random(2, 5),
                    ease: "sine.inOut",
                    onComplete: animate,
                });
            };

            animate();
        });

        text.forEach((el, i) => {
            const animate = () => {
                gsap.fromTo(
                    el,
                    {
                        y: 600 + (i * 300),
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 100%",
                            scrub: true,
                        },
                    }
                );
            };

            animate();
        });


    }, []);

    return (
        <section >
            <div ref={containerRef} className="h-[300vh] bg-stone-950  relative">
                <div className="sticky top-0 h-screen bg-stone-100 grid rounded-b-4xl place-items-center overflow-hidden px-6 md:px-24 xl:px-40">

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full max-w-6xl aspect-[1.8]">

                            {logos.map((logo, i) => (
                                <div
                                    key={i}
                                    className="absolute logo"
                                    style={{ top: logo.top, left: logo.left }}
                                >
                                    <div className={`relative w-20 h-20 md:translate-y-0  rounded-2xl overflow-hidden shadow-lg ${i < 3 ? '-translate-y-35' : 'translate-y-35'}`}>
                                        <Image
                                            src={logo.src}
                                            alt="logo"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="-z-10 text-center">
                        <h2 className="flex flex-col items-center gap-6">

                            <span className="text-lg md:text-xl text-stone-500">
                                Not the end, just part of the process
                            </span>

                            <div className={`grid gap-2 md:gap-5 text-4xl md:text-6xl font-semibold ${playFair.className}`}>
                                <span className="text">Lessons learned</span>
                                <span className="text">still improving</span>
                                <span className="text">More to be built</span>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
            <footer className="bg-stone-950 flex sticky -z-10 bottom-0 flex-col overflow-hidden  items-center  justify-end text-white  py-16 px-6 md:px-24">

                <div className="w-full flex-col justify-center">
                    <div className="flex justify-between gap-10">
                        <div className="max-w-7xl grid md:grid-cols-4 w-full gap-10">

                            <div>
                                <h4 className="text-lg border-b border-stone-900 pb-1 text-stone-500 mb-3">Navigation</h4>
                                <ul className="space-y-2 opacity-70">
                                    <li>Instagram</li>
                                    <li>LinkedIn</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg border-b border-stone-900 pb-1 text-stone-500 mb-3">Social</h4>
                                <ul className="space-y-2  opacity-70">
                                    <li>Instagram</li>
                                    <li>LinkedIn</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg border-b border-stone-900 pb-1 text-stone-500 mb-3">Local time</h4>
                                <ul className="space-y-2  opacity-70">
                                    <li>9:23 PM UTC+7</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg border-b border-stone-900 pb-1 text-stone-500 mb-3">Version</h4>
                                <ul className="space-y-2  opacity-70">
                                    <li>2026 © Edition</li>
                                </ul>
                            </div>

                        </div>
                        <div>
                            <div className="rounded-full flex text-nowrap items-center  justify-center  border-stone-900 border py-3 px-20 mt-2 ">
                                Lets Talk
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 text-center text-sm opacity-50">
                        © {new Date().getFullYear()} Yasya. All rights reserved.
                    </div>

                </div>
            </footer>
        </section>
    );
}