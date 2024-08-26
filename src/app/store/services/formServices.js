import { baseApi } from "../index";

const formApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNewProducts: build.query({
      query: () => `new_products`,
    }),
    getNews: build.query({
      query: () => `news`,
    }),
    getBlogs: build.query({
      query: () => `blogs`,
    }),
    postContact: build.mutation({
      query: ({ name, email, tel, message, ulke_kodu, dil }) => ({
        url: `contact_information_send`,
        method: "POST",
        body: { name, email, tel, message, ulke_kodu, dil },
      }),
    }),
  }),
});

export const {
  useGetNewProductsQuery,
  useGetBlogsQuery,
  useGetNewsQuery,
  usePostContactMutation,
} = formApi;
