"use client"
import { useEffect, useState } from "react";
import gsap from "gsap";
import BackdropBlur from "./backdropBlur";
import ButtonAnimate from "./buttonAnimate";
import ParallaxHover from "./paralaxHover";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 10200) {
                setIsDarkBg(false);
            } else if (window.scrollY > 6300) {
                setIsDarkBg(true);
            } else if (window.scrollY > 1660) {
                setIsDarkBg(false);
            } else if (window.scrollY > 720) {
                setIsDarkBg(true);
            } else {
                setIsDarkBg(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {

        const menuref = gsap.utils.toArray<HTMLElement>('.menuref');

        menuref.map((el) => {

            const items = el.children;


            gsap.killTweensOf(items);
            if (isOpen) {

                gsap.fromTo(
                    items, {
                    y: 20,
                    opacity: 0,
                    filter: "blur(2px)"

                },
                    {
                        y: 0,
                        delay: 0.2,
                        opacity: 1,
                        duration: 0.4,
                        stagger: 0.2,
                        filter: "blur(0px)"

                    }
                );
            }
            if (!isOpen) {
                if (!el) return;
                gsap.to(items, {
                    y: 10,
                    opacity: 0,
                    duration: 0.2,
                    stagger: 0.05,
                });
            }

        })
    }, [isOpen]);

    return (
        <nav className="p-4 w-full z-30 fixed top-0 right-0">
            <div className="flex justify-between w-full items-center">

                <div className="hidden md:flex mt-3 justify-center w-full  items-center">
                    <div
                        className={`
    flex items-center justify-between gap-4 p-1.5 ps-6 rounded-4xl transition-all duration-300
    ${isDarkBg
                                ? 'bg-white/5 text-white backdrop-blur-lg'
                                : 'bg-black/5 text-black backdrop-blur-lg'}
  `}
                    >                        <div className="flex items-center gap-9">
                            <a className="" onClick={() => window.lenis.scrollTo("#about")}>
                                About</a>
                            <a className="" onClick={() => window.lenis.scrollTo("#work")}>
                                Work</a>
                            <a className="" onClick={() => window.lenis.scrollTo("#exp")}>
                                Experience</a>
                            <ParallaxHover>
                                <ButtonAnimate className="bg-black!" value="Contact" />
                            </ParallaxHover>
                        </div>
                    </div>

                </div>

                <div className="w-full mt-3 md:hidden flex justify-end relative">
                    <div
                        onClick={() => { setIsOpen(!isOpen); }}
                        className={`
                            absolute top-0 right-0
                            bg-black text-white
                            rounded-3xl
                            flex flex-col
                            
                            overflow-hidden
                            transition-all duration-500 ease-in-out
                            z-20
                            ${isOpen ? "w-[85vw] h-[80vh] rounded-4xl" : "w-14 h-14"}
                        `}
                    >
                        <div>
                            <button className="w-14 h-14   flex justify-center items-center float-end">
                                <div className="flex flex-col gap-1.25">
                                    <span className={`w-6 h-0.5 rounded-2xl bg-white transition duration-500 ${isOpen ? "rotate-45 translate-y-1.75" : ""}`}></span>
                                    <span className={`w-6 h-0.5 rounded-2xl bg-white transition duration-500 scale-100 ${isOpen ? "scale-0!" : ""}`}></span>
                                    <span className={`w-6 h-0.5 rounded-2xl bg-white transition duration-500 ${isOpen ? "-rotate-45 -translate-y-1.75" : ""}`}></span>
                                </div>

                            </button>
                        </div>

                        <div className="menuref  p-6 pt-6! flex h-full justify-between flex-col gap-6 overflow-auto ">
                            <a onClick={() => window.lenis.scrollTo("#about")} className=" opacity-0 flex justify-between"><span className="text-3xl">About</span> <span className="text-xl">+</span></a>
                            <a onClick={() => window.lenis.scrollTo("#work")} className=" opacity-0 flex justify-between"><span className="text-3xl">Work</span> <span className="text-xl">+</span></a>
                            <a onClick={() => window.lenis.scrollTo("#exp")} className=" opacity-0 flex justify-between"><span className="text-3xl">Experience</span> <span className="text-xl">+</span></a>
                            <div className="flex-1"></div>
                            <div className="flex opacity-0  justify-center items-center">
                                <span className="text-xl">👋 Nice to see you!</span>
                            </div>
                            <p className="text-center opacity-0 text-stone-500 text-sm">im Agung nurdiansyah, software engineer based in cimahi indonesia</p>
                            <span className="text-center opacity-0 text-sm text-stone-300">Made by Agung © 2026 </span>
                        </div>
                    </div>

                </div>
            </div>

            <BackdropBlur isOpen={isOpen} />
        </nav>
    );
}