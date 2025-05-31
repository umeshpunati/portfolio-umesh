import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Tourism Advisor using AWS",
      description: "Developed a cloud-based Tourism Advisor leveraging AWS services for personalized travel recommendations. Integrated AI/ML models for analyzing user preferences and suggesting destinations, accommodations, and activities.",
      image: "🌍",
      technologies: ["AWS", "AI/ML", "Cloud Computing", "Frontend"],
      colors: ["bg-orange-100 text-orange-700", "bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-purple-100 text-purple-700"]
    },
    {
      title: "Fire Extinguisher Bot",
      description: "Designed an autonomous fire-detecting bot using Arduino Uno, equipped with IR sensors and motors to identify and respond to fire hazards in real-time, enhancing safety measures in enclosed environments.",
      image: "🚒",
      technologies: ["Arduino", "IR Sensors", "Robotics", "Safety"],
      colors: ["bg-red-100 text-red-700", "bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-purple-100 text-purple-700"]
    },
    {
      title: "People Count Using IoT",
      description: "Developed an IoT-based system using IR sensors and MQTT/HTTP protocols for real-time people counting and monitoring, enhancing operational efficiency in smart buildings and retail environments.",
      image: "👥",
      technologies: ["IoT", "MQTT", "IR Sensors", "Real-time"],
      colors: ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-purple-100 text-purple-700", "bg-orange-100 text-orange-700"]
    },
    {
      title: "Stock Table Management",
      description: "Developed a comprehensive system for managing stock addition, updates, and inventory tracking using C and data structures, ensuring efficient inventory management with optimal performance.",
      image: "📦",
      technologies: ["C", "Data Structures", "Inventory", "Management"],
      colors: ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-purple-100 text-purple-700", "bg-orange-100 text-orange-700"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions across IoT, AI/ML, and web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video w-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-secondary-dark">{project.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={`${project.colors[techIndex]} font-medium`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="link" className="text-primary hover:text-primary/80 font-semibold p-0">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="ghost" size="icon" className="text-slate-600 hover:text-primary">
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
