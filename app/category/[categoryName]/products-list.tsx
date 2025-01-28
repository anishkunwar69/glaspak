"use client"
import React, { useState } from 'react'
import Container from '@/components/Container'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoArrowBack, IoMenu, IoWineOutline, IoBeakerOutline, IoLockClosedOutline, IoMailOutline, IoCloseOutline, IoChevronBack, IoChevronForward, IoCallOutline } from "react-icons/io5"
import Link from 'next/link'

// Navigation links (same as Hero2)
const navLinks = [
  { 
    title: 'Our Products', 
    href: '/category/glass-bottles', 
    ariaLabel: 'View our products',
  },
  { 
    title: 'Custom Designs', 
    href: '/custom-design', 
    ariaLabel: 'Explore custom designs',
  },
  { 
    title: 'Our Story', 
    href: '/our-story', 
    ariaLabel: 'Learn our story',
  },
  { 
    title: 'Contact', 
    href: '/contact-us', 
    ariaLabel: 'Contact us',
  }
] as const;

// Product categories configuration
const categories = [
  { 
    slug: 'glass-bottles', 
    title: 'Glass Bottles',
    icon: IoWineOutline 
  },
  { 
    slug: 'glass-jars', 
    title: 'Glass Jars',
    icon: IoBeakerOutline 
  },
  { 
    slug: 'closures', 
    title: 'Closures',
    icon: IoLockClosedOutline 
  },
];

// Updated products mapping based on category
const productsByCategory = {
  'glass-bottles': [
    {
      id: 1,
      name: 'Premium Glass Bottle 250ml',
      image: '/bottles/bottle1.jpg',
    },
    {
      id: 2,
      name: 'Premium Glass Bottle 500ml',
      image: '/bottles/bottle2.jpg',
    },
    {
      id: 3,
      name: 'Premium Glass Bottle 750ml',
      image: '/bottles/bottle3.jpg',
    },
    {
      id: 4,
      name: 'Premium Glass Bottle 1L',
      image: '/bottles/bottle4.jpg',
    },
    {
      id: 5,
      name: 'Glass Bottle Square 250ml',
      image: '/bottles/bottle5.jpg',
    },
    {
      id: 6,
      name: 'Glass Bottle Square 500ml',
      image: '/bottles/bottle3.jpg',
    },
    {
      id: 7,
      name: 'Glass Bottle Square 750ml',
      image: '/bottles/bottle7.jpg',
    },
    {
      id: 8,
      name: 'Glass Bottle Square 1L',
      image: '/bottles/bottle8.jpg',
    },
    {
      id: 9,
      name: 'Premium Glass Jar 250ml',
      image: '/bottles/bottle9.jpg',
    },
    {
      id: 10,
      name: 'Premium Glass Jar 500ml',
      image: '/bottles/bottle10.jpg',
    },
    {
      id: 11,
      name: 'Premium Glass Jar 750ml',
      image: '/bottles/bottle11.jpg',
    },
    {
      id: 12,
      name: 'Premium Glass Jar 1L',
      image: '/bottles/bottle12.jpg',
    }
  ],
  'glass-jars': [
    {
      id: 1,
      name: 'Premium Glass Jar 250ml',
      image: '/jars/jar1.jpg',
    },
    {
      id: 2,
      name: 'Premium Glass Jar 500ml',
      image: '/jars/jar2.jpg',
    },
    {
      id: 3,
      name: 'Premium Glass Jar 750ml',
      image: '/jars/jar3.jpg',
    },
    {
      id: 4,
      name: 'Glass Jar Square 250ml',
      image: '/jars/jar4.jpg',
    },
    {
      id: 5,
      name: 'Glass Jar Square 500ml',
      image: '/jars/jar5.jpg',
    },
    {
      id: 6,
      name: 'Glass Jar Square 750ml',
      image: '/jars/jar6.jpg',
    },
    {
      id: 7,
      name: 'Glass Jar Round 250ml',
      image: '/jars/jar7.jpg',
    },
    {
      id: 8,
      name: 'Glass Jar Round 500ml',
      image: '/jars/jar8.jpg',
    },
    {
      id: 9,
      name: 'Glass Jar Round 750ml',
      image: '/jars/jar9.jpg',
    },
    {
      id: 10,
      name: 'Premium Glass Jar 250ml',
      image: '/jars/jar1.jpg',
    },
    {
      id: 11,
      name: 'Premium Glass Jar 500ml',
      image: '/jars/jar2.jpg',
    },
    {
      id: 12,
      name: 'Premium Glass Jar 750ml',
      image: '/jars/jar3.jpg',
    },
  ],
  'closures': [
    {
      id: 1,
      name: 'Premium Closure Type A',
      image: '/closures/closure1.jpg',
    },
    {
      id: 2,
      name: 'Premium Closure Type B',
      image: '/closures/closure2.jpg',
    },
    {
      id: 3,
      name: 'Premium Closure Type C',
      image: '/closures/closure3.jpg',
    },
    {
      id: 4,
      name: 'Premium Closure Type D',
      image: '/closures/closure4.jpg',
    },
    {
      id: 5,
      name: 'Standard Closure Type A',
      image: '/closures/closure5.jpg',
    },
    {
      id: 6,
      name: 'Standard Closure Type B',
      image: '/closures/closure6.jpg',
    },
    {
      id: 7,
      name: 'Standard Closure Type C',
      image: '/closures/closure7.jpg',
    },
    {
      id: 8,
      name: 'Standard Closure Type D',
      image: '/closures/closure8.jpg',
    },
    {
      id: 9,
      name: 'Special Closure Type A',
      image: '/closures/closure9.jpg',
    },
    {
      id: 10,
      name: 'Special Closure Type B',
      image: '/closures/closure10.jpg',
    },
    {
      id: 11,
      name: 'Special Closure Type C',
      image: '/closures/closure11.jpg',
    },
    {
      id: 12,
      name: 'Special Closure Type D',
      image: '/closures/closure12.jpg',
    },
  ]
};

