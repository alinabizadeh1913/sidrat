interface SectionType {
  container?: boolean;
  space?: "exterasmall" | "small" | "medium" | "large";
  children?: React.ReactNode;
  className?: string;
}

const Section = ({ container, space, children, className }: SectionType) => {
  return (
    <>
      <section
        className={`${container ? "container mx-auto" : "w-full"} ${
          space === "exterasmall"
            ? "space-exterasmall"
            : space === "small"
            ? "space-small"
            : space === "medium"
            ? "space-medium"
            : space === "large"
            ? "space-large"
            : ""
        } ${className}`}
      >
        {children}
      </section>
    </>
  );
};

export default Section;
