import Typography from "@/components/layout/typography";

const MainSectionTitle = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "ar" | "fa" | "en";
}) => {
  return (
    <section className="gradient-text-wrapper">
      <div
        className={`gradient-text text-[40px] text-center ${
          lang == "fa" || lang == "ar" ? "yekan-black" : "biotif-bold"
        }`}
      >
        {children}
      </div>
      <div
        className={`gradient-text-overlay text-[40px] text-center ${
          lang == "fa" || lang == "ar"
            ? "yekan-black gradient-text-overlay-rtl"
            : "biotif-bold gradient-text-overlay-ltr"
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
      className={`text-secondary text-[24px] leading-[40px] ${
        lang == "fa" || lang == "ar" ? "yekan-regular" : "biotif-regular"
      }`}
    >
      {children}
    </Typography>
  );
};

export { MainSectionTitle, MainSectionDescription };

// The Fourteen Infallibles
