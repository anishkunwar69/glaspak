"use client"
import React, { memo } from 'react'
import Navbar from '../Navbar'
import HeroContent from '../HeroContent'
import ScrollToTopButton from '../ScrollToTopButton'
<div className="relative h-[85vh] object-center object-cover w-full overflow-hidden bg-center"></div>

const images = [
  '/hero/0013.png',
  '/hero/0019.png',
  '/hero/0021.png',
  '/hero/0027.png',
] as const;
// Memoized background patterns for better performance
const BackgroundPatterns = memo(() => (
  <div className='fixed inset-0 pointer-events-none overflow-hidden'>
    {/* Rich base gradient with depth */}
    <div className='absolute inset-0 bg-gradient-to-br from-amber-100/95 via-slate-100/90 to-emerald-50/95'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.12)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.12)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.12)_0%,transparent_50%)]' />
    </div>
    
    {/* Enhanced color spheres */}
    <div className='absolute inset-0'>
      {/* Emerald accent */}
      <div className='absolute top-0 left-0 w-[70vh] h-[70vh]
                     bg-[conic-gradient(from_45deg,rgba(16,185,129,0.15),rgba(16,185,129,0.08),rgba(16,185,129,0.15))]
                     blur-[75px] rounded-full transform -translate-x-1/4 -translate-y-1/4' />
      
      {/* Amber glow */}
      <div className='absolute bottom-0 right-0 w-[60vh] h-[60vh]
                     bg-[conic-gradient(from_220deg,rgba(245,158,11,0.15),rgba(245,158,11,0.08),rgba(245,158,11,0.15))]
                     blur-[75px] rounded-full transform translate-x-1/4 translate-y-1/4' />
      
      {/* Rose accent */}
      <div className='absolute top-1/2 left-1/2 w-[50vh] h-[50vh]
                     bg-[conic-gradient(from_90deg,rgba(220,38,38,0.12),rgba(220,38,38,0.08),rgba(220,38,38,0.12))]
                     blur-[75px] rounded-full transform -translate-x-1/2 -translate-y-1/2' />

      {/* Premium grid pattern */}
      <div className='absolute inset-0 opacity-[0.08]'
           style={{
             backgroundImage: `
               linear-gradient(90deg, rgba(16,185,129,0.35) 1px, transparent 1px),
               linear-gradient(0deg, rgba(245,158,11,0.35) 1px, transparent 1px),
               linear-gradient(45deg, rgba(220,38,38,0.2) 1px, transparent 1px)
             `,
             backgroundSize: '5rem 5rem, 5rem 5rem, 2.5rem 2.5rem'
           }} />
    </div>

    {/* Dynamic flowing lines */}
    <svg className='absolute inset-0 w-full h-full opacity-[0.09]' 
         viewBox='0 0 100 100' 
         preserveAspectRatio='none'
         aria-hidden="true">
      {[...Array(7)].map((_, i) => (
        <path
          key={i}
          d={`M0,${40 + i * 3} Q${25 + i},${45 + i} 50,${40 + i * 3} T100,${40 + i * 3}`}
          fill='none'
          stroke={i % 3 === 0 ? '#059669' : i % 3 === 1 ? '#d97706' : '#dc2626'}
          strokeWidth='0.2'
          opacity={0.9 - (i * 0.1)}
        />
      ))}
    </svg>

    {/* Rich texture overlay */}
    <div className='absolute inset-0 mix-blend-soft-light opacity-[0.18]'
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
           backgroundSize: '200px 200px'
         }} />

    {/* Enhanced diagonal stripes */}
    <div className='absolute inset-0 opacity-[0.04]'
         style={{
           backgroundImage: `repeating-linear-gradient(
             45deg,
             transparent,
             transparent 8px,
             rgba(16,185,129,0.15) 8px,
             rgba(16,185,129,0.15) 9px,
             transparent 9px,
             transparent 18px,
             rgba(245,158,11,0.15) 18px,
             rgba(245,158,11,0.15) 19px,
             transparent 19px,
             transparent 28px,
             rgba(220,38,38,0.15) 28px,
             rgba(220,38,38,0.15) 29px
           )`
         }} />
  </div>
));
BackgroundPatterns.displayName = 'BackgroundPatterns';

function Hero() {
  return (
    <section 
      id="hero" 
      className='hero min-h-screen w-full bg-gradient-to-br from-amber-100/90 via-slate-50/95 to-emerald-100/90 overflow-x-hidden relative'
      role="banner"
      aria-label="Welcome to GVH - Premium Glass Packaging Solutions"
    >
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 15s infinite linear;
        }
      `}</style>
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