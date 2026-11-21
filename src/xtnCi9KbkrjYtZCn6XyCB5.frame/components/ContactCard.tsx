import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  index: number
  title: string
  icon: React.ReactNode
  tileClass: string
  href?: string
  wideTile?: boolean
  children: React.ReactNode
}

export function ContactCard({ index, title, icon, tileClass, href, wideTile, children }: Props) {
  const linkProps = href
    ? {
        href,
        target: href.startsWith('mailto:') ? undefined : '_blank',
        rel: 'noopener noreferrer',
      }
    : {}
  const Tag = href ? motion.a : motion.div

  return (
    <Tag
      {...linkProps}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.08 + index * 0.06,
      }}
      whileHover={
        href
          ? {
              y: -5,
              scale: 1.025,
              transition: { type: 'spring', stiffness: 380, damping: 18 },
            }
          : {
              y: -2,
              scale: 1.01,
              transition: { type: 'spring', stiffness: 380, damping: 18 },
            }
      }
      whileTap={href ? { scale: 0.96 } : undefined}
      className="param-contact-card group relative flex h-full flex-col items-center justify-center border-[1.5px] border-gold/40 bg-gradient-to-b from-cream-light/95 via-cream-light/90 to-[#fdf4e7]/90 text-center shadow-[0_8px_18px_-8px_rgba(140,95,25,0.4),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-[4px] transition-[border-color,box-shadow] duration-300 ease-out outline-none hover:border-gold/80 hover:shadow-[0_14px_26px_-8px_rgba(140,95,25,0.5),0_0_16px_rgba(201,150,47,0.2),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:ring-2 focus-visible:ring-gold"
    >
      {/* Light sweep animation overlay on card hover */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[16px] sm:rounded-[20px]" aria-hidden>
        <span className="absolute -inset-full top-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
      </span>

      {/* Floating icon badge with hover scale & rotate micro-animation */}
      <span
        className={`param-icon-wrap absolute left-1/2 z-20 -translate-x-1/2 ${
          wideTile ? 'param-wide-icon' : ''
        }`}
      >
        <span
          className={`param-float flex h-full w-full items-center justify-center rounded-[12px] sm:rounded-[15px] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.2),0_6px_12px_-4px_rgba(60,30,10,0.5)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 ${tileClass}`}
          style={{ animationDelay: `${index * 0.35}s` }}
        >
          {icon}
        </span>
      </span>

      <h2 className="font-extrabold leading-tight text-maroon transition-colors duration-200 group-hover:text-maroon-dark">
        {title}
      </h2>
      <div className="font-semibold leading-snug text-ink [overflow-wrap:anywhere]">
        {children}
      </div>
    </Tag>
  )
}
