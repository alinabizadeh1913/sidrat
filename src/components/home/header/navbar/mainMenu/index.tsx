import Section from "@/components/layout/section";

const MainMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Section
      identifier="main-menu"
      className={`${
        isMenuOpen ? "visible opacity-100" : "invisible opacity-0 duration-500"
      } absolute top-0 left-0 right-0 w-full h-full z-50 `}
    >
      <div
        id="main-menu-content"
        className="w-full h-full bg-body flex justify-center items-center"
        style={{
          transform: isMenuOpen ? "rotateX(360deg)" : "rotateX(180deg)",
          transition: "transform 0.313s linear",
        }}
      >
        <div
          className={`main-menu-inner ${
            isMenuOpen
              ? "visible opacity-100 delay-500 duration-500"
              : "invisible opacity-0"
          }`}
        >
          <button
            className="text-white text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Click
          </button>
        </div>
      </div>
    </Section>
  );
};

export default MainMenu;
