"use client";
import { PhoneInput as Phone } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneInput({
  name,
  value,
  onChange,
  color = "black",
  textColor = "white",
  outline = "none",
  width = "100%",
  height = "56px",
  className = "w-full",
  borderColor = "black",
  focusBorderColor = "white",
  placeholder = "",
  containerStyle,
  error,
  errorText,
  inputClassName = "",
  buttonClassName = "",
}) {
  return (
    <div className={`w-full ${containerStyle}`}>
      <Phone
        name={name}
        defaultCountry={"tr"}
        value={value}
        onChange={onChange}
        color={color}
        textColor={textColor}
        outline={outline}
        className={"w-full mt-5"}
        borderColor={borderColor}
        placeholder={placeholder}
        focusBorderColor={focusBorderColor}
        width={width}
        height={height}
        inputClassName={`w-full !h-[56px] !text-base !border-black ${inputClassName}`}
        countrySelectorStyleProps={{
          className: "!h-[56px]",
          buttonClassName:
            "!h-[56px] !border-black !border-r-0 !pl-4" + " " + buttonClassName,
        }}
      />
      {error && <div className="text-red-500 mt-2 text-sm">{errorText}</div>}
    </div>
  );
}
