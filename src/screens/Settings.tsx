// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { exportState, importState, clearState } from "../utils/storage";

interface SettingsProps {}

type SettingsTab = "display" | "notifications" | "data";

function TabButton({ tab, icon, label, activeTab, setActiveTab }: { tab: SettingsTab; icon: string; label: string; activeTab: SettingsTab; setActiveTab: (tab: SettingsTab) => void }) {
  const isActive = activeTab === tab;
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-sm px-md py-sm rounded font-body-md text-body-md flex-1 lg:flex-none justify-center lg:justify-start transition-colors ${
        isActive
          ? "text-primary font-h2 text-h2 bg-surface-container-high border-l-2 border-primary"
          : "text-on-surface-variant hover:bg-surface-container-highest"
      }`}
    >
      <span className="material-symbols-outlined text-[20px]" data-icon={icon}>{icon}</span>
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
}

export function Settings(props: SettingsProps) {
  const { settings, updateSettings, navigate, navigateToLead, leads, importBackup } = useAppContext();
  const [activeTab, setActiveTab] = useState<SettingsTab>("display");
  const [localDensity, setLocalDensity] = useState(settings.density);
  const [localCurrency, setLocalCurrency] = useState(settings.currency);
  const [localNotifyNewLead, setLocalNotifyNewLead] = useState(settings.notifyNewLead);
  const [localNotifyAction, setLocalNotifyAction] = useState(settings.notifyActionRequired);
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);

  useEffect(() => {
    setLocalDensity(settings.density);
    setLocalCurrency(settings.currency);
    setLocalNotifyNewLead(settings.notifyNewLead);
    setLocalNotifyAction(settings.notifyActionRequired);
  }, [settings.density, settings.currency, settings.notifyNewLead, settings.notifyActionRequired]);

  const handleSave = () => {
    updateSettings({
      density: localDensity,
      currency: localCurrency,
      notifyNewLead: localNotifyNewLead,
      notifyActionRequired: localNotifyAction,
    });
  };

  const handleDiscard = () => {
    setLocalDensity(settings.density);
    setLocalCurrency(settings.currency);
    setLocalNotifyNewLead(settings.notifyNewLead);
    setLocalNotifyAction(settings.notifyActionRequired);
    setImportError(null);
    setImportSuccess(false);
  };

  const hasChanges =
    localDensity !== settings.density ||
    localCurrency !== settings.currency ||
    localNotifyNewLead !== settings.notifyNewLead ||
    localNotifyAction !== settings.notifyActionRequired;

  const handleExport = () => {
    const blob = new Blob([exportState({ leads, settings, lastSyncAt: new Date().toISOString() })], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `setfarm-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const imported = importState(text);
      if (imported) {
        importBackup(imported);
        setImportError(null);
        setImportSuccess(true);
        setTimeout(() => setImportSuccess(false), 3000);
      } else {
        setImportError("Invalid backup file format.");
        setImportSuccess(false);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all data? This will clear all leads and restore default settings.")) {
      clearState();
      window.location.reload();
    }
  };

  return (
    <>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col h-screen py-lg px-md docked left-0 w-64 bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant flex-shrink-0 z-10">
      <div className="mb-xl px-sm">
      <h1 className="font-display text-display text-primary dark:text-primary">Setfarm Greenhouse</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Operation Console</p>
      </div>
      <div className="flex-1 space-y-sm">
      <a onClick={() => navigate("leads")} className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="group">group</span>
      <span className="font-body-md text-body-md">Leads</span>
      </a>
      <a onClick={() => navigate("pipeline")} className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
      <span className="font-body-md text-body-md">Pipeline</span>
      </a>
      <a onClick={() => navigate("insights")} className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      <a onClick={() => navigate('settings')} className="flex items-center gap-sm px-md py-sm rounded-lg text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 transition-transform duration-150 cursor-pointer" role="button" tabIndex={0}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </div>
      <div className="mt-auto px-sm">
      <button onClick={() => navigateToLead(null)} className="w-full flex items-center justify-center gap-sm bg-primary-container text-white py-sm px-md rounded-DEFAULT font-h2 text-h2 h-8 active:scale-95 transition-transform duration-150 hover:opacity-90 focus:ring-2 focus:ring-primary-container focus:outline-none focus:ring-offset-2 focus:ring-offset-surface-container cursor-pointer">
      <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                      New Lead
                  </button>
      </div>
      </nav>
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* TopAppBar */}
      <header className="flex justify-between items-center h-16 px-lg w-full docked top-0 bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flex-shrink-0 z-10 md:hidden">
      <h1 className="font-h1 text-h1 text-primary dark:text-primary truncate mr-sm">Setfarm Greenhouse</h1>
      <div className="flex items-center gap-sm flex-shrink-0">
      <button onClick={() => setActiveTab('notifications')} aria-label="Notifications" className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-sm rounded-full focus:ring-2 focus:ring-primary-container focus:outline-none cursor-pointer">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button onClick={() => navigate('profile')} aria-label="Help" className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-sm rounded-full focus:ring-2 focus:ring-primary-container focus:outline-none cursor-pointer">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      <img alt="Operator Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-xs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8IVFTjvixfzuN25C49IeTGvZrvR9kjtNmLYRpbzmac6_E8MM7aDczKlgmEtaZY4VVxNL5TcoMaiqlMMZbk9zx-Uond2sagy2d4Ogp9uHI2Rek6YzqBH_aZ2kODwjrZs7SY0F4Oq7B7Fgw8VGs2In0R7_P4epoB0w-Cbb5fUBAXMlzAUVBW5XRYuIuVv0odmqsqfFhbmeKIFfiaQB2Yf5vMqGYShd_YOTLESxWKC6K7UWCkBM1kQwmCB6wlQDsCnvjQ0UqeXA91rK6" />
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto p-md md:p-lg bg-background">
      <div className="max-w-5xl mx-auto">
      <div className="mb-lg">
      <h2 className="font-display text-display text-on-background mb-xs">Settings</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Manage your operation preferences and application settings.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
      {/* Settings Navigation (Bento Grid Style) */}
      <div className="lg:col-span-3 space-y-sm">
      <nav className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden flex flex-row lg:flex-col p-xs gap-xs sticky top-4">
        <TabButton tab="display" icon="display_settings" label="Display" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton tab="notifications" icon="notifications_active" label="Notifications" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton tab="data" icon="database" label="Data" activeTab={activeTab} setActiveTab={setActiveTab} />
      </nav>
      </div>
      {/* Settings Content */}
      <div className="lg:col-span-9 space-y-lg">

      {activeTab === "display" && (
      <section className="bg-surface-container border border-outline-variant rounded-xl p-md md:p-lg">
      <h3 className="font-h1 text-h1 text-on-background mb-lg flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary" data-icon="display_settings">display_settings</span>
                                      Display Preferences
                                  </h3>
      <div className="space-y-xl">
      {/* Density Setting */}
      <div>
      <div className="flex justify-between items-start mb-sm">
      <div>
      <h4 className="font-h2 text-h2 text-on-background">Interface Density</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Adjust the compactness of lists and tables.</p>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-sm">
      <label className="cursor-pointer" onClick={() => setLocalDensity("compact")}>
      <input checked={localDensity === "compact"} onChange={() => setLocalDensity("compact")} className="peer sr-only" name="density" type="radio" />
      <div className="border border-outline-variant rounded-lg p-sm text-center peer-checked:border-primary peer-checked:bg-surface-container-high transition-all hover:bg-surface-container-highest">
      <span className="material-symbols-outlined mb-xs text-on-surface-variant peer-checked:text-primary block" data-icon="density_small">density_small</span>
      <span className="font-body-sm text-body-sm text-on-background">Compact</span>
      </div>
      </label>
      <label className="cursor-pointer" onClick={() => setLocalDensity("standard")}>
      <input checked={localDensity === "standard"} onChange={() => setLocalDensity("standard")} className="peer sr-only" name="density" type="radio" />
      <div className="border border-outline-variant rounded-lg p-sm text-center peer-checked:border-primary peer-checked:bg-surface-container-high transition-all hover:bg-surface-container-highest">
      <span className="material-symbols-outlined mb-xs text-on-surface-variant peer-checked:text-primary block" data-icon="density_medium">density_medium</span>
      <span className="font-body-sm text-body-sm text-on-background">Standard</span>
      </div>
      </label>
      <label className="cursor-pointer" onClick={() => setLocalDensity("comfortable")}>
      <input checked={localDensity === "comfortable"} onChange={() => setLocalDensity("comfortable")} className="peer sr-only" name="density" type="radio" />
      <div className="border border-outline-variant rounded-lg p-sm text-center peer-checked:border-primary peer-checked:bg-surface-container-high transition-all hover:bg-surface-container-highest">
      <span className="material-symbols-outlined mb-xs text-on-surface-variant peer-checked:text-primary block" data-icon="density_large">density_large</span>
      <span className="font-body-sm text-body-sm text-on-background">Comfortable</span>
      </div>
      </label>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Currency Setting */}
      <div>
      <div className="flex justify-between items-center mb-sm">
      <div>
      <h4 className="font-h2 text-h2 text-on-background">Default Currency</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Used for pipeline and revenue calculations.</p>
      </div>
      </div>
      <div className="relative w-64">
      <select value={localCurrency} onChange={e => setLocalCurrency(e.target.value as "USD" | "EUR" | "GBP")} className="w-full bg-surface-dim border border-outline-variant rounded-DEFAULT h-8 px-sm font-body-md text-body-md text-on-background appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      <option value="GBP">GBP (£)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]" data-icon="expand_more">expand_more</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      )}

      {activeTab === "notifications" && (
      <section className="bg-surface-container border border-outline-variant rounded-xl p-md md:p-lg">
      <h3 className="font-h1 text-h1 text-on-background mb-lg flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
                                      Notification Preferences
                                  </h3>
      <div className="space-y-xl">
      {/* New Lead Alert */}
      <div className="flex items-center justify-between bg-surface p-sm rounded border border-outline-variant">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-background">New Lead Alerts</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Alert when a new lead enters the pipeline.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={localNotifyNewLead} onChange={e => setLocalNotifyNewLead(e.target.checked)} className="sr-only peer" type="checkbox" />
      <div className="w-9 h-5 bg-[#475569] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#16A34A]"></div>
      </label>
      </div>
      {/* Action Required Alert */}
      <div className="flex items-center justify-between bg-surface p-sm rounded border border-outline-variant">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-background">Action Required Alerts</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Critical system alerts requiring attention.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={localNotifyAction} onChange={e => setLocalNotifyAction(e.target.checked)} className="sr-only peer" type="checkbox" />
      <div className="w-9 h-5 bg-[#475569] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#16A34A]"></div>
      </label>
      </div>
      </div>
      </section>
      )}

      {activeTab === "data" && (
      <section className="bg-surface-container border border-outline-variant rounded-xl p-md md:p-lg">
      <h3 className="font-h1 text-h1 text-on-background mb-lg flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary" data-icon="database">database</span>
                                      Data Management
                                  </h3>
      <div className="space-y-xl">
      <div>
      <h4 className="font-h2 text-h2 text-on-background">Export Data</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Download a JSON backup of all leads and settings.</p>
      <button onClick={handleExport} className="px-md h-8 bg-primary-container text-white rounded-DEFAULT font-h2 text-h2 hover:opacity-90 transition-opacity focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-2 focus:ring-offset-background cursor-pointer">
      <span className="material-symbols-outlined text-[18px] mr-xs inline-block align-text-bottom" data-icon="download">download</span>
                                      Export Backup
                                  </button>
      </div>
      <hr className="border-outline-variant" />
      <div>
      <h4 className="font-h2 text-h2 text-on-background">Import Data</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Restore from a previous JSON backup file.</p>
      <label className="inline-block px-md h-8 border border-outline-variant rounded-DEFAULT font-h2 text-h2 text-on-background hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer">
      <span className="material-symbols-outlined text-[18px] mr-xs inline-block align-text-bottom" data-icon="upload">upload</span>
                                      Import Backup
      <input type="file" accept=".json,application/json" onChange={handleImport} className="sr-only" />
      </label>
      {importError && <p className="mt-xs text-error font-body-sm text-body-sm">{importError}</p>}
      {importSuccess && <p className="mt-xs text-primary font-body-sm text-body-sm">Import successful! Settings restored.</p>}
      </div>
      <hr className="border-outline-variant" />
      <div>
      <h4 className="font-h2 text-h2 text-on-background">Reset Application</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Clear all data and restore default settings. This cannot be undone.</p>
      <button onClick={handleReset} className="px-md h-8 border border-error text-error rounded-DEFAULT font-h2 text-h2 hover:bg-error-container/20 transition-colors focus:ring-2 focus:ring-error focus:outline-none focus:ring-offset-2 focus:ring-offset-background cursor-pointer">
      <span className="material-symbols-outlined text-[18px] mr-xs inline-block align-text-bottom" data-icon="restart_alt">restart_alt</span>
                                      Reset All Data
                                  </button>
      </div>
      </div>
      </section>
      )}

      {/* Actions Bar */}
      <div className="flex justify-end gap-sm pt-md">
      <button onClick={handleDiscard} className="px-md h-8 border border-outline-variant rounded-DEFAULT font-h2 text-h2 text-on-background hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer">
                                      Discard Changes
                                  </button>
      <button onClick={handleSave} disabled={!hasChanges} className={`px-md h-8 rounded-DEFAULT font-h2 text-h2 focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${hasChanges ? 'bg-primary-container text-white hover:opacity-90 transition-opacity' : 'bg-surface-dim text-on-surface-variant cursor-not-allowed'}`}>
                                      Save Preferences
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
