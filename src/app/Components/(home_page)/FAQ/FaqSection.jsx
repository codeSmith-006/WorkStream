"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is WorkStream?",
    answer:
      "WorkStream is a project management and team collaboration platform that helps teams plan, organize, and track projects efficiently with task management, timelines, communication, and file sharing.",
  },
  {
    question: "Who can use WorkStream?",
    answer:
      "WorkStream is designed for startups, growing teams, and large organizations that need to improve collaboration, productivity, and accountability in project-based environments.",
  },
  {
    question: "What features does WorkStream provide?",
    answer:
      "WorkStream provides task management, timeline tracking, team communication, file sharing, and advanced collaboration tools all in one place.",
  },
  {
    question: "Is WorkStream secure?",
    answer:
      "Yes. WorkStream ensures that all project data is stored securely, with role-based access control and encrypted file storage to keep your information safe.",
  },
  {
    question: "Can I integrate WorkStream with other tools?",
    answer:
      "Yes. WorkStream can integrate with popular productivity tools like Google Drive, Slack, and other APIs to extend its functionality.",
  },
  {
    question: "Is WorkStream free to use?",
    answer:
      "WorkStream offers both free and premium plans. The free plan is great for small teams, while premium plans include advanced features and unlimited collaboration.",
  },
  {
    question: "Do I need technical knowledge to use WorkStream?",
    answer:
      "No. WorkStream is built with a user-friendly interface that requires no technical expertise, making it easy for anyone to get started quickly.",
  },
  {
    question: "Can WorkStream support remote teams?",
    answer:
      "Yes. WorkStream is perfect for remote teams, offering real-time collaboration, communication, and file sharing, ensuring everyone stays connected.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border cursor-pointer border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-muted-foreground">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
