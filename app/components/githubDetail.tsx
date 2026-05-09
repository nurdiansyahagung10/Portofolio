"use client";

import { Calendar, Group } from "@boxicons/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

type Day = {
  contributionCount: number;
  date: string;
};

type ContributionDay = {
  followers: number;
  repos: number;
  contributionDays: number;
  year: string;
  joinedYear: string;
};

export default function GithubDetail() {

  const [github, setGithub] = useState<ContributionDay>();
  const [weeks, setWeeks] = useState<Day[][]>([]);
  const [total, setTotal] = useState(0);

  const parentRef = useRef<HTMLDivElement>(null);

  const getColor = (count: number) => {
    if (count === 0) return "bg-amber-50";
    if (count < 3) return "bg-amber-200";
    if (count < 6) return "bg-amber-400";
    if (count < 10) return "bg-amber-600";
    return "bg-amber-800";
  };

  const getMonth = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("en-US", { month: "short" });
  };


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray<HTMLElement>('.animcount');

    elements.map((el) => {

      const obj = { val: 0 };

      gsap.to(obj, {
        val: () => {
          switch (parseInt(el.title)) {
            case 0:
              return github?.repos ?? 0;
            case 1:
              return total ?? 0;
            case 2:
              return github?.followers ?? 0;
            case 3:
              return github?.joinedYear ?? 0;
          }
        },
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top 80%",
          once: true
        },
        onUpdate: () => {
          if (el) {
            el.textContent = Math.floor(obj.val) + '';
          }
        },
      });


    });
  }, [github, total]);


  useEffect(() => {
    fetch("/api/github")
      .then(res => res.json())
      .then(data => {
        setWeeks(data.contributions.weeks.map((w: ContributionDay) => w.contributionDays));
        setTotal(data.contributions.totalContributions);
        setGithub(data);
      });
  }, []);



  return (

    <div ref={parentRef} className=" mt-18 flex lg:flex-row flex-col border-y border-stone-300 overflow-hidden ">
      <div className="flex flex-col">
        <div className="flex flex-1">
          <div className="flex flex-col p-6 pb-8 border-b border-e border-stone-300 min-w-45 w-full lg:max-w-45">
            <div className="flex items-center text-stone-500 text-sm justify-between">
              <span>{'<>'}</span>
              <span className="text-xs">REPOS</span>
            </div>
            <span className="m:text-5xl text-4xl mt-4 animcount" title="0">-</span>
            <span className="text-stone-500 mt-1">Public Repos</span>
          </div>
          <div className="flex flex-col p-6 pb-8 border-b border-stone-300 min-w-45 w-full lg:max-w-45">
            <div className="flex items-center text-stone-500 text-sm justify-between">
              <span>{'>_'}</span>
              <span className="text-xs">TOTAL</span>
            </div>
            <span className="m:text-5xl text-4xl mt-4 animcount" title="1">-</span>
            <span className="text-stone-500 mt-1">Contributions</span>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col p-6 pb-8  border-e border-stone-300 min-w-45 w-full lg:max-w-45">
            <div className="flex items-center text-stone-500 text-sm justify-between">
              <span><Group className="h-4.5 w-4.5" /></span>
              <span className="text-xs">FOLLOW</span>
            </div>
            <span className="m:text-5xl text-4xl mt-4 animcount" title="2">-</span>
            <span className="text-stone-500 mt-1">Followers</span>
          </div>
          <div className="flex flex-col p-6 pb-8  border-stone-300 min-w-45 w-full lg:max-w-45">
            <div className="flex items-center text-stone-500 text-sm justify-between">
              <span><Calendar className="h-4.5 w-4.5" /></span>
              <span className="text-xs">SINCE</span>
            </div>
            <span className="m:text-5xl text-4xl mt-4 animcount" title="3">-</span>
            <span className="text-stone-500 mt-1">Year Joined</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:p-8  p-6 py-8 lg:border-s border-t lg:border-t-0 w-full border-stone-300 flex-col">
        <div className="text-stone-500 text-xs ">
          <span>CONTRIBUTION MAP</span>
        </div>
        <div className="flex items-start mt-3 pb-4 border-b border-stone-300 justify-between">
          <span className="md:text-3xl text-2xl">Last 12 Months</span>
          <span className="p-1 px-3 bg-stone-200 text-sm border border-stone-300 rounded-4xl">{total} TOTAL</span>
        </div>
        <div className="pt-6">
          <div className="grid overflow-hidden grid-flow-col auto-cols-fr  mb-2 uppercase text-[10px] text-gray-500">
            {weeks.map((week, i) => {
              const currentMonth = getMonth(week[0].date);
              const prevMonth =
                i > 0 ? getMonth(weeks[i - 1][0].date) : null;
              const show = prevMonth == null ? false : currentMonth !== prevMonth;

              return (
                <div key={i} className="text-left">
                  {show ? currentMonth : ""}
                </div>
              );
            })}
          </div>

          <div className="grid grid-flow-col  pb-8 border-b border-stone-300 auto-cols-fr gap-[2.5px]">
            {weeks.map((week, i) => (
              <div key={i} className="grid grid-rows-7 gap-[2.5px]">
                {week.map((day, j) => (
                  <div
                    key={j}
                    title={`${day.date}: ${day.contributionCount}`}
                    data-cursor-text="Scroll here"
                    className={`w-full aspect-square rounded-[3.8px] cursor-target ${getColor(day.contributionCount)}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex mt-4  justify-between items-center">
            <span className="text-xs">LESS</span>
            <div className="w-25">
              <div className="grid grid-flow-col border-stone-300 auto-cols-fr gap-2">
                <div
                  className={`w-full aspect-square rounded-[3.8px] ${getColor(0)}`}
                />
                <div
                  className={`w-full aspect-square rounded-[3.8px] ${getColor(2)}`}
                />
                <div
                  className={`w-full aspect-square rounded-[3.8px] ${getColor(5)}`}
                />
                <div
                  className={`w-full aspect-square rounded-[3.8px] ${getColor(9)}`}
                />
                <div
                  className={`w-full aspect-square rounded-[3.8px] ${getColor(12)}`}
                />
              </div>

            </div>
            <span className="text-xs">MORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}