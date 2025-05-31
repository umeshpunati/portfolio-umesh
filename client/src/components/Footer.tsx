import { Mail, Phone, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Umesh Chandra Punati</h3>
          <p className="text-slate-300 mb-6">IoT Developer & AI/ML Enthusiast</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:2200100048iot@gmail.com" 
              className="text-slate-300 hover:text-white transition-colors duration-200 p-2"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:9133462639" 
              className="text-slate-300 hover:text-white transition-colors duration-200 p-2"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-300 hover:text-white transition-colors duration-200 p-2"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-slate-300 hover:text-white transition-colors duration-200 p-2"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400">
              © 2024 Umesh Chandra Punati. All rights reserved. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
