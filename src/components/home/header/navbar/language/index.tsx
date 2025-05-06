import Typography from "@/components/layout/typography";
import { Globe } from "../../../../../../public/svg";

const ChangeLanguage = () => {
  return (
    <>
      <div className="text-tertiary chnge-language cursor-pointer w-[89px] h-[38px] rounded-[10px] border-primary flex items-center justify-center gap-x-2">
        <Typography className="text-[14px] text-tertiary biotif-regular">
          English
        </Typography>
        <Globe />
      </div>
    </>
  );
};
export default ChangeLanguage;

