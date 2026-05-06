export type LeadStatus = 'Initial Contact' | 'Qualified' | 'Proposal Sent' | 'Negotiation' | 'Closed Won' | 'Closed Lost';

export interface Lead {
  id: string;
  company: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  estimatedValue: number;
  status: LeadStatus;
  lastContactDate: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface PipelineStage {
  id: string;
  name: string;
  leads: Lead[];
}

export interface AppSettings {
  density: 'compact' | 'standard' | 'comfortable';
  currency: 'USD' | 'EUR' | 'GBP';
  darkMode: boolean;
}

export interface AppState {
  leads: Lead[];
  settings: AppSettings;
  lastSyncAt: string | null;
}

export type Screen = 'leads' | 'pipeline' | 'insights' | 'settings' | 'lead-form' | 'empty' | 'error' | 'profile';

export const DEFAULT_SETTINGS: AppSettings = {
  density: 'compact',
  currency: 'USD',
  darkMode: true,
};

export const DEFAULT_LEADS: Lead[] = [
  {
    id: 'lead-1',
    company: 'AgriTech Solutions',
    contactName: 'Sarah Jenkins',
    contactEmail: 'sarah@agritech.example',
    contactPhone: '+1-555-0101',
    estimatedValue: 150000,
    status: 'Proposal Sent',
    lastContactDate: '2023-10-24',
    notes: 'Interested in hydroponic retrofit for existing facility.',
    createdAt: '2023-10-01T00:00:00Z',
    updatedAt: '2023-10-24T00:00:00Z',
  },
  {
    id: 'lead-2',
    company: 'Verdant Farms Corp',
    contactName: 'Marcus Chen',
    contactEmail: 'marcus@verdant.example',
    contactPhone: '+1-555-0102',
    estimatedValue: 85000,
    status: 'Initial Contact',
    lastContactDate: '2023-10-22',
    notes: 'Exploring greenhouse expansion options.',
    createdAt: '2023-10-05T00:00:00Z',
    updatedAt: '2023-10-22T00:00:00Z',
  },
  {
    id: 'lead-3',
    company: 'Horizon Hydroponics',
    contactName: 'Elena Rodriguez',
    contactEmail: 'elena@horizon.example',
    contactPhone: '+1-555-0103',
    estimatedValue: 320000,
    status: 'Negotiation',
    lastContactDate: '2023-10-20',
    notes: 'Large-scale vertical farm project. Needs financing details.',
    createdAt: '2023-09-15T00:00:00Z',
    updatedAt: '2023-10-20T00:00:00Z',
  },
  {
    id: 'lead-4',
    company: 'EcoGrow Logistics',
    contactName: 'David Kim',
    contactEmail: 'david@ecogrow.example',
    contactPhone: '+1-555-0104',
    estimatedValue: 45000,
    status: 'Qualified',
    lastContactDate: '2023-10-18',
    notes: 'Small startup looking for modular greenhouse units.',
    createdAt: '2023-10-10T00:00:00Z',
    updatedAt: '2023-10-18T00:00:00Z',
  },
];

export function generateLeadId(): string {
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function formatCurrency(value: number, currency: string): string {
  const symbols: Record<string, string> = { USD: '$', EUR: '€', GBP: '£' };
  const symbol = symbols[currency] || '$';
  return `${symbol}${value.toLocaleString()}`;
}

export function getStatusColor(status: LeadStatus): string {
  const map: Record<LeadStatus, string> = {
    'Initial Contact': 'bg-surface-bright text-on-surface-variant border-outline-variant',
    'Qualified': 'bg-surface-bright text-on-surface-variant border-outline-variant',
    'Proposal Sent': 'bg-primary/20 text-primary border-primary/30',
    'Negotiation': 'bg-error-container/20 text-error border-error/30',
    'Closed Won': 'bg-primary/20 text-primary border-primary/30',
    'Closed Lost': 'bg-error-container/20 text-error border-error/30',
  };
  return map[status];
}

export function getTotalPipelineValue(leads: Lead[]): number {
  return leads.reduce((sum, lead) => sum + lead.estimatedValue, 0);
}

export function getHighPriorityCount(leads: Lead[]): number {
  return leads.filter(l => l.status === 'Negotiation' || l.estimatedValue > 200000).length;
}

export function getConversionRate(leads: Lead[]): number {
  if (leads.length === 0) return 0;
  const closed = leads.filter(l => l.status === 'Closed Won').length;
  return Math.round((closed / leads.length) * 100 * 10) / 10;
}
