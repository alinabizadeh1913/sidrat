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
      <Section identifier="home-mobile-seasons" className="block md:hidden">
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
              <div className="content-inner ms-[23px] sm:ms-[31px] md:ms-[35px] lg:ms-[39px] relative">
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
                  } description mt-4 sm:mt-2`}
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
            <div className="flex justify-center my-10 sm:my-12">
              <figure
                className={`home-mobile-images relative z-[50] overflow-hidden w-full`}
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
            <div>
              <Link href={season.href}>
                <Button lang={language} />
              </Link>
            </div>
          </Section>
        ))}
      </Section>
    </>
  );
};

export default SeasonsMobile;
