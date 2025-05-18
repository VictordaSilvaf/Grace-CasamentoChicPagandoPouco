import type { FC } from "react";

interface TitleSectionProps {
    title: string;
}

const TitleSection:FC<TitleSectionProps>= ({ title }) => {
    return (
        <div className="w-full pb-16 relative" data-aos="zoom-in">
            <div className="-mt-[20px] text-7xl leading-[72px] text-center w-full text-gray-100 z-10 absolute ">{ title }</div>
            <h1 className="z-50 absolute text-[38px] font-bold w-full text-center left-0 -top-2 text-app-primary">{ title }</h1>
        </div>
    )
}

export default TitleSection;