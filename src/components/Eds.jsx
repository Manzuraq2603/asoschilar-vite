import React from "react";
import "./Eds.css";
import club from "../assets/asoschilar-club-logo.svg";
import asoschilar from "../assets/asoschilar-logo-horizontal-color.svg";
import event from "../assets/asoschilar-events-logo.svg";

function Eds() {
    return (
        <div className="w-full bg-[#F2F2F7] py-6">
            <div className='max-w-7xl mx-auto px-10'>
                <ul className=" flex items-center justify-between gap-4 hide-after-3 ">
                    <li className="item hover:scale-125 duration-300 ease-in">
                        <img className="w-12 md:w-14 lg:w-16 "
                            src={club}
                            alt="club img"
                            width={66}
                            height={48}
                        />
                    </li>

                    <li className="item hover:scale-125 duration-300 ease-in">
                        <img className="lg:w-[164px] md:w-36  w-24"
                            src={asoschilar}
                            alt="asoschilar img"
                            width={164}
                            height={48}
                        />
                    </li>

                    <li className="item hover:scale-125 duration-300 ease-in">
                        <img className="lg:w-[84px] md:16 w-14"
                            src={event}
                            alt="event img"
                            width={84}
                            height={48}
                        />
                    </li>

                    <li className="item hover:scale-125 duration-300 ease-in">
                        <img className="w-12 md:w-14 lg:w-16 "
                            src={club}
                            alt="club img"
                            width={66}
                            height={48}
                        />
                    </li>

                    <li className="item hover:scale-125 duration-300 ease-in">
                        <img className="lg:w-[164px] md:w-36  w-24"
                             src={asoschilar}
                            alt="asoschilar img1"
                            width={164}
                            height={48}
                        />
                    </li>

                    <li className="item hover:scale-125 duration-300 ease-in">
                        <img className="lg:w-[84px] md:16 w-14"
                            src={event}
                            alt="event img"
                            width={84}
                            height={48}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Eds;
