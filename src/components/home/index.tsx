import Section from "../layout/section";
import Typography from "../layout/typography";

const HomeComponents = () => {
  return (
    <>
      <Section space="large">
        <div className="flex justify-center gap-x-6 items-center">
          <div className="w-[330px] p-4 rounded-full border border-[#696969] text-center select-none hover:bg-[#f3f3f3]">
            <Typography tagName="p">Welocome to ? project</Typography>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomeComponents;
