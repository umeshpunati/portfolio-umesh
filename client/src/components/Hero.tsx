import { Mail, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { label: "IoT Systems", color: "bg-primary/10 text-primary" },
    { label: "Machine Learning", color: "bg-accent/10 text-accent" },
    { label: "Full-Stack Development", color: "bg-emerald-100 text-emerald-700" },
    { label: "AWS Cloud", color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional photo placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-float">
            <svg
              className="w-24 h-24"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6">
            <span className="text-primary-blue">Umesh Chandra</span> Punati
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            IoT Developer & AI/ML Enthusiast | Building innovative solutions with cutting-edge technology
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((skill, index) => (
              <Badge key={index} className={`px-4 py-2 ${skill.color} font-medium`}>
                {skill.label}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:2200100048iot@gmail.com" 
              className="text-slate-600 hover:text-primary-blue transition-colors duration-200 p-2"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:9133462639" 
              className="text-slate-600 hover:text-primary-blue transition-colors duration-200 p-2"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-600 hover:text-primary-blue transition-colors duration-200 p-2"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
