"use clent"
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const FaqPage= () => {
    interface FaqItem {
        question: string;
        answer: string;
      }
    
      const faqData: FaqItem[] = [
        {
          question: "How do I create an account with RAFT?",
          answer: "To create an account with RAFT, follow these simple steps...",
        },
        {
          question: "How does RAFT ensure the security of my financial data?",
          answer: "At RAFT, we take the security of your financial data very seriously. We use industry-standard encryption...",
        },
        {
          question: "What types of transactions can I perform with RAFT?",
          answer: "With RAFT, you can perform a wide range of transactions, including...",
        },
        {
          question: "What benefits does RAFT offer for wealth management?",
          answer: "RAFT offers several benefits for wealth management, such as...",
        },
      ];
    
      const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="border-b shadow-md p-4">
            <div
              className="flex items-center justify-between"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <h2 className="text-xl font-semibold">{item.question}</h2>
              <BsChevronDown
                className={`transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
              />
            </div>
            {activeIndex === index && (
              <p className="text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;

