// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";
import { formatCurrency } from "../types/domain";

interface InsightsDashboardProps {}

export function InsightsDashboard(props: InsightsDashboardProps) {
  const { leads, settings, navigate, navigateToLead } = useAppContext();

  const totalPipeline = useMemo(() => leads.reduce((sum, l) => sum + l.estimatedValue, 0), [leads]);
  const conversionRate = useMemo(() => {
    if (leads.length === 0) return 0;
    return Math.round((leads.filter(l => l.status === "Closed Won").length / leads.length) * 100 * 10) / 10;
  }, [leads]);
  const activeLeads = useMemo(() => leads.filter(l => l.status !== "Closed Won" && l.status !== "Closed Lost").length, [leads]);
  const wonCount = useMemo(() => leads.filter(l => l.status === "Closed Won").length, [leads]);
  const lostCount = useMemo(() => leads.filter(l => l.status === "Closed Lost").length, [leads]);

  const funnel = useMemo(() => {
    const stages = ["Initial Contact", "Qualified", "Proposal Sent", "Negotiation"];
    return stages.map(name => ({
      name,
      count: leads.filter(l => l.status === name).length,
    }));
  }, [leads]);

  const maxFunnel = Math.max(1, ...funnel.map(f => f.count));

  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen py-lg px-md docked left-0 w-64 bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant flat no shadows">
      <div className="flex items-center gap-sm mb-xl">
      <span className="material-symbols-outlined text-primary dark:text-primary text-display" data-icon="eco">eco</span>
      <div className="flex flex-col">
      <span className="font-display text-display text-primary dark:text-primary">Setfarm Greenhouse</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Operation Console</span>
      </div>
      </div>
      <button onClick={() => navigateToLead(null)} className="w-full h-8 mb-lg bg-primary-container text-on-primary-container font-h2 text-h2 rounded flex items-center justify-center gap-xs hover:bg-opacity-90 transition-colors cursor-pointer">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  New Lead
              </button>
      <div className="flex flex-col gap-xs flex-1">
      <a onClick={() => navigate("leads")} className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="group">group</span>
                      Leads
                  </a>
      <a onClick={() => navigate("pipeline")} className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
                      Pipeline
                  </a>
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high font-body-md text-body-md hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150" role="button">
      <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
                      Insights
                  </a>
      <a onClick={() => navigate("settings")} className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 mt-auto cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                      Settings
                  </a>
      </div>
      <div className="mt-lg pt-lg border-t border-outline-variant flex items-center gap-sm">
      <img alt="Operator Profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_puVYJeX1bjDdxWf0kQ7Q34BuCuD12or3d6ddKSDbR9TJndvaC3Ye2gnxzlnIhk8M_lPn4XwHAbpvFW3mgHO5VdnUlPRn8BKgavKvSajQtMMTVx-Kmvt9v9QHTe_9LV9jaQ_3y5fjg2vQ2yf3Vw1DaUEILNtH-XfUK1zrnYz34ZOFHpvISeOR0TJCkKTzIu5y4V1GpEe-uLBulKYhCgAGlrCiAreYItM0KAnympDXBFeh73P_IBK-nt-Dz2IL6gdU5c1i36q9w1U4" />
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface">Admin User</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">System Operator</span>
      </div>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-surface-lowest">
      {/* TopAppBar (Mobile Only fallback, usually hidden on md based on instructions but keeping structure for responsive if needed, assuming instructions meant standard top bar for main content area) */}
      <header className="flex justify-between items-center h-16 px-lg w-full bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flat no shadows md:hidden">
      <span className="font-display text-display text-primary dark:text-primary">Setfarm Greenhouse</span>
      <div className="flex gap-sm">
      <button aria-label="Notifications" className="p-sm text-on-surface-variant hover:bg-surface-container-highest rounded-full"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
      <button aria-label="Help" className="p-sm text-on-surface-variant hover:bg-surface-container-highest rounded-full"><span className="material-symbols-outlined" data-icon="help_outline">help_outline</span></button>
      </div>
      </header>
      {/* Dashboard Header */}
      <div className="px-margin py-lg border-b border-outline-variant bg-surface-container-lowest">
      <div className="flex justify-between items-center">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Performance Insights</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Real-time metrics and conversion tracking.</p>
      </div>
      <div className="flex gap-sm">
      <button className="h-8 px-md border border-outline-variant text-on-surface font-body-md text-body-md rounded hover:bg-surface-container-highest transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                              Last 30 Days
                          </button>
      <button className="h-8 px-md bg-surface-container text-on-surface font-body-md text-body-md border border-outline-variant rounded hover:bg-surface-container-highest transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">download</span>
                              Export
                          </button>
      </div>
      </div>
      </div>
      {/* Dashboard Content */}
      <div className="p-margin flex-1 overflow-y-auto">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-margin">
      {/* Metric 1 */}
      <div className="card-base p-md flex flex-col justify-between h-24">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Pipeline Value</span>
      <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
      </div>
      <div className="flex items-end gap-sm">
      <span className="font-display text-display text-on-surface">{formatCurrency(totalPipeline, settings.currency)}</span>
      <span className="font-mono-data text-mono-data text-primary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12.5%</span>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="card-base p-md flex flex-col justify-between h-24">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Conversion Rate</span>
      <span className="material-symbols-outlined text-secondary text-[18px]">percent</span>
      </div>
      <div className="flex items-end gap-sm">
      <span className="font-display text-display text-on-surface">{conversionRate}%</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant flex items-center"><span className="material-symbols-outlined text-[14px]">horizontal_rule</span> 0.0%</span>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="card-base p-md flex flex-col justify-between h-24">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Active Leads</span>
      <span className="material-symbols-outlined text-tertiary text-[18px]">groups</span>
      </div>
      <div className="flex items-end gap-sm">
      <span className="font-display text-display text-on-surface">{activeLeads}</span>
      <span className="font-mono-data text-mono-data text-error flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 3.2%</span>
      </div>
      </div>
      {/* Metric 4 */}
      <div className="card-base p-md flex flex-col justify-between h-24">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Avg Deal Cycle</span>
      <span className="material-symbols-outlined text-outline text-[18px]">schedule</span>
      </div>
      <div className="flex items-end gap-sm">
      <span className="font-display text-display text-on-surface">18d</span>
      <span className="font-mono-data text-mono-data text-primary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 2d</span>
      </div>
      </div>
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md mb-margin h-80">
      {/* Main Chart: Conversion Funnel */}
      <div className="card-base p-md lg:col-span-2 flex flex-col">
      <div className="flex justify-between items-center mb-md">
      <h2 className="font-h2 text-h2 text-on-surface">Conversion Funnel</h2>
      <button aria-label="More options" className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
      </div>
      <div className="flex-1 relative border-b border-l border-outline-variant flex items-end justify-around pb-sm pt-xl px-sm">
      {/* Simulated Bar Chart */}
      {funnel.map((stage, i) => {
        const pct = maxFunnel > 0 ? (stage.count / maxFunnel) * 100 : 0;
        const opacity = [20, 40, 60, 80][i] ?? 20;
        return (
          <div key={stage.name} className={`w-16 bg-primary-container bg-opacity-${opacity} hover:bg-opacity-${Math.min(opacity + 20, 100)} border border-primary-container rounded-t relative group flex justify-center`} style={{ height: `${Math.max(pct, 5)}%` }}>
            <div className="absolute -top-6 font-mono-data text-mono-data text-on-surface-variant opacity-0 group-hover:opacity-100">{stage.count}</div>
          </div>
        );
      })}
      </div>
      <div className="flex justify-around mt-sm font-label-caps text-label-caps text-on-surface-variant px-sm">
      {funnel.map(stage => (
        <span key={stage.name}>{stage.name.toUpperCase().split(" ")[0]}</span>
      ))}
      </div>
      </div>
      {/* Secondary Chart: Win/Loss Ratio */}
      <div className="card-base p-md flex flex-col">
      <div className="flex justify-between items-center mb-md">
      <h2 className="font-h2 text-h2 text-on-surface">Win / Loss Ratio</h2>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
      {/* Simulated Donut Chart using CSS conic-gradient and mask */}
      <div className="w-40 h-40 rounded-full" style={{background: `conic-gradient(#2563EB 0% ${wonCount}%, #334155 ${wonCount}% 100%)`, maskImage: "radial-gradient(circle, transparent 55%, black 56%)", WebkitMaskImage: "radial-gradient(circle, transparent 55%, black 56%)"}}></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <span className="font-display text-display text-on-surface">{leads.length > 0 ? Math.round((wonCount / leads.length) * 100) : 0}%</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">WIN RATE</span>
      </div>
      </div>
      <div className="mt-md flex justify-center gap-lg">
      <div className="flex items-center gap-xs">
      <div className="w-3 h-3 rounded-full bg-primary-container"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Won ({wonCount})</span>
      </div>
      <div className="flex items-center gap-xs">
      <div className="w-3 h-3 rounded-full bg-[#334155]"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Lost ({lostCount})</span>
      </div>
      </div>
      </div>
      </div>
      {/* Data Table: Weekly Follow-up Performance */}
      <div className="card-base p-md">
      <div className="flex justify-between items-center mb-md">
      <h2 className="font-h2 text-h2 text-on-surface">Weekly Follow-up Performance</h2>
      <div className="flex gap-sm">
      <span className="px-sm py-xs bg-surface-container-highest rounded text-on-surface font-body-sm text-body-sm flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-primary-container"></span> On Track</span>
      <span className="px-sm py-xs bg-surface-container-highest rounded text-on-surface font-body-sm text-body-sm flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-error"></span> Needs Attention</span>
      </div>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant font-label-caps text-label-caps text-on-surface-variant uppercase">
      <th className="pb-sm font-medium">Rep Name</th>
      <th className="pb-sm font-medium">Total Assigned</th>
      <th className="pb-sm font-medium">Contacted</th>
      <th className="pb-sm font-medium">Avg Response Time</th>
      <th className="pb-sm font-medium">Status</th>
      </tr>
      </thead>
      <tbody className="font-body-md text-body-md text-on-surface">
      <tr className="border-b border-outline-variant hover:bg-surface-container-highest transition-colors">
      <td className="py-sm">Sarah Jenkins</td>
      <td className="py-sm font-mono-data text-mono-data">45</td>
      <td className="py-sm font-mono-data text-mono-data text-primary">42 (93%)</td>
      <td className="py-sm">2.4 hours</td>
      <td className="py-sm"><div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-primary-container w-[93%]"></div></div></td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-highest transition-colors">
      <td className="py-sm">David Chen</td>
      <td className="py-sm font-mono-data text-mono-data">38</td>
      <td className="py-sm font-mono-data text-mono-data text-primary">35 (92%)</td>
      <td className="py-sm">3.1 hours</td>
      <td className="py-sm"><div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-primary-container w-[92%]"></div></div></td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-container-highest transition-colors">
      <td className="py-sm">Marcus Row</td>
      <td className="py-sm font-mono-data text-mono-data">52</td>
      <td className="py-sm font-mono-data text-mono-data text-error">28 (53%)</td>
      <td className="py-sm text-error">14.5 hours</td>
      <td className="py-sm"><div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-error w-[53%]"></div></div></td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="py-sm">Elena Rodriguez</td>
      <td className="py-sm font-mono-data text-mono-data">41</td>
      <td className="py-sm font-mono-data text-mono-data text-primary">39 (95%)</td>
      <td className="py-sm">1.8 hours</td>
      <td className="py-sm"><div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full bg-primary-container w-[95%]"></div></div></td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
