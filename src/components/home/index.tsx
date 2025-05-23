"use client";

import { useState } from "react";
import Header from "./header";
import HomeNavbar from "./header/navbar";
import SeasonsMobile from "./mainSection/mobile";
import MysticAura from "../layout/aura";
import MobileFooter from "./footer/mobile";

const HomeComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <section className="block md:hidden">
        <MysticAura />
      </section>
      <section className="block md:hidden pb-9 px-[32px] sticky top-0 z-[100] bg-[#151616e8] backdrop-blur-md">
        <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      </section>
      <Header />
      <SeasonsMobile />
      <section className="block md:hidden">
        <MobileFooter />
      </section>
    </>
  );
};

export default HomeComponents;
