import React from "react";
import briefcase from "../assets/briefcase.svg";
import verify from "../assets/verify.svg";
import rulerPen from "../assets/ruler&pen.svg";
import AboutTop from "./AboutTop";

function About() {
    return (
        <section className="md:py-16 py-[60px]">
            <AboutTop
                btnTitle="Bizning qadryatlarimiz?"
                title=" Nega aynan biz?"
            />
            <div className="max-w-7xl mx-auto px-10">
                <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    <li className="bg-linear-[102.43deg,#FEFEFE_16.88%,#F9F9F9_104.88%] md:max-w-[378px] max-w-full w-full p-6 rounded-3xl  border border-[#E2E8F0] ">
                        <div className=" lg:w-12 lg:h-12 md:w-11 md:h-11 w-10 h-10   bg-[#F2F2F7] rounded-xl flex items-center justify-center">
                            <img
                                className="md:w-6 md:h-6 w-5 h-5"
                                src={briefcase}
                                alt="expert-button"
                            />
                        </div>

                        <h3 className="font-semibold md:text-2xl text-xl md:leading-8 leading-7 md:tracking-[-0.6%] racking-[-0.5%] text-[#0F172A] mb-2 mt-8">
                            Expert ko’magi
                        </h3>
                        <p className="font-normal md:text-base text-sm md:leading-7 leading-6 text-[#334155]">
                            Har bir loyihada Ravshan Turg‘unov shaxsan ishtirok
                            etadi.
                        </p>
                    </li>

                    <li className="bg-linear-[102.43deg,#FEFEFE_16.88%,#F9F9F9_104.88%] md:max-w-[378px] max-w-full w-full p-6 rounded-3xl  border border-[#E2E8F0] ">
                        <div className=" lg:w-12 lg:h-12 md:w-11 md:h-11 w-10 h-10    bg-[#F2F2F7] rounded-xl flex items-center justify-center">
                            <img
                                className="md:w-6 md:h-6 w-5 h-5"
                                src={verify}
                                alt="expert-button"
                            />
                        </div>

                        <h3 className="font-semibold md:text-2xl text-xl md:leading-8 leading-7 md:tracking-[-0.6%] racking-[-0.5%] text-[#0F172A] mb-2 mt-8">
                            Sifat va fokus
                        </h3>
                        <p className="font-normal  md:text-base text-sm md:leading-7 leading-6 text-[#334155]">
                            Bir vaqtning o‘zida maksimal 2 tadan ortiq loyiha
                            bilan shug’illanmaydi.
                        </p>
                    </li>

                    <li className="bg-linear-[102.43deg,#FEFEFE_16.88%,#F9F9F9_104.88%] md:max-w-[378px] max-w-full w-full p-6 rounded-3xl  border border-[#E2E8F0] ">
                        <div className="lg:w-12 lg:h-12 md:w-11 md:h-11 w-10 h-10    bg-[#F2F2F7] rounded-xl flex items-center justify-center">
                            <img
                                className="md:w-6 md:h-6 w-5 h-5"
                                src={rulerPen}
                                alt="expert-button"
                            />
                        </div>

                        <h3 className="font-semibold md:text-2xl text-xl md:leading-8 leading-7 md:tracking-[-0.6%] racking-[-0.5%] text-[#0F172A] mb-2 mt-8">
                            Individual yondashuv
                        </h3>
                        <p className="font-normal  md:text-base text-sm md:leading-7 leading-6 text-[#334155]">
                            Tayyor shablonlar emas, sizga mos individual tizim
                            ishlab chiqamiz.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="py-16  flex items-center justify-center">
                <button className="text-white md:text-xs text-sm  font-medium md:leading-6 leading-5 bg-[#0F172A] md:py-2 py-3.5 md:px-3 px-6 rounded-lg cursor-pointer  hover:text-amber-600">
                    Konsultatsiyaga yozilish
                </button>
            </div>
        </section>
    );
}

export default About;
