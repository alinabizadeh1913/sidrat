interface Typographytype {
  tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const Typography = ({
  tagName,
  color,
  className,
  children,
}: Typographytype) => {
  return (
    <>
      {!tagName && (
        <p
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </p>
      )}
      {tagName === "h1" ? (
        <h1
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </h1>
      ) : tagName === "h2" ? (
        <h2
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </h2>
      ) : tagName === "h3" ? (
        <h3
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </h3>
      ) : tagName === "h4" ? (
        <h4
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </h4>
      ) : tagName === "h5" ? (
        <h5
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </h5>
      ) : tagName === "h6" ? (
        <h6
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </h6>
      ) : tagName === "p" ? (
        <p
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </p>
      ) : tagName === "span" ? (
        <span
          style={{
            color: !color ? "#000" : color,
          }}
          className={`${className ? className : ""}`}
        >
          {children}
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default Typography;
