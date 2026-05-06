// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface EmptyStateProps {}

export function EmptyState(props: EmptyStateProps) {
  return (
    <>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col h-screen py-lg px-md bg-surface-container dark:bg-surface-container w-64 border-r border-outline-variant dark:border-outline-variant shrink-0 z-20">
      <div className="mb-xl px-sm">
      <h1 className="font-display text-display text-primary dark:text-primary tracking-tight">Setfarm Greenhouse</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Operation Console</p>
      </div>
      <button className="bg-primary-container text-on-primary-container font-h2 text-h2 py-sm px-md rounded-DEFAULT flex items-center justify-center gap-sm w-full mb-xl hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>add</span>
                  New Lead
              </button>
      <ul className="flex flex-col gap-sm flex-1">
      <li>
      <a className="flex items-center gap-md px-sm py-sm rounded-DEFAULT text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
                          Leads
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>account_tree</span>
                          Pipeline
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>monitoring</span>
                          Insights
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
                          Settings
                      </a>
      </li>
      </ul>
      <div className="mt-auto pt-lg border-t border-outline-variant px-sm flex items-center gap-md">
      <img alt="User Avatar" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small, circular profile picture of an operator with a serious, professional demeanor, set against a dark, minimal corporate background to match the dashboard aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfS5Vnpr78P3MH_NLps6VIwljbfF0LpyFtuXLOpncVHPmH6eEAJXpM-UZ-HkBQJ8AYxgnBoapYpEOuBt0bWeRYyTBoiJ-Fe3nmfNTrwI7VQPJEHRxr4WItFyPRvFSO9V-lw1bSBhxt0RLObwg9wTjHWCFgR1rcS-UNjv9Q7EtXGGphh9SH7jL-ciYuj6uMUucFpoRekeEQzykLU2CM5UonbvN7J7JConbOCGCS2No95hI7rxhAGgCowCx2xQon1MQa45JPkkA44LBy" />
      <div>
      <p className="font-h2 text-h2 text-on-surface">Operator 01</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Active</p>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* TopAppBar (Mobile & Web) */}
      <header className="flex justify-between items-center h-16 px-lg w-full bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant shrink-0 z-10 md:hidden">
      <div className="flex items-center gap-md">
      <h1 className="font-display text-display text-primary dark:text-primary tracking-tight">Setfarm Greenhouse</h1>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-sm rounded-full transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-sm rounded-full transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <img alt="Operator Profile" className="w-8 h-8 rounded-full border border-outline-variant ml-sm" data-alt="A small, circular profile picture of an operator with a serious, professional demeanor, set against a dark, minimal corporate background to match the dashboard aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX6flVl4GSdL2iWcjxkCQYGR9ZfrIPmeb0kdWn9kMGMMlyPAY9wuwhvPDxVz5iL2W9geE9LUvtgJTGl7KBTA3cNTaffxAU1G8jbr4TtLb6kIJU_oSHpXkPEloc1wpyKpc_6ygjRavpv4oOiJt9nAcQoaZeol-SvNupbY6d8nGt-AMC91IlSqRgBtYMrmgTOfluUBJeqEAkVGf7hBTS5DheIczf97EKZcEH2BkUqtjd3lMPUg7dpRNn6P73rriegPuFv_NvfnYJGk0x" />
      </div>
      </header>
      {/* TopAppBar (Web Toolbar) */}
      <header className="hidden md:flex justify-end items-center h-16 px-lg w-full bg-background shrink-0 z-10">
      <div className="flex items-center gap-md">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="bg-surface-container border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-DEFAULT py-sm pl-[36px] pr-md h-8 w-64 focus:border-primary-container focus:ring-2 focus:ring-primary-container focus:outline-none transition-colors placeholder:text-outline" placeholder="Search leads..." type="text" />
      </div>
      <div className="w-[1px] h-6 bg-outline-variant mx-sm"></div>
      <button className="text-on-surface-variant hover:text-on-surface p-sm rounded-full transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:text-on-surface p-sm rounded-full transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none">
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-md md:p-lg flex items-center justify-center bg-background">
      {/* Empty State Container */}
      <div className="max-w-md w-full bg-surface-container border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center shadow-lg">
      <div className="w-24 h-24 rounded-full bg-surface-variant flex items-center justify-center mb-lg border border-outline-variant">
      <span className="material-symbols-outlined text-[48px] text-outline" style={{fontVariationSettings: "'wght' 200"}}>group_off</span>
      </div>
      <h2 className="font-h1 text-h1 text-on-surface mb-sm">No leads found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm">
                          Your pipeline is currently empty. Add new prospects to begin tracking and converting them through the greenhouse operational flow.
                      </p>
      <button className="bg-primary-container text-on-primary-container font-h2 text-h2 h-[32px] px-lg rounded-DEFAULT flex items-center justify-center gap-sm hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined text-[18px]">add</span>
                          Create your first lead
                      </button>
      </div>
      </main>
      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden bg-surface-container dark:bg-surface-container border-t border-outline-variant w-full shrink-0 h-16 flex justify-around items-center px-sm pb-safe z-20">
      <a className="flex flex-col items-center justify-center w-full h-full text-primary dark:text-primary active:scale-95 transition-transform duration-150" href="#">
      <div className="px-lg py-xs rounded-full bg-surface-container-high mb-xs">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>group</span>
      </div>
      <span className="font-label-caps text-label-caps">Leads</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined mb-xs" style={{fontVariationSettings: "'FILL' 0"}}>account_tree</span>
      <span className="font-label-caps text-label-caps">Pipeline</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined mb-xs" style={{fontVariationSettings: "'FILL' 0"}}>monitoring</span>
      <span className="font-label-caps text-label-caps">Insights</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined mb-xs" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      </nav>
      </div>
    </>
  );
}
