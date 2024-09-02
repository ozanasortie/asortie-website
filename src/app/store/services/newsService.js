export async function fetchNews(lang) {
  const response = await fetch(`${BASE_URL}/news?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
