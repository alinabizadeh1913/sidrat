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
        isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
      } absolute top-0 left-0 right-0 w-full h-full z-50 bg-body`}
    >
      <div
        className={`main-menu-inner w-full h-full flex items-center justify-center ${
          isMenuOpen
            ? "visible opacity-100 delay-700 duration-500"
            : "invisible opacity-0 duration-500"
        }`}
      >
        <button
          className="text-white text-8xl"
          onClick={() => setIsMenuOpen(false)}
        >
          Click
        </button>
      </div>
    </Section>
  );
};

export default MainMenu;
