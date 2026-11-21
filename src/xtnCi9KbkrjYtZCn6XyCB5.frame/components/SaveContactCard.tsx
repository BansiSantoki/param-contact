import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'

type Props = {
  phone: string
  email: string
  websiteUrl: string
}

export function SaveContactCard({ phone, email, websiteUrl }: Props) {
  const [saved, setSaved] = useState(false)

  function handleSave() {
    downloadVCard({ phone, email, websiteUrl })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2600)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 }}
      className="mt-10 flex w-full justify-center px-2"
    >
      <motion.button
        type="button"
        onClick={handleSave}
        whileHover={{ scale: 1.035, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`relative inline-flex h-13.5 w-full max-w-[340px] items-center justify-center gap-2.5 overflow-hidden rounded-full border-2 border-gold-light/90 px-6 text-[15.5px] font-black tracking-wide text-white shadow-[0_10px_25px_-5px_rgba(140,95,25,0.5),0_0_18px_rgba(201,150,47,0.35)] outline-none transition-all duration-300 ease-out focus-visible:ring-4 focus-visible:ring-gold/60 ${
          saved
            ? 'bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 shadow-[0_10px_25px_-5px_rgba(21,128,61,0.7)]'
            : 'bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark hover:from-maroon hover:to-maroon-dark'
        }`}
      >
        {/* Animated golden shimmer sweep across button */}
        {!saved && (
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full" aria-hidden>
            <span className="param-shimmer-sweep absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          </span>
        )}

        {saved ? (
          <>
            <Check className="h-5.5 w-5.5 stroke-[3] text-emerald-100" />
            <span>CONTACT SAVED!</span>
          </>
        ) : (
          <>
            <Download className="h-5.5 w-5.5 stroke-[2.5]" />
            <span>SAVE CONTACT</span>
          </>
        )}
      </motion.button>

      <p aria-live="polite" className="sr-only">
        {saved ? 'Contact file downloaded. Open it to add Param Agarbatti Works to your contacts.' : ''}
      </p>
    </motion.div>
  )
}

function downloadVCard({ phone, email, websiteUrl }: Props) {
  const tel = '+' + phone.replace(/\D/g, '')
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:;Param Agarbatti Works;;;',
    'FN:Param Agarbatti Works',
    'ORG:Param Agarbatti Works',
    `TEL;TYPE=CELL,VOICE:${tel}`,
    `EMAIL;TYPE=INTERNET,WORK:${email}`,
    `URL:${websiteUrl}`,
    'ADR;TYPE=WORK:;;;Rajkot;Gujarat;360110;India',
    'END:VCARD',
  ]
  const blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Param-Agarbatti-Works.vcf'
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
