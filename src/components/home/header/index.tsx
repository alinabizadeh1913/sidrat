"use client";

import Section from "@/components/layout/section";
import HomeNavbar from "./navbar";
import { Down } from "../../../../public/svg";
import { useEffect, useState } from "react";
import MainMenu from "./navbar/mainMenu";
import StoryOfSoil from "../mainSection/story_of_soil";
import FourteenInfallibles from "../mainSection/fourteen_infallibles";
import RiseOfDivineReign from "../mainSection/rise_of_divine_reign";
import SuspendedHouse from "../mainSection/suspended_house";
import { GradientText, MainText } from "@/components/layout/text";
import DayOfJudgment from "../mainSection/day_of_judgment";
import EternalFall from "../mainSection/eternal_fall";
import headerData from "@/database/header.json";
import EndlessSerenity from "../mainSection/endless_serenity";
import useStore from "@/store";
import Grid from "@/components/layout/grid";
import Seasons from "../mainSection/seasons";

const { header } = headerData;

const Header = () => {
  const [headerShow, setHeaderShow] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollCount, setScrollCount] = useState<number>(0);
  const { language } = useStore();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let touchStartY: number | null = null;

    const handleWheel = (event: WheelEvent) => {
      if (isTransitioning) return;

      if (event.deltaY > 50 && scrollCount < 7) {
        triggerTransition(scrollCount + 1);
      } else if (event.deltaY < -50 && scrollCount > 0) {
        triggerTransition(scrollCount - 1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTransitioning) return;

      if (event.key === "ArrowDown" && scrollCount < 7) {
        triggerTransition(scrollCount + 1);
      } else if (event.key === "ArrowUp" && scrollCount > 0) {
        triggerTransition(scrollCount - 1);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isTransitioning || touchStartY === null) return;

      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (deltaY > 50 && scrollCount < 7) {
        triggerTransition(scrollCount + 1);
        touchStartY = null;
      } else if (deltaY < -50 && scrollCount > 0) {
        triggerTransition(scrollCount - 1);
        touchStartY = null;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollCount, isTransitioning]);

  const triggerTransition = (newCount: number) => {
    setIsTransitioning(true);
    setScrollCount(newCount);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    setHeaderShow(true);
  }, []);

  return (
    <Section
      identifier="header"
      className="flex flex-col h-screen md:px-[40px] lg:px-[64px] overflow-hidden relative z-20"
    >
      <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      <Grid zIndex={25} />
      <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Seasons scrollCount={scrollCount} setScrollCount={setScrollCount} />

      <div className="w-full h-full flex py-[36px]">
        <div
          className={`max-w-[1000px] h-[470px] w-full m-auto rounded-[25px] ease-out relative z-[30] overflow-hidden group p-[2px]`}
        >
          <div
            className={`glow-border duration-500 delay-700 ease-out h-full`}
          ></div>
          <section
            className={`w-full h-full px-[48px] md:px-[56px] lg:px-[64px] bg-linear relative z-10 rounded-[25px] flex items-center`}
          >
            <section className="w-full">
              <section className="flex justify-center">
                <GradientText
                  weight="bold"
                  lang={language}
                  className={`${
                    language == "en" ? "text-[36px]" : "text-[32px]"
                  }`}
                >
                  {language == "ar"
                    ? header.title.translations.ar
                    : language == "fa"
                    ? header.title.translations.fa
                    : header.title.translations.en}
                </GradientText>
              </section>
              <div>
                <MainText
                  weight="regular"
                  lang={language}
                  className={`text-tertiary  ${
                    language == "en"
                      ? "my-4 md:my-6 lg:my-7 text-[19px] leading-[32px]"
                      : "my-5 md:my-7 lg:my-8 text-[18px] leading-[34px]"
                  }`}
                >
                  {language == "ar"
                    ? header.text.translations.ar
                    : language == "fa"
                    ? header.text.translations.fa
                    : header.text.translations.en}
                </MainText>
              </div>
              <div className="flex justify-center items-center">
                <Down />
              </div>
            </section>
          </section>
        </div>
      </div>
    </Section>
  );
};

export default Header;
