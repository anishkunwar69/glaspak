"use client"
import React from 'react'
import { motion } from "framer-motion"

function Container({children, className}:
  {
    children: React.ReactNode,
    className?: string
  }
) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      className={`w-[92%] mx-auto
                max-w-[1300px]
                2xl:max-w-[1500px]
                3xl:max-w-[1700px]
                4xl:max-w-[1900px]
                ${className || ''}`}>
      {children}
    </motion.div>
  )
}

export default Container