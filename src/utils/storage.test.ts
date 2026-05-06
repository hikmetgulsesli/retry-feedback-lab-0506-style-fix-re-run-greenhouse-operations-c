import { describe, it, expect, beforeEach } from 'vitest';
import { loadState, saveState, clearState, exportState, importState } from '../utils/storage';
import type { AppState } from '../types/domain';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads default state when localStorage is empty', () => {
    const state = loadState();
    expect(state.leads).toHaveLength(4);
    expect(state.settings.currency).toBe('USD');
    expect(state.lastSyncAt).not.toBeNull();
  });

  it('saves and loads state correctly', () => {
    const state: AppState = {
      leads: [],
      settings: { density: 'standard', currency: 'EUR', darkMode: true },
      lastSyncAt: '2024-01-01T00:00:00Z',
    };
    const result = saveState(state);
    expect(result.success).toBe(true);

    const loaded = loadState();
    expect(loaded.leads).toHaveLength(0);
    expect(loaded.settings.currency).toBe('EUR');
    expect(loaded.settings.density).toBe('standard');
  });

  it('exportState returns valid JSON', () => {
    const state: AppState = {
      leads: [],
      settings: { density: 'compact', currency: 'USD', darkMode: true },
      lastSyncAt: '2024-01-01T00:00:00Z',
    };
    const json = exportState(state);
    expect(() => JSON.parse(json)).not.toThrow();
    const parsed = JSON.parse(json);
    expect(parsed.settings.currency).toBe('USD');
  });

  it('importState restores valid state', () => {
    const state: AppState = {
      leads: [{ id: 'test', company: 'Test', contactName: 'T', contactEmail: '', contactPhone: '', estimatedValue: 100, status: 'Initial Contact', lastContactDate: '2024-01-01', notes: '', createdAt: '2024-01-01', updatedAt: '2024-01-01' }],
      settings: { density: 'comfortable', currency: 'GBP', darkMode: true },
      lastSyncAt: '2024-01-01T00:00:00Z',
    };
    const json = exportState(state);
    const restored = importState(json);
    expect(restored).not.toBeNull();
    expect(restored!.leads).toHaveLength(1);
    expect(restored!.settings.currency).toBe('GBP');
  });

  it('importState returns null for invalid JSON', () => {
    expect(importState('not-json')).toBeNull();
  });

  it('clearState removes storage key', () => {
    saveState({ leads: [], settings: { density: 'compact', currency: 'USD', darkMode: true }, lastSyncAt: null });
    clearState();
    expect(localStorage.getItem('setfarm-greenhouse-ops-v1')).toBeNull();
  });
});
