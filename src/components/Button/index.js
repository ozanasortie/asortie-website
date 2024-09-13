"use client";

import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({
  isLoading,
  type,
  background = "none",
  hoverBgColor = "none",
  hoverColor = "none",
  color = "white",
  size = 20,
  text,
  children,
  onClick,
  className,
  fontWeight,
  textSize,
}) {
  return (
    <ChakraButton
      isLoading={isLoading}
      type={type}
      className={`flex items-center justify-center h-[53px] rounded-lg group ${className}`}
      color={color}
      background={background}
      size={size}
      onClick={onClick}
      _hover={{
        backgroundColor: hoverBgColor,
        color: hoverColor,
        transform: "scale(1.01)",
        transition: "transform 0.2s ease-in-out",
      }}
      _active={{
        backgroundColor: hoverBgColor,
      }}
    >
      {children}
      {text && (
        <div
          className={`font-light text-lg group-hover:text-theme-color motion-safe:transition ${fontWeight} ${textSize}`}
        >
          {text}
        </div>
      )}
    </ChakraButton>
  );
}
