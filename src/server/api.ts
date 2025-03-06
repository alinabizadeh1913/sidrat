import apiGet from "@/utils/fetchData";

const fetchPosts = () => {
  return apiGet("Posts");
};

export { fetchPosts };
