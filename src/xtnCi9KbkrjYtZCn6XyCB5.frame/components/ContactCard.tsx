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
      initial={{ opacity: 0, y: 26, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 22,
        delay: 0.08 + index * 0.08,
      }}
      whileHover={
        href
          ? {
              y: -7,
              scale: 1.028,
              transition: { type: 'spring', stiffness: 380, damping: 18 },
            }
          : {
              y: -3,
              scale: 1.012,
              transition: { type: 'spring', stiffness: 380, damping: 18 },
            }
      }
      whileTap={href ? { scale: 0.96 } : undefined}
      className="param-contact-card group relative flex h-full flex-col items-center overflow-hidden rounded-[22px] border-[1.5px] border-gold/40 bg-gradient-to-b from-cream-light/95 via-cream-light/90 to-[#fdf4e7]/90 px-2.5 pb-4 pt-10 text-center shadow-[0_12px_24px_-10px_rgba(140,95,25,0.45),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-[4px] transition-[border-color,box-shadow] duration-300 ease-out outline-none hover:border-gold/80 hover:shadow-[0_18px_32px_-10px_rgba(140,95,25,0.55),0_0_18px_rgba(201,150,47,0.22),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:ring-2 focus-visible:ring-gold sm:px-4"
    >
      {/* Light sweep animation overlay on card hover */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]" aria-hidden>
        <span className="absolute -inset-full top-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
      </span>

      {/* Floating icon badge with hover scale & rotate micro-animation */}
      <span
        className={`param-icon-wrap absolute -top-7 left-1/2 h-14 -translate-x-1/2 ${
          wideTile ? 'param-wide-icon w-[76px]' : 'w-14'
        }`}
      >
        <span
          className={`param-float flex h-full w-full items-center justify-center rounded-[16px] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.2),0_8px_16px_-6px_rgba(60,30,10,0.55)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-4px_8px_rgba(0,0,0,0.2),0_12px_22px_-6px_rgba(60,30,10,0.7)] ${tileClass}`}
          style={{ animationDelay: `${index * 0.35}s` }}
        >
          {icon}
        </span>
      </span>

      <h2 className="text-[16px] font-extrabold leading-tight text-maroon transition-colors duration-200 group-hover:text-maroon-dark sm:text-[18.5px]">
        {title}
      </h2>
      <div className="mt-1.5 text-[13px] font-semibold leading-snug text-ink [overflow-wrap:anywhere] sm:text-[14.5px]">
        {children}
      </div>

      {/* Subtle action indicator cue */}
      {href && (
        <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-gold transition-all duration-200 group-hover:text-maroon">
          <span>Open</span>
          <span className="text-[12px] leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </span>
      )}
    </Tag>
  )
}
