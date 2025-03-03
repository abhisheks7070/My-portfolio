import React from "react";
import profile from '../assets/profile.png'

const WhatsApp = () => {
    const phoneNumber = "7021235201"
    const message = "Hello, I have a question!"

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 flex items-center md:gap-2 gap-1 bg-green-500  hover:bg-green-600 shadow-lg transition duration-300 animate-bounce md:px-2 md:py-1 rounded-full"
        >

            <div className="bg-white md:block md:w-16 md:h-16 w-10 h-10 hidden rounded-full overflow-hidden">
                <img className="object-cover" src={profile} alt="" />
            </div>

            <div
                className="group relative flex items-center justify-center w-16 h-16 rounded-full"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="md:w-10 md:h-10 w-8 h-8"
                />
            </div>
        </a>
    );
};

export default WhatsApp;