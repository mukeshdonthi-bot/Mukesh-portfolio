import { Link } from 'react-router'

const assetPathPrefix = '/assets'
const imgMukesh = `${assetPathPrefix}/edec9.png`
const imgGmail = `${assetPathPrefix}/110d3.svg`
const imgWhatsapp = `${assetPathPrefix}/f2452.svg`
const imgDownload = `${assetPathPrefix}/284e0.svg`
const imgDownloadArrow = `${assetPathPrefix}/588d6.svg`
const imgEye = `${assetPathPrefix}/d50bd.svg`
const imgEdit = `${assetPathPrefix}/f5cd1.svg`
const imgRefresh = `${assetPathPrefix}/ad013.svg`

const tools = [
  { letter: 'F', label: 'Figma', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)', color: '#f472b6' },
  { letter: 'Xd', label: 'Adobe XD', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)', color: '#c084fc' },
  { letter: 'Ps', label: 'Photoshop', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)', color: '#38bdf8' },
  { letter: 'Ai', label: 'Illustrator', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', color: '#fbbf24' },
]

const approach = [
  { icon: imgEye, title: 'Understand', subtitle: 'Deep research & user empathy' },
  { icon: imgEdit, title: 'Design', subtitle: 'Create a effective solutions' },
  { icon: imgRefresh, title: 'Iterate', subtitle: 'Learn, improve and make it better' },
]

export default function About() {
  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-16">

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Portrait */}
          <div className="shrink-0">
            <div
              className="w-[280px] md:w-[340px] h-[380px] md:h-[464px] rounded-[40px] overflow-hidden"
              style={{ boxShadow: '2px 4px 27px 0px #7c3aed' }}
            >
              <img alt="Mukesh" src={imgMukesh} className="w-full h-full object-cover" style={{ transform: 'scale(1.35) translate(10%, 10%)' }} />
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-8">
            <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#a3a3a3] text-sm tracking-[3.5px] uppercase">ABOUT ME</p>

            <h1 className="font-['Inter'] font-bold text-white text-[clamp(28px,3.5vw,41px)] leading-tight tracking-tight">
              I like figuring out why things{' '}
              <span className="font-['Inter'] font-medium text-[#8b87fe]">feel</span>
              {'\n'}
              <span className="font-['Inter'] font-medium text-[#8b87fe]">difficult</span>
              {' '}before making them better.
            </h1>

            <p className="font-['Inter'] font-normal text-[#94a3b8] text-base md:text-lg leading-7">
              I'm Donthi Mukesh, a communication designer moving deeper into UI/UX. I enjoy turning ideas into visuals, learning how people interact with products, experimenting with motion, and finding inspiration in places outside the screen.
            </p>

            {/* Works with */}
            <div>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#a3a3a3] text-sm tracking-[3.5px] uppercase mb-4">Works With</p>
              <div className="flex flex-wrap gap-6">
                {tools.map(({ letter, label, bg, border, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-lg border text-xs font-bold"
                      style={{ background: bg, borderColor: border, color, borderWidth: '1px', borderStyle: 'solid' }}
                    >
                      {letter}
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] font-medium text-[#94a3b8] text-xs leading-4">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Approach */}
            <div>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#a3a3a3] text-sm tracking-[3.5px] uppercase mb-4">My Approach</p>
              <div className="flex flex-col gap-3">
                {approach.map(({ icon, title, subtitle }) => (
                  <div key={title} className="bg-[rgba(18,19,25,0.4)] border border-[rgba(255,255,255,0.05)] rounded-2xl flex items-start gap-4 p-4">
                    <div className="bg-[rgba(255,255,255,0.05)] p-2.5 rounded-xl shrink-0">
                      <img alt="" src={icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-['Plus_Jakarta_Sans'] font-semibold text-white text-sm leading-5">{title}</p>
                      <p className="font-['Plus_Jakarta_Sans'] font-normal text-[#7e8395] text-xs leading-4">{subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom contact banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* CTA card */}
          <div className="bg-[#141418] border border-[rgba(255,255,255,0.08)] rounded-2xl px-6 py-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              <span className="font-['Inter'] font-bold text-[#a1a1aa] text-[10px] tracking-[1px] uppercase">LET'S TALK</span>
            </div>
            <h3 className="font-['Inter'] font-bold text-white text-2xl tracking-tight mb-2">
              Have a problem <span className="text-[#7c3aed]">worth designing?</span>
            </h3>
            <p className="font-['Inter'] font-normal text-[#a1a1aa] text-xs leading-4">
              I'm always open to interesting projects, collaborations or just a good design conversation.
            </p>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-3 gap-3">
            <a href="mailto:mukeshdonthi@gmail.com" target="_top" className="bg-[#141418] border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 flex flex-col justify-between hover:border-[rgba(255,255,255,0.15)] transition-colors">
              <img alt="Gmail" src={imgGmail} className="w-5 h-5" />
              <div className="mt-4">
                <p className="font-['Inter'] font-semibold text-white text-xs leading-4">Email Me</p>
                <p className="font-['Inter'] font-normal text-[#a1a1aa] text-[10px] leading-4 truncate">mukeshdonthi@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/917396703676" target="_blank" rel="noreferrer" className="bg-[#141418] border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 flex flex-col justify-between hover:border-[rgba(255,255,255,0.15)] transition-colors">
              <div className="w-6 h-6 rounded-full bg-[#25d366] flex items-center justify-center">
                <img alt="WhatsApp" src={imgWhatsapp} className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <p className="font-['Inter'] font-semibold text-white text-xs leading-4">Chat on WhatsApp</p>
                <p className="font-['Inter'] font-normal text-[#a1a1aa] text-[10px] leading-4">Let's connect</p>
              </div>
            </a>
            <a href="/assets/mukesh-donthi-resume.pdf" download="Mukesh-Donthi-Resume.pdf" className="bg-white rounded-2xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <img alt="" src={imgDownload} className="w-5 h-5" />
                <span className="font-['Inter'] font-semibold text-[#18181b] text-xs tracking-tight">Download Resume</span>
              </div>
              <img alt="" src={imgDownloadArrow} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
