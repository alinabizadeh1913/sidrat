import Typography from "../typography";

interface ButtonType {
  size?: "large" | "medium";
  lang: "ar" | "fa" | "en";
}

const Button = ({ size, lang }: ButtonType) => {
  return (
    <div className="button-hover cursor-pointer border-secondary h-[56px] px-[40px] rounded-[15px] mt-6 flex items-center w-fit duration-300 ease-in">
      <Typography
        className={`text-primary ${
          lang == "ar" || lang == "fa" ? "yekan-regular" : "biotif-regular"
        } text-[24px] pb-1`}
      >
        {lang == "ar" ? "أكثر" : lang == "fa" ? "بیشتر" : "more"}
      </Typography>
    </div>
  );
};

export default Button;
