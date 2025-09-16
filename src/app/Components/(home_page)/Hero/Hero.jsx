"use client";
import Button from "../UI/Button";
import { PlayCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { StarsBackground } from "../Animate-Ui/StarsBackground";

export function Hero() {
  return (
    <section className="relative  pb-12 md:pt-32 md:pb-20">
  {/* Stars Background */}
  <StarsBackground
    
    className="absolute inset-0 z-0"
  />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <section className=" pb-12  md:pb-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Streamline Your Work.{' '}
                <span className="text-primary">Empower Your Team.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                WorkStream helps teams plan, track, and collaborate on projects efficiently with task management, timelines, and real-time communication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg group"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Book a Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by teams at:</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-semibold text-foreground">TechCorp</div>
                <div className="text-lg font-semibold text-foreground">StartupXYZ</div>
                <div className="text-lg font-semibold text-foreground">UniverCity</div>
                <div className="text-lg font-semibold text-foreground">AgencyPro</div>
              </div>
            </div>
          </div>

          {/* Right side mockup */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl p-4 border border-border">
              {/* Browser-like header */}
              <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-border">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-muted-foreground ml-4">app.workstream.com</div>
              </div>
              
              <ImageWithFallback
                src="https://i.postimg.cc/QMjWCx8v/dashboard-preview.jpg"
                alt="WorkStream Dashboard Preview"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              ✨ AI-Powered
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              📊 Real-time Analytics
            </div>
          </div>
        </div>
      </div>
    </section>
     </div>
</section>
  );
}