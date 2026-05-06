// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Pipeline
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";
import { formatCurrency } from "../types/domain";

interface PipelinePipelineProps {}

export function PipelinePipeline(props: PipelinePipelineProps) {
  const { leads, settings, navigate, navigateToLead } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");

  const stages = useMemo(() => {
    const names = ["Initial Contact", "Qualified", "Proposal Sent", "Negotiation", "Closed Won", "Closed Lost"];
    return names.map(name => {
      const stageLeads = leads.filter(l => l.status === name);
      const total = stageLeads.reduce((sum, l) => sum + l.estimatedValue, 0);
      return { name, leads: stageLeads, total };
    });
  }, [leads]);

  const filteredStages = useMemo(() => {
    if (!searchQuery.trim()) return stages;
    const q = searchQuery.toLowerCase();
    return stages.map(s => ({
      ...s,
      leads: s.leads.filter(l => l.company.toLowerCase().includes(q) || l.contactName.toLowerCase().includes(q)),
    }));
  }, [stages, searchQuery]);

  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container docked left-0 h-full w-64 border-r border-outline-variant dark:border-outline-variant flex flex-col py-lg px-md z-20 shrink-0">
      <div className="mb-xl">
      <h1 className="font-display text-display text-primary dark:text-primary">Setfarm Greenhouse</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Operation Console</p>
      </div>
      <div className="flex-1 flex flex-col gap-sm">
      <a onClick={() => navigate("leads")} className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="group">group</span>
      <span className="font-body-md text-body-md">Leads</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high active:scale-95 transition-transform duration-150" role="button">
      <span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
      <span className="font-body-md text-body-md">Pipeline</span>
      </a>
      <a onClick={() => navigate("insights")} className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      <a onClick={() => navigate("settings")} className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 mt-auto cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </div>
      <button onClick={() => navigateToLead(null)} className="mt-lg w-full bg-primary-container text-on-primary-container h-8 rounded flex items-center justify-center gap-sm font-body-md text-body-md hover:bg-primary-fixed-dim transition-colors cursor-pointer">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  New Lead
              </button>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* TopAppBar */}
      <header className="bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flex justify-between items-center h-16 px-lg w-full z-10 shrink-0">
      <div className="flex items-center gap-md">
      <h2 className="font-h1 text-h1 text-primary dark:text-primary">Pipeline</h2>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden md:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="h-8 bg-surface dark:bg-surface border border-outline-variant rounded pl-xl pr-sm text-body-sm font-body-sm focus:ring-2 focus:ring-primary-container focus:outline-none focus:border-primary-container transition-colors w-64 placeholder-on-surface-variant text-on-surface" placeholder="Search pipeline..." type="text" />
      </div>
      <button aria-label="Notifications" className="text-on-surface-variant hover:bg-surface-container-highest rounded p-sm transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none cursor-pointer">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="Help" className="text-on-surface-variant hover:bg-surface-container-highest rounded p-sm transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none cursor-pointer">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div onClick={() => navigate('profile')} className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant ml-sm cursor-pointer hover:ring-2 hover:ring-primary-container transition-all" role="button" tabIndex={0} aria-label="Open profile">
      <img alt="Operator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVEg4SyAzsdvZMrNMyIJdSQOWMzJnYQ5rCHNcrgcALMcVfEQeCSwdTqBOBnQ47hanNc1m5HaFS6Vq55PZsb8zbSWTm3Cs2GHGImYS_Jh1p3wcYqDArb81-zBKwBh2Emi-lFD9lu55Gq7ZxxH3t8xNipjN1g6fmLgWWjU1q4M78KWmYRJXFuhquSo7tKTbiLAVd-viZ6IVfB8mOS7c4OmJXIvhWttRSgQ7WRpKuJghbo0X1n7qyTrsMcuY2EhfoYU30uBiD3HVpKDSI" />
      </div>
      </div>
      </header>
      {/* Kanban Board Canvas */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden p-margin flex gap-gutter">
      {filteredStages.map(stage => (
        <div key={stage.name} className="flex flex-col w-72 shrink-0 h-full">
        <div className="flex justify-between items-center mb-sm px-sm">
        <h3 className="font-h2 text-h2 text-on-surface">{stage.name}</h3>
        <div className="flex items-center gap-sm">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{stage.leads.length}</span>
        <span className="font-mono-data text-mono-data text-on-surface-variant">{formatCurrency(stage.total, settings.currency)}</span>
        </div>
        </div>
        <div className="flex-1 bg-surface-container-low rounded-lg border border-outline-variant p-sm flex flex-col gap-sm overflow-y-auto">
        {stage.leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-50">
            <span className="material-symbols-outlined text-outline text-[32px] mb-sm">inbox</span>
            <p className="font-body-sm text-body-sm text-outline text-center">No leads in this stage</p>
          </div>
        ) : (
          stage.leads.map(lead => (
            <div key={lead.id} onClick={() => navigateToLead(lead.id)} className="bg-surface border border-outline-variant rounded p-md hover:border-primary-container transition-colors cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-start mb-sm">
            <h4 className="font-h2 text-h2 text-on-surface line-clamp-1">{lead.company}</h4>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">more_horiz</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">{lead.contactName}</p>
            <div className="flex justify-between items-end">
            <div className="flex gap-xs">
              <span className="h-5 px-sm rounded bg-primary-container/20 text-primary font-label-caps text-label-caps uppercase flex items-center justify-center">{lead.status === "Initial Contact" ? "New" : lead.status.split(" ")[0]}</span>
            </div>
            <span className="font-mono-data text-mono-data text-on-surface">{formatCurrency(lead.estimatedValue, settings.currency)}</span>
            </div>
            </div>
          ))
        )}
        </div>
        </div>
      ))}
      {/* Empty space filler for scrolling */}
      <div className="w-8 shrink-0"></div>
      </main>
      </div>
    </>
  );
}
