import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookUser, Check, Download, Mail, MapPin, Phone, Sparkles } from 'lucide-react'

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
    <div className="relative mt-14">
      {/* Decorative luxury divider setting this card distinctly apart */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <span className="absolute flex items-center gap-1.5 rounded-full border border-gold/60 bg-[#fffcf7] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-maroon shadow-[0_2px_8px_-2px_rgba(140,95,25,0.25)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c9922a]" />
          </span>
          <Sparkles className="h-3 w-3 text-gold" />
          Quick Contact Card
        </span>
      </div>

      {/* Main Save Contact Card - distinctly styled with gold frame and glowing animation */}
      <motion.section
        aria-labelledby="save-contact-heading"
        initial={{ opacity: 0, y: 35, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{
          type: 'spring',
          stiffness: 240,
          damping: 20,
          delay: 0.18,
        }}
        whileHover={{
          y: -4,
          transition: { type: 'spring', stiffness: 350, damping: 18 },
        }}
        className="param-save-card param-pulse-glow group relative flex flex-col items-center overflow-hidden rounded-[26px] border-2 border-gold/80 bg-gradient-to-b from-[#ffffff] via-[#fffbf2] to-[#fff6e6] px-4 pb-6 pt-12 text-center shadow-[0_20px_45px_-12px_rgba(140,95,25,0.45),0_0_24px_rgba(201,150,47,0.22),inset_0_2px_0_rgba(255,255,255,1)] sm:px-6"
      >
        {/* Top gold accent line */}
        <div
          className="absolute left-10 right-10 top-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
          aria-hidden
        />

        {/* Ambient background light sweep */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]" aria-hidden>
          <span className="absolute -inset-full top-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
        </span>

        {/* Floating icon badge with animated pulsing aura ring */}
        <span className="param-save-icon absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2">
          {/* Pulsing radar aura */}
          <span className="param-ping-badge absolute -inset-2 rounded-[24px] bg-gold/30" />
          <span className="param-bounce relative flex h-full w-full items-center justify-center rounded-[20px] bg-gradient-to-tr from-[#986815] via-[#c9922a] to-[#f4cf75] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-4px_8px_rgba(0,0,0,0.22),0_10px_22px_-6px_rgba(140,95,25,0.7)] transition-transform duration-300 group-hover:scale-110">
            <BookUser className="h-8 w-8 drop-shadow-sm" strokeWidth={2.2} />
          </span>
        </span>

        <h2 id="save-contact-heading" className="text-[21px] font-black tracking-tight text-maroon sm:text-[23px]">
          Save Contact
        </h2>
        <p className="mt-1 text-[13.5px] font-semibold text-ink/75 sm:text-[14.5px]">
          Save Param Agarbatti Works directly to your Phone Contacts
        </p>

        {/* Structured Contact Details Preview Box ("Sarakhu" - Clear & Professional) */}
        <div className="mt-4 w-full max-w-[340px] rounded-2xl border border-gold/35 bg-white/85 p-3.5 text-left shadow-[inset_0_1px_3px_rgba(201,150,47,0.08),0_4px_12px_-4px_rgba(140,95,25,0.15)] backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between border-b border-gold/25 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-maroon/10 text-[11px]">
                🪔
              </span>
              <span className="text-[13px] font-extrabold text-maroon">Param Agarbatti Works</span>
            </div>
            <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#986815]">
              V-CARD
            </span>
          </div>

          <div className="space-y-1.5 text-[12px] font-semibold text-ink/90 sm:text-[12.5px]">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-gold" />
              <span className="font-bold text-ink">{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-gold" />
              <span className="truncate text-ink/80">{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" />
              <span className="truncate text-ink/80">Paddhari, Rajkot – 360110, Gujarat</span>
            </div>
          </div>
        </div>

        {/* Animated Action Button */}
        <motion.button
          type="button"
          onClick={handleSave}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className={`relative mt-5 inline-flex h-12 w-full max-w-[320px] items-center justify-center gap-2.5 overflow-hidden rounded-full border-2 border-gold-light/90 px-6 text-[15px] font-black tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(107,18,20,0.7),0_0_14px_rgba(201,150,47,0.35)] outline-none transition-all duration-300 ease-out focus-visible:ring-4 focus-visible:ring-gold/60 ${
            saved
              ? 'bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 shadow-[0_8px_20px_-6px_rgba(21,128,61,0.7)]'
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
              <Check className="h-5 w-5 stroke-[3] text-emerald-100" />
              <span>CONTACT SAVED!</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5 stroke-[2.5]" />
              <span>SAVE CONTACT</span>
            </>
          )}
        </motion.button>

        {/* Helpful format label */}
        <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] font-bold text-ink/65">
          <span>📥 1-Tap .vcf Download</span>
          <span>•</span>
          <span>Works on Android &amp; iPhone</span>
        </p>

        <p aria-live="polite" className="sr-only">
          {saved ? 'Contact file downloaded. Open it to add Param Agarbatti Works to your contacts.' : ''}
        </p>
      </motion.section>
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
