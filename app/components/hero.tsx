"use client"
import { Playfair_Display } from "next/font/google";
import { ArrowRightStroke, GridCircle } from '@boxicons/react';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import TextAnimate from "./textAnimate";
import ButtonAnimate from "./buttonAnimate";

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap'
});

type Props = {
    ready: boolean
}

export default function Hero({ ready }: Props) {


    const sectionRef = useRef<HTMLDivElement>(null);

    const images = [
        "https://cdn.dribbble.com/userupload/45607567/file/still-bced1a61d5b245ca788bffb7b59c1c18.png?format=webp&resize=800x600&vertical=center",
        "https://cdn.dribbble.com/userupload/16785430/file/original-0d8a35e997917373d44cac1b72162b04.png?format=webp&resize=640x480&vertical=center",
        "https://cdn.dribbble.com/userupload/44284443/file/184d894c2029598ed0325b81b6ea4259.png?format=webp&resize=640x480&vertical=center",
        "https://cdn.dribbble.com/userupload/17576958/file/still-18a1ab22c23b9d12ae94ce419c221ff3.png?format=webp&resize=640x480&vertical=center",
        "https://cdn.dribbble.com/userupload/45416575/file/3ae95cf605d8069562efd537edd560ba.png?format=webp&resize=640x480&vertical=center",
    ];



    useEffect(() => {

        if (!ready) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            const animBlob = gsap.utils.toArray<HTMLElement>(".animblob");
            const animUp = gsap.utils.toArray<HTMLElement>(".animup");
            const elements = gsap.utils.toArray<HTMLElement>(".imageup");
            const centerIndex = Math.floor(elements.length / 2);


            gsap.fromTo(
                sectionRef.current,
                {
                    clipPath: "ellipse(500% 100% at 50% 100%)",
                },
                {
                    clipPath: "ellipse(200% 100% at 50% 100%)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "center center",
                        scrub: true
                    },
                }
            );

            const tl = gsap.timeline({
                onComplete: () => {
                    window.lenis.start();
                }
            });

            elements.forEach((el, i) => {
                const distanceFromCenter = Math.abs(i - centerIndex);

                tl.fromTo(
                    el,
                    {
                        y: 100,
                        opacity: 0,
                    },
                    {
                        y: distanceFromCenter * 30,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    distanceFromCenter * 0.15
                );
            });

            animUp.map((el) => {
                gsap.fromTo(
                    el,
                    {
                        y: 80,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 110%",
                            toggleActions: "play none none reset",
                        },
                    }
                );

            })

            animBlob.map((el) => {
                gsap.fromTo(
                    el,
                    {
                        scale: 0,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 105%",
                            toggleActions: "play none none reset",
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, [ready]);



    return (
        <header>
            <div className="h-180 flex flex-col justify-center  items-center text-center ">
                <div className="container mx-auto px-10 md:mt-64 mt-55 md:mb-10 flex flex-col gap-6">
                    <span className={` xl:text-lg`}>Hi! Iam Agung Nurdiansyah</span>
                    <p className={`${playFair.className} xl:text-5xl text-4xl`}>
                        Transforming ideas into digital structures. <span className=" bg-stone-200"><i>Blending</i></span> peak performance with minimal aesthetics.
                    </p>                    <div className="flex justify-center">
                        <button className="mt-5 border  cursor-pointer border-stone-300 rounded-4xl pe-2 ps-3 py-2 flex justify-between gap-2 items-center"><span>See my CV</span> <span className="rounded-full p-1 bg-stone-100"><GridCircle /></span></button>
                    </div>
                </div>
                <div className="relative overflow-hidden w-full md:pt-40 pt-30 py-40 pb-60 ">

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <div className="flex md:scale-150 scale-120 gap-2">
                            {images.map((src, i) => (
                                <div
                                    key={i}
                                    className={`min-w-55 imageup  translate-y-100 opacity-0 group transition-[padding] shadow-none duration-300  bg-stone-100  h-100 rounded-4xl overflow-hidden `}
                                >
                                    <img src={src} className="w-full object-cover"></img>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div ref={sectionRef} className="w-full md:pt-60 pt-35 md:translate-y-13 translate-y-20 flex items-center justify-center flex-col pb-20 md:pb-0 bg-stone-950">
                <div className=" text-white md:px-20 px-4 text-center bg-stone-950 gap-15 flex flex-col ">
                    <div className="flex flex-col gap-24">
                        <div className={`xl:text-4xl md:text-3xl text-2xl md:px-0 sm:px-15  xl:px-40 ${playFair.className}`} >
                            <TextAnimate text={"Im Agung — a Full Stack Developer transforming ideas into fast, scalable, and immersive digital systems that merge creativity with engineering precision."} />                        </div>
                        <div className="md:text-lg md:px-20">
                            <p className="animup px-6">
                                I turn complex ideas into scalable SaaS platforms, intelligent AI products, and immersive 3D
                            </p>
                            <p className="animup">
                                web experiences using technologies like Next.js, Node.js, and Three.js.
                            </p>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <a className="flex animblob w-0 flex-none justify-center group gap-1">
                            <ButtonAnimate value="About Me" className="py-3! px-6! text-black! bg-amber-500!" />
                            <button className="rounded-full -rotate-45 group-hover:text-black! transition duration-500 group-hover:-rotate-180  group-hover:bg-white! cursor-pointer bg-amber-500 px-3 text-black"><ArrowRightStroke /></button>

                        </a>
                    </div>

                </div>
                <div className="gap-6 mt-24 text-white pb-6 mb-5 w-full border-stone-600 border-b ">
                    <div className="md:px-20 flex items-center justify-around">
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-2 "><ArrowRightStroke className="rotate-90" /> <span>Scroll to explore</span></div>

                        </div >
                        <div className="flex items-center justify-center">
                            <span>My short story</span>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}