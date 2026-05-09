"use client"
import { Playfair_Display } from "next/font/google";
import { ArrowRightStroke, GridCircle } from '@boxicons/react';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import TextAnimate from "./textAnimate";
import ButtonAnimate from "./buttonAnimate";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import ParallaxHover from "./paralaxHover";

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
    const scrollRef = useRef<HTMLDivElement>(null);
    const images2 = [
        "https://cdn.dribbble.com/userupload/47083615/file/a85abfca077020d923641e49665a44c6.png?resize=2048x1536&vertical=center",
        "https://cdn.dribbble.com/userupload/47653992/file/1ddf0794874da9b2e76bf0958c901c35.png?format=webp&resize=640x480&vertical=center",
        "https://cdn.dribbble.com/userupload/47317381/file/36bff4c595239e01fb9a707e1091bb14.png?format=webp&resize=800x600&vertical=center",
        "https://cdn.dribbble.com/userupload/47264529/file/156b33b66b177c39dc6709d118d37ae6.png?format=webp&resize=800x600&vertical=center",
        "https://cdn.dribbble.com/userupload/47218260/file/ff5cfc6dab636e46d9df351aadabab86.png?resize=2048x1536&vertical=center",
    ];

    const images = [
        "gs.png",
        "sf.png",
        "asd.png",
        "sdf.png",
        "as.png"
    ];


    useEffect(() => {
        const el = scrollRef.current;

        if (!el) return;

        let currentIndex = 0;
        let isLocked = false;
        let accumulatedDelta = 0;

        const total = el.children.length;

        const handleEnter = () => {
            window.lenis?.stop();
        };

        const handleLeave = () => {
            window.lenis?.start();
        };

        const goToSlide = (
            index: number,
            smooth = true
        ) => {
            const slideHeight = el.clientHeight;

            el.scrollTo({
                top: index * slideHeight,
                behavior: smooth ? "smooth" : "auto",
            });
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            e.stopPropagation();

            if (isLocked) return;

            accumulatedDelta += e.deltaY;

            const threshold = 80;

            if (Math.abs(accumulatedDelta) < threshold)
                return;

            isLocked = true;

            if (accumulatedDelta > 0) {
                // scroll down
                currentIndex = Math.min(
                    currentIndex + 1,
                    total - 1
                );
            } else {
                // scroll up
                currentIndex = Math.max(
                    currentIndex - 1,
                    0
                );
            }

            goToSlide(currentIndex);

            accumulatedDelta = 0;

            setTimeout(() => {
                isLocked = false;
            }, 300);
        };

        el.addEventListener(
            "mouseenter",
            handleEnter
        );

        el.addEventListener(
            "mouseleave",
            handleLeave
        );

        el.addEventListener(
            "wheel",
            handleWheel,
            {
                passive: false,
            }
        );

        return () => {
            window.lenis?.start();

            el.removeEventListener(
                "mouseenter",
                handleEnter
            );

            el.removeEventListener(
                "mouseleave",
                handleLeave
            );

            el.removeEventListener(
                "wheel",
                handleWheel
            );
        };
    }, []);

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
                    document.body.classList.remove('overflow-y-hidden');
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
        <header className="bg-stone-200"  >

            <div className="h-180 relative flex flex-col justify-center  items-center text-center ">
                <Spotlight
                    className="-top-40 absolute left-0 md:-top-30 md:-left-40"
                    fill="white"
                />
                <Spotlight
                    className="-top-40 absolute left-0 md:-top-40 md:left-90"
                    fill="white"
                />

                <div className="container mx-auto px-10 md:mt-74 mt-55 md:mb-5 flex flex-col gap-6">
                    <span className={` xl:text-lg`}>Hi! Iam Agung Nurdiansyah</span>
                    <p className={`${playFair.className} xl:text-5xl text-4xl`}>
                        Crafting <button
                            className="
        hidden md:inline-flex
        bg-black
        cursor-none
        rounded-full
        w-20
        h-10
        translate-y-1
        p-[0.15rem]
        shadow-[4px_4px_10px_rgba(0,0,0,0.6)]
        mx-2
    "
                        >
                            <div
                                data-lenis-prevent
                                ref={scrollRef}
                                className="
            w-full
            h-full
            overflow-hidden
            rounded-full
            no-scrollbar
        "
                                style={{ scrollSnapType: "y mandatory" }}
                            >
                                {images2.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full overflow-hidden shrink-0"
                                    >
                                        <img
                                            data-cursor-text="Scroll here"
                                            style={{
                                                scrollSnapAlign: "start",
                                            }}
                                            src={image}
                                            className="
                        h-full
                        w-full
                        hover-target
                        object-cover
                    "
                                            alt={`image-${index}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </button>

                        digital experiences <button
                            className="
        inline-flex md:hidden
        bg-black
        cursor-none
        rounded-full
        w-20
        h-10
        translate-y-1
        p-[0.15rem]
        shadow-[4px_4px_10px_rgba(0,0,0,0.6)]
        mx-2
    "
                        >
                            <div
                                className="
            w-full
            h-full
            overflow-hidden
            rounded-full
            no-scrollbar
        "
                                style={{ scrollSnapType: "y mandatory" }}
                            >
                                {images2.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full overflow-hidden shrink-0"
                                    >
                                        <img
                                            data-cursor-text="Scroll here"
                                            style={{
                                                scrollSnapAlign: "start",
                                            }}
                                            src={image}
                                            className="
                        h-full
                        w-full
                        hover-target
                        object-cover
                    "
                                            alt={`image-${index}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </button>

                        with minimal aesthetics and purposeful performance,
                        based in Indonesia
                        <button className="bg-black cursor-none rounded-full w-20 h-10 translate-y-1 overflow-hidden p-[0.15rem] shadow-[4px_4px_10px_rgba(0,0,0,0.6)] mx-2">
                            <div className="w-full h-full overflow-hidden shrink-0 rounded-full">
                                <img
                                    src="https://samplingamerica.com/wp-content/uploads/2023/08/Indonesia-1.png"
                                    className="h-full w-full object-cover"
                                    alt=""
                                />
                            </div>
                        </button>
                    </p>
                    <div className="flex justify-center">
                        <button className="mt-5 border hover-target hover-blob cursor-none   border-stone-300  rounded-4xl pe-2 ps-3 py-2 flex justify-between gap-2 items-center"><span>See my CV</span>
                            <ParallaxHover className="rounded-full  p-1 bg-black text-white">
                                <GridCircle />
                            </ParallaxHover>
                        </button>
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
                                    <Image alt="Rasya sitting" width={800} height={800} decoding="async" data-nimg="1" className="w-full scale-110 mt-5 h-auto object-cover" src={`/images/head/${src}`} style={{ color: " transparent" }} />
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
                        <ParallaxHover>
                            <a className="flex animblob w-0 flex-none justify-center group gap-1">
                                <ButtonAnimate value="About Me" className="py-3! px-6! hover-target hover-blob text-black! bg-amber-500!" />
                                <button className="rounded-full -rotate-45 group-hover:text-black! transition duration-500 group-hover:-rotate-180  group-hover:bg-white!  bg-amber-500 px-3 text-black"><ArrowRightStroke /></button>
                            </a>
                        </ParallaxHover>

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
        </header >
    );
}