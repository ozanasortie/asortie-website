"use client";
import RecommendedSlider from "./RecommendedSlider";

export default function BannerSection({ featureds }) {
  return (
    <div className="relative flex flex-1 max-lg:flex-col w-full box-border overflow-hidden">
      <RecommendedSlider featureds={featureds} />
    </div>
  );
}
