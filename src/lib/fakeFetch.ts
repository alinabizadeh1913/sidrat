import { useState } from "react";

const baseUrl = "https://localhost:3000";

const fetchDataBySlug = () => {
  const [active, setActive] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  fetch("localhost:3000")
    .then((res) => {
      setData(res.json());
    })
    .then((data) => {
      return data;
    });
};

const checkIsApiGet = (url: string) => {
  if (url.includes("localhost:3000")) {
    return true;
  } else {
    return false;
  }
};

export { fetchDataBySlug, checkIsApiGet };
