'use client'
import { useRef, useState } from "react"

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
    const faqsList = [
        {
            q: "What services does your consultancy offer?",
            a: "We offer a wide range of consultancy services including business strategy, market analysis, financial planning, and operational efficiency."
        },
        {
            q: "How do I know if I need a consultant?",
            a: "If you're facing challenges in your business, seeking to improve efficiency, or looking for expert advice to drive growth, a consultant can provide valuable insights and solutions."
        },
        {
            q: "What is the process for engaging your consultancy services?",
            a: "The process typically starts with an initial consultation to understand your needs, followed by a detailed proposal outlining our approach, timeline, and costs."
        },
        {
            q: "Are your consultancy services industry-specific?",
            a: "Our consultants have experience across various industries, allowing us to provide tailored solutions that are relevant to your specific business sector."
        },
        {
            q: "How can consultancy services help improve my business performance?",
            a: "Consultancy services can identify inefficiencies, provide strategic advice, and implement best practices, all of which contribute to improved business performance and growth."
        }
    ];
    
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
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
