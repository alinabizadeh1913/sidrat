"use client";

import Section from "@/components/layout/section";
import seasonsData from "@/database/seasons.json";
import { MainSectionDescription, MainSectionTitle } from "..";
import { useStore } from "@/store";
import Link from "next/link";
import Button from "@/components/layout/button";
import ImageFadeSlider from "../seasons/imageFadeSlider";

const { seasons } = seasonsData;

const SeasonsMobile = () => {
  const { language } = useStore();

  return (
    <>
      <Section className="block md:hidden px-[24px] sm:px-[80px]">
        {seasons.map((season, index) => (
          <Section space="extralarge" className="w-full" key={index}>
            <div className="content relative">
              <div
                className={`${
                  language == "en" ? "left-0" : "right-0"
                } absolute top-0 line-bg w-[3px] rounded-lg h-full`}
                style={{
                  transition: "height 1s 0.7s ease",
                }}
              ></div>
              <div
                className={`${
                  language == "en" ? "left-[5%]" : "right-[5%]"
                }  circle-blur absolute top-0 left-[5%] w-[60px] h-[60px] blur-[60px] md:w-[80px] md:h-[80px] md:blur-[90px] 2xl:top-[5%] 2xl:w-[70px] 2xl:h-[70px] 2xl:blur-[60px] bg-primary`}
                style={{
                  transition: "all 0.5313s 0.8s ease",
                }}
              ></div>
              <div className="content-inner ms-[27px] sm:ms-[31px] md:ms-[35px] lg:ms-[39px] relative">
                <MainSectionTitle active lang={language}>
                  {language == "ar"
                    ? season.title.translations.ar
                    : language == "fa"
                    ? season.title.translations.fa
                    : season.title.translations.en}
                </MainSectionTitle>
                <div
                  className={`${
                    language == "en"
                      ? "w-full md:w-[360px] lg:w-[440px] xl:w-[480px]"
                      : "w-full md:w-[360px] lg:w-[400px]"
                  } description mt-4`}
                >
                  <MainSectionDescription lang={language}>
                    {language == "ar"
                      ? season.description.translations.ar
                      : language == "fa"
                      ? season.description.translations.fa
                      : season.description.translations.en}
                  </MainSectionDescription>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-12">
              <figure
                className={`images relative z-[50] overflow-hidden w-full h-[480px] sm:h-[560px] max-1w-[280px] sm:max-1w-[320px] sm:w1-[320px]`}
                style={{
                  transition: "all 0.5313s 0.55s ease",
                }}
              >
                <ImageFadeSlider
                  imageUrls={season.imageUrls}
                  alt={season.slug}
                />
              </figure>
            </div>
            <Link href={season.href}>
              <Button lang={language} />
            </Link>
          </Section>
        ))}
      </Section>
    </>
  );
};

export default SeasonsMobile;
