const assetPathPrefix = '/assets'
const imgTeamsyncLogo = `${assetPathPrefix}/eff49.png`
const imgMacBook = `${assetPathPrefix}/c3844.png`
const imgTeamMember0 = `${assetPathPrefix}/5a1fc.png`
const imgTeamMember1 = `${assetPathPrefix}/1c35a.png`
const imgTeamMember2 = `${assetPathPrefix}/ea21a.png`
const imgFilterIcon = `${assetPathPrefix}/87d8d.svg`
const imgExportIcon = `${assetPathPrefix}/5f675.svg`
const imgArrowUp = `${assetPathPrefix}/3d938.svg`
const imgCheckIcon = `${assetPathPrefix}/045e7.svg`

const kpiCards = [
  { label: 'ACTIVE PROJECTS', value: '14', sub: '+2', subColor: '#16a34a', icon: imgArrowUp },
  { label: 'TASKS DUE TODAY', value: '28', sub: 'across 5 projects', subColor: '#45464d' },
  { label: 'AVG WORKLOAD', value: '76%', sub: 'High', subColor: '#f97316' },
  { label: 'COMPLETED (7D)', value: '142', sub: '+12%', subColor: '#16a34a' },
]

const projectHealth = [
  { name: 'Website Redesign', status: 'On Track', statusBg: '#d1fae5', statusText: '#065f46', progress: 78 },
  { name: 'Mobile App V2.0', status: 'At Risk', statusBg: '#fef3c7', statusText: '#92400e', progress: 45 },
  { name: 'Q3 Marketing Campaign', status: 'On Track', statusBg: '#d1fae5', statusText: '#065f46', progress: 92 },
]

const members = [
  { name: 'Sarah J.', tasks: '42 tasks', pct: 85 },
  { name: 'Michael T.', tasks: '38 tasks', pct: 75 },
  { name: 'Elena R.', tasks: '31 tasks', pct: 65 },
  { name: 'David K.', tasks: '25 tasks', pct: 50 },
  { name: 'Alex M.', tasks: '18 tasks', pct: 35 },
]

