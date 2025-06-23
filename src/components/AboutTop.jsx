import React from "react";
import cup from "../assets/cup.svg";

function AboutTop(props) {
    return (
        <div className="md:max-w-[236px] max-w-full w-full  lg:mb-16 mb-6 md:mb-12 md:mx-auto mx-10">
            <button className="flex gap-2 px-4 py-2 bg-[#F2F2F7] rounded-lg mb-4">
                <img src={cup} alt="cup" width={16} height={16} />
                <p className="font-normal text-base leading-6 text-[#0F172A]">
                  {props.btnTitle} 
                </p>
            </button>
            <h2 className="font-semibold lg:text-3xl md:text-2xl text-xl leading-9 tracking-[-0.75%]">
               {props.title}
            </h2>
        </div>
    );
}

export default AboutTop;
