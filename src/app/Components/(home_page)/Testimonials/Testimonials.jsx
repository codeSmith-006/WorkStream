"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../UI/Button";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Product Manager",
        company: "TechCorp",
        image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 5,
        quote:
            "WorkStream transformed how our team collaborates. We've increased our project delivery speed by 40% and everyone loves the intuitive interface.",
    },
    {
        name: "Michael Rodriguez",
        role: "Startup Founder",
        company: "StartupXYZ",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 4,
        quote:
            "As a growing startup, we needed something that could scale with us. WorkStream's flexibility and powerful features have been game-changing for our remote team.",
    },
    {
        name: "Emily Johnson",
        role: "Department Head",
        company: "UniverCity",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        quote:
            "Our students and faculty love using WorkStream for collaborative projects. The learning curve is minimal and the results are outstanding.",
    },
    {
        name: "David Kim",
        role: "Creative Director",
        company: "AgencyPro",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        rating: 3,
        quote:
            "Managing multiple client projects used to be chaotic. WorkStream brought order to our workflow and our clients love the transparency it provides.",
    },
];

const trustLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "StartupXYZ", logo: "🚀" },
    { name: "UniverCity", logo: "🎓" },
    { name: "AgencyPro", logo: "🎨" },
    { name: "DataFlow", logo: "📊" },
    { name: "CloudTech", logo: "☁️" },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    return (
        <section className="py-20 bg-card overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Loved by teams worldwide
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of teams who have transformed their productivity with WorkStream
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="border-2 border-border rounded-2xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="p-8 md:p-12 text-center">
                                {/* Stars */}
                                <motion.div
                                    className="flex justify-center mb-6"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                                    ))}
                                </motion.div>

                                {/* Quote */}
                                <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </blockquote>

                                {/* Author */}
                                <motion.div
                                    className="flex items-center justify-center space-x-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <div className="font-semibold text-foreground">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card shadow-lg border border-border hover:bg-primary/10 hover:scale-110 transition-all"
                        onClick={prevTestimonial}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card shadow-lg border border-border hover:bg-primary/10 hover:scale-110 transition-all"
                        onClick={nextTestimonial}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary scale-125" : "bg-muted"
                                    }`}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Logos */}
                <motion.div
                    className="border-t border-border pt-12"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-center text-muted-foreground mb-8">
                        Trusted by teams at these companies and many more
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {trustLogos.map((company, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <span className="text-2xl">{company.logo}</span>
                                <span className="text-lg font-semibold text-foreground">{company.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2"><CountUp start={6000} end={10000} duration={5}></CountUp>+</div>
                        <div className="text-muted-foreground">Active Teams</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2"><CountUp start={1} end={4} duration={5}></CountUp>/5</div>
                        <div className="text-muted-foreground">User Rating</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2"><CountUp start={2} end={10} duration={5}></CountUp>%</div>
                        <div className="text-muted-foreground">Uptime</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
