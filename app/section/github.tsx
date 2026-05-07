"use client"
import TextAnimate from "../components/textAnimate";
import GithubDetail from "../components/githubDetail";
import { playFair } from "../lib/font";

export default function Github() {
    return (
        <div className=" mt-30 container mx-auto">
            <div className="grid md:flex md:px-0 px-6 lg:grid-cols-2 justify-between gap-5 items-end">
                <div className="flex flex-col">
                    <span className="text-xs">
                        GitHub / activity
                    </span>
                    <div className={`xl:text-7xl lg:text-6xl md:text-5xl text-4xl md:max-w-full max-w-xl ${playFair.className}`}>
                        <TextAnimate text={"Consistent builds, one commit at a time."} />
                    </div>
                </div>

                <div className=" xl:w-150">
                    <p className="text-stone-500 md:text-base text-sm">
                        A timeline of continuous work and learning, documenting how ideas evolve into real projects through consistent iteration, problem solving, and hands-on development every day.
                    </p>
                </div>
            </div>
            <GithubDetail />
        </div>
    );
}