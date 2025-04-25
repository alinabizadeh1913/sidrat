interface SectionType {
  container?: boolean;
  space?: "exterasmall" | "small" | "medium" | "large";
  children?: React.ReactNode;
  className?: string;
  identifier?: string;
  special?: boolean;
}

const Section = ({
  container,
  space,
  children,
  className,
  identifier,
  special,
}: SectionType) => {
  return (
    <>
      <section
        id={identifier}
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
        } ${className} ${special ? "special-container" : ""}`}
      >
        {children}
      </section>
    </>
  );
};

export default Section;
