const assetPathPrefix = '/assets'
const imgHero = `${assetPathPrefix}/44481.png`
const imgHand0 = `${assetPathPrefix}/dd171.png`
const imgHand1 = `${assetPathPrefix}/95879.png`
const imgHand2 = `${assetPathPrefix}/5660a.png`
const imgHand3 = `${assetPathPrefix}/f3bda.png`
const imgHand4 = `${assetPathPrefix}/bfbca.png`
const imgHand5 = `${assetPathPrefix}/08e99.png`
const imgHand6 = `${assetPathPrefix}/1cbac.png`
const imgHand7 = `${assetPathPrefix}/00422.png`

const flowSteps = [
  { label: '1. Wake Gesture', desc: 'Double tap back or volume key' },
  { label: '2. UPI Select', desc: 'Select by voice or swipe' },
  { label: '3. UPI', desc: 'Voice selection' },
  { label: '4. Voice Amount', desc: 'Speak the amount clearly' },
  { label: '5. Confirm', desc: 'Audio confirmation' },
  { label: '6. Review', desc: 'Clear success state' },
]

const handScreens = [
  { img: imgHand0, title: 'Start' },
  { img: imgHand1, title: 'Scan QR' },
  { img: imgHand2, title: 'QR Aligned' },
  { img: imgHand3, title: 'Voice Amount' },
  { img: imgHand4, title: 'Confirm Payment' },
  { img: imgHand5, title: 'Verified Merchant' },
  { img: imgHand6, title: 'Privacy Curtain' },
  { img: imgHand7, title: 'Pay Success' },
]

const challenges = [
  { title: 'The Challenge', body: 'Many users, especially elderly individuals and people with visual impairments, find existing UPI apps complex and difficult to use independently.' },
  { title: 'The Idea', body: 'A simplified, voice-guided payment flow with clear feedback at every step, helping users complete transactions without confusion.' },
  { title: 'The Goal', body: 'To create an accessible and intuitive UPI payment experience that promotes independence, builds confidence and makes digital payments easier for everyone.' },
]

export default function DhwaniPayPage() {
  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-16">

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Logo mark + wordmark */}
            <div className="flex items-center gap-5">
              {/* Voice bars */}
              <div className="flex items-center gap-2">
                {[32, 64, 80, 48, 24].map((h, i) => (
                  <div key={i} className={`w-3 rounded-full ${i % 2 === 0 ? 'bg-white' : 'bg-[#f6c344]'}`} style={{ height: h }} />
                ))}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-['Inter'] font-black text-white text-[clamp(32px,4vw,56px)] tracking-tight leading-none">Dhwani</span>
                <span className="font-['Inter'] font-black text-[#f6c344] text-[clamp(32px,4vw,56px)] tracking-tight leading-none">Pay</span>
              </div>
            </div>
            <p className="font-['DM_Sans'] font-normal text-[#a0a0a0] text-base leading-relaxed max-w-md">
              A voice-first UPI experience designed for independent and accessible digital payments.
            </p>
            <div className="mt-4">
              <span className="font-['DM_Sans'] font-semibold text-white text-xs tracking-[3px] uppercase">Project Overview</span>
            </div>
            <h2 className="font-['Outfit'] font-black text-white text-[clamp(28px,3.5vw,48px)] leading-tight">
              Making Payments<br />More Independent
            </h2>
            <p className="font-['DM_Sans'] font-normal text-white text-base leading-7 max-w-lg">
              DhwaniPay is a voice-first UPI experience designed to help everyone, including elderly users and people with visual impairments, make digital payments independently with confidence and ease.
            </p>
          </div>
          {/* Right: phones */}
          <div className="flex-1 flex items-center justify-center">
            <img alt="DhwaniPay App" src={imgHero} className="w-full max-w-sm object-contain" />
          </div>
        </div>

        {/* Challenge / Idea / Goal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {challenges.map(({ title, body }) => (
            <div key={title} className="bg-white border border-[#e5e3dc] rounded-2xl p-6 flex flex-col gap-3">
              <p className="font-['Outfit'] font-bold text-[#131313] text-base">{title}</p>
              <p className="font-['DM_Sans'] font-normal text-[#666] text-sm leading-6">{body}</p>
            </div>
          ))}
        </div>

        {/* Design direction */}
        <section className="mb-16">
          <p className="font-['DM_Sans'] font-semibold text-[#555] text-xs tracking-[3px] uppercase mb-4">Design Direction</p>
          <h2 className="font-['Outfit'] font-black text-white text-[clamp(24px,3vw,36px)] mb-8">Designed around a guided payment flow.</h2>

          {/* Flow steps */}
          <div className="bg-[rgba(19,23,30,0.7)] border border-[#232936] rounded-xl p-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {flowSteps.map(({ label, desc }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  <div className="bg-[#0d0f12] border-2 border-[rgba(255,255,255,0.8)] w-11 h-11 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white/20" />
                  </div>
                  <p className="font-['Inter'] font-bold text-white text-[10px] leading-tight">{label}</p>
                  <p className="font-['Inter'] font-normal text-[#94a3b8] text-[8.5px] leading-tight">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Small details section */}
        <section className="mb-16">
          <h2 className="font-['Outfit'] font-black text-white text-[clamp(24px,3vw,36px)] mb-8">Small details. A bigger impact.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {handScreens.map(({ img, title }) => (
              <div key={title} className="flex flex-col gap-2">
                <img alt={title} src={img} className="w-full rounded-xl object-cover bg-[#1a1a1a]" />
                <p className="font-['Inter'] font-normal text-[#94a3b8] text-xs text-center">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing statement */}
        <section className="border-t border-[rgba(255,255,255,0.08)] pt-12 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <p className="font-['DM_Sans'] font-semibold text-white text-xs tracking-[3px] uppercase mb-4">Outcome</p>
            <h2 className="font-['Outfit'] font-black text-white text-[clamp(24px,3vw,40px)] leading-tight">
              A clearer, more inclusive payment experience.
            </h2>
            <p className="font-['DM_Sans'] font-normal text-[#a0a0a0] text-sm mt-4 leading-6 max-w-md">
              DhwaniPay brings together voice guidance, a simplified flow, and clear feedback to help users make digital payments independently and with confidence.
            </p>
          </div>
          {/* Logo repeat */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              {[20, 40, 50, 30, 15].map((h, i) => (
                <div key={i} className={`w-2 rounded-full ${i % 2 === 0 ? 'bg-white' : 'bg-[#f6c344]'}`} style={{ height: h }} />
              ))}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-['Inter'] font-black text-white text-2xl tracking-tight">Dhwani</span>
              <span className="font-['Inter'] font-black text-[#f6c344] text-2xl tracking-tight">Pay</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
