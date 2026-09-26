import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-8 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-['Inter'] font-normal text-sm text-[#6b7280]">
          © 2024 Donthi Mukesh. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/projects" className="font-['Inter'] text-sm text-[#6b7280] hover:text-white transition-colors">Projects</Link>
          <Link to="/about" className="font-['Inter'] text-sm text-[#6b7280] hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="font-['Inter'] text-sm text-[#6b7280] hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
