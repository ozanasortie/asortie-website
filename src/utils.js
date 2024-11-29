export const slugify = (title = "", id = null) => {
  if (typeof title !== "string") {
    return "";
  }

  const slug = title
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  return id ? `${slug}-${id}` : slug;
};
