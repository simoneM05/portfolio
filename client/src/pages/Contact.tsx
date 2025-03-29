import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

function Contact() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="contact" className="py-20 pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-light-muted max-w-2xl mx-auto">
            Have a project in mind or want to discuss a job opportunity? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-dark-surface p-6 rounded-lg border border-dark-border">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dark-card p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:john.doe@example.com" 
                    className="text-light-muted hover:text-secondary transition-colors"
                  >
                    john.doe@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-card p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-light-muted">San Francisco, California</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-card p-3 rounded-full mr-4">
                  <i className="fas fa-globe text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Social Profiles</h4>
                  <div className="mt-2">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-dark-border">
              <h4 className="font-medium mb-4">Available for freelance work:</h4>
              <div className="flex items-center text-success">
                <i className="fas fa-check-circle mr-2"></i>
                <span>Currently Available</span>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-surface p-6 rounded-lg border border-dark-border">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
