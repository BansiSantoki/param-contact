import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookUser, Check, Download } from 'lucide-react'

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
    window.setTimeout(() => setSaved(false), 2400)
  }

  return (
    <motion.section
      aria-labelledby="save-contact-heading"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
      className="relative mt-12 flex flex-col items-center rounded-[24px] border-[1.5px] border-gold/70 bg-cream-light/92 px-5 pb-6 pt-11 text-center shadow-[0_14px_30px_-14px_rgba(140,95,25,0.6),inset_0_1px_0_rgba(255,255,255,0.9)]"
    >
      <span className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2">
        <span className="param-bounce flex h-full w-full items-center justify-center rounded-[18px] bg-[#c9922a] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.18),0_8px_16px_-6px_rgba(60,30,10,0.55)]">
          <BookUser className="h-8 w-8" strokeWidth={2} />
        </span>
      </span>

      <h2 id="save-contact-heading" className="text-[21px] font-extrabold leading-tight text-maroon">
        Save Contact
      </h2>
      <p className="mt-1.5 max-w-[30ch] text-[14.5px] font-semibold leading-snug text-ink">
        Save Param Agarbatti Works Contact Details
      </p>

      <motion.button
        type="button"
        onClick={handleSave}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        className="mt-5 inline-flex h-12 w-full max-w-[320px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-gold bg-maroon px-6 text-[15px] font-extrabold tracking-[0.08em] text-cream-light shadow-[0_6px_14px_-6px_rgba(107,18,20,0.7)] outline-none transition-[box-shadow,background-color] duration-200 ease-out hover:bg-maroon-dark hover:shadow-[0_0_0_4px_rgba(232,200,121,0.45),0_10px_22px_-8px_rgba(201,150,47,0.8)] focus-visible:shadow-[0_0_0_4px_rgba(232,200,121,0.6)]"
      >
        {saved ? <Check className="h-5 w-5" strokeWidth={2.5} /> : <Download className="h-5 w-5" strokeWidth={2.5} />}
        {saved ? 'CONTACT SAVED' : 'SAVE CONTACT'}
      </motion.button>
      <p aria-live="polite" className="sr-only">
        {saved ? 'Contact file downloaded. Open it to add Param Agarbatti Works to your contacts.' : ''}
      </p>
    </motion.section>
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
