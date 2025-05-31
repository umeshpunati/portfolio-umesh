import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "C", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Java", level: 70 },
  ];

  const technicalSkills = [
    { name: "Arduino", icon: "🔧" },
    { name: "Raspberry Pi", icon: "🥧" },
    { name: "ESP32", icon: "📡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MySQL", icon: "🗄️" },
    { name: "AWS", icon: "☁️" },
    { name: "AI/ML", icon: "🧠" },
  ];

  const softSkills = [
    "Communication",
    "Time Management", 
    "Problem-Solving",
    "Graphic Design",
    "Team Collaboration"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary-dark mb-6">Programming Languages</h3>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">{skill.name}</span>
                    <span className="text-slate-600">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={isVisible ? skill.level : 0} 
                    className="h-3"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary-dark mb-6">Technical Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="hover:bg-primary/5 transition-colors duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h4 className="font-semibold text-slate-700">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary-dark mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-6 py-3 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
