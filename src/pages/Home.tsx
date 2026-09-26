import { Link } from 'react-router'

const assetPathPrefix = '/assets'
const imgMukeshPortrait = `${assetPathPrefix}/44ed3.png`
const imgAmbientGlow = `${assetPathPrefix}/9afc9.png`
const resumeUrl = `${assetPathPrefix}/mukesh-donthi-resume.pdf`

const tools = [
  { letter: 'F', label: 'Figma', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)', color: '#f472b6' },
  { letter: 'Xd', label: 'Adobe XD', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)', color: '#c084fc' },
  { letter: 'Ps', label: 'Photoshop', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)', color: '#38bdf8' },
  { letter: 'Ai', label: 'Illustrator', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', color: '#fbbf24' },
]

export default function Home() {
  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-16 md:py-20 flex flex-col lg:flex-row items-start gap-12 lg:gap-0">

        {/* Left column */}
        <div className="flex-1 flex flex-col gap-6 lg:pt-8 z-10">
          {/* Badge */}
          <div className="inline-flex items-center self-start bg-[rgba(46,16,101,0.4)] border border-[rgba(91,33,182,0.4)] px-[13px] py-[5px] rounded-full">
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#a78bfa] text-[12px] tracking-[0.6px] uppercase leading-4">
              UI/UX DESIGNER
            </span>
          </div>

          {/* Heading — matches Figma line-by-line structure */}
          <h1 className="font-['Inter'] font-extrabold text-white text-[clamp(36px,4.5vw,60px)] leading-[1.07] tracking-[-1.5px]">
            <span>{`Hi, I'm `}</span>
            <span className="text-[#c4a3fc]">Mukesh</span>
            <br />
            <span>I design digital</span>
            <br />
            <span>experiences that</span>
            <br />
            <span>people love</span>
            <span className="bg-gradient-to-r from-[#a78bfa] via-[#d8b4fe] to-[#818cf8] bg-clip-text text-transparent">.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-['Inter'] font-normal text-[#94a3b8] text-[16px] md:text-[18px] leading-7 max-w-[480px]">
            A passionate UI/UX designer focused on creating simple, intuitive and meaningful designs. Eager to learn, collaborate and build impactful products.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 items-center pt-2 flex-wrap">
            <Link
              to="/projects"
              className="bg-[#7c3aed] text-white font-['Inter'] font-medium text-sm leading-5 px-7 py-3 rounded-xl shadow-[0px_10px_15px_-3px_rgba(124,58,237,0.3)] hover:bg-[#6d28d9] transition-colors duration-200"
            >
              View My Work
            </Link>
            <a
              href={resumeUrl}
              download="Mukesh-Donthi-Resume.pdf"
              className="bg-[#131720] border border-[#1e293b] text-[#e2e8f0] font-['Inter'] font-medium text-sm leading-5 px-7 py-3 rounded-xl hover:bg-[#1a2030] transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right column: Portrait — image crop matches Figma design context exactly */}
        <div className="w-full lg:w-[480px] flex items-start justify-center lg:justify-end shrink-0">
          <div
            className="relative w-[320px] md:w-[430px] h-[440px] md:h-[536px] border-[2.5px] border-[rgba(139,92,246,0.3)] rounded-[40px] overflow-hidden shadow-[0px_32px_63px_-15px_rgba(0,0,0,0.25)]"
          >
            <img
              alt=""
              className="absolute max-w-none"
              style={{ top: '-5%', left: '-12%', width: '124%', height: '124%', objectFit: 'cover', objectPosition: 'center 28%' }}
              src={imgMukeshPortrait}
            />
            <div className="absolute inset-0 bg-white mix-blend-saturation pointer-events-none" />
            <img
              alt=""
              src={imgAmbientGlow}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Tools row — centered matching Figma */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-16 flex gap-8 flex-wrap justify-center">
        {tools.map(({ letter, label, bg, border, color }) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className="flex items-center justify-center w-7 h-7 rounded-lg border font-['Plus_Jakarta_Sans'] font-bold text-[12px]"
              style={{ background: bg, borderColor: border, color, borderWidth: '1px', borderStyle: 'solid' }}
            >
              {letter}
            </div>
            <span className="font-['Plus_Jakarta_Sans'] font-medium text-[#94a3b8] text-[12px] leading-4">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
