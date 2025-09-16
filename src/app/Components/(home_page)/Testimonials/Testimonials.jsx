import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../UI/Button';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Product Manager',
        company: 'TechCorp',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        quote: 'WorkStream transformed how our team collaborates. We\'ve increased our project delivery speed by 40% and everyone loves the intuitive interface.'
    },
    {
        name: 'Michael Rodriguez',
        role: 'Startup Founder',
        company: 'StartupXYZ',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        quote: 'As a growing startup, we needed something that could scale with us. WorkStream\'s flexibility and powerful features have been game-changing for our remote team.'
    },
    {
        name: 'Emily Johnson',
        role: 'Department Head',
        company: 'UniverCity',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        quote: 'Our students and faculty love using WorkStream for collaborative projects. The learning curve is minimal and the results are outstanding.'
    },
    {
        name: 'David Kim',
        role: 'Creative Director',
        company: 'AgencyPro',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        quote: 'Managing multiple client projects used to be chaotic. WorkStream brought order to our workflow and our clients love the transparency it provides.'
    }
];

const trustLogos = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'StartupXYZ', logo: '🚀' },
    { name: 'UniverCity', logo: '🎓' },
    { name: 'AgencyPro', logo: '🎨' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudTech', logo: '☁️' }
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
        <section className="py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Loved by teams worldwide
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of teams who have transformed their productivity with WorkStream
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    <div className="border-2 border-border rounded-2xl shadow-lg">
                        <div className="p-8 md:p-12">
                            <div className="text-center">
                                {/* Stars */}
                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center justify-center space-x-4">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card shadow-lg border border-border"
                        onClick={prevTestimonial}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card shadow-lg border border-border"
                        onClick={nextTestimonial}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-muted'
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
                <div className="border-t border-border pt-12">
                    <p className="text-center text-muted-foreground mb-8">
                        Trusted by teams at these companies and many more
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        {trustLogos.map((company, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-2xl">{company.logo}</span>
                                <span className="text-lg font-semibold text-foreground">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                        <div className="text-muted-foreground">Active Teams</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                        <div className="text-muted-foreground">User Rating</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                        <div className="text-muted-foreground">Uptime</div>
                    </div>
                </div>
            </div>
        </section>
    );
}