import { baseApi } from "../index";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: (lang) => `blogs?dil=${lang}_`,
    }),
    getBlogDetail: build.query({
      query: (params) =>
        `blog_detail?blog_id=${params.slug}&dil=${params.lang}_`,
    }),
    getMostReadedBlogs: build.query({
      query: (lang) => `blog_most_read?dil=${lang}_`,
    }),
    getRecommendedBlogs: build.query({
      query: (lang) => `blog_featured?dil=${lang}_`,
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogDetailQuery,
  useGetMostReadedBlogsQuery,
  useGetRecommendedBlogsQuery,
} = blogsApi;

const BASE_URL = "https://asortie.com/json/";

export async function fetchBlogs(lang) {
  const response = await fetch(`${BASE_URL}/blogs?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchBlogDetail({ slug, lang }) {
  const response = await fetch(
    `${BASE_URL}/blog_detail?blog_id=${slug}&dil=${lang}_`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchMostReadedBlogs(lang) {
  const response = await fetch(`${BASE_URL}/blog_most_read?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchRecommendedBlogs(lang) {
  const response = await fetch(`${BASE_URL}/blog_featured?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
