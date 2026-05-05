import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
    text: string
    start?: string
}

export default function TextAnimate({ text, start }: Props) {

    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        function splitText(element: HTMLElement) {
            const words = element.innerText.split(" ");
            element.innerHTML = words
                .map(word => `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`)
                .join(" ");
        }

        splitText(textRef.current);

        const words = textRef.current.querySelectorAll(".word");

        gsap.fromTo(
            words,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: `top ${start ? start : '100%'}`,
                    toggleActions: "play none none reset",

                }
            }
        );


    }, [start]);

    return (
        <span ref={textRef}>{text}</span>
    );
}