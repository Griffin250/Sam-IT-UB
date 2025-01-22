'use client';
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

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
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                )}
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

function FaqPage() {
    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(false); // State to control visibility of extra questions

    const faqsList = [
        { q: t("faq.qn_1"), a: t("faq.ans_1") },
        { q: t("faq.qn_2"), a: t("faq.ans_2") },
        { q: t("faq.qn_3"), a: t("faq.ans_3") },
        { q: t("faq.qn_4"), a: t("faq.ans_4") },
        { q: t("faq.qn_5"), a: t("faq.ans_5") },
        { q: t("faq.qn_6"), a: t("faq.ans_6") },
        { q: t("faq.qn_7"), a: t("faq.ans_7") },
        { q: t("faq.qn_8"), a: t("faq.ans_8") },
        { q: t("faq.qn_9"), a: t("faq.ans_9") },
        { q: t("faq.qn_10"), a: t("faq.ans_10") }
    ];

    const visibleFaqs = showAll ? faqsList : faqsList.slice(0, 5); // Show 5 initially or all if "Read More" is clicked

    return (
        <section className="leading-relaxed mx-auto px-4 pt-24 md:px-8 bg-gradient-to-br from-blue-200 via-gray-100">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    {t("faq.pageTitle")}
                </h1>
                <p className="text-gray-600 max-w-6xl mx-auto text-lg">
                    {t("faq.pageDescription")} <span className="font-bold">{t("faq.pageStillConfused")}</span>
                    {t("faq.contactLinkText")}
                </p>
            </div>
            <div className="mt-14 max-w-6xl mx-auto">
                {visibleFaqs.map((item, idx) => (
                    <FaqsCard key={idx} idx={idx} faqsList={item} />
                ))}
                {!showAll && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 mb-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-800 transition"
                        >
                            {t("faq.readMore")}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default FaqPage;
