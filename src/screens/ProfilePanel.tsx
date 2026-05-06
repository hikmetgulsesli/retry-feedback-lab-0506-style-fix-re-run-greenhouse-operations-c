// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profile Panel
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useAppContext } from "../contexts/AppContext";

interface ProfilePanelProps {}

export function ProfilePanel(props: ProfilePanelProps) {
  const { navigate, navigateToLead, settings, updateSettings } = useAppContext();

  const handleToggleNewLead = (checked: boolean) => {
    updateSettings({ notifyNewLead: checked });
  };

  const handleToggleAction = (checked: boolean) => {
    updateSettings({ notifyActionRequired: checked });
  };

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flat no shadows flex justify-between items-center h-16 px-lg w-full fixed top-0 z-10">
      <div className="flex items-center gap-md">
      <h1 className="font-display text-display text-primary dark:text-primary tracking-tight">Setfarm Greenhouse</h1>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden sm:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" style={{fontVariationSettings: "'FILL' 0"}}>search</span>
      <input readOnly className="bg-surface text-on-surface border border-outline-variant rounded h-8 pl-[30px] pr-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none w-64 placeholder:text-on-surface-variant transition-colors" placeholder="Search..." type="text" />
      </div>
      <button aria-label="Notifications" className="h-8 w-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0"}}>notifications</span>
      </button>
      <button aria-label="Help" className="h-8 w-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none cursor-pointer">
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0"}}>help_outline</span>
      </button>
      <button onClick={() => navigate("profile")} className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none ml-sm relative cursor-pointer">
      <img alt="Operator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkmwRGFTgfbPS5kaSf-mOkKDSEq7zSCfRRGXp4aK2vU3s88EnmbRZP6vpiG0FEWYH5QkaWiUlKkbe4wF3clY-B3zS1PTycl4rfRorTB4NWy4GMfoggxAr_Je9E_9Xu11jvryhkFtDYgInTI67WVSLKnlJc0XwdZBCsYuoY0MeJIdu3KmaTIZVoABpuACbpTerss7GZ8la9ZPFMN0IUvhxptNxhCJTYTF-e0jLo-9dz3-Hr9l73eA2bRyqvonzjzRh08kZInU4sm23h" />
      {/* Active Indicator */}
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary-container border border-surface rounded-full"></span>
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant flat no shadows docked left-0 h-full w-64 flex flex-col py-lg px-md fixed top-16 z-0">
      <div className="mb-xl px-sm">
      <div className="font-h2 text-h2 text-on-surface">Operation Console</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Active Session</div>
      </div>
      <ul className="flex-1 space-y-xs">
      <li>
      <a onClick={() => navigate("leads")} className="flex items-center gap-sm px-sm py-2 rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0"}}>group</span>
      <span className="font-body-md text-body-md">Leads</span>
      </a>
      </li>
      <li>
      <a onClick={() => navigate("pipeline")} className="flex items-center gap-sm px-sm py-2 rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0"}}>account_tree</span>
      <span className="font-body-md text-body-md">Pipeline</span>
      </a>
      </li>
      <li>
      <a onClick={() => navigate("insights")} className="flex items-center gap-sm px-sm py-2 rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0"}}>monitoring</span>
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </li>
      <li>
      <a onClick={() => navigate("settings")} className="flex items-center gap-sm px-sm py-2 rounded text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto pt-lg border-t border-outline-variant">
      <button onClick={() => navigateToLead(null)} className="w-full bg-primary-container text-white h-8 rounded font-body-sm text-body-sm flex items-center justify-center gap-sm hover:bg-primary-container/90 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-container focus:ring-primary-container outline-none cursor-pointer">
      <span className="material-symbols-outlined text-[18px]">add</span>
                      New Lead
                  </button>
      </div>
      </nav>
      {/* Main Canvas (Overlayed by Panel) */}
      <main className="flex-1 ml-64 mt-16 p-xl relative h-[calc(100vh-64px)] overflow-hidden">
      {/* Dummy Content to show context */}
      <div className="max-w-4xl mx-auto opacity-30 pointer-events-none">
      <div className="h-8 w-48 bg-surface-container rounded mb-lg"></div>
      <div className="grid grid-cols-3 gap-md mb-lg">
      <div className="h-32 bg-surface-container rounded border border-outline-variant"></div>
      <div className="h-32 bg-surface-container rounded border border-outline-variant"></div>
      <div className="h-32 bg-surface-container rounded border border-outline-variant"></div>
      </div>
      <div className="h-64 bg-surface-container rounded border border-outline-variant"></div>
      </div>
      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-20 transition-opacity"></div>
      {/* Profile Panel (Slide-out from right) */}
      <aside className="absolute top-0 right-0 h-full w-80 bg-surface-container border-l border-outline-variant shadow-[-8px_0_24px_rgba(0,0,0,0.5)] z-30 flex flex-col transform transition-transform duration-300 ease-in-out">
      {/* Panel Header */}
      <div className="flex items-center justify-between p-md border-b border-outline-variant bg-surface-container-highest">
      <h2 className="font-h1 text-h1 text-on-surface">Profile</h2>
      <button onClick={() => navigate("leads")} aria-label="Close Profile" className="h-8 w-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors focus:ring-2 focus:ring-primary-container outline-none cursor-pointer">
      <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
      </div>
      {/* Panel Content (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-md space-y-xl custom-scrollbar">
      {/* Identity Section */}
      <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-container mb-md relative">
      <img alt="Alex Operator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwb90uOwr6jrb81uO7e4TbKUHF_gFXBcvJmeo7JYV0kG_aIkDX927cKlElx_jsQza0lcbXa2SokJuWlVvUDg19-J4aAOHqs19qrifMjHNESAnscTidhKVbQSiQEVw82-e4v3oVTi2Ttm8Yd47YbcPAtn4BGcVlRWo-GzgITLCsa6mEBR5tCZxYUaAUAhhlc7szk0PLdEo6ROpYfTo7Af2K5O01c9RlYSx8yDpJwAxUlMA1Hec-v46ThhPBtFI2OFFrHdJzUKKHvMl-" />
      </div>
      <h3 className="font-h2 text-h2 text-on-surface">Alex Operator</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Lead Agronomist</p>
      <div className="mt-sm flex items-center gap-xs px-sm py-1 bg-surface rounded border border-outline-variant">
      <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
      <span className="font-label-caps text-label-caps text-on-surface tracking-wider uppercase">Active</span>
      </div>
      </div>
      {/* Info List */}
      <div className="space-y-sm">
      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-sm border-b border-outline-variant pb-xs">Account Details</h4>
      <div className="flex items-center justify-between py-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-sm">
      <span className="material-symbols-outlined text-[16px]">schedule</span> Timezone
                               </span>
      <span className="font-mono-data text-mono-data text-on-surface">UTC-5 (EST)</span>
      </div>
      <div className="flex items-center justify-between py-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-sm">
      <span className="material-symbols-outlined text-[16px]">mail</span> Email
                               </span>
      <span className="font-body-sm text-body-sm text-on-surface truncate max-w-[140px]">alex@setfarm.io</span>
      </div>
      <div className="flex items-center justify-between py-xs">
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-sm">
      <span className="material-symbols-outlined text-[16px]">shield</span> Role
                               </span>
      <span className="font-body-sm text-body-sm text-on-surface">Admin</span>
      </div>
      </div>
      {/* Notification Toggles */}
      <div className="space-y-md">
      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-sm border-b border-outline-variant pb-xs">Preferences</h4>
      {/* Toggle 1 */}
      <div className="flex items-center justify-between bg-surface p-sm rounded border border-outline-variant">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">New Lead</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Alert on pipeline entry</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={settings.notifyNewLead} onChange={e => handleToggleNewLead(e.target.checked)} className="sr-only peer" type="checkbox" />
      <div className="w-9 h-5 bg-[#475569] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#16A34A]"></div>
      </label>
      </div>
      {/* Toggle 2 */}
      <div className="flex items-center justify-between bg-surface p-sm rounded border border-outline-variant">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Action Required</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Critical system alerts</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={settings.notifyActionRequired} onChange={e => handleToggleAction(e.target.checked)} className="sr-only peer" type="checkbox" />
      <div className="w-9 h-5 bg-[#475569] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#16A34A]"></div>
      </label>
      </div>
      </div>
      </div>
      {/* Panel Footer */}
      <div className="p-md border-t border-outline-variant bg-surface-container-highest flex gap-sm">
      <button onClick={() => navigate("leads")} className="flex-1 h-8 bg-transparent border border-outline-variant text-on-surface font-body-sm text-body-sm rounded hover:bg-surface-variant transition-colors focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none flex items-center justify-center gap-xs cursor-pointer">
      <span className="material-symbols-outlined text-[16px]">logout</span>
                          Sign Out
                      </button>
      </div>
      </aside>
      </main>
      <style>{`
              /* Custom scrollbar for panel */
              .custom-scrollbar::-webkit-scrollbar {
                  width: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                  background-color: #434655; /* outline-variant */
                  border-radius: 4px;
              }
          `}</style>
    </>
  );
}
