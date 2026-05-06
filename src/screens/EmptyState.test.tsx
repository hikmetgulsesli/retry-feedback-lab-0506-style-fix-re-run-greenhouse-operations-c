import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmptyState } from './EmptyState';
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
    screen: 'empty',
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

describe('EmptyState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders empty state title and description', () => {
    setupMock();
    render(<EmptyState />);
    
    expect(screen.getByText('No leads found')).toBeInTheDocument();
    expect(screen.getByText(/Your pipeline is currently empty/)).toBeInTheDocument();
  });

  it('renders create first lead button', () => {
    setupMock();
    render(<EmptyState />);
    
    expect(screen.getByText('Create your first lead')).toBeInTheDocument();
  });

  it('renders app title in sidebar', () => {
    setupMock();
    render(<EmptyState />);
    
    // Use getAllByRole since there are multiple nav elements (sidebar + mobile bottom nav)
    const sidebars = screen.getAllByRole('navigation');
    // The first nav is the desktop sidebar
    expect(sidebars[0].textContent).toContain('Setfarm Greenhouse');
    expect(sidebars[0].textContent).toContain('Operation Console');
  });

  it('renders New Lead button in sidebar', () => {
    setupMock();
    render(<EmptyState />);
    
    expect(screen.getAllByText('New Lead').length).toBeGreaterThan(0);
  });

  it('navigates to lead form when create first lead button clicked', () => {
    setupMock();
    render(<EmptyState />);
    
    const createButton = screen.getByText('Create your first lead');
    fireEvent.click(createButton);
    
    expect(mockNavigateToLead).toHaveBeenCalledWith(null);
  });

  it('navigates to leads when Leads nav clicked', () => {
    setupMock();
    render(<EmptyState />);
    
    const leadsLinks = screen.getAllByText('Leads');
    fireEvent.click(leadsLinks[0]);
    
    expect(mockNavigate).toHaveBeenCalledWith('leads');
  });

  it('navigates to pipeline when Pipeline nav clicked', () => {
    setupMock();
    render(<EmptyState />);
    
    const pipelineLinks = screen.getAllByText('Pipeline');
    fireEvent.click(pipelineLinks[0]);
    
    expect(mockNavigate).toHaveBeenCalledWith('pipeline');
  });

  it('navigates to insights when Insights nav clicked', () => {
    setupMock();
    render(<EmptyState />);
    
    const insightsLinks = screen.getAllByText('Insights');
    fireEvent.click(insightsLinks[0]);
    
    expect(mockNavigate).toHaveBeenCalledWith('insights');
  });

  it('navigates to settings when Settings nav clicked', () => {
    setupMock();
    render(<EmptyState />);
    
    const settingsLinks = screen.getAllByText('Settings');
    fireEvent.click(settingsLinks[0]);
    
    expect(mockNavigate).toHaveBeenCalledWith('settings');
  });

  it('renders group_off icon', () => {
    setupMock();
    render(<EmptyState />);
    
    expect(screen.getByText('group_off')).toBeInTheDocument();
  });

  it('renders operator profile section', () => {
    setupMock();
    render(<EmptyState />);
    
    expect(screen.getByText('Operator 01')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders search input in web toolbar', () => {
    setupMock();
    render(<EmptyState />);
    
    expect(screen.getByPlaceholderText('Search leads...')).toBeInTheDocument();
  });

  it('renders notification and help buttons', () => {
    setupMock();
    render(<EmptyState />);
    
    const notifications = screen.getAllByText('notifications');
    expect(notifications.length).toBeGreaterThanOrEqual(1);
    const help = screen.getAllByText('help_outline');
    expect(help.length).toBeGreaterThanOrEqual(1);
  });

  it('marks Leads as active in sidebar', () => {
    setupMock();
    render(<EmptyState />);
    
    const leadsNav = screen.getAllByText('Leads')[0].closest('a');
    expect(leadsNav).toHaveClass('border-primary');
  });
});
