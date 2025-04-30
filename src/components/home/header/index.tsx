"use client";

import Section from "@/components/layout/section";
import HomeNavbar from "./navbar";
import Typography from "@/components/layout/typography";
import { Down } from "../../../../public/svg";
import { useEffect, useState } from "react";
import MainMenu from "./navbar/mainMenu";
import MainSection from "../mainSection";

const Header = () => {
  const [headerShow, setHeaderShow] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMainSectionOpen, setIsMainSectionOpen] = useState<boolean>(false);
  useEffect(() => {
    setHeaderShow(true);
  }, []);
  return (
    <Section
      identifier="header"
      className="flex flex-col h-screen md:px-[40px] lg:px-[64px] overflow-hidden relative"
    >
      <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainSection
        isMainSectionOpen={isMainSectionOpen}
        setIsMainSectionOpen={setIsMainSectionOpen}
      />
      <div className="w-full h-full flex py-[36px]">
        <div
          className={`${
            headerShow
              ? "opacity-100 visible translate-y-0 scale-100"
              : "invisible opacity-0 translate-y-[50px] scale-90"
          } max-w-[950px] w-full m-auto rounded-[25px] duration-500 delay-500 ease-out relative overflow-hidden group p-[2px]`}
        >
          <div
            className={`${
              headerShow ? "opacity-100 visible" : "invisible opacity-0"
            } glow-border duration-500 delay-700 ease-out`}
          ></div>
          <section className="w-full py-[30px] md:py-[36px] lg:py-[40px] xl:py-[48px]  px-[48px] md:px-[56px] lg:px-[64px] bg-linear relative z-10 rounded-[25px]">
            <section className="flex justify-center">
              <section className="gradient-text-wrapper">
                <div className="gradient-text text-[40px] text-center biotif-bold">
                  {/* سِدْرَةِ الْمُنْتَهَى */}
                  Sidrat Almuntaha
                </div>
                <div className="gradient-text-overlay text-[40px] text-center biotif-bold">
                  {/* سِدْرَةِ الْمُنْتَهَى */}
                  Sidrat Almuntaha
                </div>
              </section>
            </section>
            <div>
              <Typography className="text-tertiary text-[18px] biotif-regular my-4 md:my-6 lg:my-7 xl:my-9 leading-[32px]">
                {/* آیا تا به حال فکر کرده‌ای که لذت‌های این دنیا، تنها نسخه‌ای کم‌عمق
              از چیزی بزرگ‌ترند؟ نه خیال، نه وعده، بلکه واقعیتی فراتر از ادراک…
              حکومتی که تنها به برگزیدگان حقیقت تعلق دارد؛ و اگر در مدار آن قرار
              بگیری، هیچ رنجی دیگر معنایی نخواهد داشت. ما اینجا از جهانی حرف
              می‌زنیم که در آن، زمان به پایان نمی‌رسد و ادراک تو تا بی‌نهایت رشد
              می‌کند. اما این مسیر، انتخاب هر کسی نیست. زیرا در پادشاهی ابدی،
              تنها آنانی راه می‌یابند که از ظاهر عبور کرده‌اند و به عمق معنا
              رسیده‌اند. در جهانی که هر چیزی ناپایدار است، تنها یک ثبات حقیقی
              وجود دارد: سلطنتی که از آنِ خدا و اولیای اوست. و خارج از آن، جز
              سرگردانی و سقوط، سرنوشتی نیست ... */}
                Have you ever thought that the pleasures of this world are only
                a shallow version of something greater? Not a fantasy, not a
                promise, but a reality beyond comprehension… a kingdom that
                belongs only to the chosen ones of truth; and if you are in its
                orbit, no suffering will have any meaning. We are talking here
                about a world where time never ends and your perception grows
                infinitely. But this path is not everyone’s choice. For in the
                eternal kingdom, only those who have transcended appearances and
                reached the depths of meaning will find their way. In a world
                where everything is impermanent, there is only one true
                stability : the kingdom that belongs to God and his saints. And
                outside of that, there is no destiny but wandering and falling…
              </Typography>
            </div>
            <div className="flex justify-center items-center">
              <Down />
            </div>
          </section>
        </div>
      </div>
    </Section>
  );
};

export default Header;
