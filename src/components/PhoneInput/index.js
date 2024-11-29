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
  className = "w-full",
  borderColor = "#adadad",
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
        className={`w-full mt-2 ${className}`}
        borderColor={borderColor}
        placeholder={placeholder}
        focusBorderColor={focusBorderColor}
        width={width}
        inputClassName={`w-full !h-[40px] !text-[13px] !text-sm !border-[#adadad] ${inputClassName}`}
        countrySelectorStyleProps={{
          className: "!h-[40px] !text-[13px] ",
          buttonClassName:
            "!h-[40px] !text-[13px] !border-[#adadad] !border-r-0 !pl-4" + " " + buttonClassName,
        }}
      />
      {error && <div className="text-red-500 mt-2 text-sm">{errorText}</div>}
    </div>
  );
}
