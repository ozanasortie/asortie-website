import RecommendedSlider from "./RecommendedSlider";

export default function BannerSection({ featureds }) {
  return (
    <div className="relative flex flex-1 items-center justify-center max-lg:flex-col px-4 lg:px-page w-full box-border overflow-hidden max-w-[1500px] 2xl:max-w-[1700px]">
      <RecommendedSlider featureds={featureds} />
    </div>
  );
}
