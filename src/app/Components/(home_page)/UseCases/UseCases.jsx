"use client";

import * as React from "react";
import { Rocket, Building2, User, GraduationCap } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Utility function (clsx + tailwind-merge)
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
// Animation Variants
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};


// Card Components
function Card({ className, ...props }) {
    return (
        <div
            data-slot="card"
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
                className,
            )}
            {...props}
        />
    );
}

function CardContent({ className, ...props }) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6 [&:last-child]:pb-6", className)}
            {...props}
        />
    );
}

// Use Cases Data
const useCases = [
    {
        icon: Rocket,
        title: "Startups",
        description: "Move fast and stay organized",
        benefits: [
            "Rapid project execution",
            "Lean team coordination",
            "Growth-focused analytics",
            "Affordable scaling",
        ],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Building2,
        title: "Enterprises",
        description: "Scale operations efficiently",
        benefits: [
            "Enterprise-grade security",
            "Advanced integrations",
            "Custom workflows",
            "Dedicated support",
        ],
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: User,
        title: "Freelancers",
        description: "Manage client projects professionally",
        benefits: [
            "Client collaboration tools",
            "Time tracking & billing",
            "Project templates",
            "Professional reports",
        ],
        color: "from-green-500 to-teal-500",
    },
    {
        icon: GraduationCap,
        title: "Education",
        description: "Enhance learning through collaboration",
        benefits: [
            "Student project management",
            "Assignment tracking",
            "Group collaboration",
            "Progress monitoring",
        ],
        color: "from-orange-500 to-red-500",
    },
];

// Main Component
export default function UseCases() {
    return (
        <section className="py-20 bg-muted/30 dark:bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    >
                        Perfect for every team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Whether you're a startup, enterprise, freelancer, or educational institution,
                        WorkStream adapts to your unique needs
                    </motion.p>
                </div>

                {/* Use Cases Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {useCases.map((useCase, index) => (
                        <motion.div key={index} variants={cardVariant} className="h-full">
                            <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 group flex flex-col">
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center group-hover:shadow-lg mb-4`}
                                    >
                                        <useCase.icon className="w-6 h-6 text-white" />
                                    </motion.div>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                                        <p className="text-muted-foreground mb-4">{useCase.description}</p>
                                    </div>

                                    {/* Benefits */}
                                    <ul className="space-y-2">
                                        {useCase.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-foreground">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                    ))}
                </motion.div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg text-muted-foreground mb-6"
                    >
                        Ready to see how WorkStream can transform your workflow?
                    </motion.p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Start Free Trial
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            Schedule Demo
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
