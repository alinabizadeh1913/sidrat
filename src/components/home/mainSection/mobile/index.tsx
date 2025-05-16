"use client";

import Section from "@/components/layout/section";
import seasonsData from "@/database/seasons.json";
import { MainSectionDescription, MainSectionTitle } from "..";
import { useStore } from "@/store";
import Link from "next/link";
import Button from "@/components/layout/button";
import ImageFadeSlider from "../seasons/imageFadeSlider";
import { useState } from "react";

const { seasons } = seasonsData;

const SeasonsMobile = () => {
  const { language } = useStore();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section identifier="home-mobile-seasons" className="block md:hidden">
      {seasons.map((season, index) => (
        <Section space="extralarge" className="w-full" key={index}>
          <div 
            className="mobile-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="mobile-content">
              <div>
                <MainSectionTitle lang={language} active>
                  {language === "ar"
                    ? season.title.translations.ar
                    : language === "fa"
                    ? season.title.translations.fa
                    : season.title.translations.en}
                </MainSectionTitle>
                <MainSectionDescription lang={language}>
                  {language === "ar"
                    ? season.description.translations.ar
                    : language === "fa"
                    ? season.description.translations.fa
                    : season.description.translations.en}
                </MainSectionDescription>
              </div>
              
              <div className="mobile-image-container">
                <ImageFadeSlider
                  imageUrls={season.imageUrls}
                  alt={season.slug}
                  className="home-mobile-images"
                  isActive={hoveredIndex === index}
                />
              </div>
              
              <div className="mobile-button-container">
                <Link href={season.href} className="button-hover block w-full">
                  <Button lang={language} />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </Section>
  );
};

export default SeasonsMobile;
