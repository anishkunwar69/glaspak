"use client";
import { memo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoMailOutline, IoCallOutline, IoArrowForward } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";

const images = [
  {
    src: "/prodcat1.PNG",
    alt: "Premium Glass Bottles Collection",
  },
  {
    src: "/prodcat2.PNG",
    alt: "Luxury Glass Jars Showcase",
  },
  {
    src: "/prodcat3.jpg",
    alt: "High-end Closure Solutions",
  },
] as const;

const EndContent = memo(({ 
  showSeparator,
  bgColor = "#EDE5DB"
}: { 
  showSeparator: boolean,
  bgColor?: string
}) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isFormFocused, setIsFormFocused] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleFormFocus = () => setIsFormFocused(true);
  const handleFormBlur = (e: React.FocusEvent) => {
    if (!formRef.current?.contains(e.relatedTarget)) {
      setIsFormFocused(false);
    }
  };

  return (
    <Container>
      <div ref={ref} className="relative min-h-[800px] overflow-hidden pt-[76px]">
        {/* Top Separator */}
        {showSeparator && (
          <>
            <div
              className="absolute top-0 inset-x-0 h-24 pointer-events-none"
              aria-hidden="true"
            >
              {/* Gradient Line */}
              <div
                className="absolute top-0 inset-x-0 h-[1px] 
                     bg-gradient-to-r from-transparent via-[#2A5A36]/20 to-transparent"
              />

              {/* Decorative Elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16">
                <div
                  className="absolute top-[1px] left-1/2 -translate-x-1/2 w-px h-4 
                       bg-gradient-to-b from-[#2A5A36]/20 to-transparent"
                />
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-1 h-1 
                       rounded-full bg-[#FFD700]/50"
                />
              </div>

              {/* Subtle Pattern */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `radial-gradient(circle at center, #2A5A36 0.8px, transparent 0.8px)`,
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`relative z-10 ${isFormFocused ? "lg:scale-105" : ""} 
                       transition-transform duration-700`}
          >
            <form
              ref={formRef}
              onFocus={handleFormFocus}
              onBlur={handleFormBlur}
              className={`relative ${bgColor} p-8 sm:p-10 
                       shadow-[0_20px_50px_rgba(42,90,54,0.1)]
                       border border-[#2A5A36]/10 rounded-xl
                       transform-gpu transition-all duration-700`}
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const subject = encodeURIComponent("General Inquiry");
                const body = encodeURIComponent(`
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Message: ${formData.get("message")}
                `);
                window.location.href = `mailto:enquiry@phoenix-pac.com?subject=${subject}&body=${body}`;
              }}
            >
              {/* Form Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span
                  className="text-xs sm:text-sm md:text-base font-poppins tracking-[0.4em] 
                               text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                               before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                               before:-translate-x-1/2 before:w-12 before:h-0.5 
                               before:bg-gradient-to-r before:from-transparent 
                               before:via-[#FFD700]/70 before:to-transparent"
                >
                  Contact Us
                </span>
                <h2
                  className="text-4xl sm:text-5xl font-merriweather font-bold 
                             text-[#2A5A36] mb-4
                             drop-shadow-[0_2px_15px_rgba(154,205,158,0.2)]"
                >
                  Let's
                  <span className="relative ml-3 inline-block text-[#f3c00e]">
                    Talk
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="absolute -bottom-2 left-0 w-full h-1 
                               bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                               origin-left"
                    />
                  </span>
                </h2>
                <p className="text-[#2A5A36]/80 text-sm sm:text-base font-poppins">
                  Get in touch with our packaging experts
                </p>
              </motion.div>

              {/* Floating Input Fields */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {["name", "email"].map((field, index) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative group"
                    >
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        required
                        className="peer w-full bg-transparent pt-6 pb-2 px-4
                                 border-b-2 border-[#2A5A36]/20
                                 focus:border-[#2A5A36] transition-all duration-300
                                 outline-none placeholder-transparent"
                        placeholder={
                          field === "email" ? "Email Address" : "Your Name"
                        }
                      />
                      <label
                        className="absolute left-4 top-4 text-[#2A5A36]/40
                                     transition-all duration-300 pointer-events-none
                                     peer-focus:text-xs peer-focus:top-1 
                                     peer-focus:text-[#2A5A36]
                                     peer-valid:text-xs peer-valid:top-1
                                     capitalize"
                      >
                        {field === "email" ? "Email Address" : "Your Name"}
                      </label>
                      <div
                        className="absolute bottom-0 left-0 w-0 h-0.5 
                                  bg-gradient-to-r from-[#FFD700] to-[#E5B700] 
                                  transition-all duration-300
                                  group-hover:w-full"
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative group"
                >
                  <input
                    type="tel"
                    name="phone"
                    className="peer w-full bg-transparent pt-6 pb-2 px-4
                             border-b-2 border-[#2A5A36]/20
                             focus:border-[#2A5A36] transition-all duration-300
                             outline-none placeholder-transparent"
                    placeholder="Phone (Optional)"
                  />
                  <label
                    className="absolute left-4 top-4 text-[#2A5A36]/40
                                 transition-all duration-300 pointer-events-none
                                 peer-focus:text-xs peer-focus:top-1 
                                 peer-focus:text-[#2A5A36]
                                 peer-valid:text-xs peer-valid:top-1"
                  >
                    Phone (Optional)
                  </label>
                  <div
                    className="absolute bottom-0 left-0 w-0 h-0.5 
                              bg-gradient-to-r from-[#FFD700] to-[#E5B700] 
                              transition-all duration-300
                              group-hover:w-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative group"
                >
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="peer w-full bg-transparent pt-6 pb-2 px-4
                             border-b-2 border-[#2A5A36]/20
                             focus:border-[#2A5A36] transition-all duration-300
                             outline-none placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    className="absolute left-4 top-4 text-[#2A5A36]/40
                                 transition-all duration-300 pointer-events-none
                                 peer-focus:text-xs peer-focus:top-1 
                                 peer-focus:text-[#2A5A36]
                                 peer-valid:text-xs peer-valid:top-1"
                  >
                    Your Message
                  </label>
                  <div
                    className="absolute bottom-0 left-0 w-0 h-0.5 
                              bg-gradient-to-r from-[#FFD700] to-[#E5B700] 
                              transition-all duration-300
                              group-hover:w-full"
                  />
                </motion.div>
              </div>

              {/* Contact Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <button
                  type="submit"
                  className="relative overflow-hidden group w-full sm:w-auto 
                           px-8 py-4 bg-[#2A5A36] text-white rounded-xl
                           font-medium tracking-wide flex items-center 
                           justify-center space-x-2
                           transition-all duration-500
                           before:absolute before:inset-0 
                           before:bg-gradient-to-r before:from-[#FFD700] before:to-[#E5B700]
                           before:translate-x-[-101%] before:transition-transform
                           before:duration-500 hover:before:translate-x-0
                           before:z-[-1]"
                >
                  <span className="relative z-10">Send Message</span>
                  <IoMailOutline
                    className="relative z-10 text-xl 
                                        group-hover:rotate-12 transition-transform duration-300"
                  />
                </button>

                <div className="flex items-center gap-6">
                  <a
                    href="tel:+60378426269"
                    className="group flex items-center gap-2 text-[#2A5A36]
                              hover:text-[#44875A] transition-colors duration-300"
                  >
                    <IoCallOutline
                      className="text-xl group-hover:rotate-12 
                                          transition-transform duration-300"
                    />
                    <span className="text-sm relative">
                      +603-7842 6269
                      <span
                        className="absolute left-0 bottom-0 w-0 h-px 
                                   bg-current transition-all duration-300
                                   group-hover:w-full"
                      />
                    </span>
                  </a>
                  <div className="h-4 w-px bg-[#2A5A36]/20" />
                  <a
                    href="mailto:enquiry@phoenix-pac.com"
                    className="group flex items-center gap-2 text-[#2A5A36]
                              hover:text-[#44875A] transition-colors duration-300"
                  >
                    <IoMailOutline
                      className="text-xl group-hover:rotate-12 
                                          transition-transform duration-300"
                    />
                    <span className="text-sm relative">
                      Email Us
                      <span
                        className="absolute left-0 bottom-0 w-0 h-px 
                                   bg-current transition-all duration-300
                                   group-hover:w-full"
                      />
                    </span>
                  </a>
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Section - Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`relative z-10 ${isFormFocused ? "lg:scale-95" : ""} 
                       transition-transform duration-700`}
          >
            <div className="h-full flex flex-col justify-center">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8"
              >
                <h2
                  className="text-4xl sm:text-5xl font-merriweather font-bold 
                             text-[#2A5A36] mb-4
                             drop-shadow-[0_2px_15px_rgba(154,205,158,0.2)]"
                >
                  Explore
                  <span className="relative ml-3 inline-block text-[#f3c00e]">
                    Our Range
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="absolute -bottom-2 left-0 w-full h-1 
                               bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                               origin-left"
                    />
                  </span>
                </h2>
                <p className="text-[#2A5A36]/80 text-sm sm:text-base font-poppins">
                  Discover our complete collection of premium glass packaging
                  solutions
                </p>
              </motion.div>

              {/* Interactive Image Gallery */}
              <div className="relative flex-1 min-h-[500px]">
                <div className="absolute inset-0 grid grid-cols-3 gap-4">
                  <motion.div
                    key={0}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: hoveredImage === 0 ? -10 : 0,
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative rounded-xl overflow-hidden col-span-2 row-span-2
                              transition-all duration-500 cursor-pointer
                              hover:shadow-2xl"
                    onMouseEnter={() => setHoveredImage(0)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-t 
                                  from-[#FFD700]/40 via-transparent to-transparent 
                                  opacity-0 transition-opacity duration-300
                                  group-hover:opacity-100"
                    />
                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500
                                hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {hoveredImage === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-0 inset-x-0 p-4 
                                  bg-gradient-to-t from-black/80 to-transparent"
                      >
                        <p className="text-white text-sm">{images[0].alt}</p>
                      </motion.div>
                    )}
                  </motion.div>

                  {images.slice(1).map((img, index) => (
                    <motion.div
                      key={index + 1}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: hoveredImage === index + 1 ? -10 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + (index + 1) * 0.1,
                      }}
                      className="relative rounded-xl overflow-hidden
                                transition-all duration-500 cursor-pointer
                                hover:shadow-2xl"
                      onMouseEnter={() => setHoveredImage(index + 1)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-t 
                                    from-[#FFD700]/40 via-transparent to-transparent 
                                    opacity-0 transition-opacity duration-300
                                    group-hover:opacity-100"
                      />
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500
                                  hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                      {hoveredImage === index + 1 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-0 inset-x-0 p-4 
                                    bg-gradient-to-t from-black/80 to-transparent"
                        >
                          <p className="text-white text-sm">{img.alt}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                href="/category/glass-bottles"
                className="relative mt-8 group 
                         inline-flex items-center justify-center 
                         px-8 py-4 bg-transparent rounded-xl
                         border-2 border-[#2A5A36] 
                         hover:bg-[#2A5A36] hover:text-white
                         transition-all duration-500"
              >
                <span className="relative mr-2">Browse Our Products</span>
                <IoArrowForward
                  className="relative text-[#2A5A36] 
                                       group-hover:translate-x-1 
                                       transition-all duration-300"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
});

EndContent.displayName = "EndContent";
export default EndContent;
