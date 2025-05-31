import { Award, IdCard, Cog, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      description: "Gained foundational knowledge of cloud computing, AWS services, and cost management, along with basic security and compliance practices.",
      icon: "☁️",
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-500",
      iconColor: "text-orange-700",
      badgeColor: "bg-orange-200 text-orange-800",
      skills: ["Cloud Computing", "AWS Services", "Security"]
    },
    {
      title: "IBM Python Course IdCard",
      organization: "IBM",
      description: "Developed skills in Python programming, data analysis with libraries like NumPy and Pandas, and implementing algorithms effectively.",
      icon: "🐍",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-600",
      iconColor: "text-blue-700",
      badgeColor: "bg-blue-200 text-blue-800",
      skills: ["Python", "Data Analysis", "NumPy/Pandas"]
    },
    {
      title: "IIOT Programming & Automation",
      organization: "Industrial IoT",
      description: "Learned Industrial IoT protocols, PLC programming, and real-time data processing for advanced automation tasks.",
      icon: "🏭",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-green-600",
      iconColor: "text-green-700",
      badgeColor: "bg-green-200 text-green-800",
      skills: ["Industrial IoT", "PLC", "Automation"]
    },
    {
      title: "AI & ML Industrial Automation (Level-2)",
      organization: "TARAS Systems",
      description: "Acquired expertise in applying AI/ML techniques for industrial automation, predictive maintenance, and Python-based automation workflows.",
      icon: "🤖",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-600",
      iconColor: "text-purple-700",
      badgeColor: "bg-purple-200 text-purple-800",
      skills: ["AI/ML", "Automation", "Predictive Maintenance"]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-xl text-slate-600 mt-6">
            Professional certifications and continuous learning achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className={`bg-gradient-to-br ${cert.color} ${cert.borderColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${cert.iconBg} rounded-xl flex items-center justify-center text-2xl`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-dark leading-tight">{cert.title}</h3>
                      <p className={`${cert.iconColor} font-medium`}>{cert.organization}</p>
                    </div>
                  </div>
                  <Award className={`${cert.iconColor.replace('text-', '')} h-6 w-6`} />
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className={`${cert.badgeColor} font-medium`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
