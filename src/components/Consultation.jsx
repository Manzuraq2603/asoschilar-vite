import React from "react";
import { useEffect, useRef } from "react";
import call from "../assets/call.svg";

function Consultation() {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxYpZMpHBD889oAVNVTvmuSaLQ1bp9VxohATn9pYJtKogQc2jztxFw7xvTejXlW3xX4bA/exec";

    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;

        const handleSubmit = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then((response) => {
                    console.log("Success!", response);
                    alert("Yuborildi! Tez orada bog'lanamiz.");
                    form.reset();
                })
                .catch((error) => {
                    console.error("Error!", error.message);
                    alert("Xatolik yuz berdi. Qayta urinib ko‘ring.");
                });
        };

        form.addEventListener("submit", handleSubmit);

        // Cleanup
        return () => form.removeEventListener("submit", handleSubmit);
    }, []);

    return (
        <section className="mt-20">
            <div className="max-w-7xl mx-auto px-10 flex justify-between md:gap-3 gap-6 md:flex-row flex-col">
                <div className="max-w-[535px] w-full md:sticky static md:top-[120px] top-0 md:h-screen h-auto">
                    <button className="bg-[#F2F2F7] py-2 px-4 flex items-center justify-between rounded-lg text-base cursor-pointer mb-4">
                        <img className="mr-2 w-4 h-4" src={call} alt="" />
                        Biz bilan bog’laning
                    </button>
                    <h2 className="font-semibold md:text-3xl text-xl">
                        Konsultatsiyaga yoziling va biznesingizni
                        tizimlashtiring
                    </h2>
                </div>

                <form
                    ref={formRef}
                    className="max-w-[568px] w-full bg-gradient-to-br from-[#FEFEFE] via-[#FAFAFA] to-[#F9F9F9] border border-[#E2E8F0] p-6 rounded-3xl"
                    name="submit-to-google-sheet"
                >
                    <label className="block mb-2" htmlFor="ism">
                        Ism
                    </label>
                    <input
                        className="border border-[#D9D9D9] w-full py-3 px-4 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-base mb-6"
                        type="text"
                        placeholder="To’liq ismingiz"
                        id="ism"
                        name="firstname"
                        required
                    />

                    <label className="block mb-2" htmlFor="number">
                        Telefon raqam
                    </label>
                    <input
                        className="border border-[#D9D9D9] w-full py-3 px-4 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-base mb-6"
                        type="tel"
                        placeholder="+998 _ _  _ _ _  _ _  _ _"
                        id="number"
                        name="phone"
                        required
                    />

                    <label className="block mb-2" htmlFor="comp">
                        Kompaniyangiz
                    </label>
                    <input
                        className="border border-[#D9D9D9] w-full py-3 px-4 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-base mb-8"
                        type="text"
                        placeholder="Kompaniyangiz nomi"
                        id="comp"
                        name="Kompaniyangiz"
                    />

                    <button
                        type="submit"
                        className="text-white md:text-sm text-xs font-medium leading-6 bg-[#0F172A] py-2 md:px-4 px-3 rounded-lg cursor-pointer w-full"
                    >
                        Konsultatsiyaga yozilish
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Consultation;