function ProductsList({ categoryName }: { categoryName: string }) {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Find current category details
  const currentCategory = categories.find(cat => cat.slug === categoryName) || categories[0];
  const formattedTitle = currentCategory.title;

  // Get products for current category
  const currentProducts = productsByCategory[categoryName as keyof typeof productsByCategory] || [];
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentPageProducts = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle product click
  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of products
    document.querySelector('.products-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add toggle function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      {/* Main Content Area */}
      <div className="pt-0 flex min-h-screen relative">
        {/* Mobile Sidebar Toggle Button - Changed from fixed to absolute positioning */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-6 xs:top-8 sm:top-12 left-4 z-40 p-3 bg-white rounded-lg shadow-lg 
                   text-[#2A5A36] hover:text-[#44875A] transition-colors duration-300"
        >
          <IoMenu className={`text-xl transition-transform duration-300 
                            ${isSidebarOpen ? 'rotate-90' : ''}`} />
        </button>

        {/* Enhanced Responsive Sidebar - Updated width from w-80 to w-96 */}
        <aside className={`w-full lg:w-[360px] bg-white/90 backdrop-blur-lg fixed 
                        lg:top-0 bottom-0 left-0 z-30
                        border-r border-[#2A5A36]/10 shadow-lg flex flex-col
                        transform transition-transform duration-300
                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                        lg:translate-x-0`}>
          {/* Back to Home Button */}
          <div className="p-4 xs:p-5 sm:p-6 border-b border-[#2A5A36]/10">
            <Link href="/"
                  className="flex items-center space-x-3 text-[#2A5A36] hover:text-[#44875A] 
                           transition-colors duration-300 group">
              <IoArrowBack className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium text-sm xs:text-base">Back to Home</span>
            </Link>
          </div>

          {/* Categories Section */}
          <div className="flex-1 p-4 xs:p-5 sm:p-6 overflow-y-auto">
            <div className="space-y-8">
              {/* Categories */}
              <div className="space-y-6">
                <h2 className="font-merriweather text-2xl text-[#2A5A36] relative pb-4
                             after:content-[''] after:absolute after:bottom-0 after:left-0 
                             after:w-24 after:h-[3px] after:bg-gradient-to-r 
                             after:from-[#2A5A36] after:to-[#44875A]">
                  Categories
                </h2>
                
                {/* Category Buttons */}
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => router.push(`/category/${category.slug}`)}
                      className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl 
                                transition-all duration-500 group relative overflow-hidden
                                ${category.slug === categoryName 
                                  ? 'bg-gradient-to-r from-[#2A5A36] to-[#44875A] text-white shadow-lg scale-105' 
                                  : 'hover:bg-[#2A5A36]/5 text-[#2A5A36] hover:scale-102'}`}
                    >
                      <category.icon className={`text-2xl transition-all duration-500
                                             ${category.slug === categoryName 
                                               ? 'transform rotate-12 scale-110' 
                                               : 'group-hover:scale-125 group-hover:rotate-12'}`} />
                      <span className="font-medium tracking-wide">{category.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Links Section */}
              <div className="space-y-6">
                <h2 className="font-merriweather text-2xl text-[#2A5A36] relative pb-4
                             after:content-[''] after:absolute after:bottom-0 after:left-0 
                             after:w-24 after:h-[3px] after:bg-gradient-to-r 
                             after:from-[#2A5A36] after:to-[#44875A]">
                  Quick Links
                </h2>
                
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    link.title === 'Contact' ? (
                      // Special Contact Link Design
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-label={link.ariaLabel}
                        className="w-full block relative group"
                      >
                        <div className="relative overflow-hidden rounded-xl 
                                      bg-gradient-to-r from-amber-400 to-amber-500
                                      shadow-lg hover:shadow-xl
                                      transform transition-all duration-500
                                      hover:-translate-y-1 hover:scale-[1.02]">
                          <div className="px-5 py-4 flex items-center justify-between">
                            <span className="font-medium tracking-wide text-white">
                              {link.title}
                            </span>
                            <div className="flex items-center space-x-2">
                              <IoMailOutline className="text-xl text-white 
                                                  transform group-hover:rotate-12 
                                                  transition-transform duration-300" />
                              <IoChevronForward className="text-white opacity-0 group-hover:opacity-100 
                                                     -translate-x-2 group-hover:translate-x-0
                                                     transition-all duration-300" />
                            </div>
                          </div>
                          {/* Animated background effect */}
                          <div className="absolute inset-0 bg-white/20 
                                         transform -skew-x-12 -translate-x-full
                                         group-hover:translate-x-full
                                         transition-transform duration-1000" />
                        </div>
                      </Link>
                    ) : (
                      // Regular Navigation Links - Unchanged
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-label={link.ariaLabel}
                        className="w-full flex items-center space-x-4 px-5 py-4 rounded-xl 
                                  transition-all duration-500 group relative overflow-hidden
                                  hover:bg-[#2A5A36]/5 text-[#2A5A36]"
                      >
                        <span className="font-medium tracking-wide">{link.title}</span>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Moved Need Help Section to bottom */}
            <div className="mt-8 p-6 bg-[#2A5A36]/5 rounded-xl">
              <div className="flex items-center space-x-3 text-[#2A5A36] mb-4">
                <IoMailOutline className="text-2xl" />
                <h3 className="font-medium">Need Help?</h3>
              </div>
              <p className="text-sm text-[#2A5A36]/80 mb-4">
                Have questions about our products? We're here to help!
              </p>
              <Link
                href="mailto:enquiry@phoenix-pac.com"
                className="inline-block w-full text-center bg-[#2A5A36] text-white py-3 rounded-lg
                          hover:bg-[#44875A] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile - Updated to lg breakpoint */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content - Update margin to match new sidebar width */}
        <div className="flex-1 lg:ml-[320px] min-h-screen w-full">
          <Container>
            <div className="py-6 xs:py-8 sm:py-12 lg:py-16 px-4 xs:px-6 sm:px-8">
              {/* Header Section */}
              <div className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16 text-center">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                           font-merriweather font-bold text-[#2A5A36] relative inline-block
                           after:content-[''] after:absolute after:-bottom-4 after:left-0 
                           after:w-3/4 after:h-1 after:bg-gradient-to-r 
                           after:from-[#2A5A36]/20 after:to-transparent">
                  {formattedTitle}
                </h1>
                
                <p className="mt-4 xs:mt-6 font-poppins text-[#2A5A36]/80 max-w-2xl mx-auto 
                          text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed px-4">
                  Discover our premium selection of {formattedTitle.toLowerCase()}, 
                  crafted with precision and designed to meet your packaging needs.
                </p>
              </div>

              {/* Products Grid - Updated grid columns for different breakpoints */}
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 
                           gap-4 xs:gap-6 sm:gap-8 lg:gap-10 mt-6 xs:mt-8 sm:mt-12 products-grid">
                {currentPageProducts.map((product) => (
                  <div key={product.id}
                       className="group cursor-pointer relative bg-white rounded-xl 
                                overflow-hidden shadow-lg hover:shadow-xl 
                                transition-all duration-300 hover:scale-[1.02]"
                       onClick={() => handleProductClick(product)}>
                    {/* Image Container */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden 
                                   bg-gradient-to-b from-[#F5F0EA]/30 to-white/80 
                                   cursor-pointer">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-500 bg-gradient-to-t 
                                   from-[#2A5A36]/5 to-transparent" />
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-0 left-0 w-full h-40 
                                   bg-gradient-to-b from-[#2A5A36]/3 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full h-40 
                                   bg-gradient-to-t from-white to-transparent" />
                      
                      {/* Product Image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 
                                 (max-width: 1536px) 50vw,
                                 33vw"
                          className="object-contain object-center transform 
                                   group-hover:scale-105 transition-all duration-700 
                                   drop-shadow-xl p-4"
                          style={{ 
                            filter: 'contrast(0.95) brightness(1.02)'
                          }}
                        />
                      </div>
                    </div>

                    {/* Simplified Content Section */}
                    <div className="px-6 -mt-3 my-2 bg-white relative z-10 h-[60px] flex items-center justify-center">
                      <h3 className="font-poppins font-medium text-lg text-[#2A5A36] 
                                     group-hover:text-[#44875A] transition-colors duration-300 
                                     text-center leading-none max-w-[90%]">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination - Responsive spacing and sizing */}
              {totalPages > 1 && (
                <div className="mt-8 xs:mt-12 sm:mt-16 flex justify-center items-center 
                               gap-2 xs:gap-3 sm:gap-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center w-12 h-12 rounded-full
                               transition-all duration-300 group
                               ${currentPage === 1 
                                 ? 'opacity-50 cursor-not-allowed bg-[#2A5A36]/10' 
                                 : 'hover:bg-[#2A5A36] bg-white shadow-lg hover:shadow-xl border border-[#2A5A36]/10'}`}
                  >
                    <IoChevronBack className={`text-xl transition-all duration-300
                                            ${currentPage === 1 
                                              ? 'text-[#2A5A36]/50' 
                                              : 'text-[#2A5A36] group-hover:text-white'}`} />
                  </button>

                  <div className="flex items-center space-x-2">
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      const isActive = pageNumber === currentPage;
                      const isNearCurrent = Math.abs(pageNumber - currentPage) <= 1 || 
                                          pageNumber === 1 || 
                                          pageNumber === totalPages;

                      if (!isNearCurrent) {
                        if (pageNumber === 2 || pageNumber === totalPages - 1) {
                          return (
                            <span key={pageNumber} className="w-12 text-center text-[#2A5A36]">...</span>
                          );
                        }
                        return null;
                      }

                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`relative w-12 h-12 flex items-center justify-center
                                     font-medium rounded-full transition-all duration-500
                                     ${isActive 
                                       ? 'bg-gradient-to-r from-[#2A5A36] to-[#44875A] text-white scale-110 shadow-lg' 
                                       : 'bg-white hover:bg-[#2A5A36]/5 text-[#2A5A36] border border-[#2A5A36]/10'}`}
                        >
                          <span className={`transition-transform duration-300 
                                          ${isActive ? 'transform scale-110' : ''}`}>
                            {pageNumber}
                          </span>
                          {isActive && (
                            <span className="absolute inset-0 rounded-full bg-white opacity-20
                                           animate-ping-slow"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center w-12 h-12 rounded-full
                               transition-all duration-300 group
                               ${currentPage === totalPages 
                                 ? 'opacity-50 cursor-not-allowed bg-[#2A5A36]/10' 
                                 : 'hover:bg-[#2A5A36] bg-white shadow-lg hover:shadow-xl border border-[#2A5A36]/10'}`}
                  >
                    <IoChevronForward className={`text-xl transition-all duration-300
                                               ${currentPage === totalPages 
                                                 ? 'text-[#2A5A36]/50' 
                                                 : 'text-[#2A5A36] group-hover:text-white'}`} />
                  </button>
                </div>
              )}

              {/* Visual Separator */}
              <div className="relative my-10 sm:my-14 md:my-18">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-[#2A5A36]/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB] px-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2A5A36]/30 to-[#44875A]/30"></div>
                  </span>
                </div>
              </div>

              {/* Customer Notice - Enhanced with Contact Form */}
              <div className="mt-8 xs:mt-12 sm:mt-16">
                {/* Section Header */}
                <div className="text-center mb-8">
                  <span className="text-xs sm:text-sm tracking-[0.4em] text-[#2A5A36] uppercase relative inline-block
                                  before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                                  before:-translate-x-1/2 before:w-12 before:h-0.5 
                                  before:bg-gradient-to-r before:from-transparent 
                                  before:via-[#2A5A36]/70 before:to-transparent">
                    Get in Touch
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold font-merriweather 
                                 bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                                 bg-clip-text text-transparent
                                 animate-gradient-x bg-[length:200%_auto]">
                    Interested in Our {formattedTitle}?
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-[#2A5A36]/80 max-w-2xl mx-auto">
                    Fill out the form below and our team will get back to you with detailed information and pricing.
                  </p>
                </div>

                {/* Contact Form - Updated to match product grid width */}
                <div className="w-full">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const subject = encodeURIComponent(`Inquiry about ${formattedTitle}`);
                      const body = encodeURIComponent(`
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Message: ${formData.get("message")}
Category: ${formattedTitle}
                  `);
                      window.location.href = `mailto:enquiry@phoenix-pac.com?subject=${subject}&body=${body}`;
                    }}
                    className="space-y-4 p-6 sm:p-8 rounded-2xl
                               bg-white/80 backdrop-blur-sm
                               border border-[#7BAF7B]/20
                               shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#2A5A36]">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          className="mt-1 block w-full px-4 py-3 bg-white/80 
                                   border border-[#7BAF7B]/30 rounded-lg
                                   focus:ring-[#336B44] focus:border-[#336B44]
                                   transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2A5A36]">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          className="mt-1 block w-full px-4 py-3 bg-white/80 
                                   border border-[#7BAF7B]/30 rounded-lg
                                   focus:ring-[#336B44] focus:border-[#336B44]
                                   transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2A5A36]">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="mt-1 block w-full px-4 py-3 bg-white/80 
                                 border border-[#7BAF7B]/30 rounded-lg
                                 focus:ring-[#336B44] focus:border-[#336B44]
                                 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2A5A36]">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        placeholder={`I'm interested in learning more about your ${formattedTitle.toLowerCase()}...`}
                        className="mt-1 block w-full px-4 py-3 bg-white/80 
                                 border border-[#7BAF7B]/30 rounded-lg
                                 focus:ring-[#336B44] focus:border-[#336B44]
                                 transition-all duration-300 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                      <p className="text-sm text-[#2A5A36]/70 flex items-center">
                        <IoMailOutline className="mr-2" />
                        We typically respond within 24 hours
                      </p>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#336B44] to-[#2A5A36]
                                 text-white font-medium rounded-lg
                                 hover:from-[#2A5A36] hover:to-[#336B44]
                                 transition-all duration-300 shadow-lg
                                 hover:shadow-xl hover:scale-[1.02]
                                 focus:ring-2 focus:ring-offset-2 focus:ring-[#336B44]
                                 flex items-center justify-center space-x-2"
                      >
                        <span>Send Inquiry</span>
                        <IoMailOutline className="text-xl" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Quick Contact Options - Updated to match form width */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <a href="tel:+60378426269"
                     className="flex items-center space-x-3 p-4 rounded-lg
                              bg-white/80 backdrop-blur-sm border border-[#7BAF7B]/20
                              hover:border-[#7BAF7B]/40 transition-all duration-300
                              hover:bg-white/90">
                    <IoCallOutline className="text-2xl text-[#2A5A36]" />
                    <div>
                      <p className="text-sm font-medium text-[#2A5A36]">Call Us</p>
                      <p className="text-[#2A5A36]/70">+603-7842 6269</p>
                    </div>
                  </a>
                  <a href="mailto:enquiry@phoenix-pac.com"
                     className="flex items-center space-x-3 p-4 rounded-lg
                              bg-white/80 backdrop-blur-sm border border-[#7BAF7B]/20
                              hover:border-[#7BAF7B]/40 transition-all duration-300
                              hover:bg-white/90">
                    <IoMailOutline className="text-2xl text-[#2A5A36]" />
                    <div>
                      <p className="text-sm font-medium text-[#2A5A36]">Email Us</p>
                      <p className="text-[#2A5A36]/70">enquiry@phoenix-pac.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Product Modal - Image with Elegant CTA */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close Button */}
            <div className="absolute top-0 right-0 p-4 z-10">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="w-10 h-10 flex items-center justify-center
                           bg-white/90 backdrop-blur-sm rounded-full
                           text-[#2A5A36] hover:text-[#44875A] 
                           shadow-md hover:shadow-lg
                           transition-all duration-300"
                aria-label="Close modal"
              >
                <IoCloseOutline className="text-2xl" />
              </button>
            </div>

            {/* Image Container */}
            <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[3/2] relative">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-contain p-4 sm:p-6 md:p-8"
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1024px) 80vw,
                       1200px"
                priority
              />
            </div>

            {/* CTA Section */}
            <div className="p-4 border-t border-[#2A5A36]/10 bg-white">
              <a
                href={`mailto:enquiry@phoenix-pac.com?subject=Inquiry about ${selectedProduct.name}&body=I would like to inquire about ${selectedProduct.name}.`}
                className="group flex items-center justify-center gap-2 px-6 py-3 
                          bg-[#2A5A36] rounded-full w-full
                          hover:bg-[#44875A] transition-all duration-300"
              >
                <span className="text-sm font-medium text-white">
                  Inquire About This Product
                </span>
                <IoMailOutline className="text-lg text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductsList