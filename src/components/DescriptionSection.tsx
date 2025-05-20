import type { FC, ReactNode } from "react";

interface DescriptionSectionProps {
  children: ReactNode;
}

const DescriptionSection: FC<DescriptionSectionProps> = ({ children }) => {
  return <p className="uppercase text-center mt-1 text-[#404040] opacity-80 text-[15px]">{children}</p>;
};

export default DescriptionSection;
