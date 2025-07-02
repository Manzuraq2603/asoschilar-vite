import React from "react";
import crown from "../assets/crown.svg";
import button from "../assets/button.svg";
import sale from "../assets/sale-button.svg";
import hr from "../assets/hr-button.svg";
import marketing from "../assets/marketing-button.svg";
import legal from "../assets/legal-button.svg";

function Services() {
    return (
        <section className="md:pt-[120px] pt-20 md:pb-[104px] pb-[60px] ">
            <div className="flex justify-between md:flex-row flex-col max-w-7xl mx-auto px-10 md:gap-3 gap-6">
                <div className=" max-w-[535px] w-full md:sticky static md:h-screen h-auto md:top-[120px] top-0">
                    <button className="flex gap-2 px-4 py-2 bg-[#F2F2F7] rounded-lg mb-4 cursor-pointer ">
                        <img src={crown} alt="clown" />
                        <p className="font-normal text-base  leading-6 text-[#0F172A]">
                            Xizmatlarimiz
                        </p>
                    </button>
                    <h2 className="max-w-[525px] w-full h-[108px] font-semibold lg:text-3xl md:text-2xl text-xl lg:leading-9 md:leading-8 leading-7 tracking-[-0.75%]">
                        Tizim bo‘lmasa rivojlanish to‘xtab qoladi. Biz sizga
                        quyidagi yo‘nalishlarda amaliy yordam beramiz.
                    </h2>
                </div>

                <div className="max-w-[588px]  w-full grid gap-8">
                    <div className=" flex justify-between gap-4 border-b-2 border-[#F2F2F7] pb-8">
                        <div className=" w-[52px] h-[52px]  rounded-xl  bg-[#F2F2F7] flex items-center justify-center">
                            <img src={button} alt="button" />
                        </div>

                        <div className="max-w-[520px] w-full grid gap-2">
                            <h3 className="font-semibold lg:text-2xl md:text-xl text-base md:leading-8 leading-7 tracking-[-0.6%] ">
                                Umumiy boshqaruvni tizimlashtirish
                            </h3>
                            <ul className="mt-2 font-normal md:text-base text-sm  text-[#334155] ">
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>
                                    <p>Tashkiliy struktura (Org. struktura)</p>
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Ichki reglamentlar va tartiblar
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Ish standartlar
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Hisobot tizimi
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex justify-between gap-4 border-b-2 border-[#F2F2F7] pb-8 ">
                        <div className=" w-[52px] h-[52px]  rounded-xl  bg-[#F2F2F7] flex items-center justify-center">
                            <img src={sale} alt="button" />
                        </div>

                        <div className="max-w-[520px] w-full grid gap-2">
                            <h3 className="font-semibold lg:text-2xl md:text-xl text-lg md:leading-8 leading-7 tracking-[-0.6%]">
                                Sotuv bo'limi
                            </h3>
                            <ul className="mt-2 font-normal md:text-base text-sm leading-7 text-[#334155] r">
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>
                                    CRM tizimini biznesingizga moslashtirish
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Sotuv voronkasini ishlab chiqish
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Skriptlar va sotuv algoritmlari yaratish
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex justify-between gap-4 border-b-2 border-[#F2F2F7] pb-8 ">
                        <div className=" w-[52px] h-[52px]  rounded-xl  bg-[#F2F2F7] flex items-center justify-center">
                            <img src={hr} alt="button" />
                        </div>

                        <div className="max-w-[520px] w-full grid gap-2">
                            <h3 className="font-semibold lg:text-2xl md:text-xl text-lg md:leading-8 leading-7 tracking-[-0.6%]">
                                HR bo’limi
                            </h3>
                            <ul className="mt-2 font-normal md:text-base text-sm leading-7 text-[#334155] r">
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>
                                    Xodimlar uchun aniq reglamentlar
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    KPI asosida oylik tizimi
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Ishga olish voronkasi (bosqichma-bosqich
                                    jarayon)
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Yangi xodimlar uchun o‘quv dasturi
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex justify-between gap-4 border-b-2 border-[#F2F2F7] pb-8 ">
                        <div className=" w-[52px] h-[52px]  rounded-xl  bg-[#F2F2F7] flex items-center justify-center">
                            <img src={marketing} alt="button" />
                        </div>

                        <div className="max-w-[520px] w-full grid gap-2">
                            <h3 className="font-semibold lg:text-2xl md:text-xl text-lg md:leading-8 leading-7 tracking-[-0.6%]">
                                Marketing bo’limi
                            </h3>
                            <ul className="mt-2 font-normal md:text-base text-sm leading-7 text-[#334155] r">
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>
                                    Notion asosida kontent boshqaruvi
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Kontent plan bilan ishlash va nazorat tizimi
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex justify-between gap-4 ">
                        <div className=" w-[52px] h-[52px]  rounded-xl  bg-[#F2F2F7] flex items-center justify-center">
                            <img src={legal} alt="button" />
                        </div>

                        <div className="max-w-[520px] w-full grid gap-2">
                            <h3 className="font-semibold lg:text-2xl md:text-xl text-lg md:leading-8 leading-7 tracking-[-0.6%]">
                                Yuridik yordam
                            </h3>
                            <ul className="mt-2 font-normal md:text-base text-sm leading-7 text-[#334155] r">
                                <li className="flex gap-[5px] items-center ">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>
                                    Kompaniyani ochish va huquqiy ro‘yxatdan
                                    o‘tkazish
                                </li>
                                <li className="flex items-start   gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Xodimlarni rasmiy ishga olish hujjatlari
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Tijorat sirlarini himoya qilish bo‘yicha
                                    kelishuvlar
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Hamkorlik va xizmat ko‘rsatish shartnomalari
                                </li>
                                <li className="flex items-start  gap-[5px]">
                                    {" "}
                                    <span className="inline-block w-1 h-1 bg-[#334155] rounded-[50%]"></span>{" "}
                                    Soliq yukini optimallashtirish
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
