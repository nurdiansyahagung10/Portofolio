"use client"
import TextAnimate from "../components/textAnimate";
import { ArrowRightStroke } from "@boxicons/react";
import { playFair } from "../lib/font";


export default function Project() {
    return (
        <div id="work" className="mt-10  pt-20 container mx-auto">
            <div className="grid md:flex lg:grid-cols-2 md:px-0 px-6 justify-between gap-5 items-end">
                <div className="flex flex-col">
                    <span className="text-sm">
                        Selected / projects
                    </span>
                    <div className={`xl:text-7xl lg:text-6xl md:text-5xl text-4xl md:max-w-full max-w-xl ${playFair.className}`}>
                        <TextAnimate text={"Projects built with purpose and clarity."} />
                    </div>
                </div>

                <div className="xl:w-150">
                    <p className="text-stone-500 md:text-base text-sm">
                        A collection of projects where ideas are turned into functional digital products, combining thoughtful problem solving, clean design, and scalable development to create meaningful user experiences.
                    </p>
                </div>
            </div>
            <div className=" mt-18 overflow-hidden border-y border-stone-300">

                <a className=" w-full flex md:flex-row flex-col  group ">
                    <div className="flex w-full md:flex-row flex-col">
                        <div className="flex flex-col ">
                            <span className="py-4 text-xs border-b px-4 border-stone-300">
                                PROJECTS
                            </span>
                            <div className="py-6 px-4">
                                <div className="lg:w-50 ">
                                    <img
                                        src={'https://cdn.dribbble.com/userupload/45607567/file/still-bced1a61d5b245ca788bffb7b59c1c18.png?format=webp&resize=800x600&vertical=center'}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:w-130 text-start  ">
                            <span className="py-4 text-xs lg:block hidden  border-b px-4 border-stone-300 ">DETAILS</span>
                            <div className="flex lg:py-6 md:pb-6 pb-3 px-4 flex-col gap-3">
                                <span className="xl:text-3xl text-2xl">Diabetes risk prediction app</span>
                                <span className="text-stone-500 text-sm">a healt screening app that estimates diabetes risk from patient indicators and present quick, easy to understand result to support earlier prevent decisions</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col text-start  ">
                        <span className="py-4 text-xs border-b px-4 md:block hidden border-stone-300 ">STACK</span>
                        <div className="flex md:py-6 flex-wrap text-xs px-4 items-center gap-3">
                            <div className="border border-stone-300 p-1 px-2">
                                PYTHON
                            </div>
                            <div className="border border-stone-300 p-1 px-2">
                                PANDAS
                            </div>
                            <div className="border border-stone-300 p-1 px-2">
                                SICKIT-LEARN
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col text-center md:max-w-20  ">
                        <span className="py-4 text-xs border-b px-4 border-stone-300  md:block hidden">YEAR</span>
                        <div className="flex py-6 px-4 flex-col items-center gap-3">
                            <div className="w-full flex items-center justify-between md:justify-center gap-6 md:flex-col flex-row">
                                <span className="text-xs">2025</span>
                                <div>
                                    <div className="w-10 h-10 flex items-center group-hover:bg-stone-200!  transition duration-300 group-hover:border-0  justify-center border rounded-full border-stone-300">
                                        <ArrowRightStroke className="-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-[color]  text-black duration-300 translate-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a className=" w-full border-t border-stone-300 pt-3 flex md:flex-row flex-col  group ">
                    <div className="flex w-full md:flex-row flex-col">
                        <div className="flex flex-col ">
                            <div className="py-6 px-4">
                                <div className="lg:w-50 ">
                                    <img
                                        src={'https://cdn.dribbble.com/userupload/45607567/file/still-bced1a61d5b245ca788bffb7b59c1c18.png?format=webp&resize=800x600&vertical=center'}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:w-130 text-start  ">
                            <div className="flex lg:py-6 md:pb-6 pb-3 px-4 flex-col gap-3">
                                <span className="xl:text-3xl text-2xl">Diabetes risk prediction app</span>
                                <span className="text-stone-500 text-sm">a healt screening app that estimates diabetes risk from patient indicators and present quick, easy to understand result to support earlier prevent decisions</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col text-start  ">
                        <div className="flex md:py-6 flex-wrap text-xs px-4 items-center gap-3">
                            <div className="border border-stone-300 p-1 px-2">
                                PYTHON
                            </div>
                            <div className="border border-stone-300 p-1 px-2">
                                PANDAS
                            </div>
                            <div className="border border-stone-300 p-1 px-2">
                                SICKIT-LEARN
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col text-center md:max-w-20  ">
                        <div className="flex py-6 px-4 flex-col items-center gap-3">
                            <div className="w-full flex items-center justify-between md:justify-center gap-6 md:flex-col flex-row">
                                <span className="text-xs">2025</span>
                                <div>
                                    <div className="w-10 h-10 flex items-center group-hover:bg-stone-200!  transition duration-300 group-hover:border-0  justify-center border rounded-full border-stone-300">
                                        <ArrowRightStroke className="-rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-[color]  text-black duration-300 translate-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>


            </div>
        </div >
    );
}