import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProfilePanel } from './ProfilePanel';
import * as AppContext from '../contexts/AppContext';
import type { Lead, AppSettings } from '../types/domain';

const mockNavigate = vi.fn();
const mockNavigateToLead = vi.fn();

const mockSettings: AppSettings = {
  density: 'compact',
  currency: 'USD',
  darkMode: true,
};

function setupMock() {
  vi.spyOn(AppContext, 'useAppContext').mockReturnValue({
    leads: [],
    settings: mockSettings,
    navigate: mockNavigate,
    navigateToLead: mockNavigateToLead,
    screen: 'profile',
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

describe('ProfilePanel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders profile panel with title', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('renders user name and role', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByText('Alex Operator')).toBeInTheDocument();
    expect(screen.getByText('Lead Agronomist')).toBeInTheDocument();
  });

  it('renders active status badge', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders account details section', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByText('Account Details')).toBeInTheDocument();
    expect(screen.getByText('Timezone')).toBeInTheDocument();
    expect(screen.getByText('UTC-5 (EST)')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('alex@setfarm.io')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('renders preferences section', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByText('Preferences')).toBeInTheDocument();
  });

  it('renders New Lead toggle', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const preferencesSection = screen.getByText('Preferences').closest('div');
    expect(preferencesSection?.textContent).toContain('New Lead');
    expect(preferencesSection?.textContent).toContain('Alert on pipeline entry');
  });

  it('renders Action Required toggle', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByText('Action Required')).toBeInTheDocument();
    expect(screen.getByText('Critical system alerts')).toBeInTheDocument();
  });

  it('toggles New Lead preference', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const toggle = screen.getAllByRole('checkbox')[0];
    expect(toggle).toBeChecked();
    
    fireEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  it('toggles Action Required preference', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const toggle = screen.getAllByRole('checkbox')[1];
    expect(toggle).toBeChecked();
    
    fireEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  it('closes profile panel when close button clicked', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const closeButton = screen.getByLabelText('Close Profile');
    fireEvent.click(closeButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('leads');
  });

  it('navigates to leads on sign out', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const signOutButton = screen.getByText('Sign Out');
    fireEvent.click(signOutButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('leads');
  });

  it('navigates to leads from sidebar', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const leadsLink = screen.getByText('Leads');
    fireEvent.click(leadsLink);
    
    expect(mockNavigate).toHaveBeenCalledWith('leads');
  });

  it('navigates to pipeline from sidebar', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const pipelineLink = screen.getByText('Pipeline');
    fireEvent.click(pipelineLink);
    
    expect(mockNavigate).toHaveBeenCalledWith('pipeline');
  });

  it('navigates to insights from sidebar', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const insightsLink = screen.getByText('Insights');
    fireEvent.click(insightsLink);
    
    expect(mockNavigate).toHaveBeenCalledWith('insights');
  });

  it('marks Settings as active in sidebar', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const settingsLink = screen.getByText('Settings');
    expect(settingsLink.closest('a')).toHaveClass('border-primary');
  });

  it('renders search input in top bar', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders notification and help buttons in top bar', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
    expect(screen.getByLabelText('Help')).toBeInTheDocument();
  });

  it('renders new lead button in sidebar and navigates on click', () => {
    setupMock();
    render(<ProfilePanel />);
    
    const sidebar = screen.getByRole('navigation');
    const newLeadButton = sidebar.querySelector('button');
    expect(newLeadButton).not.toBeNull();
    fireEvent.click(newLeadButton!);
    
    expect(mockNavigateToLead).toHaveBeenCalledWith(null);
  });

  it('renders app title in top bar', () => {
    setupMock();
    render(<ProfilePanel />);
    
    expect(screen.getByText('Setfarm Greenhouse')).toBeInTheDocument();
  });
});
