import { Link, useLocation } from 'react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const { pathname } = useLocation()

  const isActive = (to: string) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px] bg-[rgba(11,12,16,0.9)] border-b border-[rgba(255,255,255,0.04)]"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 h-[64px] md:h-[81px] flex items-center justify-between">
        <nav className="flex items-center gap-6 md:gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative font-['Inter'] font-medium text-sm leading-5 transition-colors duration-200 ${
                isActive(to) ? 'text-white' : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              {label}
              {isActive(to) && (
                <span className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#6366f1] rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="bg-[#161a23] border border-[rgba(255,255,255,0.15)] text-white font-['Inter'] font-medium text-sm leading-5 px-5 py-[9px] rounded-full hover:bg-[#1e2433] transition-colors duration-200"
        >
          Let's Talk
        </Link>
      </div>
    </header>
  )
}
