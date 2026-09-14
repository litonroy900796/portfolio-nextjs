"use client";

import { AiOutlineDownload } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi2";
import { Link as ScrollLink } from "react-scroll";
import { HERO } from "../../../data";
import { Button, TypeWriter, HeroBottom } from "../../elements";

function Hero() {
    const { name, title, subtitle, typeWriter, button, secondaryButton, bgImage } = HERO

    return (
        <section className="relative h-screen min-h-[640px] flex overflow-hidden" id="Hero">
            {/* ==== Hero Background Image ==== */}
            <img
                src={bgImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="eager"
                fetchPriority="high"
            />
            {/* ==== Gradient Overlays for contrast ==== */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/85 to-black/50" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/40" />

            {/* ==== Decorative glow blobs ==== */}
            <div className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary-color/30 blur-[120px] z-10 animate-hero-blob" />
            <div className="pointer-events-none absolute -bottom-16 right-[-60px] h-[320px] w-[320px] rounded-full bg-primary-color/20 blur-[100px] z-10 animate-hero-blob [animation-delay:3s]" />

            {/* ==== Hero Content ==== */}
            <div className="container flex items-center relative z-20">
                <div className="flex items-center justify-center flex-col w-[100%] sm:items-start sm:justify-start">
                    {/* ==== Badge ==== */}
                    <span className="animate-hero-fade-up inline-flex items-center gap-2 rounded-full border border-primary-color/40 bg-primary-color/10 px-4 py-1.5 backdrop-blur-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-color opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-color" />
                        </span>
                        <h4 className="text-gray-100 text-sm sm:text-[15px] leading-none">
                            {subtitle}
                            <span className="underline ml-2 decoration-primary-color tracking-wide text-white font-medium">
                                {name}
                            </span>
                        </h4>
                    </span>
                    {/* ==== Type Writer ==== */}
                    <h1 className="animate-hero-fade-up [animation-delay:150ms] title mt-0 text-center font-bold w-full sm:w-[560px] sm:text-left mb-8 leading-[1.15]">
                        {title}
                        <TypeWriter
                            title={typeWriter}
                            className="ml-2"
                        />
                    </h1>
                    {/* ==== CTA Buttons ==== */}
                    <div className="animate-hero-fade-up [animation-delay:300ms] flex flex-col sm:flex-row items-center gap-4">
                        <Button href={button.url} download>
                            {button.text}
                            <AiOutlineDownload className="ml-1 text-lg" />
                        </Button>
                        {secondaryButton && (
                            <ScrollLink
                                to={secondaryButton.to}
                                smooth
                                duration={500}
                                className="group px-6 py-2 text-white font-medium rounded-[5px] cursor-pointer bg-primary-color border border-primary-color hover:bg-transparent transition-all duration-300 ease-in-out flex items-center gap-2"
                            >
                                {secondaryButton.text}
                                <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                            </ScrollLink>
                        )}
                    </div>
                </div>
            </div>

            {/* ==== Scroll indicator ==== */}
            <div className="animate-hero-fade-in [animation-delay:900ms] hidden sm:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-28 z-20 text-gray-300">
                <span className="text-[11px] tracking-[0.25em] uppercase">Scroll</span>
                <span className="h-9 w-5 rounded-full border border-gray-400 flex justify-center pt-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-color animate-hero-scroll-dot" />
                </span>
            </div>

            {/* ==== Hero Bottom Counter and Social Links ==== */}
            <HeroBottom />
        </section>
    )
}

export default Hero
