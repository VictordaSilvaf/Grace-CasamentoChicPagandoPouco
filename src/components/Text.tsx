import type { FC, HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const Text: FC<TextProps> = ({ text, className = '' }) => {
  return <p className={`text-left text-[#404040] text-[15px] ${className}`}>{text}</p>;
};

export default Text;
