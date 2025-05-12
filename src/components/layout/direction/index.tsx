"use client";

import { useEffect } from "react";
import { useStore } from "@/store";

const DirectionHandler = () => {
  const { direction } = useStore();

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return null;
};

export default DirectionHandler;
