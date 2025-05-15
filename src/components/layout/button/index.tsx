"use client";

import { useStore } from "@/store";
import { Arrow } from "../../../../public/svg";
import Typography from "../typography";

interface ButtonType {
  size?: "large" | "medium";
  lang: "ar" | "fa" | "en";
}

const Button = ({ size, lang }: ButtonType) => {
  return (
    <div className="text-primary button-hover cursor-pointer border-secondary h-[48px] md:h-[44px] lg:h-[46px] xl:h-[48px] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[24px] rounded-[10px] md:mt-8 flex justify-center md:justify-start items-center w-full md:w-fit duration-300 relative z-[50] select-none">
      <Typography
        className={`text-primary ${
          lang == "ar" || lang == "fa"
            ? "yekan-regular text-[17px] sm:text-[19px]"
            : "biotif-regular pb-[6px] text-[19px] sm:text-[21px]"
        } md:text-[20px] lg:text-[22px] xl:text-[22px]`}
      >
        {lang == "ar"
          ? "خطوة نحو الحقيقة"
          : lang == "fa"
          ? "گام به سوی حقیقت"
          : "Step into the Truth"}
      </Typography>
      <div className={`icon-wrapper hidden md:flex`}>
        <Arrow direction={lang == "en" ? "ltr" : "rtl"} />
      </div>
    </div>
  );
};

export default Button;
