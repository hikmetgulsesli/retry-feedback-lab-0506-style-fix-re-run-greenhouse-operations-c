import type { AppState, AppSettings, Lead } from '../types/domain';
import { DEFAULT_SETTINGS, DEFAULT_LEADS } from '../types/domain';

const STORAGE_KEY = 'setfarm-greenhouse-ops-v1';

export interface StorageResult {
  success: boolean;
  error?: string;
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        leads: [...DEFAULT_LEADS],
        settings: { ...DEFAULT_SETTINGS },
        lastSyncAt: new Date().toISOString(),
      };
    }
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return {
      leads: Array.isArray(parsed.leads) ? parsed.leads : [...DEFAULT_LEADS],
      settings: parsed.settings ? { ...DEFAULT_SETTINGS, ...parsed.settings } : { ...DEFAULT_SETTINGS },
      lastSyncAt: parsed.lastSyncAt || new Date().toISOString(),
    };
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
    return {
      leads: [...DEFAULT_LEADS],
      settings: { ...DEFAULT_SETTINGS },
      lastSyncAt: null,
    };
  }
}

export function saveState(state: AppState): StorageResult {
  try {
    const toSave: AppState = {
      ...state,
      lastSyncAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    return { success: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown storage error';
    console.error('Failed to save state to localStorage:', message);
    return { success: false, error: message };
  }
}

export function exportState(state: AppState): string {
  return JSON.stringify(state, null, 2);
}

export function importState(json: string): AppState | null {
  try {
    const parsed = JSON.parse(json) as Partial<AppState>;
    if (!Array.isArray(parsed.leads)) return null;
    return {
      leads: parsed.leads,
      settings: parsed.settings ? { ...DEFAULT_SETTINGS, ...parsed.settings } : { ...DEFAULT_SETTINGS },
      lastSyncAt: parsed.lastSyncAt || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function clearState(): void {
  localStorage.removeItem(STORAGE_KEY);
}
