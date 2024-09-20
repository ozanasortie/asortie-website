"use client";
import FormField from "./FormField";
import MapField from "./MapField";

export default function Page({ params }) {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center lg:justify-around pb-10">
      <FormField />
      <MapField />
    </div>
  );
}
