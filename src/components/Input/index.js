import { Input as ChakraInput } from "@chakra-ui/react";

export default function Input({
  name,
  value,
  onChange,
  color = "black",
  textColor = "white",
  outline = "none",
  width = "100%",
  height = "40px",
  className = "w-full",
  borderColor = "#adadad",
  focusBorderColor = "white",
  placeholder = "",
  type = "text",
  containerStyle,
  error,
  errorText,
}) {
  return (
    <div className={`w-full ${containerStyle}`}>
      <ChakraInput
        name={name}
        value={value}
        onChange={onChange}
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
        fontSize={13}
      />
      {error && <div className="text-red-500 mt-2 text-sm">{errorText}</div>}
    </div>
  );
}
