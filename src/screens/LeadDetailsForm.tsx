// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Lead Details Form
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import type { LeadStatus } from "../types/domain";

interface LeadDetailsFormProps {}

export function LeadDetailsForm(props: LeadDetailsFormProps) {
  const { leads, selectedLeadId, addLead, updateLead, navigate, navigateToLead } = useAppContext();
  const isEdit = !!selectedLeadId;
  const existing = isEdit ? leads.find(l => l.id === selectedLeadId) : null;

  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [estimatedValue, setEstimatedValue] = useState("");
  const [status, setStatus] = useState<LeadStatus>("Initial Contact");
  const [notes, setNotes] = useState("");
  const [lastContactDate, setLastContactDate] = useState("");

  useEffect(() => {
    if (existing) {
      setCompany(existing.company);
      setContactName(existing.contactName);
      setContactEmail(existing.contactEmail);
      setContactPhone(existing.contactPhone);
      setEstimatedValue(String(existing.estimatedValue));
      setStatus(existing.status);
      setNotes(existing.notes);
      setLastContactDate(existing.lastContactDate);
    }
  }, [existing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      company: company || "Untitled Company",
      contactName: contactName || "Unknown Contact",
      contactEmail,
      contactPhone,
      estimatedValue: Number(estimatedValue) || 0,
      status,
      lastContactDate: lastContactDate || new Date().toISOString().slice(0, 10),
      notes,
    };
    if (isEdit && selectedLeadId) {
      updateLead(selectedLeadId, payload);
    } else {
      addLead(payload);
    }
  };

  const handleCancel = () => {
    navigate("leads");
  };

  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container border-r border-outline-variant flex flex-col h-screen py-lg px-md w-64 shrink-0 hidden md:flex">
      <div className="mb-xl">
      <h1 className="font-display text-display text-primary tracking-tight">Setfarm Greenhouse</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Operation Console</p>
      </div>
      <button onClick={() => navigateToLead(null)} className="bg-primary-container text-white rounded w-full h-[32px] flex items-center justify-center font-body-sm text-body-sm mb-lg hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer">
      <span className="material-symbols-outlined text-[18px] mr-sm" data-icon="add">add</span>
                  New Lead
              </button>
      <ul className="space-y-xs flex-1">
      <li>
      <a onClick={() => navigate("leads")} className="flex items-center px-sm py-[6px] rounded text-primary font-bold border-r-2 border-primary bg-surface-container-high hover:bg-surface-container-highest transition-colors cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined mr-sm text-[20px]" data-icon="group" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
                          Leads
                      </a>
      </li>
      <li>
      <a onClick={() => navigate("pipeline")} className="flex items-center px-sm py-[6px] rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined mr-sm text-[20px]" data-icon="account_tree">account_tree</span>
                          Pipeline
                      </a>
      </li>
      <li>
      <a onClick={() => navigate("insights")} className="flex items-center px-sm py-[6px] rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined mr-sm text-[20px]" data-icon="monitoring">monitoring</span>
                          Insights
                      </a>
      </li>
      <li>
      <a onClick={() => navigate("settings")} className="flex items-center px-sm py-[6px] rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined mr-sm text-[20px]" data-icon="settings">settings</span>
                          Settings
                      </a>
      </li>
      </ul>
      <div className="mt-auto flex items-center pt-md border-t border-outline-variant">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden shrink-0">
      <img alt="Operator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYELhwMolQsmAFFYfHSjFrWiEqw0BjpfsY3oD87Mq9G_Nv2TVKXxThA19MbN7dcONu_2lv4pfqIiI_wjAfX8Yr2R-ImkSGjxS_r1iCDXzp3NM-syR0lci5i7Dwa-8FFl1rSvF9GZvktbvCvynoB7_DM8Iye80MZ535FRzkK2zNpjGS0FhwLm0Eug063wwq6NIzG_JZmVlPpUf4Af_utWESybm6ylPu1blgKWbv-hmuvsRFyfstpKFb-NbDcrXicN7rea2TEkPrHosb" />
      </div>
      <div className="ml-sm">
      <p className="font-body-sm text-body-sm text-on-surface font-medium">Operator 01</p>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* TopAppBar */}
      <header className="bg-surface-container border-b border-outline-variant flex justify-between items-center h-16 px-lg w-full shrink-0 md:hidden">
      <h1 className="font-display text-display text-primary tracking-tight">Setfarm Greenhouse</h1>
      <div className="flex items-center space-x-md">
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded p-xs transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded p-xs transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
      <img alt="Operator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVxtk2qg46xnZ2KYKCrFeVCckGzYajudimFM2JEnvgTSb2Yk4Tw9JQYAbXGQamilR96x6osxw4br2x3Aue0mha9uqdEpBjQHJZ9A5fcubuRna31C698euPS-s6wooLfCCPnsFz8DrSwlQYhYXFIDHkfXY9fx0_tGQp1KvFwedS9jocwzN9YI4Q4nUcXuwIm6l6NQzkqDvXurUFmcm8qiMIxnZYVBT6YOKgCl1s8lL-9rZOD9shxqOjdwV0y5GsF-PEpaKLe77BfHra" />
      </div>
      </div>
      </header>
      <header className="bg-surface-container border-b border-outline-variant justify-end items-center h-16 px-lg w-full shrink-0 hidden md:flex">
      <div className="flex items-center space-x-md">
      <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-on-surface-variant text-[20px]" data-icon="search">search</span>
      <input className="bg-surface-dim border border-outline-variant rounded h-[32px] pl-[32px] pr-sm text-body-sm focus:border-primary-container focus:ring-0 w-64 text-on-surface" placeholder="Search..." type="text" />
      </div>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded p-xs transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest rounded p-xs transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-margin md:p-[32px] bg-background">
      <div className="max-w-4xl mx-auto">
      <div className="mb-lg flex items-center justify-between">
      <div>
      <div className="flex items-center text-on-surface-variant mb-xs">
      <a onClick={() => navigate("leads")} className="font-body-sm text-body-sm hover:text-primary transition-colors cursor-pointer" role="button" tabIndex={0}>Leads</a>
      <span className="material-symbols-outlined text-[16px] mx-[4px]">chevron_right</span>
      <span className="font-body-sm text-body-sm text-on-surface">{isEdit ? "Edit Lead" : "Create New Lead"}</span>
      </div>
      <h2 className="font-h1 text-h1 text-on-surface">{isEdit ? "Edit Lead" : "Create New Lead"}</h2>
      </div>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded-lg p-lg shadow-sm">
      <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Section: General Info */}
      <div className="col-span-1 md:col-span-2 mb-md">
      <h3 className="font-h2 text-h2 text-primary border-b border-outline-variant pb-xs mb-sm">General Information</h3>
      </div>
      <div className="space-y-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest" htmlFor="lead-name">Company Name <span className="text-error">*</span></label>
      <input value={company} onChange={e => setCompany(e.target.value)} className="w-full bg-surface-dim border border-outline-variant rounded h-[32px] px-sm text-body-sm focus:border-primary-container focus:outline-none focus:ring-0 text-on-surface" id="lead-name" name="lead-name" placeholder="e.g. Acme Corp Greenhouse" required={true} type="text" />
      </div>
      <div className="space-y-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest" htmlFor="company">Contact Name</label>
      <input value={contactName} onChange={e => setContactName(e.target.value)} className="w-full bg-surface-dim border border-outline-variant rounded h-[32px] px-sm text-body-sm focus:border-primary-container focus:outline-none focus:ring-0 text-on-surface" id="company" name="company" placeholder="Contact Name" type="text" />
      </div>
      <div className="space-y-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest" htmlFor="source">Contact Email</label>
      <input value={contactEmail} onChange={e => setContactEmail(e.target.value)} className="w-full bg-surface-dim border border-outline-variant rounded h-[32px] px-sm text-body-sm focus:border-primary-container focus:outline-none focus:ring-0 text-on-surface" id="source" name="source" placeholder="email@example.com" type="email" />
      </div>
      <div className="space-y-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest" htmlFor="est-value">Estimated Value ($)</label>
      <input value={estimatedValue} onChange={e => setEstimatedValue(e.target.value)} className="w-full bg-surface-dim border border-outline-variant rounded h-[32px] px-sm text-body-sm font-mono-data text-mono-data focus:border-primary-container focus:outline-none focus:ring-0 text-on-surface" id="est-value" name="est-value" placeholder="0.00" type="number" />
      </div>
      {/* Section: Status & Follow-up */}
      <div className="col-span-1 md:col-span-2 mt-md mb-md">
      <h3 className="font-h2 text-h2 text-primary border-b border-outline-variant pb-xs mb-sm">Status &amp; Action</h3>
      </div>
      <div className="space-y-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest" htmlFor="status">Status <span className="text-error">*</span></label>
      <select value={status} onChange={e => setStatus(e.target.value as LeadStatus)} className="w-full bg-surface-dim border border-outline-variant rounded h-[32px] px-sm text-body-sm focus:border-primary-container focus:outline-none focus:ring-0 text-on-surface appearance-none cursor-pointer" id="status" name="status" required={true}>
      <option value="Initial Contact">Initial Contact</option>
      <option value="Qualified">Qualified</option>
      <option value="Proposal Sent">Proposal Sent</option>
      <option value="Negotiation">Negotiation</option>
      <option value="Closed Won">Closed Won</option>
      <option value="Closed Lost">Closed Lost</option>
      </select>
      </div>
      <div className="space-y-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest" htmlFor="next-date">Last Contact Date</label>
      <input value={lastContactDate} onChange={e => setLastContactDate(e.target.value)} className="w-full bg-surface-dim border border-outline-variant rounded h-[32px] px-sm text-body-sm focus:border-primary-container focus:outline-none focus:ring-0 text-on-surface [color-scheme:dark]" id="next-date" name="next-date" type="date" />
      </div>
      <div className="col-span-1 md:col-span-2 space-y-xs">
      <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest" htmlFor="next-action">Notes</label>
      <textarea value={notes} onChange={e => setNotes(e.target.value)} className="w-full bg-surface-dim border border-outline-variant rounded px-sm py-xs text-body-sm focus:border-primary-container focus:outline-none focus:ring-0 text-on-surface resize-none" id="next-action" name="next-action" placeholder="Describe the lead details..." rows={3}></textarea>
      </div>
      </div>
      {/* Form Actions */}
      <div className="mt-lg pt-md border-t border-outline-variant flex justify-end space-x-sm">
      <button onClick={handleCancel} className="h-[32px] px-md rounded border border-outline-variant text-on-surface font-body-sm text-body-sm hover:bg-surface-container-highest transition-colors cursor-pointer" type="button">
                                      Cancel
                                  </button>
      <button className="h-[32px] px-md rounded bg-primary-container text-white font-body-sm text-body-sm hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container cursor-pointer" type="submit">
                                      {isEdit ? "Update Lead" : "Save Lead"}
                                  </button>
      </div>
      </form>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
