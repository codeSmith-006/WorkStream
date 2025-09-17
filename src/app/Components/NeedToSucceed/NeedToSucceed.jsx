"use client"

import { motion } from "framer-motion"
import {
    BarChart,
    CheckSquare,
    Clock,
    FileText,
    Lock,
    MessageSquare,
    Settings,
    Users
} from "lucide-react"
import Image from "next/image"

const NeedToSucceed = () => {
    const coreFeatures = [
        {
            icon: CheckSquare,
            title: "Task Management",
            description: "Assign, track, and manage tasks with ease."
        },
        {
            icon: Clock,
            title: "Timelines",
            description: "Stay on schedule with clear project timelines."
        },
        {
            icon: MessageSquare,
            title: "Communication",
            description: "Collaborate seamlessly with built-in chat."
        },
        {
            icon: BarChart,
            title: "Reports",
            description: "Track progress with smart insights."
        }
    ]

    const detailedFeatures = [
        {
            title: "Smart Project Planning",
            description: "Easily structure your project with intuitive tools that help you define goals, set deadlines, and assign responsibilities.",
            image: 'https://images.unsplash.com/photo-1681366099753-f904192f17bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc3NTcxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            features: [
                "Drag-and-drop task organization",
                "Customizable project templates",
                "Milestone tracking"
            ]
        },
        {
            title: "Collaborative Workspace",
            description: "Bring your team together in a shared space where everyone can contribute, communicate, and stay aligned.",
            image: 'https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTc3NzY5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            features: [
                "Real-time document collaboration",
                "Integrated team chat",
                "Role-based access control"
            ]
        }
    ]

    const additionalFeatures = [
        {
            icon: Users,
            title: "Team Management",
            desc: "Easily manage roles and permissions for your team."
        },
        {
            icon: Settings,
            title: "Automation",
            desc: "Automate repetitive tasks to save valuable time."
        },
        {
            icon: Lock,
            title: "Security",
            desc: "Enterprise-grade security to keep your data safe."
        },
        {
            icon: Clock,
            title: "Time Tracking",
            desc: "Built-in tools to track time spent on projects."
        }
    ]

    return (
        <section className="py-24 bg-card relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(to_bottom,white,transparent,white)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Everything You Need To Succeed
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Streamline your workflow with powerful features designed to help you achieve your goals faster.
                    </p>
                </motion.div>

                {/* Core Features */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
                <div className="space-y-32">
                    {detailedFeatures.map((feature, index) => (
                        <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                            }`}>
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
                                        <div key={idx} className="flex items-center space-x-3">
                                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <CheckSquare className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-sm text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                <div className="relative">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={1080}   // must
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
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32"
                >
                    {additionalFeatures.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-4 rounded-xl hover:shadow-lg transition-shadow bg-card"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3"
                            >
                                <item.icon className="w-5 h-5 text-primary" />
                            </motion.div>
                            <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default NeedToSucceed
