"use client"
import React, { memo } from 'react'
import Navbar from '../Navbar'
import HeroContent from '../HeroContent'
import ScrollToTopButton from '../ScrollToTopButton'

// Memoized background patterns for better performance
const BackgroundPatterns = memo(() => (
  <div className='fixed inset-0 pointer-events-none'>
    <div className='absolute inset-0 bg-gradient-to-b from-darkBgColor via-bgColor to-darkBgColor opacity-90' />
    <div className='absolute inset-0'>
      <div className='absolute top-[10%] left-[15%] w-[45vh] h-[45vh] rounded-full border border-white/5' />
      <div className='absolute bottom-[15%] right-[10%] w-[35vh] h-[35vh] rounded-full border border-white/5' />
      <div className='absolute top-0 left-0 w-full h-[150%] opacity-10'
           style={{
             backgroundImage: `repeating-linear-gradient(
               45deg,
               transparent,
               transparent 100px,
               rgba(255,255,255,0.1) 100px,
               rgba(255,255,255,0.1) 101px
             )`
           }} />
    </div>
    <div className='absolute inset-0 opacity-10'
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
           backgroundSize: '40px 40px'
         }} />
    <svg className='absolute inset-0 w-full h-full opacity-[0.07]' 
         viewBox='0 0 100 100' 
         preserveAspectRatio='none'
         aria-hidden="true">
      <path d='M0,50 Q25,30 50,50 T100,50' fill='none' stroke='white' strokeWidth='0.1' />
      <path d='M0,60 Q25,40 50,60 T100,60' fill='none' stroke='white' strokeWidth='0.1' />
    </svg>
    <div className='absolute inset-0 opacity-[0.15] mix-blend-soft-light'
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
           backgroundRepeat: 'repeat',
           backgroundSize: '150px 150px'
         }} />
  </div>
));
BackgroundPatterns.displayName = 'BackgroundPatterns';

function Hero() {
  return (
    <section 
      id="hero" 
      className='hero min-h-screen w-full bg-bgColor overflow-x-hidden relative'
      role="banner"
      aria-label="Welcome to GVH - Premium Glass Packaging Solutions"
    >
      <BackgroundPatterns />
      <div className="max-w-[100vw] relative z-10">
        <Navbar/>
        <div className="pt-[100px]">
          <HeroContent/>
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  )
}

export default memo(Hero);