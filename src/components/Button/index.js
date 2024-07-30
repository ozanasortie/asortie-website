"use client";

import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({
  background = "none",
  color = "black",
  size = 20,
  text,
  children,
  onClick,
  className,
}) {
  return (
    <ChakraButton
      className={className}
      color={color}
      background={background}
      size={size}
      _hover={"none"}
      _focus={"none"}
      _active={"none"}
      onClick={onClick}
      borderRadius={0}
      justifyContent={"start"}
    >
      {children}
      {text && <div>{text}</div>}
    </ChakraButton>
  );
}
