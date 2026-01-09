import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <div id='contact' className='md:mt-0 mt-150 w-full py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[hsl(var(--foreground))] mb-2'>
          Contact Me
        </h1>
        <div className='rounded-full h-2 w-16 bg-[hsl(var(--primary))] mb-6'></div>

        <div className='transition-all ease-in-out duration-500 border-2 border-gray-300 bg-gradient-to-tr from-blue-50 hover:scale-[1.005] hover:shadow-xl to-[hsl(var(--background))] bg-white rounded-2xl shadow-lg'>
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8'>
            
            
            <div className='space-y-4 lg:space-y-6'>
              <div>
                <h2 className='text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3'>
                  Get In Touch
                </h2>
                <p className='text-gray-600 text-sm sm:text-base lg:text-base leading-relaxed'>
                  I'm always excited to connect with fellow developers, potential clients, and creative minds. 
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you!
                </p>
              </div>

            
              <div className='space-y-3 lg:space-y-4'>
                <div className='flex items-center space-x-3 group'>
                  <div className='bg-blue-100 p-2 lg:p-2.5 rounded-full group-hover:bg-blue-200 transition-colors duration-300'>
                    <Mail className='text-blue-600' size={16} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-sm lg:text-base'>Email</h3>
                    <p className='text-gray-600 text-xs lg:text-sm'>imtalha.dev@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 group'>
                  <div className='bg-green-100 p-2 lg:p-2.5 rounded-full group-hover:bg-green-200 transition-colors duration-300'>
                    <Phone className='text-green-600' size={16} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-sm lg:text-base'>Phone</h3>
                    <p className='text-gray-600 text-xs lg:text-sm'>+92 3165772553</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3 group'>
                  <div className='bg-purple-100 p-2 lg:p-2.5 rounded-full group-hover:bg-purple-200 transition-colors duration-300'>
                    <MapPin className='text-purple-600' size={16} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-sm lg:text-base'>Location</h3>
                    <p className='text-gray-600 text-xs lg:text-sm'>Abbottabad, Pakistan</p>
                  </div>
                </div>
              </div>

             
              <div>
                <h3 className='font-semibold text-gray-800 mb-3 text-sm lg:text-base'>Connect With Me</h3>
                <div className='flex space-x-3'>
                  <button 
                    onClick={() => openLink("https://github.com/iamtalhacui")}
                    className='bg-gray-800 text-white p-2 lg:p-2.5 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
                  >
                    <Github size={16} />
                  </button>
                  <button 
                    onClick={() => openLink("https://www.linkedin.com/in/m-talha-mern/")}
                    className='bg-blue-600 text-white p-2 lg:p-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
                  >
                    <Linkedin size={16} />
                  </button>
                  <button 
                    onClick={() => openLink("https://www.instagram.com/mr_talha_here/")}
                    className='bg-pink-500 text-white p-2 lg:p-2.5 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
                  >
                    <Instagram size={16} />
                  </button>
                </div>
              </div>
            </div>

    
            <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-6 border border-gray-100 relative'>
              <h2 className='text-lg sm:text-xl lg:text-xl font-bold text-gray-800 mb-4'>Send Message</h2>
              
              {submitStatus === 'success' && (
                <div className='mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2'>
                  <CheckCircle className='text-green-600' size={16} />
                  <p className='text-green-800 font-medium text-sm'>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              <div className='space-y-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4'>
                  <div>
                    <label className='block text-xs lg:text-sm font-medium text-gray-700 mb-1'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-3 py-2 lg:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label className='block text-xs lg:text-sm font-medium text-gray-700 mb-1'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-3 py-2 lg:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-xs lg:text-sm font-medium text-gray-700 mb-1'>
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-3 py-2 lg:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400'
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label className='block text-xs lg:text-sm font-medium text-gray-700 mb-1'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className='w-full px-3 py-2 lg:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none'
                    placeholder='Tell me about your project or just say hello!'
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-400 to-[hsl(var(--primary))] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:from-blue-500 hover:shadow-lg transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className='animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent'></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

             
              <div className='hidden lg:block absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full opacity-20 animate-pulse'></div>
              <div className='hidden lg:block absolute -bottom-1 -left-1 w-4 h-4 bg-indigo-200 rounded-full opacity-30 animate-pulse delay-1000'></div>
            </div>
          </div>

         
          <div className='h-1 bg-gradient-to-r from-blue-400 via-[hsl(var(--primary))] to-[hsl(var(--primary-hover))] rounded-b-2xl'></div>
        </div>
      </div>
    </div>
  );
};

export default Contact