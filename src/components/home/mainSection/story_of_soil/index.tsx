"use client";

import Button from "@/components/layout/button";
import { useEffect, useState } from "react";
import { MainSectionDescription, MainSectionTitle } from "..";
import seasonsData from "@/database/seasons.json";
import { useStore } from "@/store";
import ImageFadeSlider from "../seasons/imageFadeSlider";
import Link from "next/link";
import Image from "next/image";

const { seasons } = seasonsData;

const StoryOfSoil = ({
  scrollCount,
  setScrollCount,
}: {
  scrollCount: number;
  setScrollCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [active, setActive] = useState<boolean>(false);
  const { language } = useStore();

  useEffect(() => {
    if (scrollCount == 1) {
      setTimeout(() => {
        setActive(true);
      }, 500);
    } else {
      setTimeout(() => {
        setActive(false);
      }, 500);
    }
  }, [scrollCount]);
  return (
    <div
      className={`main-section-inner w-full h-full ${
        scrollCount == 1
          ? "visible opacity-100 delay-500 duration-500"
          : "invisible opacity-0 duration-500"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex">
        <div className="max-w-[1180px] w-full m-auto relative flex justify-center md:px-[56px] lg:px-[64px] xl:px-[24px] 2xl:px-0">
          <div className="w-full flex items-center justify-between">
            <div className="content relative">
              <div
                className={`${language == "en" ? "left-0" : "right-0"} ${
                  scrollCount == 1 ? "h-full" : "h-0"
                } absolute top-0 line-bg w-[3px] rounded-lg`}
                style={{
                  transition: "height 1s 0.7s ease",
                }}
              ></div>
              <div
                className={`${language == "en" ? "left-[5%]" : "right-[5%]"} ${
                  scrollCount == 1
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } circle-blur absolute top-0 left-[5%] w-[80px] h-[80px] blur-[90px] 2xl:top-[5%] 2xl:w-[70px] 2xl:h-[70px] 2xl:blur-[60px] bg-primary`}
                style={{
                  transition: "all 0.5313s 0.8s ease",
                }}
              ></div>
              <div className="content-inner md:ms-[35px] lg:ms-[39px] relative">
                <MainSectionTitle active={active} lang={language}>
                  {language == "ar"
                    ? seasons[0].title.translations.ar
                    : language == "fa"
                    ? seasons[0].title.translations.fa
                    : seasons[0].title.translations.en}
                </MainSectionTitle>
                <div
                  className={`${
                    language == "en"
                      ? "md:w-[360px] lg:w-[440px] xl:w-[480px]"
                      : "md:w-[360px] lg:w-[400px]"
                  } description mt-1`}
                >
                  <MainSectionDescription lang={language}>
                    {language == "ar"
                      ? seasons[0].description.translations.ar
                      : language == "fa"
                      ? seasons[0].description.translations.fa
                      : seasons[0].description.translations.en}
                  </MainSectionDescription>
                </div>
                <Link href={seasons[0].href}>
                  <Button lang={language} />
                </Link>
              </div>
            </div>
            <figure
              className={`${
                scrollCount == 1
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-75"
              } images relative z-[50] overflow-hidden md:w-[360px] md:h-[480px] lg:w-[400px] lg:h-[520px] xl:w-[420px] xl:h-[540px]`}
              style={{
                transition: "all 0.5313s 0.55s ease",
              }}
            >
              <div className="absolute inset-0 bg-overlay-1 z-[1] hidden md:block" />
              <Image
                src={`${process.env.NEXT_PUBLIC_UPLOADS_BASE_URL}${seasons[0].imageUrls[0]}`}
                alt={seasons[0].slug}
                fill
                objectFit="cover"
              />
              <div className="absolute bottom-[0] w-[100%] py-[15px] flex justify-center">
                <div className="flex gap-x-[10px] relative z-[50]">
                  {Array(7)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        onClick={() => {
                          setScrollCount(index + 1);
                        }}
                        className={`${
                          index == scrollCount - 1
                            ? "border-secondary"
                            : "border-primary"
                        } w-[12px] h-[12px] circle cursor-pointer rounded-[2px] hover:border-[#fdc882] duration-300 flex justify-center items-center`}
                        key={index}
                      >
                        <div
                          className={`${
                            index == scrollCount - 1
                              ? "visible opacity-100"
                              : "invisible opacity-0"
                          } w-[6px] h-[6px] bg-[#fdc882] duration-300`}
                        ></div>
                      </div>
                    ))}
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoryOfSoil;
