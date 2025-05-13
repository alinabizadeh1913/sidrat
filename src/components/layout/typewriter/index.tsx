// components/Text.tsx

"use client";
import { useEffect, useRef, useState } from "react";
import Typography from "../typography";

interface TextProps {
  speed?: number;
  delay?: number;
  className?: string;
  children: string;
  weight?: "regular" | "bold";
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  lang?: "ar" | "fa" | "en";
  quran?: boolean;

  // ✅ اینا رو اضافه کردم
  isFinished?: boolean;
  setIsFinished?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Typewriter = ({
  speed = 100,
  delay = 0,
  className = "",
  children,
  weight,
  tagName,
  lang,
  quran,

  // ✅ اینا رو اضافه کردم
  isFinished,
  setIsFinished,
}: TextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // پاکسازی تایمرها برای جلوگیری از تداخل
  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    clearTimers();
    setDisplayedText(""); // متن قبلی پاک شه

    // ✅ وقتی متن عوض شد، end باید false بشه
    if (setIsFinished) {
      setIsFinished(false);
    }

    timeoutRef.current = setTimeout(() => {
      let index = 0;
      intervalRef.current = setInterval(() => {
        setDisplayedText((prev) => {
          const nextText = children.slice(0, index + 1);
          index++;
          if (index >= children.length) {
            clearTimers();

            // ✅ وقتی تایپ تموم شد، end باید true بشه بعد 200ms
            if (setIsFinished) {
              setTimeout(() => {
                setIsFinished(true);
              }, 200);
            }
          }
          return nextText;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimers();
    };
  }, [children, speed, delay]);

  return (
    <div className={`relative w-full transition-all duration-500 ease-in-out select-none`}>
      <Typography
        tagName={tagName}
        className={`whitespace-pre-wrap break-words select-none ${className} ${
          lang === "ar" || lang === "fa"
            ? `yekan-${weight}`
            : `biotif-${weight}`
        } ${quran ? "uthman" : ""}`}
      >
        {displayedText}
        <span
          className={`
            inline-block 
            w-[2px] 
            h-[1.4em] 
            bg-[#fff] 
            ms-1 
            animate-blink 
            align-middle
          `}
        />
      </Typography>
    </div>
  );
};

export default Typewriter;
