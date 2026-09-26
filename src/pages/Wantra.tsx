const assetPathPrefix = '/assets'
const imgDashboard = `${assetPathPrefix}/8301b.png`
const imgHighDashboard = `${assetPathPrefix}/65a11.png`
const imgHighInventory = `${assetPathPrefix}/0417b.png`
const imgHBarcode = `${assetPathPrefix}/f8e9d.png`
const imgHCheckout = `${assetPathPrefix}/6ad97.png`
const imgHCheckin = `${assetPathPrefix}/fc959.png`
const imgHFrame14 = `${assetPathPrefix}/1f677.png`
const imgHProductInfo = `${assetPathPrefix}/e0743.png`
const imgHRecentActivity = `${assetPathPrefix}/24cde.png`
const imgCheckInAssessment = `${assetPathPrefix}/e7442.png`
const imgWantraLogo = `${assetPathPrefix}/8f823.png`

const coreScreens = [
  { img: imgHighDashboard, title: 'Dashboard', desc: 'Get a complete overview of inventory, check-ins, check-outs and recent activity.' },
  { img: imgHighInventory, title: 'Product Inventory', desc: 'Manage all products, view stock levels and track availability in real time.' },
  { img: imgHBarcode, title: 'Barcode Generator', desc: 'Create and print barcodes for products quickly and easily.' },
]

const workflowScreens = [
  { img: imgHCheckout, title: 'Checkout', desc: 'Scan or search products and add them to the checkout list.' },
  { img: imgHCheckin, title: 'Check in', desc: 'Log incoming products and update inventory in real time.' },
  { img: imgHFrame14, title: 'Confirmation', desc: 'Clear confirmation screens for every action.' },
]

const additionalScreens = [
  { img: imgHProductInfo, title: 'Product Info', desc: '' },
  { img: imgCheckInAssessment, title: 'Check in Assessment', desc: '' },
  { img: imgHRecentActivity, title: 'Recent Activity', desc: '' },
]

function SectionHeader({ num, title, right }: { num: string; title: string; right: string }) {
  return (
    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
      <div className="flex items-center gap-4">
        <span className="font-['Inter'] font-bold text-white text-xl border-b-2 border-white pb-1">{num}</span>
        <h2 className="font-['Inter'] font-bold text-white text-[clamp(20px,2.5vw,30px)]">{title}</h2>
      </div>
      <p className="font-['Inter'] font-normal text-[#6a7282] text-sm text-right max-w-xs">{right}</p>
    </div>
  )
}

export default function WantraPage() {
  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-16">

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img alt="Wantra" src={imgWantraLogo} className="h-11 object-contain" />
              <span className="font-['Inter'] font-extrabold text-white text-3xl tracking-wide">WANTRA</span>
            </div>
            <h1 className="font-['Inter'] font-black text-[clamp(36px,4vw,60px)] text-white leading-tight">
              <span className="text-[#4f46e5]">Inventory</span> Tracking<br />Management
            </h1>
            <p className="font-['Inter'] font-normal text-[#cad5e2] text-base md:text-lg leading-7 max-w-xl">
              A high-precision web application built for media teams and warehouse logistics. Eliminates missing gear through instant QR barcode check-outs, predictive low-stock alerts, and centralized vendor procurement.
            </p>
            <p className="font-['Inter'] font-semibold text-[#d1d5dc] text-xl md:text-2xl leading-8">
              Simplifying everyday<br />inventory operations.
            </p>
          </div>
          {/* Right: browser mockup */}
          <div className="flex-1 min-w-0">
            <div className="bg-[#0f172b] border border-[#314158] rounded-tl-2xl rounded-tr-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#1d293d] border-b border-[#314158] flex items-center justify-between px-4 py-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff2056]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fe9a00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00bc7d]" />
                </div>
                <span className="font-mono text-[#90a1b9] text-[10px]">wantra-inventory.app/dashboard</span>
              </div>
              <img alt="Wantra Dashboard" src={imgDashboard} className="w-full object-cover" />
            </div>
          </div>
        </div>

        {/* 01 Core Experience */}
        <section className="mb-16">
          <SectionHeader num="01" title="Core Experience" right="A clean and efficient interface to manage daily operations with ease." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreScreens.map(({ img, title, desc }) => (
              <div key={title}>
                <img alt={title} src={img} className="w-full rounded-lg object-cover border border-[#505050]" />
                <p className="font-['Inter'] font-semibold text-white text-sm mt-3 mb-1">{title}</p>
                <p className="font-['Inter'] font-normal text-[#cecece] text-xs leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 02 Workflow */}
        <section className="mb-16">
          <SectionHeader num="02" title="Check In/out Workflow" right="A simple and guided process for smooth and accurate transactions." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowScreens.map(({ img, title, desc }) => (
              <div key={title}>
                <img alt={title} src={img} className="w-full rounded-lg object-cover border border-[#505050]" />
                <p className="font-['Inter'] font-semibold text-white text-sm mt-3 mb-1">{title}</p>
                <p className="font-['Inter'] font-normal text-[#99a1af] text-xs leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 Additional */}
        <section className="mb-16">
          <SectionHeader num="03" title="Additional Features" right="Tools to support everyday operations and improve efficiency." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalScreens.map(({ img, title }) => (
              <div key={title}>
                <img alt={title} src={img} className="w-full rounded-lg object-cover border border-[#505050]" />
                <p className="font-['Inter'] font-semibold text-white text-sm mt-3">{title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
