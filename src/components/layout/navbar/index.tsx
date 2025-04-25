"use client";

import { usePathname } from "next/navigation";
import Section from "../section";
import Typography from "../typography";

const MainNavBar = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <Section>
          <Typography className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            cumque id totam? Laudantium, soluta reiciendis. Libero totam
            tempore, temporibus voluptatem nobis non animi possimus. Asperiores
            repellat dolore quos eos dolorum.
          </Typography>
        </Section>
      )}
    </>
  );
};

export default MainNavBar;
