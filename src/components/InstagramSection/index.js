"use client";
import { InstagramEmbed } from "react-social-media-embed";

export default function InstagramSection({}) {
  return (
    <div className="flex w-full justify-center pt-4">
      <InstagramEmbed
        url="https://www.instagram.com/asortiemobilya/"
        width={700}
      />

      {/* <iframe
        src="https://www.youtube.com/channel/UCUNag5nQXWxWS9qMe1-B1qw"
        width="100%"
        height="685"
      ></iframe> */}
    </div>
  );
}
