import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../index";

const initialState = {};

const homeSlices = createSlice({
  name: "home",
  initialState,
  reducers: {
    setModal: (state, action) => {
      return action.payload;
    },
  },
});

const homeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNewProducts: build.query({
      query: (lang) => `new_products?dil=${lang}_`,
    }),
    getNews: build.query({
      query: (lang) => `news?dil=${lang}_`,
    }),
    getBlogs: build.query({
      query: (lang) => `blogs?dil=${lang}_`,
    }),
    postContact: build.mutation({
      query: ({ name, email, tel, message, ulke_kodu, dil }) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("tel", tel);
        formData.append("message", message);
        formData.append("ulke_kodu", ulke_kodu || "tr");
        formData.append("dil", dil || "_tr");

        return {
          url: `contact_information_send`,
          method: "POST",
          body: formData,
        };
      },
    }),
    catalogueRequest: build.mutation({
      query: ({ name, email, tel, dil }) => {
        const formData = new FormData();
        formData.append("ad_soyad", name);
        formData.append("email", email);
        formData.append("telefon", tel);
        formData.append("dil", dil || "_tr");

        return {
          url: `catalog_form`,
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
  useCatalogueRequestMutation,
} = homeApi;

const BASE_URL = "https://www.asortie.com/json/";

// Fetch yeni ürünleri
export async function fetchNewProducts(lang) {
  const response = await fetch(`${BASE_URL}/new_products?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

// Fetch haberleri
export async function fetchNews(lang) {
  const response = await fetch(`${BASE_URL}/news?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

// Fetch blogları
export async function fetchBlogs(lang) {
  try {
    const response = await fetch(`${BASE_URL}/blogs?dil=${lang}_`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {}
}

// İletişim formu gönder
export async function postContact({
  name,
  email,
  tel,
  message,
  ulke_kodu,
  dil,
}) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("tel", tel);
  formData.append("message", message);
  formData.append("ulke_kodu", ulke_kodu || "tr"); // varsayılan olarak "tr" kullanıldı
  formData.append("dil", dil || "_tr"); // varsayılan olarak "_tr" kullanıldı

  const response = await fetch(`${BASE_URL}/contact_information_send`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

// Katalog talep formu gönder
export async function catalogueRequest({ name, email, tel, dil }) {
  const formData = new FormData();
  formData.append("ad_soyad", name);
  formData.append("email", email);
  formData.append("telefon", tel);
  formData.append("dil", dil || "_tr");

  const response = await fetch(`${BASE_URL}/catalog_form`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
