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
    <div className="text-primary button-hover cursor-pointer border-secondary h-[48px] px-[24px] rounded-[10px] mt-8 flex items-center w-fit duration-300 relative z-[50] select-none">
      <Typography
        className={`text-primary ${
          lang == "ar" || lang == "fa"
            ? "yekan-regular"
            : "biotif-regular pb-[6px]"
        } text-[22px]`}
      >
        {lang == "ar"
          ? "خطوة نحو الحقيقة"
          : lang == "fa"
          ? "گام به سوی حقیقت"
          : "Step into the Truth"}
      </Typography>
      <div className={`icon-wrapper flex`}>
        <Arrow direction={lang == "en" ? "ltr" : "rtl"} />
      </div>
    </div>
  );
};

export default Button;
