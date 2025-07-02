import React, { useEffect, useRef, useState } from "react";
import call from "../assets/call.svg";
import vctor from "../assets/vector.svg";

function Consultation() {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxYpZMpHBD889oAVNVTvmuSaLQ1bp9VxohATn9pYJtKogQc2jztxFw7xvTejXlW3xX4bA/exec";

    const formRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const form = formRef.current;

        const handleSubmit = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then((response) => {
                    console.log("Success!", response);
                    // alert o'rniga modalni ochamiz
                    setModalOpen(true);
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

    // Modalni yopish funksiyasi
    const closeModal = () => setModalOpen(false);

    // Home page ga qaytish (misol uchun root / ga yo'naltirish)
    const goToHome = () => {
        window.location.href = "/";
    };

    return (
        <section className="md:pt-20 md:pb-20 pt-[60px] pb-[100px]">
            <div className="max-w-7xl mx-auto px-10 flex justify-between md:gap-3 gap-6 md:flex-row flex-col">
                <div className="md:max-w-[535px] max-w-full w-full  ">
                    <button className="bg-[#F2F2F7] py-2 px-4 flex items-center justify-between rounded-lg text-base cursor-pointer">
                        <img className="mr-2 w-4 h-4" src={call} alt="" />
                        Biz bilan bog’laning
                    </button>
                    <h2 className="font-semibold md:text-3xl text-xl md:mt-4 mt-3">
                        Konsultatsiyaga yoziling va biznesingizni
                        tizimlashtiring
                    </h2>
                </div>

                <form
                    ref={formRef}
                    className="md:max-w-[568px] max-w-full w-full bg-gradient-to-br from-[#FEFEFE] via-[#FAFAFA] to-[#F9F9F9] border border-[#E2E8F0] p-6 rounded-3xl"
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

            {/* Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 md:max-w-[430px] max-w-[327px] w-full mx-4 relative border border-[#E4E9EE]"
                        onClick={(e) => e.stopPropagation()} // Modal ichida clickni oldini olish
                    >
                        <button
                            className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
                            onClick={closeModal}
                            aria-label="close modal"
                        >
                            ×
                        </button>
                        <div className="w-[70px] h-[70px] bg-[#d9e7dc] mb-[31px] rounded-[50%] mx-auto flex items-center justify-center">
                            <img
                                src={vctor}
                                alt="Success"
                                className=""
                                width={35}
                                height={25}
                            />
                        </div>
                        <h3 className="text-center text-lg font-semibold mt-6 mb-3 leading-[140%] tracking-[-0.2px]">
                        Konsultatsiyaga muvaffaqiyatli yozildingiz!
                        </h3>
                        <p className=" text-center mb-8 text-[#818B9C] font-normal text-xs leading-[160%]">Operatorlar 24 soat ichida siz bilan bog’lanishadi.</p>
                        <button
                            onClick={goToHome}
                            className="bg-[#0F172A] text-white py-2 px-4 rounded w-full cursor-pointer  hover:text-amber-600"
                        >
                            Bosh sahifaga qaytish
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Consultation;
