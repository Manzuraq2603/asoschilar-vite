import React from "react";
import thumbsUp from "../assets/thumbs-up.svg";
import customerImg1 from "../assets/customer-img1.svg";
import customerImg2 from "../assets/customer-img2.svg";
import customerImg3 from "../assets/customer-img3.svg";

function Testimonial() {
    return (
        <section className="md:pt-[120px] pt-[60px] md:pb-10 pb-[60px]">
            <div className="flex justify-between md:flex-row flex-col max-w-7xl mx-auto px-10 md:gap-3 gap-6">
                <div className=" max-w-[525px] w-full md:sticky static md:h-screen h-auto md:top-[120px] top-0">
                    <button className="flex gap-2 px-4 py-2 bg-[#F2F2F7] rounded-lg mb-4 cursor-pointer ">
                        <img src={thumbsUp} alt="clown" />
                        <p className="font-normal text-base  leading-6 text-[#0F172A]">
                            Fikrlar
                        </p>
                    </button>
                    <h2 className="max-w-[525px] w-full h-[108px] font-semibold lg:text-3xl md:text-2xl text-xl lg:leading-9 md:leading-8 leading-7 md:tracking-[-0.75%] tracking-[-0.5%]">
                        Mijozlardan samimiy fikrlar
                    </h2>
                </div>

                <div>
                    <ul className="max-w-[588px] ] w-full grid gap-8 ">
                        <li className="flex justify-between items-start lg:gap-6 md:gap-4 gap-3 border-b-2 border-[#F2F2F7] lg:py-10 md:py-8 py-6">
                            <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 rounded-xl ">
                                <img src={customerImg1} alt="customer1" />
                            </div>
                            <div className="max-w-[484px] w-full grid gap-2">
                                <h4 className=" font-semibold lg:text-2xl md:text-xl text-base   tracking-[-0.6%]   leading-[150%]  ">
                                    “Biznesimda kim nima qilayotgani aniq
                                    bo‘ldi. Hozir har kim mas’uliyatini biladi.”
                                </h4>
                                <p className="font-normal md:text-base text-sm leading-7 text-[#334155] ">
                                    — G’ulomjon Mansurov, Print Well kompaniyasi
                                    asoschisi
                                </p>
                            </div>
                        </li>

                        <li className="flex justify-between items-start gap-2 border-b-2 border-[#F2F2F7] lg:py-10 md:py-8 py-6">
                            <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 rounded-xl ">
                                <img src={customerImg2} alt="customer1" />
                            </div>
                            <div className="max-w-[484px] w-full grid gap-2">
                                <h4 className=" font-semibold lg:text-2xl md:text-xl text-base   tracking-[-0.6%]   leading-[150%]  ">
                                    “Biznesimda kim nima qilayotgani aniq
                                    bo‘ldi. Hozir har kim mas’uliyatini biladi.”
                                </h4>
                                <p className="font-normal md:text-base text-sm leading-7 text-[#334155] ">
                                    — Abdulloh Yusupov, Dodo kids kompaniyasi
                                    asoschisi
                                </p>
                            </div>
                        </li>

                        <li className="flex justify-between items-start gap-2 lg:py-10 md:py-8 py-6">
                            <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 rounded-xl ">
                                <img src={customerImg3} alt="customer1" />
                            </div>
                            <div className="max-w-[484px] w-full grid gap-2">
                                <h4 className=" font-semibold lg:text-2xl md:text-xl text-base   tracking-[-0.6%]   leading-[150%]  ">
                                    “Biznesimda kim nima qilayotgani aniq
                                    bo‘ldi. Hozir har kim mas’uliyatini biladi.”
                                </h4>
                                <p className="font-normal md:text-base text-sm leading-7 text-[#334155] ">
                                    — Sherzod Darxonov, Foggi do’konlari CEO’si
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="flex items-center md:justify-start justify-center mt-6 md:mt-0">
                        <button className="py-2 px-4 bg-[#F2F2F7] rounded-lg">
                            Ko’proq ko’rish
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
