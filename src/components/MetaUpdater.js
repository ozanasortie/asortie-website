"use client";
import { useEffect } from "react";

const MetaUpdater = ({ title, description, image, locale, id }) => {
  useEffect(() => {
    const formattedTitle = `${title} | Asortie`;
    document.title = formattedTitle;

    const newUrl = `${window.location.origin}/${locale}/blog/${id}-${title
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    // URL'yi yalnızca yeni URL ile değiştiriyoruz, mevcut path'i temizliyoruz
    if (window.location.href !== newUrl) {
      // URL'yi tamamen değiştirmek için, önce tüm path'i sıfırlıyoruz
      window.location.replace(newUrl); // Sayfayı yeni URL'ye yönlendiriyoruz
    }
  }, [title, locale, id]);

  return null;
};

export default MetaUpdater;
