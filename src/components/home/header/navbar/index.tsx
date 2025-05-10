"use client";

import Section from "@/components/layout/section";
import Image from "next/image";
import { BurgerMenu, Globe, Search } from "../../../../../public/svg";
import { useEffect, useState } from "react";
import ChangeLanguage from "./language";
import SearchBox from "./search";

const HomeNavbar = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [navbarShow, setNavbarShow] = useState(false);
  useEffect(() => {
    setNavbarShow(true);
  }, []);
  return (
    <nav
      style={{
        direction: "ltr",
      }}
    >
      <Section special>
        <div className="w-full flex items-center justify-between pt-9 relative">
          <div className="w-5/12 flex items-center gap-x-[24px]">
            <ChangeLanguage />
            <SearchBox />
          </div>
          <div className="w-2/12 flex justify-center">
            <div className="w-[48px] h-[56px] relative">
              <Image
                src={"/logo/logo1.png"}
                alt="sidrat-almuntaha-logo"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-5/12 flex justify-end">
            <div
              className="cursor-pointer text-tertiary relative z-[30]"
              onClick={() => setIsMenuOpen(true)}
            >
              <BurgerMenu />
            </div>
          </div>
        </div>
      </Section>
    </nav>
  );
};

export default HomeNavbar;
