import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Root() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c10]">
      <Nav />
      {/* Safe-area shim: compensates for dynamic island / notch on top of the fixed nav */}
      <div style={{ height: 'env(safe-area-inset-top)' }} aria-hidden="true" />
      <main className="flex-1">
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
