"use client"

import { useEffect } from 'react';
import { BarChart3, Calendar, CheckSquare, Clock, MessageSquare, Shield, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

export default function NeedToSucceed() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
        });
    }, []);

    const coreFeatures = [
        {
            icon: CheckSquare,
            title: 'Task Management',
            description: 'Assign & track tasks easily with smart prioritization and automated workflows.'
        },
        {
            icon: Calendar,
            title: 'Timelines & Milestones',
            description: 'Stay on track with interactive Gantt charts and milestone tracking.'
        },
        {
            icon: MessageSquare,
            title: 'Team Communication',
            description: 'Real-time chat & discussions integrated directly into your projects.'
        },
        {
            icon: BarChart3,
            title: 'Reports & Analytics',
            description: 'Track progress & performance with comprehensive project insights.'
        }
    ];

    const detailedFeatures = [
        {
            title: 'Smart Project Planning',
            description: 'AI-powered project planning that adapts to your team\'s workflow and suggests optimal task sequences.',
            features: [
                'Intelligent task dependencies',
                'Resource allocation optimization',
                'Timeline predictions',
                'Risk assessment alerts'
            ],
            image: 'https://images.unsplash.com/photo-1681366099753-f904192f17bb?...'
        },
        {
            title: 'Collaborative Workspace',
            description: 'Everything your team needs in one unified workspace. Share files, communicate, and collaborate seamlessly.',
            features: [
                'Real-time collaborative editing',
                'File sharing & version control',
                'Team messaging & video calls',
                'Custom workspace templates'
            ],
            image: 'https://images.unsplash.com/photo-1670851050245-d861fd433d06?...'
        }
    ];

    return (
        <section id="features" className="py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Core Features Overview */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Everything you need to succeed
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Powerful features designed to streamline your workflow and boost team productivity
                    </p>
                </div>

                {/* Core Features */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    {coreFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="border-2 border-border rounded-xl hover:border-primary/50 transition-colors group bg-card shadow-sm hover:shadow-lg"
                        >
                            <div className="p-6 text-center">
                                <motion.div
                                    whileHover={{ rotate: 10 }}
                                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                                >
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </motion.div>
                                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Detailed Features */}
                <div className="space-y-20">
                    {detailedFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {feature.features.map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <CheckSquare className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-sm text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                <div className="relative" data-aos="zoom-in">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={1080}
                                        height={720}
                                        className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                                    />
                                    <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Features */}
                <div className="mt-20 pt-20 border-t border-border" data-aos="fade-up">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            And much more...
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Users, title: 'Team Management', desc: 'Role-based permissions' },
                            { icon: Zap, title: 'Automation', desc: 'Workflow automation' },
                            { icon: Shield, title: 'Security', desc: 'Enterprise-grade security' },
                            { icon: Clock, title: 'Time Tracking', desc: 'Built-in time tracking' }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
