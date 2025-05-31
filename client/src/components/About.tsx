import { MapPin, GraduationCap, Star, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Telangana, India" },
    { icon: GraduationCap, label: "Education", value: "B.Tech IoT (2026)" },
    { icon: Star, label: "CGPA", value: "8.7" },
    { icon: Award, label: "Certified", value: "AWS Certified" },
  ];

  const interests = [
    { icon: "🔧", label: "IoT Development" },
    { icon: "🧠", label: "AI & Machine Learning" },
    { icon: "☁️", label: "Cloud Computing" },
    { icon: "🎨", label: "Graphic Design" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary-dark">Passionate IoT Developer & AI Enthusiast</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a B.Tech student in IoT with specialization in AI & ML at KL University, passionate about creating 
              innovative solutions that bridge the physical and digital worlds. My expertise spans across IoT systems, 
              machine learning, and full-stack development.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With hands-on experience in Arduino, Raspberry Pi, and modern web technologies, I enjoy building projects 
              that solve real-world problems. From fire detection systems to cloud-based tourism advisors, I'm always 
              exploring new ways to apply technology meaningfully.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-xl font-semibold text-secondary-dark mb-4">Quick Facts</h4>
                <ul className="space-y-3">
                  {quickFacts.map((fact, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                      <fact.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{fact.label}:</span>
                      <span>{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-secondary-dark mb-4">Interests</h4>
                <ul className="space-y-3">
                  {interests.map((interest, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                      <span className="text-xl">{interest.icon}</span>
                      <span>{interest.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-6xl shadow-2xl">
              🔧
            </div>
            
            <Card className="absolute -bottom-6 -left-6 shadow-xl bg-primary text-white border-0">
              <CardContent className="p-6">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </CardContent>
            </Card>
            
            <Card className="absolute -top-6 -right-6 shadow-xl bg-accent text-white border-0">
              <CardContent className="p-6">
                <div className="text-3xl font-bold">4+</div>
                <div className="text-sm opacity-90">Certifications</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
