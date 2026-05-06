import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InsightsDashboard } from './InsightsDashboard';
import * as AppContext from '../contexts/AppContext';
import type { Lead, AppSettings } from '../types/domain';

const mockNavigate = vi.fn();
const mockNavigateToLead = vi.fn();

const mockLeads: Lead[] = [
  {
    id: 'lead-1',
    company: 'AgriTech Solutions',
    contactName: 'Sarah Jenkins',
    contactEmail: 'sarah@agritech.example',
    contactPhone: '+1-555-0101',
    estimatedValue: 150000,
    status: 'Proposal Sent',
    lastContactDate: '2023-10-24',
    notes: 'Interested in hydroponic retrofit.',
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
    status: 'Closed Won',
    lastContactDate: '2023-10-22',
    notes: 'Exploring greenhouse expansion.',
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
    notes: 'Large-scale vertical farm project.',
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
    status: 'Closed Lost',
    lastContactDate: '2023-10-18',
    notes: 'Small startup looking for modular units.',
    createdAt: '2023-10-10T00:00:00Z',
    updatedAt: '2023-10-18T00:00:00Z',
  },
];

const mockSettings: AppSettings = {
  density: 'compact',
  currency: 'USD',
  darkMode: true,
  notifyNewLead: true,
  notifyActionRequired: true,
};

function setupMock(leads: Lead[] = mockLeads, settings: AppSettings = mockSettings) {
  vi.spyOn(AppContext, 'useAppContext').mockReturnValue({
    leads,
    settings,
    navigate: mockNavigate,
    navigateToLead: mockNavigateToLead,
    screen: 'insights',
    selectedLeadId: null,
    storageError: null,
    lastSyncAt: new Date().toISOString(),
    addLead: vi.fn(),
    updateLead: vi.fn(),
    deleteLead: vi.fn(),
    updateSettings: vi.fn(),
    dismissStorageError: vi.fn(),
  });
}

describe('InsightsDashboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the dashboard with title and description', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    expect(screen.getByText('Real-time metrics and conversion tracking.')).toBeInTheDocument();
  });

  it('displays correct total pipeline value', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    // Total: 150000 + 85000 + 320000 + 45000 = 600000
    expect(screen.getByText('$600,000')).toBeInTheDocument();
  });

  it('displays correct conversion rate in metrics card', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    // 1 closed won out of 4 leads = 25%
    const conversionCard = screen.getByText('Conversion Rate').closest('div')?.parentElement;
    expect(conversionCard?.textContent).toContain('25%');
  });

  it('displays correct active leads count', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    // 2 active (Proposal Sent, Negotiation)
    const activeCard = screen.getByText('Active Leads').closest('div')?.parentElement;
    expect(activeCard?.textContent).toContain('2');
  });

  it('displays average deal cycle', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('Avg Deal Cycle')).toBeInTheDocument();
    expect(screen.getByText('18d')).toBeInTheDocument();
  });

  it('shows conversion funnel section', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('Conversion Funnel')).toBeInTheDocument();
  });

  it('shows win/loss ratio section', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('Win / Loss Ratio')).toBeInTheDocument();
  });

  it('displays weekly follow-up performance table', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('Weekly Follow-up Performance')).toBeInTheDocument();
    expect(screen.getByText('Rep Name')).toBeInTheDocument();
    expect(screen.getByText('Total Assigned')).toBeInTheDocument();
    expect(screen.getByText('Contacted')).toBeInTheDocument();
    expect(screen.getByText('Avg Response Time')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('navigates to leads when Leads nav item clicked', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    const leadsNav = screen.getByText('Leads');
    fireEvent.click(leadsNav);
    
    expect(mockNavigate).toHaveBeenCalledWith('leads');
  });

  it('navigates to pipeline when Pipeline nav item clicked', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    const pipelineNav = screen.getByText('Pipeline');
    fireEvent.click(pipelineNav);
    
    expect(mockNavigate).toHaveBeenCalledWith('pipeline');
  });

  it('navigates to settings when Settings nav item clicked', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    const settingsNav = screen.getByText('Settings');
    fireEvent.click(settingsNav);
    
    expect(mockNavigate).toHaveBeenCalledWith('settings');
  });

  it('navigates to lead form when New Lead button clicked', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    const newLeadButton = screen.getByText('New Lead');
    fireEvent.click(newLeadButton);
    
    expect(mockNavigateToLead).toHaveBeenCalledWith(null);
  });

  it('shows Insights as active nav item', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    const insightsNav = screen.getByText('Insights');
    expect(insightsNav.closest('a')).toHaveClass('border-primary');
  });

  it('handles empty leads array', () => {
    setupMock([]);
    render(<InsightsDashboard />);
    
    expect(screen.getByText('$0')).toBeInTheDocument();
    const conversionCard = screen.getByText('Conversion Rate').closest('div')?.parentElement;
    expect(conversionCard?.textContent).toContain('0%');
    const activeCard = screen.getByText('Active Leads').closest('div')?.parentElement;
    expect(activeCard?.textContent).toContain('0');
  });

  it('formats currency based on settings', () => {
    setupMock(mockLeads, { ...mockSettings, currency: 'EUR' });
    render(<InsightsDashboard />);
    
    expect(screen.getByText('€600,000')).toBeInTheDocument();
  });

  it('displays export and date filter buttons', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('Export')).toBeInTheDocument();
    expect(screen.getByText('Last 30 Days')).toBeInTheDocument();
  });

  it('shows on track and needs attention indicators', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('On Track')).toBeInTheDocument();
    expect(screen.getByText('Needs Attention')).toBeInTheDocument();
  });

  it('displays rep names in performance table', () => {
    setupMock();
    render(<InsightsDashboard />);
    
    expect(screen.getByText('Sarah Jenkins')).toBeInTheDocument();
    expect(screen.getByText('David Chen')).toBeInTheDocument();
    expect(screen.getByText('Marcus Row')).toBeInTheDocument();
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument();
  });
});
