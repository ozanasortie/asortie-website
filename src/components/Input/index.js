"use client";
import { Input as ChakraInput } from "@chakra-ui/react";

export default function Input({
  color = "white",
  textColor = "white",
  outline = "none",
  width = "100%",
  height = "56px",
  className = "w-full",
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
      _placeholder={{ color: "white" }}
      type={type}
    />
  );
}
