"use client";

import Button from "@/components/layout/button";
import Section from "@/components/layout/section";
import Typography from "@/components/layout/typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { seasons } from "@/database/seasons.json";
import { MainSectionDescription, MainSectionTitle } from "..";
import useStore from "@/store";

const RiseOfDivineReign = ({ scrollCount }: { scrollCount: number }) => {
  const [active, setActive] = useState<boolean>(false);
  const { language } = useStore();
  useEffect(() => {
    if (scrollCount == 3) {
      setTimeout(() => {
        setActive(true);
      }, 500);
    } else {
      setActive(false);
    }
  }, [scrollCount]);
  return (
    <Section
      identifier="main-section"
      className={`${
        scrollCount == 3
          ? "visible opacity-100"
          : scrollCount < 3
          ? "invisible opacity-0"
          : ""
      } absolute bottom-0 left-0 right-0 w-full h-full z-50 bg-body`}
    >
      <div
        className={`main-section-inner w-full h-full ${
          scrollCount == 3
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
                  className={`${language == "en" ? "left-0" : "right-0"} ${
                    scrollCount == 3 ? "h-full" : "h-0"
                  } absolute top-0 line-bg w-[3px] rounded-lg`}
                  style={{
                    transition: "height 0.5313s 0.7s ease",
                  }}
                ></div>
                <div
                  className={`${
                    language == "en" ? "left-[5%]" : "right-[5%]"
                  } ${
                    scrollCount == 3
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  } circle-blur absolute top-0 w-[80px] h-[80px] blur-[90px] 2xl:top-[5%] 2xl:w-[70px] 2xl:h-[70px] 2xl:blur-[60px] bg-primary`}
                  style={{
                    transition: "all 0.5313s 0.8s ease",
                  }}
                ></div>
                <div className="content-inner w-[500px] ms-[39px] relative z-20">
                  <MainSectionTitle active={active} lang={language}>
                    {language == "ar"
                      ? seasons[2].title.translations.ar
                      : language == "fa"
                      ? seasons[2].title.translations.fa
                      : seasons[2].title.translations.en}
                  </MainSectionTitle>
                  <div className="w-[480px] description mt-1">
                    <MainSectionDescription lang={language}>
                      {language == "ar"
                        ? seasons[2].description.translations.ar
                        : language == "fa"
                        ? seasons[2].description.translations.fa
                        : seasons[2].description.translations.en}
                    </MainSectionDescription>
                  </div>
                  <Button lang={language} />
                </div>
              </div>
              <figure className="images relative">
                <div className="overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-overlay-1 z-[1]"></div>
                <div
                  className={`${
                    scrollCount == 3
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-75"
                  } relative w-[440px] h-[560px]`}
                  style={{
                    transition: "all 0.5313s 0.55s ease",
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_UPLOADS_BASE_URL}${seasons[2].imageUrls[1]}`}
                    alt="rise-of-rivine-reign"
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
export default RiseOfDivineReign;
