import React, { useEffect, useRef } from 'react';
import { usePopup } from '../context/PopupContext';
import gsap from 'gsap';

const ContactPopup = () => {
  const { isPopupOpen, closePopup } = usePopup();
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block', ease: 'power2.out' });
      gsap.fromTo(modalRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'auto';
      if (modalRef.current && overlayRef.current) {
        gsap.to(modalRef.current, { y: 20, opacity: 0, scale: 0.95, duration: 0.2, ease: 'power2.in' });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none', delay: 0.1, ease: 'power2.in' });
      }
    }
  }, [isPopupOpen]);

  // Use FormSubmit to send direct email
  const formAction = "https://formsubmit.co/hamzadaniyal455@gmail.com";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm hidden"
      onClick={(e) => {
        if(e.target === overlayRef.current) closePopup();
      }}
    >
      <div className="flex items-center justify-center min-h-screen p-4 md:p-6">
        <div
          ref={modalRef}
          className="bg-bg-alt border border-border-main rounded-[2rem] w-full max-w-5xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row opacity-0"
        >

          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center text-white z-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Left Column - Info */}
          <div className="md:w-5/12 bg-black p-10 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border-main relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-valturin tracking-tighter mb-4 text-white">Let's Connect</h2>
              <p className="text-text-muted font-light mb-12">Fill out the form and I'll get back to you as soon as possible to discuss your project.</p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-white text-lg">hamzadaniyal455@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-white text-lg">+92 (333) 230-3315</p>
                </div>
                <div>
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-white text-lg">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-7/12 p-10 md:p-14 bg-bg-main relative">
            <form action={formAction} method="POST" className="flex flex-col gap-6">
              {/* Optional: Add a hidden field to redirect after successful submission. For now we use standard formsubmit.co page */}
              {/* <input type="hidden" name="_next" value="http://localhost:5173/thanks.html" /> */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-text-muted uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-bg-alt border border-border-main rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold text-text-muted uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (234) 567-890"
                    className="bg-bg-alt border border-border-main rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-bg-alt border border-border-main rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-text-muted uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="bg-bg-alt border border-border-main rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300 rounded-full py-4 font-bold tracking-wide text-lg w-full flex justify-center items-center gap-2 group"
              >
                Send Message
                <svg className="transform group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
