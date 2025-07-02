import React from "react";
import logo from "../assets/logo.svg";
import callCalling from "../assets/call-calling.svg";
import sms from "../assets/sms.svg";
import telegram from "../assets/telegram.svg";

function Footer() {
    return (
        <footer className="bg-[#F2F2F7] py-16 ">
            <div className="max-w-7xl mx-auto px-10 flex justify-between md:flex-row flex-col gap-9">
                <div className="max-w-[295px] w-full flex flex-col justify-between ">
                    <a className="flex" href="logo">
                        <img
                            className="md:w-[142px] md:h-[50px] w-[102.24px] h-9"
                            src={logo}
                            alt="logo"
                        />
                    </a>
                    <p className="md:mt-[66px] mt-4 text-[#64748B] font-medium md:font-semibold lg:font-bold md: text-sm md:text-base leading-6 md:leading-7">
                        ©2025 Barcha huquqlar himoyalangan.
                    </p>
                </div>

                <div className="max-w-[448px] w-full flex sm:flex-row flex-col gap-9">
                    <div className="w-full">
                        <h3 className="font-semibold md:text-2xl  text-lg md:leading-8 leading-7 md:tracking-[-0.6] tracking-[0%] md:mb-4 mb-3">
                            Linklar
                        </h3>
                        <ul className=" grid gap-3">
                            <li>
                                <a
                                    className=" text-[#475569] font-medium text-base leading-6 hover:text-amber-600"
                                    href="#"
                                >
                                    Xizmatlar
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="text-[#475569] font-medium text-base leading-6 hover:text-amber-600"
                                    href="#"
                                >
                                    Konsultatsiya
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-medium text-[#475569] text-base leading-6 hover:text-amber-600"
                                    href="#"
                                >
                                    Natijalar
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <h3 className="font-semibold md:text-2xl  text-lg md:leading-8 leading-7 md:tracking-[-0.6] tracking-[0%] md:mb-4 mb-3">
                            Bog’lanish
                        </h3>
                        <ul className=" grid gap-3">
                            <li>
                                <a
                                    className="flex gap-0.5 text-[#475569] font-medium text-base leading-6 hover:text-amber-600"
                                    href="#"
                                >
                                    <img src={callCalling} alt="call-img" />
                                    +998 99 842 79 79
                                </a>
                            </li>
                            <li>
                                <a
                                    className="flex gap-0.5 text-[#475569] font-medium text-base leading-6 hover:text-amber-600"
                                    href="#"
                                >
                                    <img src={sms} alt="sms-img" />
                                    info@asoschilar.uz
                                </a>
                            </li>
                            <li>
                                <a
                                    className=" flex gap-0.5 font-medium text-[#475569] text-base leading-6 hover:text-amber-600"
                                    href="#"
                                >
                                    <img src={telegram} alt="call-img" />
                                    @asoschilar_bot
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
