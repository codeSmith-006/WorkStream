"use client";
import React from "react";

const docs = [
  {
    title: "Project Overview",
    content:
      "WorkStream is a team management and collaboration platform that helps teams plan, organize, and track projects efficiently. It includes task management, timelines, file sharing, and communication features."
  },
  {
    title: "Getting Started",
    content:
      "To get started, register an account, create a team, and invite your team members. You can then create projects, assign tasks, and monitor progress."
  },
  {
    title: "Task Management",
    content:
      "You can create tasks, assign them to team members, set due dates, and track their completion status. Each task can have comments and attachments."
  },
  {
    title: "Collaboration",
    content:
      "Team members can communicate in real-time, share files, and leave feedback on tasks. Notifications help everyone stay updated."
  },
  {
    title: "FAQs",
    content:
      "Check the FAQ section to get quick answers to common questions. You can also contact support if you need additional help."
  }
];

export default function Documentation() {
  return (
    <section className="bg-gray-900 pt-24 md:pt-32 text-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Documentation</h2>
        <div className="space-y-6">
          {docs.map((doc, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-300">{doc.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
