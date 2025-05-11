"use client";

import Section from "../section";
import { useEffect, useState } from "react";
import useStore from "@/store";

const Loading = () => {
  const { isLoadingShow } = useStore();

  return (
    <>
      <Section
        identifier="loading"
        className={`${
          isLoadingShow ? "visible opacity-100" : "invisible opacity-0"
        } w-full h-screen fixed z-[100] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#151616] duration-300`}
      >
        <div className="spinner w-[120px] h-[120px] rounded-full"></div>
      </Section>
    </>
  );
};

export default Loading;
