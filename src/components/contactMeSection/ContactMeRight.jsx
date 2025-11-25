import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { animated } from "@react-spring/web";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col mb-8 items-center justify-center gap-12">
      {/* Modern Email Visualization */}
      <animated.div 
        className="relative w-64 h-64"
      >
        {/* Main Email Container */}
        <div className="absolute inset-0 theme-card p-8">
          <div className="h-full flex flex-col justify-center items-center">
            {/* Email Icon */}
            <animated.div 
              className="w-20 h-20 theme-gradient-bg rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
            >
              <div className="text-4xl">📧</div>
            </animated.div>
            
            {/* Email Text */}
            <div className="text-center">
              <h3 className="text-xl font-semibold heading-font text-[#E8F1FF] mb-2">Get In Touch</h3>
              <p className="theme-body-text text-sm leading-relaxed">
                Ready to start a project?<br />
                Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <animated.div
          className="absolute -top-4 -right-4 w-8 h-8 theme-gradient-bg rounded-full"
          style={{ animation: 'pulse1 3s ease-in-out infinite' }}
        />
        <animated.div
          className="absolute -bottom-4 -left-4 w-6 h-6 theme-gradient-bg rounded-full"
          style={{ animation: 'pulse2 3s ease-in-out infinite', animationDelay: '1.5s' }}
        />
        
        {/* Connection Lines */}
        <animated.div
          className="absolute top-1/2 left-0 w-1 h-16 bg-gradient-to-b from-[#1E90FF] to-transparent"
          style={{ animation: 'scaleYWave 2s ease-in-out infinite' }}
        />
        <animated.div
          className="absolute top-1/2 right-0 w-1 h-16 bg-gradient-to-b from-[#4DB6FF] to-transparent"
          style={{ animation: 'scaleYWave 2s ease-in-out infinite', animationDelay: '1s' }}
        />
      </animated.div>
      
      <ContactInfo />
      {/* <ContactSocial /> */}
    </div>
  );
};

export default ContactMeRight;
