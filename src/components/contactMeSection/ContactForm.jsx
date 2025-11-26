import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { animated, useSpring } from "@react-spring/web";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      {success && (
        <animated.p 
          className="text-[#4DB6FF] text-center mb-4 font-medium"
          style={useSpring({ from: { opacity: 0, y: -10 }, to: { opacity: 1, y: 0 } })}
        >
          {success}
        </animated.p>
      )}
      <form ref={form} onSubmit={sendEmail} className="w-full">
        {/* Name + Email side-by-side on md+, stacked on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full glass h-12 px-4 text-[#E8F1FF] font-medium placeholder-muted focus:outline-none focus:ring-2 focus:ring-[#4DB6FF]/30 focus:border-transparent transition-all duration-200"
            value={name}
            onChange={handleName}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full glass h-12 px-4 text-[#E8F1FF] font-medium placeholder-muted focus:outline-none focus:ring-2 focus:ring-[#4DB6FF]/30 focus:border-transparent transition-all duration-200"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            className="w-full glass p-4 text-[#E8F1FF] font-medium placeholder-muted focus:outline-none focus:ring-2 focus:ring-[#4DB6FF]/30 focus:border-transparent transition-all duration-200 resize-none min-h-[140px] md:min-h-[180px]"
            value={message}
            onChange={handleMessage}
          />
        </div>

        <animated.div className="flex justify-center" style={useSpring({ from: { opacity: 0, y: 6 }, to: { opacity: 1, y: 0 } })}>
          <animated.button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-2.5 min-h-[48px] text-lg theme-btn whitespace-nowrap overflow-hidden"
          >
            Send Message
          </animated.button>
        </animated.div>
      </form>
    </div>
  );
};

export default ContactForm;
