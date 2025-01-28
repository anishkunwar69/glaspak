"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IoArrowBack, IoMenu, IoWineOutline, IoBeakerOutline, IoLockClosedOutline, IoMailOutline } from "react-icons/io5"

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

export default function CategorySidebar({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F5F0EA] to-[#EDE5DB]">
      <div className="pt-0 flex min-h-screen relative">
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="lg:hidden absolute top-6 xs:top-8 sm:top-12 left-4 z-40 p-3 bg-white rounded-lg shadow-lg 
                   text-[#2A5A36] hover:text-[#44875A] transition-colors duration-300"
        >
          <IoMenu className={`text-xl transition-transform duration-300 
                            ${isSidebarOpen ? 'rotate-90' : ''}`} />
        </button>

        {/* Enhanced Responsive Sidebar */}
        <aside className={`w-full lg:w-72 bg-white/90 backdrop-blur-lg fixed 
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
                    onClick={() => {
                      router.push(`/category/${category.slug}`);
                      setSidebarOpen(false);
                    }}
                    className="w-full flex items-center space-x-4 px-5 py-4 rounded-xl 
                              transition-all duration-500 group relative overflow-hidden
                              hover:bg-[#2A5A36]/5 text-[#2A5A36] hover:scale-102"
                  >
                    <category.icon className="text-2xl transition-all duration-500
                                            group-hover:scale-125 group-hover:rotate-12" />
                    <span className="font-medium tracking-wide">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Need Help Section */}
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

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 min-h-screen w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
