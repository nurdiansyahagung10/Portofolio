"use client"
import { Chip, Code, Devices, Mobile, Package, TableLayout } from "@boxicons/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextAnimate from "../components/textAnimate";
import { BrainCircuit, TrendingUp } from "lucide-react";
import { playFair } from "../lib/font";

export default function Skill() {


    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            no: "01",
            title: "Fullstack Development",
            desc: "Building scalable web applications from frontend to backend with a focus on performance, structure, and long-term maintainability.",
            icon: <Devices />
        },
        {
            no: "02",
            title: "Mobile & App Development",
            desc: "Creating mobile applications that are responsive, efficient, and designed to deliver seamless user experiences across devices.",
            icon: <Mobile />
        },
        {
            no: "03",
            title: "UI & Interaction Design",
            desc: "Designing clean and intuitive interfaces that balance aesthetics and usability to create meaningful user experiences.",
            icon: <TableLayout />
        },
        {
            no: "04",
            title: "System Architecture",
            desc: "Structuring applications and systems that are scalable, maintainable, and built to handle real-world complexity.",
            icon: <Chip />
        },
        {
            no: "05",
            title: "Problem Solving",
            desc: "Breaking down complex problems and turning ideas into practical digital solutions that actually work and deliver value.",
            icon: <BrainCircuit />
        },
        {
            no: "06",
            title: "Product Development",
            desc: "Transforming ideas into complete digital products from concept and design to development and deployment.",
            icon: <Code />
        },
        {
            no: "07",
            title: "Performance Optimization",
            desc: "Improving application speed, efficiency, and overall user experience through optimized architecture and rendering.",
            icon: <TrendingUp />
        },
        {
            no: "08",
            title: "Deployment & Delivery",
            desc: "Delivering reliable applications through proper deployment, versioning, and continuous improvement of digital products.",
            icon: <Package />
        },
    ];


    useEffect(() => {

        if (!sectionRef.current || !trackRef.current) return;


        const ctx = gsap.context(() => {
            const track = trackRef.current;

            const getScrollAmount = () => {
                return (track?.scrollWidth ?? 0) - window.innerWidth;
            };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: track,
                    start: "bottom 100%",
                    end: () => `+=${getScrollAmount()}`,
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
            }, 0);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className=" pt-17  2xl:container mx-auto  overflow-hidden">
            <div ref={textRef} className="container mx-auto">
                <div className={`xl:text-5xl md:px-0 px-6 lg:text-4xl text-3xl xl:w-250 text-wrap lg:w-210 md:w-180 ${playFair.className}`}>
                    <TextAnimate text="Transforming ideas into exceptional digital experiences through expertise and innovation" />
                </div>

            </div>
            <div ref={sectionRef} className=" min-h-200">
                <div ref={trackRef} className="flex w-max  border border-stone-300 mt-20 items-stretch">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className={`flex flex-col hover:bg-stone-100 transition duration-300 p-10 md:w-120 w-80 border-stone-300 ${i !== services.length - 1 ? "border-e" : ""
                                }`}
                        >
                            <div className="flex justify-between items-start">
                                <span className="rounded-full w-12 h-12 bg-stone-100 flex items-center justify-center">
                                    {item.icon}
                                </span>
                                <span className="text-xs text-stone-500">{item.no}</span>
                            </div>

                            <div className="mt-16 pb-6 mb-6 border-b border-stone-300">
                                <span className="xl:text-3xl text-2xl">{item.title}</span>
                            </div>

                            <span className="text-stone-500">{item.desc}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}