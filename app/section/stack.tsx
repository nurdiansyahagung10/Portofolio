"use client"
import TextAnimate from "../components/textAnimate";
import { Chip, Package, Server,  TableLayout } from "@boxicons/react";
import { SiCloudflare, SiCodeigniter, SiDjango, SiDocker, SiExpress, SiFastapi, SiFlutter, SiGit, SiGooglecloud, SiGrafana, SiGsap, SiHtml5, SiHuggingface, SiIcloud, SiJavascript, SiKeras, SiLaravel, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiNumpy, SiOpencv, SiPandas, SiPhp, SiPostgresql, SiPostman, SiPython, SiPytorch, SiReact, SiScikitlearn, SiServerless, SiStreamlit, SiSupabase, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import { playFair } from "../lib/font";


export default function Stack() {
    return (
        <div className=" mt-30 container mx-auto">
            <div className="grid md:flex lg:grid-cols-2 md:px-0 px-6 justify-between gap-5 items-end">
                <div className="flex flex-col">
                    <span className="text-sm">
                        Stack / capabilities
                    </span>

                    <div className={`xl:text-7xl lg:text-6xl md:text-5xl text-4xl md:max-w-full max-w-xl ${playFair.className}`}>
                        <TextAnimate text={"The foundation behind every product I build."} />
                    </div>

                </div>
                <div className="lg:w-150">
                    <p className="text-stone-500 md:text-base text-sm">
                        A combination of development, design, and system thinking used to transform ideas into scalable digital products, focusing on performance, usability, and real-world problem solving.
                    </p>
                </div>
            </div>
            <div className=" mt-18 flex flex-col border-y border-stone-300 overflow-hidden ">
                <div className="grid md:grid-cols-2  grid-cols-1 ">
                    <div className="flex md:order-1 order-2 border-t md:border-e   px-6 flex-col md:pe-6  border-stone-300">
                        <div className="flex py-6 border-b   border-stone-300 items-start justify-between">
                            <div className="flex flex-col gap-3">
                                <span className="text-xs text-stone-500">Module 02</span>
                                <span className="xl:text-3xl text-2xl">AI & ML</span>
                            </div>
                            <div>
                                <div className="border rounded-lg bg-stone-200 flex items-center justify-center border-stone-300 w-12 h-12">
                                    <Chip />
                                </div>
                            </div>
                        </div>

                        <p className="py-6 text-stone-500">
                            Designing visual assets that communicate ideas clearly, combining layout, typography, and composition to create visuals that are both engaging and purposeful.
                        </p>

                        <div className="pb-6 pt-3 flex gap-3 flex-wrap">
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPython />  <span>Python</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiTensorflow />  <span>TensorFlow</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPytorch />  <span>Pytorch</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiKeras />  <span>Keras</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiScikitlearn />  <span>SickitLearn</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiOpencv />  <span>opencv</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiStreamlit />  <span>streamlit</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiNumpy />  <span>numpy</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPandas />  <span>pandas</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiHuggingface />  <span>HuggingFace</span></span>
                        </div>
                    </div>
                    <div className="flex flex-col  md:order-2 order-1 md:ps-6 px-6">
                        <div className="flex py-6 border-b border-stone-300 items-start justify-between">
                            <div className="flex flex-col gap-3">
                                <span className="text-xs text-stone-500">Module 01</span>
                                <span className="xl:text-3xl text-2xl">Frontend Development</span>
                            </div>
                            <div>
                                <div className="border rounded-lg bg-stone-200 flex items-center justify-center border-stone-300 w-12 h-12">
                                    <TableLayout />
                                </div>
                            </div>
                        </div>

                        <p className="py-6 text-stone-500">
                            Building responsive and interactive user interfaces with a focus on clarity, performance, and seamless user experience across modern web applications.
                        </p>

                        <div className="pb-6 pt-3 flex gap-3 flex-wrap">
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiNextdotjs /> <span>Next.js</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiReact /><span>React</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiTypescript /> <span>TypeScript</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiJavascript />  <span>JS</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPython />  <span>Python</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiExpress />  <span>ExpressJs</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiHtml5 />  <span>HTML / CSS</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiTailwindcss />  <span>Tailwind</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiFlutter />  <span>Flutter</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiGsap />  <span>Gsap</span></span>
                        </div>
                    </div>


                </div>
                <div className="grid border-t border-stone-300 md:grid-cols-2 grid-cols-1">
                    <div className="flex flex-col md:pe-6 px-6 border-e border-stone-300">
                        <div className="flex py-6 border-b border-stone-300 items-start justify-between">
                            <div className="flex flex-col gap-3">
                                <span className="text-xs text-stone-500">Module 03</span>
                                <span className="xl:text-3xl text-2xl">System & Backend</span>
                            </div>
                            <div>
                                <div className="border rounded-lg bg-stone-200 flex items-center justify-center border-stone-300 w-12 h-12">
                                    <Server />
                                </div>
                            </div>
                        </div>
                        <p className="py-6 text-stone-500">
                            Structuring APIs, databases, and services that are scalable, efficient, and built to handle real-world complexity.
                        </p>
                        <div className="pb-6 pt-3 flex gap-3 flex-wrap">
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiLaravel />  <span>Laravel</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiDjango />  <span>Django</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPhp />  <span>PHP</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPython />  <span>Python</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiExpress />  <span>ExpressJs</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiCodeigniter />  <span>CodeIgniter</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiNodedotjs /> <span>Node.js</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiSupabase />  <span>supabase</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiFastapi />  <span>fastapi</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPostman />  <span>Postman</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiMongodb />  <span>Mongodb</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiMysql />  <span>Mysql</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiPostgresql />  <span>postgresql</span></span>
                        </div>
                    </div>

                    <div className="flex flex-col md:border-0 border-t border-stone-300 md:ps-6 px-6">
                        <div className="flex py-6 border-b border-stone-300 items-start justify-between">
                            <div className="flex flex-col gap-3">
                                <span className="text-xs text-stone-500">Module 04</span>
                                <span className="xl:text-3xl text-2xl">Product & Delivery</span>
                            </div>
                            <div>
                                <div className="border rounded-lg bg-stone-200 flex items-center justify-center border-stone-300 w-12 h-12">
                                    <Package />
                                </div>
                            </div>
                        </div>

                        <p className="py-6 text-stone-500">
                            Transforming ideas into complete digital products, from concept and design to development, optimization, and deployment.
                        </p>

                        <div className="pb-6 pt-3 flex gap-3 flex-wrap">
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiDocker />  <span>docker</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiGit />  <span>git</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiLinux />  <span>linux</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiCloudflare />  <span>Cloudflare</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiGooglecloud />  <span>google cloude</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiGrafana />  <span>Grafana</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiServerless />  <span>vps</span></span>
                            <span className="border-b border-stone-300 text-xs uppercase flex gap-1 items-center pb-1"><SiIcloud />  <span>Amazon web service</span></span>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}