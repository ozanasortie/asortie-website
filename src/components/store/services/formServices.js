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
    postProductRequest: build.mutation({
      query: ({ detay_name, detay_email, telefon, mesaj, dil, sayfa }) => {
        const formData = new FormData();
        formData.append("detay_name", detay_name);
        formData.append("detay_email", detay_email);
        formData.append("telefon", telefon);
        formData.append("mesaj", mesaj);
        formData.append("sayfa", sayfa);
        formData.append("dil", dil);
        return {
          url: `product_information_form`,
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const {
  useGetNewProductsQuery,
  useGetBlogsQuery,
  useGetNewsQuery,
  usePostContactMutation,
  usePostProductRequestMutation,
} = formApi;
