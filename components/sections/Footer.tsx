import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const footerLinks = {
  useful: [
    {
      name: "Home",
      href: "#hero",
      ariaLabel: "Navigate to Glaspak home section",
    },
    {
      name: "About",
      href: "#about",
      ariaLabel: "Learn about Glaspak history and values",
    },
    {
      name: "Services",
      href: "#services",
      ariaLabel: "Explore Glaspak premium glass packaging services",
    },
    {
      name: "Products",
      href: "#products",
      ariaLabel: "View Glaspak glass packaging product catalog",
    },
    {
      name: "Contact",
      href: "#contact",
      ariaLabel: "Contact Glaspak",
    },
  ],
  services: [
    {
      name: "Innovative Design",
      href: "#services",
      ariaLabel: "Premium glass packaging design solutions by Glaspak",
    },
    {
      name: "Custom Solutions",
      href: "#services",
      ariaLabel: "Tailored glass packaging solutions for your brand",
    },
    {
      name: "Manufacturing",
      href: "#services",
      ariaLabel: "State-of-the-art glass packaging manufacturing",
    },
    {
      name: "Quality Assurance",
      href: "#services",
      ariaLabel: "Industry-leading quality control standards",
    },
    {
      name: "Consultation",
      href: "#services",
      ariaLabel: "Expert glass packaging consultation services",
    },
    {
      name: "Production",
      href: "#services",
      ariaLabel: "Efficient glass packaging production management",
    },
  ],
} as const;

const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
    <div className="absolute inset-0 opacity-[0.07]"
         style={{
           backgroundImage: `
             linear-gradient(30deg, #997A00 1px, transparent 1px),
             linear-gradient(150deg, #997A00 1px, transparent 1px)`,
           backgroundSize: '40px 40px'
         }} />

    <div className="absolute inset-0 opacity-20">
      <div className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%] 
                   bg-gradient-conic from-[#B89B00]/20 via-[#8C7500]/15 to-[#B89B00]/20 
                   animate-slow-spin blur-[100px] transform-gpu" />
      <div className="absolute w-[150%] h-[150%] -right-[25%] -bottom-[25%] 
                   bg-gradient-conic from-[#A68F00]/20 via-[#7A6500]/15 to-[#A68F00]/20 
                   animate-slow-spin-reverse blur-[100px] transform-gpu" />
    </div>

    <div className="absolute top-0 left-0 right-0 h-[1px] 
                 bg-gradient-to-r from-transparent via-[#B89B00]/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-[1px] 
                 bg-gradient-to-r from-transparent via-[#B89B00]/30 to-transparent" />
  </div>
));
BackgroundEffects.displayName = "BackgroundEffects";

const LinkList = memo(
  ({
    title,
    links,
    className = "",
  }: {
    title: string;
    links: typeof footerLinks.useful | typeof footerLinks.services;
    className?: string;
  }) => (
    <div
      className={`p-4 sm:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 
                  backdrop-blur-sm border border-white/10 
                  hover:bg-white/15 transition-colors duration-300 ${className}`}
    >
      <h2 className="font-merriweather font-bold text-lg sm:text-xl mb-4 relative text-white">
        {title}
        <span
          className="absolute -bottom-2 left-0 w-1/2 h-0.5 
                     bg-gradient-to-r from-white/30 to-transparent"
        ></span>
      </h2>
      <nav aria-label={`${title} navigation`}>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                aria-label={link.ariaLabel}
                className="font-poppins text-sm sm:text-base text-white/80 hover:text-white 
                       transition-colors duration-300 relative group inline-block"
              >
                <span
                  className="absolute left-0 -bottom-px w-0 h-px bg-white/30 
                           transition-all duration-300 group-hover:w-full"
                ></span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
);
LinkList.displayName = "LinkList";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden"
      role="contentinfo"
      aria-label="Glaspak footer - Contact information and site navigation"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#997A00] to-[#7A6500]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#8C7500] via-[#A68F00] to-[#B89B00] opacity-90" />
      <BackgroundEffects />

      <Container>
        <div className="py-6 sm:py-8 lg:py-12 px-2.5 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r 
                       from-transparent via-[#B89B00]/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-5 space-y-4">
              <div className="relative group -ml-[5px]">
                <Image
                  src="/logo.png"
                  alt="Glaspak - Your Innovative Packaging Partner"
                  width={300}
                  height={100}
                  className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] 
                           h-auto object-contain relative z-10 drop-shadow-lg"
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                />
                <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
              </div>
              <p className="font-poppins text-white/90 text-sm sm:text-base lg:text-lg 
                         leading-relaxed max-w-xl backdrop-blur-sm relative 
                         border-l-2 border-[#B89B00] pl-4">
                Established in 2005,{" "}
                <strong className="font-bold text-white">Glaspak</strong> is a
                trusted glass packaging company with over 100 years of combined
                expertise. We specialize in
                <em className="italic text-white font-semibold">
                  {" "}
                  design, manufacturing, process control, and quality assurance
                </em>
                , offering innovative solutions as a reliable packaging partner.
              </p>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <LinkList title="Quick Links" links={footerLinks.useful} />
            </div>

            <div className="col-span-1 lg:col-span-2">
              <LinkList title="Services" links={footerLinks.services} />
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 
                backdrop-blur-sm border border-white/10 
                hover:bg-white/15 transition-colors duration-300">
                <h2 className="font-merriweather font-bold text-lg sm:text-xl mb-4 relative text-white">
                  Contact Information
                  <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 
                    bg-gradient-to-r from-white/30 to-transparent"></span>
                </h2>
                <address className="not-italic space-y-4">
                  <div className="font-poppins text-sm sm:text-base text-white/80 space-y-2">
                    <p>Glaspak Solutions Sdn Bhd</p>
                    <p>E-2-32 Taipan 2, Jalan PJU 1A/3A</p>
                    <p>Ara Damansara, Petaling Jaya</p>
                    <p>47301 Selangor</p>
                  </div>
                  <div className="space-y-3">
                    <p>
                      <a
                        href="tel:+60378426269"
                        className="font-poppins text-sm sm:text-base text-white/80 
                          hover:text-white transition-colors duration-300 
                          inline-flex items-center gap-2 group"
                      >
                        <span>Phone: +603-7842 6269</span>
                        <span className="block h-px w-0 bg-white/30 
                         transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:enquiry@phoenix-pac.com"
                        className="font-poppins text-sm sm:text-base text-white/80 
                          hover:text-white transition-colors duration-300 
                          inline-flex items-center gap-2 group"
                      >
                        <span>Email: enquiry@phoenix-pac.com</span>
                        <span className="block h-px w-0 bg-white/30 
                         transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 pt-4 
                       border-t border-[#B89B00]/20 relative">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r 
                        from-transparent via-[#B89B00]/30 to-transparent" />

            <p className="text-center text-sm sm:text-base text-white/80 backdrop-blur-sm 
                       hover:text-white transition-colors duration-300">
              © {currentYear} Glaspak. All rights reserved.{" "}
              <span className="block sm:inline sm:ml-1">
                Premium glass packaging solutions in Southeast Asia.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;