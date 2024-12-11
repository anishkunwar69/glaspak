'use client'
import React, { useState, useEffect } from 'react'
import { IoArrowUp } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top smooth effect
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full 
                     bg-gradient-to-r from-darkYellow to-darkYellow/90
                     shadow-lg shadow-darkYellow/20 cursor-pointer
                     hover:scale-110 transition-transform duration-300
                     group"
        >
          <div className="absolute inset-0 rounded-full bg-white/10 
                         scale-0 group-hover:scale-100 transition-transform duration-300" />
          <IoArrowUp className="w-6 h-6 text-white relative z-10" />
          
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20
                         scale-100 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-darkYellow/20 blur-md
                         scale-100 group-hover:scale-150 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
