"use client"
import { useEffect, useRef } from "react";
import TextAnimate from "../components/textAnimate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { playFair } from "../lib/font";


export default function Timeline() {


    const data = [
        {
            year: "2021 - 2024",
            title: "SMK Wiraswasta Cimahi",
            subtitle: "Software Engineering Student",
            desc: "Built a strong foundation in software engineering through hands-on projects and collaborative development, covering backend, frontend, and mobile technologies."
        },
        {
            year: "2021",
            title: "National Student Competitions",
            subtitle: "Graphic Design Competition (City Level)",
            desc: "Achieved 3rd place by designing a creative product packaging concept for a donut brand, focusing on visual appeal and branding."
        },
        {
            year: "2022",
            title: "National Student Competitions",
            subtitle: "Web Technologies Competition (City Level)",
            desc: "Developed an informative website focused on vaccination and COVID-19 awareness, emphasizing usability and clear information delivery."
        },
        {
            year: "2023",
            title: "PT ForIT Asta Solusindo",
            subtitle: "Web Developer Intern",
            desc: "Contributed to building an online marketplace using Django (Python), while improving skills in teamwork, communication, and data-driven development."
        },
        {
            year: "2023 - 2024",
            title: "Freelance Projects",
            subtitle: "Web Development & Design",
            desc: "Delivered client projects in website development, copywriting, and graphic design, focusing on practical solutions and user-focused outcomes."
        },
        {
            year: "2023 - 2024",
            title: "School & Class Social Media",
            subtitle: "Content & Design Manager",
            desc: "Managed and designed content for school and class social media, including post creation, visual design, and scheduling for various events."
        },
        {
            year: "2024 - 2026",
            title: "PT Indiga Nusa Digitama",
            subtitle: "Fullstack Developer & Client Trainer",
            desc: "Working as IT Support and Client Trainer, providing technical solutions and conducting training sessions to ensure clients effectively use company software systems."
        },
    ];

    const sectionRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const baseLineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            const dots = gsap.utils.toArray<HTMLElement>(".timeline-dot");
            const elements = gsap.utils.toArray<HTMLElement>(".timelineUp");

            elements.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        y: 50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 100%",
                            scrub: true
                        },
                    }
                );
            });

            gsap.fromTo(lineRef.current,
                { height: 0 },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom 70%",
                        scrub: true,
                    }
                }
            );

            dots.forEach((dot: HTMLElement) => {
                gsap.to(dot, {
                    backgroundColor: "#f59e0b",
                    boxShadow: "0 0 12px #f59e0b",
                    borderColor: "#f59e0b",
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dot,
                        start: "bottom 80%",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            gsap.set(backdropRef.current, { opacity: 0 });

            gsap.fromTo(backdropRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                        end: "bottom top",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );

            gsap.fromTo(
                textRef.current,
                { color: "#000000" },
                {
                    color: "#ffffff",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                        end: "top 30%",
                        scrub: true,
                    }
                }
            );


        }, sectionRef)

        return () => ctx.revert();
    }, []);



    return (
        <div>

            <div ref={sectionRef} id="exp" className=" pt-30 container mx-auto px-4 relative z-20">

                <div className="flex justify-center">
                    <div ref={textRef} className={`xl:text-5xl lg:text-4xl text-3xl xl:max-w-3xl max-w-2xl text-center ${playFair.className}`}>
                        <TextAnimate text={"Explore my journey and the technologies that define my craft."} />
                    </div>
                </div>

                <div className="relative mt-18">
                    <div ref={baseLineRef} className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-stone-900  -translate-x-1/2" />
                    <div
                        ref={lineRef}
                        className="absolute left-4 md:left-1/2 top-0 h-full w-1  bg-amber-500 -translate-x-1/2 origin-top shadow-[0_0_12px_#fbbf24]"
                    />
                    <div className="space-y-50 pt-50">
                        {data.map((item, i) => {
                            const isLeft = i % 2 === 0;

                            return (
                                <div
                                    key={i}
                                    className={`relative flex items-start md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className="timeline-dot absolute left-4 md:left-1/2 w-3 h-3 bg-stone-900 border border-stone-800 rounded-full -translate-x-1/2 z-10" />

                                    <div className="ml-10 md:ml-0 md:w-1/2 px-4">
                                        <div className={`p-5 flex flex-col text-white gap-3 text-start ${isLeft ? "md:text-end" : "md:text-start"}`}>
                                            <p className=" timelineUp text-stone-600">{item.year} Present</p>
                                            <span className=" timelineUp xl:text-5xl text-4xl">{item.title}</span>
                                            <span className=" timelineUp xl:text-2xl text-xl text-stone-500">{item.subtitle}</span>
                                            <p className=" timelineUp text-stone-500">{item.desc}</p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                ref={backdropRef}
                className="fixed inset-0 bg-stone-950 z-10 pointer-events-none"
            />
        </div>
    );
}