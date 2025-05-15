import Typography from "@/components/layout/typography";

const MainSectionTitle = ({
  children,
  lang,
  active,
}: {
  children: React.ReactNode;
  lang: "ar" | "fa" | "en";
  active?: boolean;
}) => {
  return (
    <section className="gradient-text-wrapper select-none">
      <div
        className={`gradient-text md:text-[32px] lg:text-[36px] xl:text-[40px] text-center ${
          lang == "fa" || lang == "ar"
            ? "yekan-black text-[24px] sm:text-[28px]"
            : "biotif-bold text-[24px] sm:text-[32px]"
        }`}
      >
        {children}
      </div>
      <div
        className={`gradient-text-overlay md:text-[32px] lg:text-[36px] xl:text-[40px] text-center ${
          lang == "fa" || lang == "ar" ? "yekan-black" : "biotif-bold"
        } ${
          active && lang == "en"
            ? "gradient-text-overlay-ltr text-[24px] sm:text-[32px]"
            : active && (lang == "fa" || lang == "ar")
            ? "gradient-text-overlay-rtl text-[24px] sm:text-[28px]"
            : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};

const MainSectionDescription = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "ar" | "fa" | "en";
}) => {
  return (
    <Typography
      className={`text-secondary md:text-[20px] lg:text-[22px] xl:text-[24px] md:leading-[36px] xl:leading-[40px] select-none ${
        lang == "fa" || lang == "ar"
          ? "yekan-regular text-[17px] sm:text-[19px] leading-[32px] sm:leading-[36px]"
          : "biotif-regular text-[19px] sm:text-[21px] leading-[32px] sm:leading-[36px]"
      }`}
    >
      {children}
    </Typography>
  );
};

export { MainSectionTitle, MainSectionDescription };

// The Fourteen Infallibles
