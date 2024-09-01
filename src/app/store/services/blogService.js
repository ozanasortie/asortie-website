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
