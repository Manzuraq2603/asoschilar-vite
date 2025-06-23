import React from "react";
import person from "../assets/person.svg";

function Hero() {
    return (
        <div className="md:py-[170px] pt-20 pb-40">
            <div className=" max-w-7xl  mx-auto px-10  flex md:items-center md:justify-between items-start justify-start gap-10 flex-col-reverse md:flex-row  ">
                <div className="md:max-w-121 max-w-full w-full ">
                    <h2 className="font-semibold lg:text-5xl text-3xl leading-[120%] md:mb-3 mb-2">
                        Siz strategiyani o’ylang  Tizimni biz hal qilamiz!
                    </h2>
                    <p className=" md:mb-10  mb-6 font-normal md:text-base text-sm leading-6">
                        Tizimlashtirish orqali har kunlik muammolar bilan ovora
                        bo‘lish <br /> o‘rniga, biznesingizni rivojlantirishga
                        vaqt ajrating.
                    </p>
                    <button className="text-white text-sm font-medium leading-6 bg-[#0F172A] py-2 px-4 rounded-lg cursor-pointer  hover:text-amber-600">
                        {" "}
                        Konsultatsiyaga yozilish
                    </button>
                </div>
                <div className="flex sm:w-[261px] sm:h-[305px] w-[102px] h-30">
                    <img
                        className="rounded-[19px]"
                        src={person}
                        alt="person"
                        width={261}
                        height={305}
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
