const BASE_URL = "https://asortie.com/json/";

export async function fetchNews(lang) {
  const response = await fetch(`${BASE_URL}/news_all?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchNewDetail({ slug, lang }) {
  const response = await fetch(
    `${BASE_URL}/new_detail?id=${slug}&dil=${lang}_`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchMostReadedNews(lang) {
  const response = await fetch(`${BASE_URL}/news_most_read_6?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchRecommendedNews(lang) {
  const response = await fetch(`${BASE_URL}/news_most_read?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
