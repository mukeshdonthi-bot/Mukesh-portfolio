import { useState } from 'react'

const assetPathPrefix = '/assets'
const imgHero = `${assetPathPrefix}/87e9e.png`
const imgMacBook = `${assetPathPrefix}/ecbfb.png`
const imgMainscreen = `${assetPathPrefix}/ceb43.png`
const imgProcess = `${assetPathPrefix}/6c070.png`
const imgServices = `${assetPathPrefix}/07d33.png`
const imgContact = `${assetPathPrefix}/db5a2.png`
const imgLogoType = `${assetPathPrefix}/7f38d.svg`
const imgIconLocation = `${assetPathPrefix}/4ca25.svg`
const imgIconClock = `${assetPathPrefix}/0345b.svg`

export default function InexSpacesPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiry: 'Discovery Call',
    timeline: 'Immediate (1-3 months)',
    message: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-16">

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          <div className="flex-1 overflow-hidden rounded-xl">
            <img
              alt="iNEX Spaces Interior"
              src={imgHero}
              className="w-full h-[300px] lg:h-[400px] object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <img alt="iNEX SPACES Logo" src={imgLogoType} className="h-16 object-contain object-left" />
            <p className="font-['Inter'] font-normal text-[#f0ede8] text-[15px] leading-[26px] max-w-lg">
              <strong>INEX SPACES</strong> is an interior design and architecture studio dedicated to creating commercial and residential projects since 2014. We design spaces that will be just as relevant decades from now — because our quality is high and our vision is timeless.
            </p>
            <p className="font-['Inter'] font-normal text-white text-[15px] leading-[26px] max-w-lg">
              What we create, our focus goes beyond the aesthetic beauty or functionality of a room shaped for a single moment. We believe in the longevity and relevance of what we build.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-[#eae8e4] rounded-xl px-8 md:px-16 py-16 mb-16 text-center">
          <p className="font-['Hanken_Grotesk'] font-semibold text-[#755a34] text-xs tracking-[1.2px] uppercase mb-6">
            INITIATE YOUR PROJECT
          </p>
          <h2 className="font-['Libre_Caslon_Text'] font-normal text-[#1c1c1a] text-[clamp(28px,3.5vw,40px)] tracking-tight mb-10">
            Let's define your space together.
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="bg-black text-white font-['Hanken_Grotesk'] font-semibold text-xs tracking-[1.2px] uppercase px-12 py-5">
              INQUIRE NOW
            </button>
            <button className="border border-black text-black font-['Hanken_Grotesk'] font-semibold text-xs tracking-[1.2px] uppercase px-12 py-5">
              VIEW PROJECTS
            </button>
          </div>
        </section>

        {/* Landing Page */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-[220px] shrink-0">
              <h2 className="font-['Inter'] font-bold text-white text-[30px] leading-9 mb-4">Landing Page</h2>
              <p className="font-['Inter'] font-normal text-white text-[15px] leading-[26px]">
                The landing page establishes iNEX SPACES as a premium interior design studio while immediately communicating its design approach and portfolio.
              </p>
            </div>
            <div className="flex-1 overflow-hidden rounded-xl">
              <img alt="iNEX Landing Page" src={imgMainscreen} className="w-full object-cover" />
            </div>
          </div>
        </section>

        {/* MacBook full-width */}
        <section className="mb-16 -mx-6 md:-mx-16">
          <img alt="iNEX Spaces on MacBook" src={imgMacBook} className="w-full object-cover" />
        </section>

        {/* Process */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 overflow-hidden rounded-xl">
              <img alt="iNEX Process" src={imgProcess} className="w-full object-cover" />
            </div>
            <div className="lg:w-[220px] shrink-0 flex flex-col justify-center">
              <h2 className="font-['Inter'] font-bold text-white text-[30px] leading-9 mb-4">Process</h2>
              <p className="font-['Inter'] font-normal text-white text-[15px] leading-[26px]">
                Interior projects can feel complicated from a client's perspective. I designed the process page to turn that complexity into a simple visual journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-[220px] shrink-0 flex flex-col justify-center">
              <h2 className="font-['Inter'] font-bold text-white text-[30px] leading-9 mb-4">Services</h2>
              <p className="font-['Inter'] font-normal text-white text-[15px] leading-[26px]">
                Instead of making users read through a long service list, I organized the offerings into visual categories that allow visitors to quickly understand what iNEX does.
              </p>
            </div>
            <div className="flex-1 overflow-hidden rounded-xl">
              <img alt="iNEX Services" src={imgServices} className="w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 overflow-hidden rounded-xl border border-[#222]">
              <img alt="iNEX Contact" src={imgContact} className="w-full object-cover" />
            </div>
            <div className="lg:w-[220px] shrink-0 flex flex-col justify-center">
              <h2 className="font-['Inter'] font-bold text-white text-[30px] leading-9 mb-4">Contact</h2>
              <p className="font-['Inter'] font-normal text-white text-[15px] leading-[26px]">
                The contact page reduces the final step to a focused inquiry form, while providing the information needed to establish trust before submitting.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Consultation */}
        <section className="mb-8">
          <h2 className="font-['Inter'] font-bold text-white text-[30px] leading-9 mb-8">Booking Consultation</h2>
          <div className="bg-[#f0ede9] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: info */}
              <div className="p-10 lg:p-12 flex flex-col gap-8">
                <div>
                  <h3 className="font-['Libre_Caslon_Text'] font-normal text-black text-[24px] leading-8 tracking-tight mb-3">
                    Reserve your space in our<br />design calendar.
                  </h3>
                  <p className="font-['Hanken_Grotesk'] font-normal text-[#444748] text-[13px] leading-[21px]">
                    Every masterwork begins with a conversation. Please provide details regarding your architectural aspirations, and our studio will contact you within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <img alt="" src={imgIconLocation} className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-['Hanken_Grotesk'] font-semibold text-black text-[9px] tracking-[0.9px] uppercase mb-1">
                        Location
                      </p>
                      <p className="font-['Hanken_Grotesk'] font-normal text-[#444748] text-[12px] leading-5">
                        Flat No. A 103 SV Garudadri, Hyderabad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img alt="" src={imgIconClock} className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-['Hanken_Grotesk'] font-semibold text-black text-[9px] tracking-[0.9px] uppercase mb-1">
                        Studio Hours
                      </p>
                      <p className="font-['Hanken_Grotesk'] font-normal text-[#444748] text-[12px] leading-5">
                        Mon — Fri, 09:00AM — 08:00PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-[#fcf9f5] p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-[rgba(0,0,0,0.08)]">
                {sent ? (
                  <div className="flex flex-col items-center justify-center gap-4 text-center py-12">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-xl">
                      ✓
                    </div>
                    <p className="font-['Hanken_Grotesk'] font-semibold text-black text-base">Inquiry sent!</p>
                    <p className="font-['Hanken_Grotesk'] font-normal text-[#444748] text-sm">
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-['Hanken_Grotesk'] font-semibold text-[#444748] text-[9px] tracking-[0.9px] uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          required
                          className="bg-white border border-[#6b7280] px-3 py-2 font-['Hanken_Grotesk'] font-normal text-[#6b7280] text-[12px] outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-['Hanken_Grotesk'] font-semibold text-[#444748] text-[9px] tracking-[0.9px] uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          required
                          className="bg-white border border-[#6b7280] px-3 py-2 font-['Hanken_Grotesk'] font-normal text-[#6b7280] text-[12px] outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-['Hanken_Grotesk'] font-semibold text-[#444748] text-[9px] tracking-[0.9px] uppercase">
                          Inquiry Type
                        </label>
                        <select
                          value={form.inquiry}
                          onChange={e => setForm(f => ({ ...f, inquiry: e.target.value }))}
                          className="bg-white border border-[#6b7280] px-3 py-2 font-['Hanken_Grotesk'] font-normal text-[#1c1c1a] text-[12px] outline-none focus:border-black transition-colors"
                        >
                          <option>Discovery Call</option>
                          <option>Residential Project</option>
                          <option>Commercial Project</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-['Hanken_Grotesk'] font-semibold text-[#444748] text-[9px] tracking-[0.9px] uppercase">
                          Project Timeline
                        </label>
                        <select
                          value={form.timeline}
                          onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}
                          className="bg-white border border-[#6b7280] px-3 py-2 font-['Hanken_Grotesk'] font-normal text-[#1c1c1a] text-[12px] outline-none focus:border-black transition-colors"
                        >
                          <option>Immediate (1-3 months)</option>
                          <option>Short-term (3-6 months)</option>
                          <option>Long-term (6+ months)</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Hanken_Grotesk'] font-semibold text-[#444748] text-[9px] tracking-[0.9px] uppercase">
                        Project Narrative
                      </label>
                      <textarea
                        placeholder="Briefly describe the soul of your project..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        rows={4}
                        className="bg-white border border-[#6b7280] px-3 py-2 font-['Hanken_Grotesk'] font-normal text-[#6b7280] text-[12px] outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-black text-white font-['Hanken_Grotesk'] font-semibold text-[9px] tracking-[1.8px] uppercase px-9 py-[15px] hover:bg-[#222] transition-colors"
                      >
                        REQUEST CONSULTATION
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
