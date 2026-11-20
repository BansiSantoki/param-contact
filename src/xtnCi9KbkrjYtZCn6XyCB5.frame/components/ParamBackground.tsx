import React from 'react'
import { motion } from 'framer-motion'

/**
 * The original artwork, fixed to the viewport so only the cards scroll.
 * Phones: covers the screen. Tablet/desktop: shown at full height as a centred
 * portrait, with a softened copy of itself filling the sides.
 */
export function ParamBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cream">
      <img
        src={BG_URL}
        alt=""
        className="absolute inset-0 hidden h-full w-full scale-110 object-cover opacity-70 blur-2xl sm:block"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{ height: 'var(--bg-h)', width: 'calc(var(--bg-h) / 2)' }}
      >
        <img
          src={BG_URL}
          alt=""
          className="h-full w-full select-none object-contain sm:[mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)]"
          draggable={false}
        />

        {/* A faint drifting wisp over the incense smoke */}
        <svg
          viewBox="0 0 100 160"
          className="absolute"
          style={{ left: '6%', top: '9%', width: '19%', height: '17%' }}
          fill="none"
        >
          <defs>
            <filter id="param-smoke-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          {WISPS.map((d, i) => (
            <path
              key={i}
              d={d}
              className="param-smoke"
              style={{ animationDelay: `${i * 1.8}s`, transformOrigin: '50% 100%' }}
              stroke="#ffffff"
              strokeWidth={5}
              strokeLinecap="round"
              filter="url(#param-smoke-blur)"
            />
          ))}
        </svg>
      </motion.div>
    </div>
  )
}

const BG_URL = 'https://cdn.magicpatterns.com/uploads/vaAdHgF147xd9vgJGRxXYF/image.png'

const WISPS = [
  'M42 155 C 30 125, 55 105, 38 80 S 30 40, 45 15',
  'M55 155 C 65 128, 45 108, 60 84 S 68 45, 55 20',
  'M72 155 C 82 130, 64 110, 78 88 S 86 55, 74 30',
]
