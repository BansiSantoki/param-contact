import React from 'react'
import { MotionConfig, motion } from 'framer-motion'
import { Globe, Mail, MapPin, ShoppingCart } from 'lucide-react'

import { ParamBackground } from './components/ParamBackground'
import { ContactCard } from './components/ContactCard'
import { SaveContactCard } from './components/SaveContactCard'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './components/BrandIcons'

type Props = Partial<typeof args>

export default function ContactCardScreen(props: Props) {
  const { phone, website, email, mapsQuery, facebookUrl, instagramUrl } = { ...args, ...props }
  const phoneDigits = phone.replace(/\D/g, '')
  const websiteUrl = `https://${website.replace(/^https?:\/\//, '')}`
  const [siteHead, siteTail] = splitWebsite(website)
  const [emailUser, emailDomain] = email.split('@')

  return (
    <MotionConfig reducedMotion="user">
      <div className="param-root relative min-h-full w-full overflow-x-clip font-sans text-ink">
        <ParamBackground />

        <main className="relative z-10 mx-auto w-full max-w-[480px] px-4 pb-[calc(var(--bg-h)*0.15)] sm:px-5">
          {/* Logo sits in the empty upper band of the artwork */}
          <header
            className="flex items-end justify-center"
            style={{ height: 'calc(var(--bg-h) * 0.215)' }}
          >
            <motion.img
              src={LOGO_URL}
              alt="Param — मन की शांति…"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="h-[calc(var(--bg-h)*0.165)] w-auto max-w-[78%] object-contain mix-blend-multiply"
            />
          </header>

          {/* The product display (bottles on the platform) lives in the fixed artwork */}
          <section
            id="products"
            aria-label="Param products: Chandan, Bhasma, Agar Woods and Kasturi premium dhoop sticks"
            style={{ height: 'calc(var(--bg-h) * 0.235)' }}
          />

          <section aria-label="Contact Param Agarbatti Works" className="grid grid-cols-2 gap-x-3 gap-y-11 pt-10 sm:gap-x-4">
            <ContactCard
              index={0}
              href={`https://wa.me/${phoneDigits}`}
              tileClass="bg-[#1fa04b]"
              icon={<WhatsAppIcon className="h-8 w-8" />}
              title="Contact Us Now"
            >
              {phone}
            </ContactCard>

            <ContactCard
              index={1}
              href={websiteUrl}
              tileClass="bg-[#e09b22]"
              icon={<Globe className="h-7 w-7" strokeWidth={2} />}
              title="Our Website"
            >
              {siteHead}
              <wbr />
              {siteTail}
            </ContactCard>

            <ContactCard
              index={2}
              href={websiteUrl}
              tileClass="bg-[#981b2b]"
              icon={<ShoppingCart className="h-7 w-7" strokeWidth={2} />}
              title="Our Products"
            >
              Explore Our Incense &amp; Fragrance Collection
            </ContactCard>

            <ContactCard
              index={3}
              href={`mailto:${email}`}
              tileClass="bg-[#7a3caf]"
              icon={<Mail className="h-7 w-7" strokeWidth={2} />}
              title="Email Us"
            >
              {emailUser}
              <wbr />@{emailDomain}
            </ContactCard>

            <ContactCard
              index={4}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`}
              tileClass="bg-[#1d62d0]"
              icon={<MapPin className="h-7 w-7" strokeWidth={2} />}
              title="Our Location"
            >
              Rajkot – 360110,
              <br />
              Gujarat, India
            </ContactCard>

            <ContactCard
              index={5}
              wideTile
              tileClass="bg-transparent"
              icon={
                <span className="flex h-full w-full overflow-hidden rounded-[16px]">
                  <span className="flex flex-1 items-center justify-center bg-[#1877f2]">
                    <FacebookIcon className="h-6 w-6" />
                  </span>
                  <span className="w-px bg-white/70" />
                  <span className="flex flex-1 items-center justify-center bg-[#d62976]">
                    <InstagramIcon className="h-6 w-6" />
                  </span>
                </span>
              }
              title="Follow Us on Social Media"
            >
              <SocialLink href={facebookUrl} label="Facebook" />
              <span className="mx-1.5 text-ink/50">|</span>
              <SocialLink href={instagramUrl} label="Instagram" />
            </ContactCard>
          </section>

          <SaveContactCard phone={phone} email={email} websiteUrl={websiteUrl} />

          <footer className="mt-8 text-center text-[12px] font-semibold text-maroon-dark/80">
            © {new Date().getFullYear()} Param Agarbatti Works · Paddhari, Rajkot
          </footer>
        </main>
      </div>
    </MotionConfig>
  )
}

export const args = {
  phone: '+91 98751 50743',
  website: 'www.paramagarbattiworks.in',
  email: 'paramagarbattiworks@gmail.com',
  mapsQuery: 'Param Agarbatti Works, Mota Rampar, Paddhari, Rajkot 360110, Gujarat, India',
  facebookUrl: '',
  instagramUrl: '',
}

export const argTypes = {
  phone: { control: 'text' },
  website: { control: 'text' },
  email: { control: 'text' },
  facebookUrl: { control: 'text' },
  instagramUrl: { control: 'text' },
}

const LOGO_URL = 'https://cdn.magicpatterns.com/uploads/vAsaoX5PGqy8YvhBc8BTfN/image.png'

function splitWebsite(site: string): [string, string] {
  const i = site.indexOf('works.')
  return i > 0 ? [site.slice(0, i), site.slice(i)] : [site, '']
}

function SocialLink({ href, label }: { href: string; label: string }) {
  if (!href) {
    return <span title={`${label} profile link coming soon`}>{label}</span>
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 underline-offset-2 hover:text-maroon hover:underline"
    >
      {label}
    </a>
  )
}
