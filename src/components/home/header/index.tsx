"use client";

import Section from "@/components/layout/section";
import HomeNavbar from "./navbar";
import Typography from "@/components/layout/typography";
import { Down } from "../../../../public/svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerShow, setHeaderShow] = useState(false);
  useEffect(() => {
    setHeaderShow(true);
  }, []);
  return (
    <Section
      identifier="header"
      className="flex flex-col h-screen md:px-[32px] lg:px-[64px] overflow-hidden"
    >
      <HomeNavbar />
      <div className="w-full h-full flex py-[36px]">
        <div
          className={`${
            headerShow
              ? "opacity-100 visible translate-y-0 scale-100"
              : "invisible opacity-0 translate-y-[50px] scale-90"
          } max-w-[950px] w-full border-primary m-auto py-[48px] px-[75px] rounded-[25px] bg-radial backdrop-blur-[10px] duration-500 delay-500 ease-out`}
        >
          <Typography
            tagName="h1"
            className="text-[40px] text-primary text-center biotif-bold"
          >
            Sedrat Almuntaha
          </Typography>
          <div>
            <Typography className="text-tertiary text-[20px] biotif-regular my-12">
              Have you ever thought that the pleasures of this world are only a
              shallow version of something greater? Not a fantasy, not a
              promise, but a reality beyond comprehension… a kingdom that
              belongs only to the chosen ones of truth; and if you are in its
              orbit, no suffering will have any meaning. We are talking here
              about a world where time never ends and your perception grows
              infinitely. But this path is not everyone’s choice. For in the
              eternal kingdom, only those who have transcended appearances and
              reached the depths of meaning will find their way. In a world
              where everything is impermanent, there is only one true stability
              : the kingdom that belongs to God and his saints. And outside of
              that, there is no destiny but wandering and falling…
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <Down />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Header;
