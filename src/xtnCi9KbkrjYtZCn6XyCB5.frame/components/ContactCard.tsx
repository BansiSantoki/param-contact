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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      whileHover={href ? { y: -3 } : undefined}
      whileTap={href ? { scale: 0.98 } : undefined}
      className="group relative flex h-full flex-col items-center rounded-[22px] border border-gold/35 bg-cream-light/90 px-2.5 pb-5 pt-10 text-center shadow-[0_10px_22px_-12px_rgba(140,95,25,0.55),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[2px] transition-[box-shadow,border-color] duration-200 ease-out outline-none hover:border-gold/60 hover:shadow-[0_16px_30px_-12px_rgba(140,95,25,0.6),inset_0_1px_0_rgba(255,255,255,0.9)] focus-visible:ring-2 focus-visible:ring-gold sm:px-4"
    >
      <span
        className={`absolute -top-7 left-1/2 h-14 -translate-x-1/2 ${wideTile ? 'w-[76px]' : 'w-14'}`}
      >
        <span
          className={`param-float flex h-full w-full items-center justify-center rounded-[16px] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.35),inset_0_-4px_8px_rgba(0,0,0,0.18),0_8px_14px_-6px_rgba(60,30,10,0.55)] ${tileClass}`}
          style={{ animationDelay: `${index * 0.4}s` }}
        >
          {icon}
        </span>
      </span>

      <h2 className="text-[16.5px] font-extrabold leading-tight text-maroon sm:text-[19px]">
        {title}
      </h2>
      <p className="mt-1.5 text-[13.5px] font-semibold leading-snug text-ink [overflow-wrap:anywhere] sm:text-[15px]">
        {children}
      </p>
    </Tag>
  )
}
