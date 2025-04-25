"use client";

import Section from "@/components/layout/section";
import Image from "next/image";
import { BurgerMenu, Globe, Search } from "../../../../../public/svg";
import { useEffect, useState } from "react";
import ChangeLanguage from "./language";
import SearchBox from "./search";

const HomeNavbar = () => {
  const [navbarShow, setNavbarShow] = useState(false);
  useEffect(() => {
    setNavbarShow(true);
  }, []);
  return (
    <Section
      special
      className={`${
        navbarShow ? "translate-y-0" : "translate-y-[-100%]"
      } duration-500 ease-in-out`}
    >
      <div className="w-full flex items-center justify-between pt-9">
        <div className="w-5/12 flex items-center gap-x-[24px]">
          <ChangeLanguage />
          <SearchBox />
        </div>
        <div className="w-2/12 flex justify-center">
          <div className=" relative w-[48px] h-[56px]">
            <Image
              src={"/logo/logo1.png"}
              alt="sidrat-almuntaha-logo"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="w-5/12 cursor-pointer flex justify-end">
          <BurgerMenu />
        </div>
      </div>
    </Section>
  );
};

export default HomeNavbar;
