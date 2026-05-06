// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Storage Error State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface StorageErrorStateProps {}

export function StorageErrorState(props: StorageErrorStateProps) {
  return (
    <>
      {/* TopAppBar (Suppressed due to intent: transactional error state) */}
      <main className="flex-1 flex items-center justify-center p-margin">
      <div className="bg-surface-container rounded-xl border border-error max-w-lg w-full flex flex-col items-center justify-center p-xl gap-lg">
      <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center text-error border border-error">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", fontSize: "32px"}}>cloud_off</span>
      </div>
      <div className="text-center space-y-sm">
      <h1 className="font-h1 text-h1 text-error">Unable to save data to local storage</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">
                          A critical error occurred while attempting to persist your session data. This may result in data loss if you navigate away. Please retry or export your current progress.
                      </p>
      <div className="bg-surface-container-highest p-sm rounded-md border border-outline-variant inline-block mt-sm">
      <span className="font-mono-data text-mono-data text-on-surface-variant">ERR_STORAGE_QUOTA_EXCEEDED</span>
      </div>
      </div>
      <div className="flex flex-col w-full gap-sm mt-md">
      <button className="h-10 w-full bg-primary-container text-on-primary-container rounded-DEFAULT font-h2 text-h2 flex items-center justify-center gap-xs hover:bg-inverse-primary transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background outline-none">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>refresh</span>
                          Retry
                      </button>
      <button className="h-10 w-full bg-transparent border border-outline-variant text-on-surface rounded-DEFAULT font-h2 text-h2 flex items-center justify-center gap-xs hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background outline-none">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>download</span>
                          Export Data
                      </button>
      </div>
      <div className="w-full pt-lg border-t border-outline-variant mt-sm">
      <button className="h-10 w-full bg-error-container text-on-error-container border border-error rounded-DEFAULT font-h2 text-h2 flex items-center justify-center gap-xs hover:bg-error hover:text-on-error transition-colors focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background outline-none">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>delete_forever</span>
                          Reset Storage
                      </button>
      <p className="font-body-sm text-body-sm text-error mt-xs text-center">Warning: This action will permanently delete local data.</p>
      </div>
      </div>
      </main>
    </>
  );
}
