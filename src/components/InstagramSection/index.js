"use client";
import { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function InstagramSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex w-full justify-center pt-4">
      <InstagramEmbed
        url="https://www.instagram.com/asortiemobilya/"
        width={700}
      />
    </div>
  );
}
