import Section from "@/components/layout/section";
import Typography from "@/components/layout/typography";

const MainSection = ({
  isMainSectionOpen,
  setIsMainSectionOpen,
}: {
  isMainSectionOpen: boolean;
  setIsMainSectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Section
      identifier="main-section"
      className={`${
        isMainSectionOpen
          ? "visible opacity-100"
          : "invisible opacity-0 duration-500"
      } absolute bottom-0 left-0 right-0 w-full h-full z-50 `}
    >
      <div
        id="main-section-content"
        className="w-full h-full bg-body flex justify-center items-center"
        style={{
          transform: isMainSectionOpen ? "rotateX(0deg)" : "rotateX(180deg)",
          transition: "transform 0.313s linear",
        }}
      >
        <div
          className={`main-section-inner ${
            isMainSectionOpen
              ? "visible opacity-100 delay-700 duration-500"
              : "invisible opacity-0"
          }`}
        >
          <div onClick={() => setIsMainSectionOpen(false)}>
            <div className="relative">
              <div className="w-[3px] h-full bg-gradient-to-b from-[#ffbc65] to-[#151616] absolute top-0 left-0 rounded-sm"></div>
              <div className="w-[70px] h-[70px] rounded-full blur-[65px] bg-primary absolute top-0 left-0"></div>
              <div className="w-[600px] ps-[36px]">
                <section className="gradient-text-wrapper">
                  <div className="gradient-text text-[48px] text-center biotif-bold select-none">
                    {/* سِدْرَةِ الْمُنْتَهَى */}
                    The perfect chosen ones
                  </div>
                  <div className="gradient-text-overlay text-[48px] text-center biotif-bold select-none">
                    {/* سِدْرَةِ الْمُنْتَهَى */}
                    The perfect chosen ones
                  </div>
                </section>
                <Typography className="text-secondary text-[32px] biotif-regular mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  suscipit quo fuga repudiandae cupiditate autem incidunt
                  explicabo sapiente est cumque. Voluptatem et possimus a ipsam
                  ipsa sequi assumenda quo earum.
                </Typography>
                <button className="border border-[#ffbc65] rounded-lg py-3 px-7 text-primary mt-6">
                  more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MainSection;
