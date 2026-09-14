"use client";

import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

interface TypeWriterProps {
  title: string | string[];
  className?: string;
}

function TypeWriter ({ title, className }: TypeWriterProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Typewriter instance
    new Typewriter(textRef.current, {
      loop: true,
      delay: 75,
      strings: title,
      autoStart: true,
    });
  }, [textRef, title]);

  return <span className={`text-primary-color font-[700] ${className}`} ref={textRef}></span>;
};

export default TypeWriter;
