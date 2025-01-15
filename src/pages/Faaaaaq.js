'use client';
import React from "react";
import i18n from "../components/Layout/Languages/i18n"; 

import { useRef, useState } from "react";


const FaqsCard = ({ faqsList, idx }) => {
    const answerElRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState('0px');

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current?.childNodes[0]?.scrollHeight || 0;
        setIsOpen(!isOpen);
        setAnswerHeight(isOpen ? '0px' : `${answerElH + 20}px`);
    };

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={{ height: answerHeight }}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    );
};

function FaqPage () {
    const [language, setLanguage] = useState('en');

    const faqsList = [
        {
            q: i18n.t("What services does your consultancy offer?", { lng: language }),
            a: i18n.t("We offer a wide range of consultancy services including business strategy, market analysis, financial planning, and operational efficiency.", { lng: language })
        },
        {
            q: i18n.t("How do I know if I need a consultant?", { lng: language }),
            a: i18n.t("If you're facing challenges in your business, seeking to improve efficiency, or looking for expert advice to drive growth, a consultant can provide valuable insights and solutions.", { lng: language })
        },
        {
            q: i18n.t("What is the process for engaging your consultancy services?", { lng: language }),
            a: i18n.t("The process typically starts with an initial consultation to understand your needs, followed by a detailed proposal outlining our approach, timeline, and costs.", { lng: language })
        },
        {
            q: i18n.t("Are your consultancy services industry-specific?", { lng: language }),
            a: i18n.t("Our consultants have experience across various industries, allowing us to provide tailored solutions that are relevant to your specific business sector.", { lng: language })
        },
        {
            q: i18n.t("How can consultancy services help improve my business performance?", { lng: language }),
            a: i18n.t("Consultancy services can identify inefficiencies, provide strategic advice, and implement best practices, all of which contribute to improved business performance and growth.", { lng: language })
        }
    ];

    const handleLanguageChange = (lng) => {
        setLanguage(lng);
    };

    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="flex justify-end space-x-4">
                    <button 
                        onClick={() => handleLanguageChange('en')} 
                        className="text-white bg-blue-600 px-4 py-2 rounded">
                        English
                    </button>
                    <button 
                        onClick={() => handleLanguageChange('no')} 
                        className="text-white bg-blue-600 px-4 py-2 rounded">
                        Norsk
                    </button>
                </div>
            </nav>
            <section className="leading-relaxed mx-auto px-4 pt-12 md:px-8 bg-gradient-to-br from-blue-200 via-gray-100">
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        {i18n.t("FaqTitle", { lng: language })}
                    </h1>
                    <p className="text-gray-600 max-w-6xl mx-auto text-lg">
                        {i18n.t("Answered all frequently asked questions, Still confused? Feel free to contact us.", { lng: language })} 
                        <span className="font-bold"> {i18n.t("Still confused?", { lng: language })} </span>
                        <a href="https://sam-it-ub.netlify.app/contactForm" className="text-orange-700 font-bold"> {i18n.t("contact us", { lng: language })} </a>.
                    </p>
                </div>
                <div className="mt-14 max-w-6xl mx-auto">
                    {
                        faqsList.map((item, idx) => (
                            <FaqsCard
                                key={idx}
                                idx={idx}
                                faqsList={item}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default FaqPage;
