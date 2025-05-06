"use client";

import Button from "@/components/layout/button";
import Section from "@/components/layout/section";
import Typography from "@/components/layout/typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MainSectionDescription, MainSectionTitle } from "..";

const DayOfJudgment = ({ scrollCount }: { scrollCount: number }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (scrollCount == 5) {
      setActive(true);
    }
  }, [scrollCount]);
  return (
    <Section
      identifier="main-section"
      className={`${
        scrollCount == 5
          ? "visible opacity-100"
          : scrollCount < 5
          ? "invisible opacity-0"
          : ""
      } absolute bottom-0 left-0 right-0 w-full h-full z-50 bg-body`}
    >
      <div
        className={`main-section-inner w-full h-full ${
          scrollCount == 5
            ? "visible opacity-100 delay-700 duration-500"
            : "invisible opacity-0 duration-500"
        }`}
        style={{
          transitionDelay: "0.55s",
        }}
      >
        <div className="background w-full h-full z-[5] relative"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 flex">
          <div className="max-w-[1280px] w-full m-auto">
            <div className="flex items-center justify-between">
              <div className="content relative">
                <div
                  className={`${
                    scrollCount == 5 ? "h-full" : "h-0"
                  } absolute top-0 left-0 line-bg w-[3px] rounded-lg`}
                  style={{
                    transition: "height 0.5313s 0.7s ease",
                  }}
                ></div>
                <div
                  className={`${
                    scrollCount == 5
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  } circle-blur absolute top-0 left-[5%] w-[80px] h-[80px] blur-[90px] 2xl:top-[5%] 2xl:w-[70px] 2xl:h-[70px] 2xl:blur-[60px] bg-primary`}
                  style={{
                    transition: "all 0.5313s 0.8s ease",
                  }}
                ></div>
                <div className="content-inner w-[500px] ms-[39px] relative z-20">
                  <MainSectionTitle lang="en">
                    The Day of Judgment
                  </MainSectionTitle>
                  <div className="w-[480px] description mt-1">
                    <MainSectionDescription lang="en">
                      The collapse of the mortal world and the beginning of the
                      Day of Divine Judgment. The blowing of the Trumpet (Ṣūr)
                      shatters the structure of this perishable world, and
                      humanity is brought before the eternal truth and their
                      everlasting destiny.
                    </MainSectionDescription>
                  </div>
                  <Button lang="en" />
                </div>
              </div>
              <figure className="images relative">
                <div className="overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-overlay-1 z-[1]"></div>
                <div
                  className={`${
                    scrollCount == 5
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-75"
                  } relative w-[440px] h-[560px]`}
                  style={{
                    transition: "all 0.5313s 0.55s ease",
                  }}
                >
                  <Image
                    src="/images/The Day of Judgment/00.jpg"
                    alt="day-of-judgment"
                    objectFit="cover"
                    fill
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default DayOfJudgment;
