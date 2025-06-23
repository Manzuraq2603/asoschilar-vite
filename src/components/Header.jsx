import React from "react";
import logo from "../assets/logo.svg";

function Header() {
    return (
        <>
            <header className="py-4 md:py-5 backdrop-blur-lg bg-[#FEFEFEE5]  sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-10  flex items-center justify-between ">
                    <a className="flex" href="logo" width={102} height={36}>
                        <img
                            className=" w-16  md:w-[102px]"
                            src={logo}
                            alt=""
                        />
                    </a>
                    <ul className="md:flex hidden gap-6">
                        <li>
                            <a
                                className="font-bold text-base leading-6 hover:text-amber-600"
                                href="#"
                            >
                                Xizmatlar
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-bold text-base leading-6 hover:text-amber-600"
                                href="#"
                            >
                                Biz haqimizda
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-bold text-base leading-6 hover:text-amber-600"
                                href="#"
                            >
                                Natijalar
                            </a>
                        </li>
                    </ul>
                    <button className="text-white text-xs md:text-sm font-medium leading-6 bg-[#0F172A] py-2 px-3 md:px-4 rounded-lg cursor-pointer  hover:text-amber-600">
                        Konsultatsiyaga yozilish
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
