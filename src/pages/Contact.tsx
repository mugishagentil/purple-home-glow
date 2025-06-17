
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&h=400&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        {/* Contact Form */}
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us message</h2>
          
          <form className="space-y-4">
            <Input 
              type="text" 
              placeholder="Enter your full name" 
              className="w-full"
            />
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full"
            />
            <Textarea 
              placeholder="Enter your message here..." 
              rows={4}
              className="w-full resize-none"
            />
            <Button className="w-full bg-purple hover:bg-purple-600 text-white">
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </form>
        </div>

        {/* Contact Information Card */}
        <div className="relative z-10 bg-gray-900 text-white rounded-lg p-8 max-w-sm w-full mx-4 ml-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple" />
              <div>
                <p className="text-sm text-gray-300">Phone:</p>
                <p className="font-medium">+250 784 526984</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple" />
              <div>
                <p className="text-sm text-gray-300">Email:</p>
                <p className="font-medium">info@rwandamart.shop</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-purple" />
              <div>
                <p className="text-sm text-gray-300">Times:</p>
                <p className="font-medium">Mon - Sun: 7 AM - 9 PM</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-purple" />
              <div>
                <p className="text-sm text-gray-300">Location:</p>
                <p className="font-medium">Downtown House Kigali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
