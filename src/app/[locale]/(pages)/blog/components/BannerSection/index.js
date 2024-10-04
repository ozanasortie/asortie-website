"use client";
import RecommendedSlider from "./RecommendedSlider";

export default function BannerSection({ featureds }) {
  return (
    <div className="relative flex flex-1 items-center justify-center max-lg:flex-col px-4 w-full box-border overflow-hidden">
      <RecommendedSlider featureds={featureds} />
    </div>
  );
}
