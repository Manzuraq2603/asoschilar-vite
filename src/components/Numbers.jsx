import React from "react";

function Numbers() {
    return (
        <section className="max-w-7xl mx-auto px-10  md:pt-16 md:pb-0 pt-[60px] pb-[60px]">
            <div className="  flex md:justify-center justify-start  ">
                <h2 className="font-semibold lg:text-3xl md:text-2xl text-xl leading-9 tracking-[-0.75%]">
                    Biz raqamlarga ishonamiz!
                </h2>
            </div>
            <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-8 md:py-16 py-6">

                <li className="bg-linear-[102.43deg,#FEFEFE_16.88%,#F9F9F9_104.88%] lg:max-w-[276px] max-w-full w-full md:p-8 p-6 rounded-3xl  border border-[#E2E8F0] ">
                    <h3 className="font-semibold text-2xl  leading-8 tracking-[-0.6%]  text-[#0F172A] ">
                        10+
                    </h3>
                    <p className="font-normal text-base  leading-7 mt-2 text-[#334155]">
                        Muvaffaqiyatli yakunlangan loyihalarimiz
                    </p>
                </li>

                <li className="bg-linear-[102.43deg,#FEFEFE_16.88%,#F9F9F9_104.88%] lg:max-w-[276px] max-w-full w-full p-8 rounded-3xl  border border-[#E2E8F0] ">
                    <h3 className="font-semibold text-2xl  leading-8 tracking-[-0.6%]  text-[#0F172A] ">
                    2 yil
                    </h3>
                    <p className="font-normal text-base  leading-7 mt-2 text-[#334155]">
                    Loyihalar bilan ishlashda tajriba
                    </p>
                </li>

                <li className="bg-linear-[102.43deg,#FEFEFE_16.88%,#F9F9F9_104.88%] lg:max-w-[276px] max-w-full w-full p-8 rounded-3xl  border border-[#E2E8F0] ">
                    <h3 className="font-semibold text-2xl  leading-8 tracking-[-0.6%]  text-[#0F172A] ">
                    5 yil
                    </h3>
                    <p className="font-normal text-base  leading-7 mt-2 text-[#334155]">
                    Boshqaruv bo’yicha real loyihalarda tajriba
                    </p>
                </li>

                <li className="bg-linear-[102.43deg,#FEFEFE_16.88%,#F9F9F9_104.88%] lg:max-w-[276px] max-w-full w-full p-8 rounded-3xl  border border-[#E2E8F0] ">
                    <h3 className="font-semibold text-2xl  leading-8 tracking-[-0.6%]  text-[#0F172A] ">
                        6
                    </h3>
                    <p className="font-normal text-base  leading-7 mt-2 text-[#334155]">
                    Tajribali mutaxasislardan tashkil topgan jamoa
                    </p>
                </li>


            </ul>

            <div className=" flex items-center justify-center">
                <button className="text-white md:text-xs text-sm  font-medium md:leading-6 leading-5 bg-[#0F172A] md:py-2 py-3.5 md:px-3 px-6 rounded-lg cursor-pointer  hover:text-amber-600">
                    Konsultatsiyaga yozilish
                </button>
            </div>
        </section>
    );
}

export default Numbers;
