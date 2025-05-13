import Typography from "../typography";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  weight?: "regular" | "bold";
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  lang?: "ar" | "fa" | "en";
  quran?: boolean;
}

const MainText = ({
  children,
  className,
  weight,
  tagName,
  lang,
  quran,
}: TextProps) => {
  return (
    <Typography
      tagName={tagName}
      className={`${className} ${
        lang == "ar" || lang == "fa" ? `yekan-${weight}` : `biotif-${weight}`
      } ${quran ? "uthman" : ""} select-none`}
    >
      {children}
    </Typography>
  );
};

const GradientText = ({ children, weight, className, lang }: TextProps) => {
  return (
    <>
      <section className="gradient-text-wrapper select-none">
        <div
          className={`${className} gradient-text text-center ${
            lang == "fa" || lang == "ar"
              ? `yekan-${weight}`
              : `biotif-${weight}`
          }`}
        >
          {children}
        </div>
        <div
          className={`${className} gradient-text-overlay text-overlay text-center ${
            lang == "fa" || lang == "ar"
              ? `yekan-${weight} gradient-text-overlay-rtl`
              : `biotif-${weight} gradient-text-overlay-ltr`
          }`}
        >
          {children}
        </div>
      </section>
    </>
  );
};

export { MainText, GradientText };
