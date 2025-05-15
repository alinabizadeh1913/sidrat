"use client";

import { useEffect } from "react";
import Section from "../section";
import { useHeaderStore, useLoadingStore } from "@/store";

const Loading = () => {
  const {
    progress,
    randomDuration,
    isLoadingShow,
    setProgress,
    setRandomDuration,
    setIsLoadingShow,
  } = useLoadingStore();

  const { setIsHeaderShow } = useHeaderStore();

  const STROKE_WIDTH = 4;
  const CIRCLE_RADIUS = 70 - STROKE_WIDTH / 2;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  const STEP_TIME = 50;

  useEffect(() => {
    if (!isLoadingShow) return;

    const randomMs = Math.floor(Math.random() * (4500 - 2000 + 1)) + 2000;
    setRandomDuration(randomMs);

    const totalSteps = Math.ceil(randomMs / STEP_TIME);
    const increment = 100 / totalSteps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoadingShow(false), 500);
      }
      setProgress(Math.floor(currentProgress));
    }, STEP_TIME);

    return () => clearInterval(interval);
  }, [isLoadingShow, setProgress, setRandomDuration, setIsLoadingShow]);

  useEffect(() => {
    if (!isLoadingShow) {
      setIsHeaderShow(true);
      setTimeout(() => {
        setRandomDuration(500);
      }, 500);
    }
  }, [isLoadingShow, setRandomDuration]);

  return (
    <Section
      identifier="loading"
      className={`${
        isLoadingShow
          ? "visible opacity-100"
          : "invisible opacity-0 delay-[650ms]"
      } w-full h-screen fixed z-[1000] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#151616] duration-300`}
    >
      <div className="relative w-[180px] h-[180px] text-center">
        <svg
          viewBox="0 0 140 140"
          className="w-full h-full rotate-[-90deg] text-secondary"
        >
          <circle
            cx="70"
            cy="70"
            r={CIRCLE_RADIUS}
            stroke="#232525"
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />
          <circle
            cx="70"
            cy="70"
            r={CIRCLE_RADIUS}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={((100 - progress) / 100) * CIRCLE_CIRCUMFERENCE}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.1s ease-in-out",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
          <div className="text-[32px] biotif-regular text-secondary">
            {progress}
            <span className="text-[32px] biotif-regular me-1 text-secondary">
              %
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Loading;
