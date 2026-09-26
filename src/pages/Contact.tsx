import { useState } from 'react'

const assetPathPrefix = '/assets'
const imgEmail = `${assetPathPrefix}/c641c.svg`
const imgPhone = `${assetPathPrefix}/14467.svg`
const imgLinkedIn = `${assetPathPrefix}/d1ff7.svg`
const imgX = `${assetPathPrefix}/6c569.svg`
const imgArrow = `${assetPathPrefix}/6def6.svg`
const formEndpoint = 'https://formsubmit.co/ajax/mukeshdonthi@gmail.com'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const contactInfo = [
  { icon: imgEmail, text: 'mukeshdonthi@gmail.com', href: 'mailto:mukeshdonthi@gmail.com' },
  { icon: imgPhone, text: '+91 7396703676', href: 'tel:+917396703676' },
  { icon: imgLinkedIn, text: 'www.linkedin.com/in/donthimukesh', href: 'https://linkedin.com/in/donthimukesh' },
  { icon: imgX, text: 'https://x.com/donthivick99642', href: 'https://x.com/donthivick99642' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _subject: `Portfolio enquiry from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) throw new Error('Message delivery failed')

      setForm({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: intro & contact info */}
          <div className="flex flex-col gap-6 pt-5">
            <p className="font-['Inter:Medium'] font-medium text-[#a3a3a3] text-xs tracking-[0.6px] uppercase leading-4">LET'S CONNECT</p>

            <h1 className="font-['Inter:Bold'] font-bold text-white text-[clamp(36px,4vw,48px)] tracking-tight leading-tight">
              Have a project<br />in{' '}
              <span className="text-[#7b7bf7]">mind?</span>
            </h1>

            <p className="font-['Inter:Regular'] font-normal text-[#a3a3a3] text-base leading-6 max-w-sm">
              I'm always open to new opportunities, collaborations or just a friendly chat about design.
            </p>

            <div className="flex flex-col gap-4 pt-6">
              {contactInfo.map(({ icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_top'}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <img alt="" src={icon} className="shrink-0" />
                  <span className="font-['Inter:Regular'] font-normal text-[#d4d4d4] text-sm leading-5 group-hover:text-white transition-colors">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-[#0e0f13] border border-[#1f212a] rounded-2xl p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full bg-[#6366f1] flex items-center justify-center text-white text-2xl">✓</div>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-white text-lg">Message sent!</p>
                <p className="font-['Inter:Regular'] font-normal text-[#a3a3a3] text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="font-['Inter:Medium'] font-medium text-[#8b87fe] text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="font-['Inter:Medium'] font-medium text-[#a3a3a3] text-xs leading-4">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    disabled={status === 'submitting'}
                    autoComplete="name"
                    className="bg-white border border-[#6b7280] rounded-lg px-4 py-3 font-['Inter:Regular'] font-normal text-[#4b5162] text-sm leading-normal placeholder:text-[#4b5162] outline-none focus:border-[#6366f1] transition-colors disabled:opacity-70"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="font-['Inter:Medium'] font-medium text-[#a3a3a3] text-xs leading-4">Your Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    disabled={status === 'submitting'}
                    autoComplete="email"
                    className="bg-white border border-[#6b7280] rounded-lg px-4 py-3 font-['Inter:Regular'] font-normal text-[#4b5162] text-sm leading-normal placeholder:text-[#4b5162] outline-none focus:border-[#6366f1] transition-colors disabled:opacity-70"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 pb-4">
                  <label htmlFor="contact-message" className="font-['Inter:Medium'] font-medium text-[#a3a3a3] text-xs leading-4">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    disabled={status === 'submitting'}
                    rows={5}
                    className="bg-[#121318] border border-[#23252e] rounded-lg px-4 py-3 font-['Inter:Regular'] font-normal text-[#4b5162] text-sm leading-5 placeholder:text-[#4b5162] outline-none focus:border-[#6366f1] transition-colors resize-none disabled:opacity-70"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-['Inter:Regular'] text-[#fca5a5] text-xs leading-5" role="alert">
                    Your message couldn't be sent. Please try again or{' '}
                    <a href="mailto:mukeshdonthi@gmail.com" target="_top" className="underline">email me directly</a>.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-white text-[#171717] font-['Inter:Semi_Bold'] font-semibold text-sm leading-5 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-sm disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  <span className="w-4 h-4 flex items-center justify-center" aria-hidden="true">
                    <img alt="" src={imgArrow} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
