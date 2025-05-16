"use client";

import Section from "@/components/layout/section";
import seasonsData from "@/database/seasons.json";
import { MainSectionDescription, MainSectionTitle } from "..";
import { useStore } from "@/store";
import Link from "next/link";
import Button from "@/components/layout/button";
import ImageFadeSlider from "../seasons/imageFadeSlider";
import { useState, useEffect, useRef } from "react";

const { seasons } = seasonsData;

const SeasonsMobile = () => {
  const { language } = useStore();
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setVisibleSections((prev) => [...prev, index]);
          } else {
            setVisibleSections((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: [0.6, 0.8, 1.0],
        rootMargin: "-10% 0px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Section identifier="home-mobile-seasons" className="block md:hidden">
      {seasons.map((season, index) => (
        <Section space="extralarge" className="w-full" key={index}>
          <div
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={`mobile-card ${
              visibleSections.includes(index) ? "active" : ""
            }`}
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
                <div className="mt-2 sm:mt-4">
                  <MainSectionDescription lang={language}>
                    {language === "ar"
                      ? season.description.translations.ar
                      : language === "fa"
                      ? season.description.translations.fa
                      : season.description.translations.en}
                  </MainSectionDescription>
                </div>
              </div>

              <div className="mobile-image-container">
                <ImageFadeSlider
                  imageUrls={season.imageUrls}
                  alt={season.slug}
                  className="home-mobile-images"
                  isActive={visibleSections.includes(index)}
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
