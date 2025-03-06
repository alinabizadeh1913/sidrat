import axios from "axios";

const apiGet = async (url: string) => {
  const response = axios.get(`${process.env.NEXT_PUBLIC_API}${url}`);
  const data = (await response).data;

  return data;
};

export default apiGet;
