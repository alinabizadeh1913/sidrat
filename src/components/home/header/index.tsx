"use client";

import Section from "@/components/layout/section";
import HomeNavbar from "./navbar";
import Typography from "@/components/layout/typography";
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
import { header } from "@/database/header.json";
import EndlessSerenity from "../mainSection/endless_serenity";
import useStore from "@/store";

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
      className="flex flex-col h-screen md:px-[40px] lg:px-[64px] overflow-hidden relative"
    >
      <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <StoryOfSoil scrollCount={scrollCount} setScrollCount={setScrollCount} />
      <FourteenInfallibles scrollCount={scrollCount} />
      <RiseOfDivineReign scrollCount={scrollCount} />
      <SuspendedHouse scrollCount={scrollCount} />
      <DayOfJudgment scrollCount={scrollCount} />
      <EternalFall scrollCount={scrollCount} />
      <EndlessSerenity scrollCount={scrollCount} />

      <div className="w-full h-full flex py-[36px]">
        <div
          className={`${
            headerShow
              ? "opacity-100 visible translate-y-0 scale-100"
              : "invisible opacity-0 translate-y-[50px] scale-90"
          } max-w-[920px] w-full m-auto rounded-[25px] duration-500 delay-500 ease-out relative overflow-hidden group p-[2px]`}
        >
          <div
            className={`${
              headerShow ? "opacity-100 visible" : "invisible opacity-0"
            } glow-border duration-500 delay-700 ease-out`}
          ></div>
          <section
            className={`w-full ${
              language == "en"
                ? "py-[32px] md:py-[36px] lg:py-[40px]"
                : "py-[36px] md:py-[40px] lg:py-[44px]"
            }  px-[48px] md:px-[56px] lg:px-[64px] bg-linear relative z-10 rounded-[25px]`}
          >
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
        </div>
      </div>
    </Section>
  );
};

export default Header;
