import type { FC, ReactNode } from "react";
import Subtitle from "./Subtitle";
import Text from "./Text";

interface CardHeroProps  {
  children: ReactNode;
  title: string;
  description: string;
}

const CardHero: FC<CardHeroProps> = ({ children, title, description }) => {
  return (
    <div className="card w-1/3 ">
      <div className="flex items-center gap-3.5 mb-7">
        {children}
        <Subtitle text={title} />
      </div>

      <Text className="max-w-80 text-[#404040]" text={description} />
    </div>
  );
};

export default CardHero;
