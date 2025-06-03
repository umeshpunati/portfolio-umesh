import { useState } from "react";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import resumePdf from "@assets/RESUME.UMESH-1.pdf";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:2200100048iot@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Opening email client",
      description: "Your default email application will open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Umesh_Chandra_Punati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume download started",
      description: "Your download should begin shortly.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "2200100048iot@gmail.com",
      href: "mailto:2200100048iot@gmail.com",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9133462639",
      href: "tel:9133462639",
      color: "bg-accent"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Telangana, India",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-xl text-slate-600 mt-6">
            Let's discuss opportunities and collaborate on innovative projects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-dark">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-slate-600 hover:text-primary transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-slate-600">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-dark">Resume</h4>
                    <Button
                      variant="link"
                      className="text-slate-600 hover:text-primary transition-colors duration-200 p-0 h-auto"
                      onClick={handleResumeDownload}
                    >
                      Download PDF <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary-dark mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Enter the subject"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Enter your message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-sm text-slate-500 text-center">
                  This will open your email client with the message pre-filled
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}