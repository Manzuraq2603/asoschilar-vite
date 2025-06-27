import React from "react";
import logo from "../assets/logo.svg";

function Footer() {
    return (
        <section className="bg-[#F2F2F7] w-full">
            <div className="max-w-7xl mx-auto px-10 py-16  ">
                <div className="max-w-[704px] bg-amber-500">
                    <a className="flex" href="logo" width={142} height={50}>
                        <img src={logo} alt="logo" />
                    </a>
                    <p className="pt-[66px]">
                        ©2025 Barcha huquqlar himoyalangan.
                    </p>
                </div>
                <div className="max-w-[200px] w-full bg-green-700">
                    <h3 className="font-semibold text-2xl leading-8 tracking-[-0.6]">
                        Linklar
                    </h3>
                    <ul className=" mt-4">
                        <li className="pb-3">
                            <a
                                className="font-medium text-base leading-6 hover:text-amber-600"
                                href="#"
                            >
                                Xizmatlar
                            </a>
                        </li>
                        <li  className="pb-3">
                            <a
                                className="font-medium text-base leading-6 hover:text-amber-600"
                                href="#"
                            >
                                Konsultatsiya
                            </a>
                        </li>
                        <li>
                            <a
                                className="font-medium text-base leading-6 hover:text-amber-600"
                                href="#"
                            >
                                Natijalar
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
