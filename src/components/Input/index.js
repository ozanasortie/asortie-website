"use client";
import { Input as ChakraInput } from "@chakra-ui/react";

export default function Input({
  color = "black",
  textColor = "black",
  outline = "none",
  width = "100%",
  height = "56px",
  className = "w-full",
  borderColor = "black",
  focusBorderColor = "transparent",
  placeholder = "",
  type = "text",
}) {
  return (
    <ChakraInput
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
    />
  );
}
