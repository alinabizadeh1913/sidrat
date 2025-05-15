"use client";

import { useState } from "react";
import Header from "./header";
import HomeNavbar from "./header/navbar";
import SeasonsMobile from "./mainSection/mobile";
import MysticAura from "../layout/aura";

const HomeComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <section className="block md:hidden">
        <MysticAura zIndex={35} />
      </section>
      <section className="block md:hidden pb-9 md:pb-0 px-[24px] sm:px-[32px] md:px-[48px] lg:px-[64px] z-[30] bg-[#151616e0] sticky top-0 backdrop-blur-[10px]">
        <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      </section>
      <Header />
      <SeasonsMobile />
    </>
  );
};

export default HomeComponents;
