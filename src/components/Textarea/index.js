"use client";
import { Textarea as ChakraTextarea } from "@chakra-ui/react";

export default function Textarea({
  name,
  containerStyle,
  color = "black",
  textColor = "black",
  outline = "none",
  width = "100%",
  height = "56px",
  className = "w-full",
  borderColor = "black",
  focusBorderColor = "white",
  placeholder = "",
  type = "text",
  error,
  errorText,
  onChange,
  value,
}) {
  return (
    <div className={`w-full ${containerStyle}`}>
      <ChakraTextarea
        name={name}
        color={color}
        textColor={textColor}
        outline={outline}
        width={width}
        height={height}
        className={className}
        focusBorderColor={focusBorderColor}
        placeholder={placeholder}
        _placeholder={{ color: color }}
        type={type}
        borderColor={borderColor}
        onChange={onChange}
        value={value}
      />
      {error && <div className="text-red-500 mt-2">{errorText}</div>}
    </div>
  );
}
