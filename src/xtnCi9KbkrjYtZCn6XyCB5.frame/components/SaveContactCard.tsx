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
    <div className="param-save-wrap relative z-20 mt-2 sm:mt-3 flex w-full shrink-0 justify-center">
      <motion.button
        type="button"
        onClick={handleSave}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`relative inline-flex h-10.5 sm:h-12 w-full max-w-[320px] sm:max-w-[350px] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gold-light/90 px-5 text-[13.5px] sm:text-[14.5px] font-black tracking-wide text-white shadow-[0_6px_18px_-4px_rgba(140,95,25,0.45),0_0_14px_rgba(201,150,47,0.3)] outline-none transition-all duration-300 ease-out focus-visible:ring-4 focus-visible:ring-gold/60 ${saved
            ? 'bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 shadow-[0_6px_18px_-4px_rgba(21,128,61,0.6)]'
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
            <Check className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[3] text-emerald-100" />
            <span>CONTACT SAVED!</span>
          </>
        ) : (
          <>
            <Download className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[2.5]" />
            <span>SAVE CONTACT</span>
          </>
        )}
      </motion.button>

      <p aria-live="polite" className="sr-only">
        {saved ? 'Contact file downloaded. Open it to add Param Agarbatti Works to your contacts.' : ''}
      </p>
    </div>
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
