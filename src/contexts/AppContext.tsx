import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import type { Lead, LeadStatus, AppSettings, Screen } from '../types/domain';
import { generateLeadId } from '../types/domain';
import { loadState, saveState } from '../utils/storage';

export interface AppContextValue {
  screen: Screen;
  leads: Lead[];
  settings: AppSettings;
  selectedLeadId: string | null;
  storageError: string | null;
  lastSyncAt: string | null;
  navigate: (screen: Screen) => void;
  navigateToLead: (leadId: string | null) => void;
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateLead: (id: string, updates: Partial<Lead>) => void;
  deleteLead: (id: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  dismissStorageError: () => void;
}

interface State {
  screen: Screen;
  leads: Lead[];
  settings: AppSettings;
  selectedLeadId: string | null;
  storageError: string | null;
  lastSyncAt: string | null;
}

type Action =
  | { type: 'NAVIGATE'; screen: Screen }
  | { type: 'NAVIGATE_LEAD'; leadId: string | null }
  | { type: 'ADD_LEAD'; lead: Lead }
  | { type: 'UPDATE_LEAD'; id: string; updates: Partial<Lead> }
  | { type: 'DELETE_LEAD'; id: string }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<AppSettings> }
  | { type: 'DISMISS_STORAGE_ERROR' }
  | { type: 'HYDRATE'; state: Partial<State> };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, screen: action.screen };
    case 'NAVIGATE_LEAD':
      return {
        ...state,
        selectedLeadId: action.leadId,
        screen: 'lead-form',
      };
    case 'ADD_LEAD': {
      const newLeads = [action.lead, ...state.leads];
      return { ...state, leads: newLeads, screen: 'leads' };
    }
    case 'UPDATE_LEAD': {
      const updated = state.leads.map(l =>
        l.id === action.id ? { ...l, ...action.updates, updatedAt: new Date().toISOString() } : l
      );
      return { ...state, leads: updated, screen: 'leads', selectedLeadId: null };
    }
    case 'DELETE_LEAD': {
      const filtered = state.leads.filter(l => l.id !== action.id);
      return { ...state, leads: filtered };
    }
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.settings } };
    case 'DISMISS_STORAGE_ERROR':
      return { ...state, storageError: null };
    case 'HYDRATE':
      return { ...state, ...action.state };
    default:
      return state;
  }
}

const AppContext = createContext<AppContextValue | null>(null);

const initialState: State = {
  screen: 'leads',
  leads: [],
  settings: { density: 'compact', currency: 'USD', darkMode: true, notifyNewLead: true, notifyActionRequired: true },
  selectedLeadId: null,
  storageError: null,
  lastSyncAt: null,
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loaded = loadState();
    dispatch({
      type: 'HYDRATE',
      state: {
        leads: loaded.leads,
        settings: loaded.settings,
        lastSyncAt: loaded.lastSyncAt,
      },
    });
  }, []);

  useEffect(() => {
    if (state.lastSyncAt === null && state.leads.length === 0) return;
    const result = saveState({
      leads: state.leads,
      settings: state.settings,
      lastSyncAt: state.lastSyncAt,
    });
    if (!result.success) {
      dispatch({ type: 'HYDRATE', state: { storageError: result.error || 'Storage write failed' } });
    }
  }, [state.leads, state.settings]);

  const navigate = useCallback((screen: Screen) => {
    dispatch({ type: 'NAVIGATE', screen });
  }, []);

  const navigateToLead = useCallback((leadId: string | null) => {
    dispatch({ type: 'NAVIGATE_LEAD', leadId });
  }, []);

  const addLead = useCallback((lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newLead: Lead = {
      ...lead,
      id: generateLeadId(),
      createdAt: now,
      updatedAt: now,
    };
    dispatch({ type: 'ADD_LEAD', lead: newLead });
  }, []);

  const updateLead = useCallback((id: string, updates: Partial<Lead>) => {
    dispatch({ type: 'UPDATE_LEAD', id, updates });
  }, []);

  const deleteLead = useCallback((id: string) => {
    dispatch({ type: 'DELETE_LEAD', id });
  }, []);

  const updateSettings = useCallback((settings: Partial<AppSettings>) => {
    dispatch({ type: 'UPDATE_SETTINGS', settings });
  }, []);

  const dismissStorageError = useCallback(() => {
    dispatch({ type: 'DISMISS_STORAGE_ERROR' });
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      screen: state.screen,
      leads: state.leads,
      settings: state.settings,
      selectedLeadId: state.selectedLeadId,
      storageError: state.storageError,
      lastSyncAt: state.lastSyncAt,
      navigate,
      navigateToLead,
      addLead,
      updateLead,
      deleteLead,
      updateSettings,
      dismissStorageError,
    }),
    [state, navigate, navigateToLead, addLead, updateLead, deleteLead, updateSettings, dismissStorageError]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return ctx;
}
