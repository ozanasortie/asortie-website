"use client";

import { Button as ChakraButton } from "@chakra-ui/react";
import classNames from "classnames";

export default function Button({
  background = "none",
  color = "white",
  size = 20,
  text,
  children,
  onClick,
  className,
}) {
  return (
    <ChakraButton
      className={classNames([
        className,
        "w-full flex items-center justify-center h-[56px] rounded-lg group",
      ])}
      color={color}
      background={background}
      size={size}
      onClick={onClick}
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
