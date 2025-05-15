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
        <MysticAura />
      </section>
      <section className="block md:hidden pb-9 md:pb-0 px-[24px] sm:px-[32px] md:px-[48px] lg:px-[64px] z-[100] bg-[#151616ee] sticky top-0 backdrop-blur-[10px]">
        <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      </section>
      <Header />
      <SeasonsMobile />
    </>
  );
};

export default HomeComponents;
