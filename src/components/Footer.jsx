
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Heart, ExternalLink, ArrowUp, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'Frontend Design', href: '#' },
    { name: 'React Applications', href: '#' },
    { name: 'API Integration', href: '#' },
    { name: 'UI/UX Design', href: '#' }
  ];

  return (
    <footer className="bg-[hsl(var(--background))] border-t-2 border-gray-200 mt-16">
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
         
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[hsl(var(--primary))] p-2 rounded-lg">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Muhammad Talha</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web experiences. 
              Always learning, always coding, always growing.
            </p>
            
            
            <div className="flex space-x-3">
              <button
                onClick={() => openLink("https://github.com/iamtalhacui")}
                className="bg-gray-100 hover:bg-[hsl(var(--primary))] text-gray-700 hover:text-white p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md"
              >
                <Github size={18} />
              </button>
              <button
                onClick={() => openLink("www.linkedin.com/in/m-talha-mern")}
                className="bg-gray-100 hover:bg-[hsl(var(--primary))] text-gray-700 hover:text-white p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md"
              >
                <Linkedin size={18} />
              </button>
              <button
                onClick={() => openLink("https://www.instagram.com/mr_talha_here/")}
                className="bg-gray-100 hover:bg-[hsl(var(--primary))] text-gray-700 hover:text-white p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md"
              >
                <Instagram size={18} />
              </button>
              <button
                onClick={() => openLink("mailto:imtalha.dev@gmail.com")}
                className="bg-gray-100 hover:bg-[hsl(var(--primary))] text-gray-700 hover:text-white p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-md"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[hsl(var(--primary))] text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-600 hover:text-[hsl(var(--primary))] text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="text-[hsl(var(--primary))] mt-0.5" size={16} />
                <div>
                  <p className="text-gray-600 text-sm">imtalha.dev@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-[hsl(var(--primary))] mt-0.5" size={16} />
                <div>
                  <p className="text-gray-600 text-sm">+92 3165772553</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[hsl(var(--primary))] mt-0.5" size={16} />
                <div>
                  <p className="text-gray-600 text-sm">Abbottabad, Pakistan</p>
                </div>
              </div>
            </div>

           
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                <span>Let's Work Together</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>© {currentYear} Muhammad Talha</span>
      
            </div>

            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] text-sm font-medium transition-colors duration-300 group"
            >
              <span className="group-hover:-translate-y-0.5 transition-transform duration-300">
                Back to Top
              </span>
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-8 bottom-24 hidden lg:block">
        <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full opacity-20 animate-pulse"></div>
      </div>
      <div className="absolute left-12 bottom-16 hidden lg:block">
        <div className="w-3 h-3 bg-blue-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>
    </footer>
  );
};

export default Footer;