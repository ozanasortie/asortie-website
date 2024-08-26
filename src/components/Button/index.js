"use client";

import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({
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
}) {
  return (
    <ChakraButton
      type={type}
      className={`flex items-center justify-center h-[56px] rounded-lg group ${className}`}
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
        <div className="font-light text-lg group-hover:text-theme-color motion-safe:transition">
          {text}
        </div>
      )}
    </ChakraButton>
  );
}
