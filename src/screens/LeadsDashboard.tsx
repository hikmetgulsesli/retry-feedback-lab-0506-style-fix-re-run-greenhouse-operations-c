// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Leads Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface LeadsDashboardProps {}

export function LeadsDashboard(props: LeadsDashboardProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="bg-surface-container dark:bg-surface-container docked left-0 h-full w-64 border-r border-outline-variant dark:border-outline-variant flat no shadows flex flex-col py-lg px-md shrink-0 hidden md:flex z-10">
      <div className="mb-xl px-sm">
      <h1 className="font-display text-display text-primary dark:text-primary tracking-tight">Setfarm Greenhouse</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Operation Console</p>
      </div>
      <button className="bg-primary-container text-on-primary-container hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 h-8 rounded-DEFAULT font-h2 text-h2 mb-lg flex items-center justify-center gap-sm">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  New Lead
              </button>
      <nav className="flex-1 flex flex-col gap-sm">
      <a className="text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high font-body-md text-body-md flex items-center gap-md px-sm py-sm rounded-l-DEFAULT transition-colors" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
                      Leads
                  </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors font-body-md text-body-md flex items-center gap-md px-sm py-sm rounded-DEFAULT active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">account_tree</span>
                      Pipeline
                  </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors font-body-md text-body-md flex items-center gap-md px-sm py-sm rounded-DEFAULT active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">monitoring</span>
                      Insights
                  </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors font-body-md text-body-md flex items-center gap-md px-sm py-sm rounded-DEFAULT active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
      </nav>
      <div className="mt-auto pt-lg border-t border-outline-variant px-sm flex items-center gap-md">
      <img alt="Operator Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A small circular avatar showing a professional operator in a high-tech setting. The lighting is slightly dim, reflecting a modern corporate aesthetic with subtle blue undertones. High quality, sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSqZvU2XWF2h5BCrqY9Y-Iq0UzP2pOZ-fWM9aQUKOnnvH0-EbRbYzo2K3PsX8AbJLXT8Sgzr7pU6xV_9MeXUeTuS7cQCZtsxy_fmMX6u8tpJy-HoBojB20B1hSzGbqTtT-qaCGfj73U-zCDNa4zD_SVgKleEa1jZjf-Grzu0vxee9alLINk7dNvzRp0i70DAdTRj5Qee-3NSM5B61to-9dHIJMvUhehm48yx1_Pj1a6-LyU7DYcc2ZffVnGq8p0qExvrZneRoQqDWB" />
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Admin User</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Console Access</span>
      </div>
      </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background">
      {/* TopAppBar (Mobile) */}
      <header className="bg-surface-container dark:bg-surface-container docked top-0 w-full border-b border-outline-variant dark:border-outline-variant flat no shadows flex justify-between items-center h-16 px-lg shrink-0 md:hidden z-10">
      <h1 className="font-h1 text-h1 text-primary dark:text-primary tracking-tight">Setfarm Greenhouse</h1>
      <div className="flex items-center gap-md text-on-surface-variant dark:text-on-surface-variant">
      <button className="hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-sm rounded-full transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-sm rounded-full transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto p-margin">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
      <div>
      <h2 className="font-display text-display text-on-surface">Leads Dashboard</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage and track potential commercial greenhouse clients.</p>
      </div>
      <div className="flex items-center gap-sm w-full md:w-auto">
      <div className="relative flex-1 md:w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input className="w-full h-8 pl-xl pr-sm bg-surface-container text-on-surface border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors placeholder:text-on-surface-variant/50" placeholder="Search leads..." type="text" />
      </div>
      <button className="h-8 px-md bg-surface-container border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-container-highest transition-colors flex items-center gap-xs font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[16px]">filter_list</span>
                              Filters
                          </button>
      </div>
      </div>
      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
      <div className="bg-surface-container border border-outline-variant p-md rounded-lg flex flex-col gap-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Leads</span>
      <span className="font-display text-display text-on-surface">1,248</span>
      <div className="flex items-center gap-xs text-primary">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span className="font-mono-data text-mono-data">+12% vs last month</span>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant p-md rounded-lg flex flex-col gap-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Active Pipeline</span>
      <span className="font-display text-display text-on-surface">$4.2M</span>
      <div className="flex items-center gap-xs text-primary">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span className="font-mono-data text-mono-data">+5% vs last month</span>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant p-md rounded-lg flex flex-col gap-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">High Priority</span>
      <span className="font-display text-display text-on-surface">34</span>
      <div className="flex items-center gap-xs text-error">
      <span className="material-symbols-outlined text-[14px]">warning</span>
      <span className="font-mono-data text-mono-data">Requires action</span>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant p-md rounded-lg flex flex-col gap-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Conversion Rate</span>
      <span className="font-display text-display text-on-surface">18.5%</span>
      <div className="flex items-center gap-xs text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">horizontal_rule</span>
      <span className="font-mono-data text-mono-data">Stable</span>
      </div>
      </div>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-high border-b border-outline-variant">
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Company</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Contact</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Est. Value</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Status</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Last Contact</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider whitespace-nowrap text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      <tr className="border-b border-outline-variant hover:bg-surface-container-highest transition-colors group">
      <td className="py-sm px-md font-h2 text-h2 text-on-surface">AgriTech Solutions</td>
      <td className="py-sm px-md text-on-surface-variant">Sarah Jenkins</td>
      <td className="py-sm px-md font-mono-data text-mono-data text-on-surface">$150,000</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded-full bg-primary/20 text-primary font-mono-data text-mono-data border border-primary/30">Proposal Sent</span>
      </td>
      <td className="py-sm px-md text-on-surface-variant font-mono-data text-mono-data">Oct 24, 2023</td>
      <td className="py-sm px-md text-right opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex items-center justify-end gap-xs text-on-surface-variant">
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
      <button className="p-xs hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">delete</span></button>
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
      </div>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-highest transition-colors group">
      <td className="py-sm px-md font-h2 text-h2 text-on-surface">Verdant Farms Corp</td>
      <td className="py-sm px-md text-on-surface-variant">Marcus Chen</td>
      <td className="py-sm px-md font-mono-data text-mono-data text-on-surface">$85,000</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded-full bg-surface-bright text-on-surface-variant font-mono-data text-mono-data border border-outline-variant">Initial Contact</span>
      </td>
      <td className="py-sm px-md text-on-surface-variant font-mono-data text-mono-data">Oct 22, 2023</td>
      <td className="py-sm px-md text-right opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex items-center justify-end gap-xs text-on-surface-variant">
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
      <button className="p-xs hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">delete</span></button>
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
      </div>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-highest transition-colors group">
      <td className="py-sm px-md font-h2 text-h2 text-on-surface">Horizon Hydroponics</td>
      <td className="py-sm px-md text-on-surface-variant">Elena Rodriguez</td>
      <td className="py-sm px-md font-mono-data text-mono-data text-on-surface">$320,000</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded-full bg-error-container/20 text-error font-mono-data text-mono-data border border-error/30">Negotiation</span>
      </td>
      <td className="py-sm px-md text-on-surface-variant font-mono-data text-mono-data">Oct 20, 2023</td>
      <td className="py-sm px-md text-right opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex items-center justify-end gap-xs text-on-surface-variant">
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
      <button className="p-xs hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">delete</span></button>
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors group">
      <td className="py-sm px-md font-h2 text-h2 text-on-surface">EcoGrow Logistics</td>
      <td className="py-sm px-md text-on-surface-variant">David Kim</td>
      <td className="py-sm px-md font-mono-data text-mono-data text-on-surface">$45,000</td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-sm py-[2px] rounded-full bg-surface-bright text-on-surface-variant font-mono-data text-mono-data border border-outline-variant">Qualified</span>
      </td>
      <td className="py-sm px-md text-on-surface-variant font-mono-data text-mono-data">Oct 18, 2023</td>
      <td className="py-sm px-md text-right opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex items-center justify-end gap-xs text-on-surface-variant">
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
      <button className="p-xs hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">delete</span></button>
      <button className="p-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination */}
      <div className="bg-surface-container-high border-t border-outline-variant p-sm flex items-center justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant px-sm">Showing 1-4 of 1,248</span>
      <div className="flex items-center gap-xs">
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-highest rounded-DEFAULT disabled:opacity-50"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container-highest rounded-DEFAULT"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
