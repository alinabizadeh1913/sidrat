"use client";

import Section from "@/components/layout/section";
import { useHeaderStore } from "@/store";
import { useEffect, useState } from "react";

const MainMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsHeaderShow } = useHeaderStore();
  // const [screenWidth, setScreenWidth] = useState<number>();

  // useEffect(() => {
  //   setScreenWidth(window.innerWidth);
  // }, [window.innerWidth]);

  return (
    <Section
      identifier="main-menu"
      className={`${
        isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
      } absolute top-0 left-0 right-0 w-full h-full z-[150] bg-body hidden md:block`}
    >
      <div
        className={`main-menu-inner w-full h-full flex items-center justify-center ${
          isMenuOpen
            ? "visible opacity-100 delay-700 duration-500"
            : "invisible opacity-0 duration-500"
        }`}
      >
        <button
          className="text-white text-8xl"
          onClick={() => {
            setIsMenuOpen(false);
            setIsHeaderShow(true);
          }}
        >
          Click Here
          {/* Screen Width : {screenWidth} */}
        </button>
      </div>
    </Section>
  );
};

export default MainMenu;
