import { GraduationCap, School, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const educationData = [
    {
      year: "2022 - 2026",
      title: "B.Tech in IoT",
      institution: "KL University, Vijayawada, Andhra Pradesh",
      cgpa: "8.7",
      specialization: "AI & ML Specialization",
      icon: GraduationCap,
      color: "bg-primary",
      side: "left"
    },
    {
      year: "2022",
      title: "12th Grade",
      institution: "Harvest Public School, Khammam",
      cgpa: "7.5",
      icon: School,
      color: "bg-accent",
      side: "right"
    },
    {
      year: "2020",
      title: "10th Grade",
      institution: "Harvest Public School, Khammam",
      cgpa: "8.7",
      icon: Award,
      color: "bg-emerald-500",
      side: "left"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary"></div>
            
            {/* Education items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 ${item.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  
                  <div className={`ml-16 md:ml-0 ${
                    item.side === "left" 
                      ? "md:w-1/2 md:pr-8 md:text-right" 
                      : "md:w-1/2 md:pl-8 md:ml-auto"
                  }`}>
                    <Card className="shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className={`font-semibold mb-1 ${
                          item.color === "bg-primary" ? "text-primary" :
                          item.color === "bg-accent" ? "text-accent" : "text-emerald-600"
                        }`}>
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-secondary-dark mb-2">{item.title}</h3>
                        <p className="text-slate-600 mb-3">{item.institution}</p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-lg font-semibold text-emerald-600">CGPA: {item.cgpa}</span>
                          {item.specialization && (
                            <Badge className="bg-primary/10 text-primary">
                              {item.specialization}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
