"use client";

import Button from "@/components/layout/button";
import Section from "@/components/layout/section";
import Typography from "@/components/layout/typography";
import Image from "next/image";
import { useEffect, useState } from "react";

const FourteenInfallibles = ({ scrollCount }: { scrollCount: number }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (scrollCount == 2) {
      setActive(true);
    }
  }, [scrollCount]);
  return (
    <Section
      identifier="main-section"
      className={`${
        scrollCount == 2
          ? "translate-y-0"
          : scrollCount < 2
          ? "translate-y-[100%]"
          : ""
      } absolute bottom-0 left-0 right-0 w-full h-full z-50 bg-body`}
    >
      <div
        className={`main-section-inner w-full h-full ${
          scrollCount == 2
            ? "visible opacity-100 duration-500"
            : "invisible opacity-0 duration-500"
        }`}
        style={{
          transitionDelay: "0.55s",
        }}
      >
        <div className="background w-full h-full z-[5] relative"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 flex">
          <div className="max-w-[1200px] w-full m-auto">
            <div className="flex items-center justify-between">
              <div className="content relative">
                <div
                  className={`${
                    scrollCount == 2 ? "h-full" : "h-0"
                  } absolute top-0 left-0 line-bg w-[3px] rounded-lg`}
                  style={{
                    transition: "height 0.5313s 0.7s ease",
                  }}
                ></div>
                <div
                  className={`${
                    scrollCount == 2
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  } circle-blur absolute top-0 left-[3px] w-[80px] h-[80px] blur-[90px] bg-primary`}
                  style={{
                    transition: "all 0.5313s 0.8s ease",
                  }}
                ></div>
                <div className="content-inner w-[480px] ms-[39px] relative z-20">
                  <section className="gradient-text-wrapper">
                    <div className="gradient-text text-[40px] text-center biotif-bold">
                      The Fourteen Infallibles
                    </div>
                    <div className="gradient-text-overlay text-[40px] text-center biotif-bold">
                      The Fourteen Infallibles
                    </div>
                  </section>
                  <div className="description mt-1">
                    <Typography className="text-secondary text-[24px] leading-[40px]">
                      A profound exploration of the loftiest degrees of
                      humanity: understanding the pure reality of the
                      Infallibles (peace be upon them) - the eternal mirrors of
                      the Divine Essence - and comprehending the station of
                      divine vicegerency on the path toward knowing the Creator.
                    </Typography>
                  </div>
                  <Button lang="en" />
                </div>
              </div>
              <figure className="images relative">
                <div className="overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-overlay-1 z-[1]"></div>
                <div
                  className={`${
                    scrollCount == 2
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-75"
                  } relative w-[440px] h-[520px]`}
                  style={{
                    transition: "all 0.5313s 0.55s ease",
                  }}
                >
                  <Image
                    src="/images/The Fourteen Infallibles/01.png"
                    alt="The-Fourteen-Infallibles"
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
export default FourteenInfallibles;
