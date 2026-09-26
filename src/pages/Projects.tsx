import { Link } from 'react-router'

const assetPathPrefix = '/assets'
const imgArrow = `${assetPathPrefix}/a814d.svg`
const imgWantraMacBook = `${assetPathPrefix}/09e51.png`
const imgTeamsyncScene = `${assetPathPrefix}/402d3.png`
const imgTeamsyncIPad = `${assetPathPrefix}/2ccd6.png`
const imgDhwaniPhone = `${assetPathPrefix}/1d299.png`
const imgInexMacBook = `${assetPathPrefix}/ecbfb.png`

type CardConfig = {
  to: string
  title: string
  subtitle: string
  visual: React.ReactNode
}

const cards: CardConfig[] = [
  {
    to: '/wantra',
    title: 'Wantra',
    subtitle: 'Inventory Tracking management',
    visual: (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(143.13deg, rgb(27, 34, 48) 0%, rgb(12, 14, 18) 100%)' }}
      >
        <img
          alt="Wantra"
          src={imgWantraMacBook}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    ),
  },
  {
    to: '/teamsync',
    title: 'Teamsync',
    subtitle: 'Project Management Platform For team collaboration',
    visual: (
      <div className="absolute inset-0 overflow-hidden">
        {/* Base scene */}
        <img
          alt="Teamsync"
          src={imgTeamsyncScene}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Floating iPad overlay, mirroring the Figma floating element */}
        <img
          alt=""
          src={imgTeamsyncIPad}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: 'center' }}
        />
      </div>
    ),
  },
  {
    to: '/dhwani-pay',
    title: 'Dhwani Pay',
    subtitle: 'Voice First UPI',
    visual: (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(143.13deg, rgb(27, 34, 48) 0%, rgb(12, 14, 18) 100%)' }}
      >
        <img
          alt="Dhwani Pay"
          src={imgDhwaniPhone}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    ),
  },
  {
    to: '/inex-spaces',
    title: 'Inex Spaces',
    subtitle: 'Interior Architecture',
    visual: (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(143.13deg, rgb(27, 34, 48) 0%, rgb(12, 14, 18) 100%)' }}
      >
        <img
          alt="Inex Spaces"
          src={imgInexMacBook}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    ),
  },
]

export default function Projects() {
  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-14 md:py-[84px]">

        <h1 className="font-['Inter'] font-bold text-[42px] md:text-[56px] text-white tracking-[-1.4px] leading-[1.15] text-center mb-12 md:mb-[72px]">
          Projects that create{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(165.55deg, #a78bfa 0%, #818cf8 50%, #6366f1 100%)' }}
          >
            impact.
          </span>
        </h1>

        <div className="max-w-[820px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map(({ to, title, subtitle, visual }) => (
            <Link
              key={to}
              to={to}
              className="group bg-[#111317] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
            >
              {/* Image area */}
              <div className="p-3 pb-0">
                <div className="relative h-[220px] md:h-[264px] rounded-xl overflow-hidden">
                  {visual}
                </div>
              </div>

              {/* Info strip */}
              <div className="flex items-center justify-between px-3 py-[14px]">
                <div className="flex flex-col gap-1.5">
                  <p className="font-['Inter'] font-bold text-white text-[16px] leading-6">{title}</p>
                  <p className="font-['Inter'] font-normal text-[#a1a1aa] text-[12px] leading-4">{subtitle}</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-full w-7 h-7 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[rgba(255,255,255,0.08)]">
                  <img alt="" src={imgArrow} className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
