"use client";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import Container from "../Container";
import Link from "next/link";

const ContactUsContent = dynamic(() => import("../ContactUsContent"), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 h-[200px]" />,
});

const BackgroundEffects = memo(() => (
  <div
    className="absolute inset-0 pointer-events-none select-none"
    aria-hidden="true"
  >
    {/* Base gradient sphere */}
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#E8DED4]/30 via-[#E5EFDC]/20 to-[#E8DED4]/30 
                   blur-3xl animate-slow-pulse"
    />

    {/* Subtle decorative elements */}
    <div className="absolute inset-0">
      <div
        className="absolute top-0 left-0 right-0 h-[2px] 
                     bg-gradient-to-r from-transparent via-[#3B7D46]/20 to-transparent"
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] 
                     bg-gradient-to-r from-transparent via-[#3B7D46]/20 to-transparent"
      />
    </div>

    {/* Soft floating accents */}
    <div
      className="absolute top-[15%] right-[10%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                   rounded-full bg-[#E5EFDC]/10 blur-2xl animate-float-slow"
    />

    <div
      className="absolute bottom-[20%] left-[8%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]
                   rounded-full bg-[#E5EFDC]/15 blur-2xl animate-float-slower"
    />

    {/* Subtle dot matrix */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at center, #2A5A36 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />
  </div>
));

BackgroundEffects.displayName = "BackgroundEffects";

const ContactDetails = memo(() => (
  <div className="flex flex-col space-y-8">
    <div className="space-y-4">
      <span
        className="text-xs sm:text-sm tracking-[0.4em] text-[#2A5A36] uppercase relative inline-block
                    before:content-[''] before:absolute before:-bottom-2 before:left-0
                    before:w-12 before:h-0.5 before:bg-gradient-to-r 
                    before:from-[#2A5A36]/70 before:to-transparent"
      >
        Contact Us
      </span>
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-merriweather
                   bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                   bg-clip-text text-transparent
                   animate-gradient-x bg-[length:200%_auto]
                   drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]"
      >
        Get in Touch
      </h2>
      <p className="text-gray-600 max-w-md font-poppins leading-relaxed">
        We'd love to hear from you. Please fill out the form or reach out using
        the information below.
      </p>
    </div>

    <div className="space-y-6">
      {[
        {
          icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
          title: "Location",
          content: "Glaspak Solutions Sdn Bhd\nE-2-32 Taipan 2, Jalan PJU 1A/3A\nAra Damansara, Petaling Jaya\n47301 Selangor",
        },
        {
          icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          title: "Email",
          content: "enquiry@phoenix-pac.com",
        },
        {
          icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
          title: "Phone",
          content: "+603-7842 6269",
        },
      ].map((item, index) => (
        <div
          key={item.title}
          className="group flex items-start space-x-4 p-6 rounded-xl
                    bg-[#336B44]/5 hover:bg-[#336B44]/10
                    border border-[#7BAF7B]/20 hover:border-[#7BAF7B]/30
                    transition-all duration-300
                    backdrop-blur-sm min-h-[120px]"
        >
          <div className="relative w-12 h-12 flex-shrink-0">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#336B44] to-[#2A5A36]
                          rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <svg
              className="relative z-10 w-full h-full p-3 text-[#FFD700]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d={item.icon} />
            </svg>
          </div>
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <h3 className="font-medium text-[#2A5A36] group-hover:text-[#336B44]
                         transition-colors duration-300 text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 whitespace-pre-line text-sm break-words">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
));

const ContactForm = memo(() => {
  const inputClasses = `mt-1 block w-full px-4 py-3 bg-white/80 backdrop-blur-sm
                     border border-[#7BAF7B]/30 rounded-lg shadow-sm
                     focus:ring-[#336B44] focus:border-[#336B44]
                     transition-all duration-300
                     hover:border-[#7BAF7B]/50`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(`
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Subject: ${formData.get("subject")}
Message: ${formData.get("message")}
    `);

    window.location.href = `mailto:enquiry@phoenix-pac.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 sm:p-8 rounded-2xl
                   bg-gradient-to-br from-[#336B44]/5 to-transparent
                   backdrop-blur-sm border border-[#7BAF7B]/20
                   shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#2A5A36]"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#2A5A36]"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#2A5A36]"
          >
            Phone
          </label>
          <input type="tel" name="phone" id="phone" className={inputClasses} />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[#2A5A36]"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#2A5A36]"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#336B44] to-[#2A5A36]
                       text-white font-medium rounded-lg
                       hover:from-[#2A5A36] hover:to-[#336B44]
                       transition-all duration-300 shadow-lg
                       hover:shadow-xl hover:scale-[1.02]
                       focus:ring-2 focus:ring-offset-2 focus:ring-[#336B44]"
      >
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = "ContactForm";
ContactDetails.displayName = "ContactDetails";

const ContactUs = memo(() => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative w-full bg-gradient-to-b from-[#EDE5DB] to-[#E5DED4] 
                py-12 sm:py-16 lg:py-24 overflow-hidden z-[1] 
                font-poppins transition-opacity duration-700
                scroll-mt-20 shadow-[inset_0_4px_20px_rgba(0,0,0,0.05)]
                ${inView ? "opacity-100" : "opacity-0"}`}
      aria-label="Contact Information"
    >
      <BackgroundEffects />

      <Container>
        {/* Add a breadcrumb navigation */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#336B44]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#336B44]">Contact Us</span>
        </div>

        {/* Main content */}
        <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactDetails />
          <ContactForm />
        </div>

        {/* Add a map section */}
        <div className="mt-16 pt-16 border-t border-[#7BAF7B]/20">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <span className="text-xs sm:text-sm md:text-base font-poppins tracking-[0.4em] 
                           text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                           before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                           before:-translate-x-1/2 before:w-12 before:h-0.5 
                           before:bg-gradient-to-r before:from-transparent 
                           before:via-[#2A5A36]/70 before:to-transparent">
              Our Location
            </span>

            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                             bg-gradient-to-r from-[#2A5A36]/40 to-transparent hidden lg:block" />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                             bg-gradient-to-l from-[#2A5A36]/40 to-transparent hidden lg:block" />

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                            font-bold font-merriweather text-center mb-3 sm:mb-4
                            bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                            bg-clip-text text-transparent relative
                            animate-gradient-x bg-[length:200%_auto]
                            drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
                Find Us Here
              </h3>
            </div>

            <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                         text-xs sm:text-sm md:text-base leading-relaxed
                         drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                         font-medium">
              Visit Our Office in Ara Damansara
            </p>
          </div>

          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7989046040454!2d101.57310187586583!3d3.1196575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4e8401555555%3A0x66cf29db1968e0d0!2sPhoenix%20Packaging!5e0!3m2!1sen!2smy!4v1706246164595!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Phoenix Packaging Location"
            />
          </div>
        </div>
      </Container>
    </section>
  );
});

ContactUs.displayName = "ContactUs";
export default ContactUs;
