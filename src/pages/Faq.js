'use client'
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

const FaqsCard = ({ faqsList, idx }) => {
    const answerElRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [answerHeight, setAnswerHeight] = useState('0px')

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current?.childNodes[0]?.scrollHeight || 0
        setIsOpen(!isOpen)
        setAnswerHeight(isOpen ? '0px' : `${answerElH + 20}px`)
    }

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
    )
}

function FaqPage () {
    const { t } = useTranslation()

    const faqsList = [
        {
            q: t("faq.servicesQuestion"),
            a: t("faq.servicesAnswer")
        },
        {
            q: t("faq.needConsultantQuestion"),
            a: t("faq.needConsultantAnswer")
        },
        {
            q: t("faq.engagementProcessQuestion"),
            a: t("faq.engagementProcessAnswer")
        },
        {
            q: t("faq.industrySpecificQuestion"),
            a: t("faq.industrySpecificAnswer")
        },
        {
            q: t("faq.businessPerformanceQuestion"),
            a: t("faq.businessPerformanceAnswer")
        }
    ];

    return (
        <section className="leading-relaxed mx-auto px-4 pt-24 md:px-8 bg-gradient-to-br from-blue-200 via-gray-100">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    {t("faq.pageTitle")}
                </h1>
                <p className="text-gray-600 max-w-6xl mx-auto text-lg">
                    {t("faq.pageDescription")} <span className="font-bold"> {t("faq.pageStillConfused")} </span>
                    {t("faq.contactLinkText")}
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
    )
}
export default FaqPage;