export default function TeamsyncPage() {
  return (
    <div className="bg-[#0b0c10] min-h-screen w-full pt-[81px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-16">

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img alt="TeamSync Logo" src={imgTeamsyncLogo} className="h-16 object-contain" />
              <span className="font-['Inter'] font-semibold text-[#959595] text-3xl tracking-tight">TeamSync</span>
            </div>
            <h1
              className="font-['Outfit'] font-black text-[#e8f0ff] text-[clamp(36px,5vw,72px)] leading-tight"
            >
              Your team,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #00d4ff, #6366f1)' }}
              >
                perfectly in sync.
              </span>
            </h1>
            <p className="font-['DM_Sans'] font-normal text-[#5a7090] text-base md:text-lg leading-7 max-w-xl">
              The project management platform built for speed. Real-time collaboration, sprint tracking, and team insights — all in one place.
            </p>
            <p className="font-['Inter'] font-semibold text-[#d1d5dc] text-xl md:text-2xl leading-8">
              Streamlining everyday<br />team operations.
            </p>
          </div>
          {/* Right: browser mockup */}
          <div className="flex-1 min-w-0">
            <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] px-3 py-2 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="bg-[#2a2a2a] flex-1 px-2 py-0.5 rounded text-[#6a7282] text-[10px] font-['Inter']">teamsync.app/dashboard</div>
            </div>
            <img alt="TeamSync Dashboard" src={imgMacBook} className="w-full object-cover" />
          </div>
        </div>

        {/* 01 Dashboard Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <span className="font-['Inter'] font-bold text-white text-xl border-b-2 border-white pb-1">01</span>
              <h2 className="font-['Inter'] font-bold text-white text-[clamp(20px,2.5vw,30px)]">Dashboard</h2>
            </div>
            <p className="font-['Inter'] font-normal text-[#6a7282] text-sm text-right max-w-xs">A clean and efficient interface to manage daily team operations with ease.</p>
          </div>

          {/* Full-width screenshot */}
          <div className="rounded-2xl overflow-hidden mb-4 border border-[#2a2a2a]">
            <img alt="TeamSync Full Dashboard" src={imgMacBook} className="w-full object-cover" />
          </div>
          <p className="font-['Inter'] font-normal text-[#6a7282] text-sm text-center">Get a complete overview of tasks, sprints, check-in and recent team activity.</p>
        </section>

        {/* Everything team needs */}
        <section className="mb-12">
          <h2 className="font-['Outfit'] font-black text-[#e8f0ff] text-[clamp(28px,3.5vw,48px)] mb-3">Everything team needs.</h2>
          <p className="font-['DM_Sans'] font-normal text-[#5a7090] text-base mb-10">From sprint planning to live activity feeds — built for teams that move fast.</p>

          {/* Overview header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h3 className="font-['Inter'] font-semibold text-white text-xl leading-7">Overview</h3>
              <p className="font-['Inter'] font-normal text-white text-sm leading-5">Here's what's happening with your projects today.</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-white border border-[#c6c6cd] flex items-center gap-2 px-4 py-2 rounded text-[#0b1c30] text-sm font-['Inter']">
                <img alt="" src={imgFilterIcon} className="h-2 w-3" />Filter
              </button>
              <button className="bg-white border border-[#c6c6cd] flex items-center gap-2 px-4 py-2 rounded text-[#0b1c30] text-sm font-['Inter']">
                <img alt="" src={imgExportIcon} className="h-2.5 w-2.5" />Export
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {kpiCards.map(({ label, value, sub, subColor }) => (
              <div key={label} className="bg-white border border-[#e2e8f0] rounded p-5 flex flex-col gap-3">
                <span className="font-['Inter'] font-semibold text-[#45464d] text-[11px] tracking-[0.55px] uppercase">{label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Inter'] font-semibold text-[#0b1c30] text-3xl tracking-tight">{value}</span>
                  <span className="font-['Inter'] font-medium text-xs tracking-wider" style={{ color: subColor }}>{sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Project health + member completion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Project health table */}
            <div className="bg-white border border-[#c6c6cd] rounded overflow-hidden shadow-sm">
              <div className="bg-[#f1f5f9] border-b border-[#c6c6cd] flex items-center justify-between px-5 py-4">
                <span className="font-['Inter'] font-semibold text-black text-xs tracking-wide uppercase">PROJECT HEALTH</span>
                <button className="font-['Inter'] font-medium text-[#4b41e1] text-sm">View All</button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-[#f8f9ff] border-b border-[#c6c6cd]">
                  <tr>
                    <th className="text-left px-4 py-3 font-['Inter'] font-semibold text-[#45464d] text-xs tracking-wider uppercase">PROJECT NAME</th>
                    <th className="text-left px-4 py-3 font-['Inter'] font-semibold text-[#45464d] text-xs tracking-wider uppercase">STATUS</th>
                    <th className="text-left px-4 py-3 font-['Inter'] font-semibold text-[#45464d] text-xs tracking-wider uppercase">PROGRESS</th>
                  </tr>
                </thead>
                <tbody>
                  {projectHealth.map(({ name, status, statusBg, statusText, progress }) => (
                    <tr key={name} className="border-b border-[#c6c6cd] last:border-0">
                      <td className="px-4 py-4 font-['Inter'] font-medium text-black text-sm">{name}</td>
                      <td className="px-4 py-4">
                        <span className="font-['Inter'] font-medium text-xs px-2 py-1 rounded-full" style={{ background: statusBg, color: statusText }}>{status}</span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-[#e5eeff] rounded-full h-1.5 w-16">
                            <div className="bg-[#10b981] h-full rounded-full" style={{ width: `${progress}%` }} />
                          </div>
                          <span className="font-['Inter'] font-normal text-[#45464d] text-xs">{progress}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Completion by assignee */}
            <div className="bg-white border border-[#c6c6cd] rounded p-6 shadow-sm flex flex-col gap-4">
              <div>
                <h4 className="font-['Inter'] font-semibold text-black text-xl">Completion by Assignee</h4>
                <p className="font-['Inter'] font-normal text-[#45464d] text-sm">Top 5 team members</p>
              </div>
              <div className="flex flex-col gap-4">
                {members.map(({ name, tasks, pct }) => (
                  <div key={name} className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span className="font-['Inter'] font-medium text-black text-sm">{name}</span>
                      <span className="font-['Inter'] font-normal text-[#45464d] text-sm">{tasks}</span>
                    </div>
                    <div className="bg-[#e5eeff] rounded-full h-2 overflow-hidden">
                      <div className="bg-[#4b41e1] h-full rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tag: 'MARKETING', tagBg: 'rgba(100,94,251,0.1)', tagColor: '#4b41e1', title: 'Q3 Campaign Launch', desc: 'Complete overhaul of social media strategy and content…', pct: 68, members: [imgTeamMember0, imgTeamMember1, imgTeamMember2], updated: '2h ago', accent: '#4b41e1' },
              { tag: 'DEVELOPMENT', tagBg: '#ecfdf5', tagColor: '#059669', title: 'API V2 Migration', desc: 'Migrating core services to the new RESTful architecture', pct: 42, members: [imgTeamMember0, imgTeamMember1], updated: 'yesterday', accent: '#059669' },
              { tag: 'DESIGN', tagBg: 'rgba(99,102,241,0.08)', tagColor: '#6366f1', title: 'Design System Audit', desc: 'Comprehensive review of existing ui components for…', pct: 15, members: [imgTeamMember2], updated: '30 min ago', accent: '#6366f1' },
            ].map(({ tag, tagBg, tagColor, title, desc, pct, members, updated, accent }) => (
              <div key={title} className="bg-white border border-[#c6c6cd] rounded overflow-hidden relative flex flex-col gap-4 p-4">
                <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: accent }} />
                <div className="pl-1">
                  <span className="font-['Inter'] font-semibold text-xs tracking-wider uppercase px-2 py-0.5 rounded" style={{ background: tagBg, color: tagColor }}>{tag}</span>
                  <h4 className="font-['Inter'] font-semibold text-[#0b1c30] text-xl mt-2 leading-tight">{title}</h4>
                  <p className="font-['Inter'] font-normal text-[#45464d] text-sm mt-1">{desc}</p>
                </div>
                <div className="border-t border-[#dce9ff] pt-4 pl-1 flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="font-['Inter'] font-medium text-[#45464d] text-xs tracking-wider">Progress</span>
                    <span className="font-['Inter'] font-semibold text-[#0b1c30] text-xs">{pct}%</span>
                  </div>
                  <div className="bg-[#dce9ff] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#4b41e1] h-full rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {members.map((m, i) => (
                        <img key={i} alt="" src={m} className="w-7 h-7 rounded-xl border-2 border-white object-cover" style={{ marginLeft: i > 0 ? '-8px' : 0 }} />
                      ))}
                    </div>
                    <span className="font-['Inter'] font-semibold text-[#45464d] text-[11px]">Updated {updated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
