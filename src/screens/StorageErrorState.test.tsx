import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StorageErrorState } from './StorageErrorState';
import * as AppContext from '../contexts/AppContext';
import * as StorageUtils from '../utils/storage';
import type { Lead, AppSettings } from '../types/domain';

const mockDismissStorageError = vi.fn();

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
];

const mockSettings: AppSettings = {
  density: 'compact',
  currency: 'USD',
  darkMode: true,
  notifyNewLead: true,
  notifyActionRequired: true,
};

function setupMock(onDismiss?: () => void, error?: string) {
  vi.spyOn(AppContext, 'useAppContext').mockReturnValue({
    leads: mockLeads,
    settings: mockSettings,
    navigate: vi.fn(),
    navigateToLead: vi.fn(),
    screen: 'error',
    selectedLeadId: null,
    storageError: error || 'Storage quota exceeded',
    lastSyncAt: new Date().toISOString(),
    addLead: vi.fn(),
    updateLead: vi.fn(),
    deleteLead: vi.fn(),
    updateSettings: vi.fn(),
    dismissStorageError: mockDismissStorageError,
  });
  
  return { onDismiss };
}

describe('StorageErrorState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
    global.URL.revokeObjectURL = vi.fn();
  });

  it('renders error title and message', () => {
    setupMock();
    render(<StorageErrorState />);
    
    expect(screen.getByText('Unable to save data to local storage')).toBeInTheDocument();
    expect(screen.getByText(/A critical error occurred/)).toBeInTheDocument();
  });

  it('displays the error code when no error prop provided', () => {
    setupMock();
    render(<StorageErrorState />);
    
    expect(screen.getByText('ERR_STORAGE_QUOTA_EXCEEDED')).toBeInTheDocument();
  });

  it('displays the error prop when provided', () => {
    setupMock(undefined, 'Custom storage error');
    render(<StorageErrorState error="Custom storage error" />);
    
    expect(screen.getByText('Custom storage error')).toBeInTheDocument();
  });

  it('renders retry button', () => {
    setupMock();
    render(<StorageErrorState />);
    
    expect(screen.getByText('Retry')).toBeInTheDocument();
  });

  it('renders export button', () => {
    setupMock();
    render(<StorageErrorState />);
    
    expect(screen.getByText('Export Data')).toBeInTheDocument();
  });

  it('renders reset storage button', () => {
    setupMock();
    render(<StorageErrorState />);
    
    expect(screen.getByText('Reset Storage')).toBeInTheDocument();
  });

  it('shows warning text for reset action', () => {
    setupMock();
    render(<StorageErrorState />);
    
    expect(screen.getByText(/Warning: This action will permanently delete/)).toBeInTheDocument();
  });

  it('calls onDismiss when retry succeeds', () => {
    const mockOnDismiss = vi.fn();
    vi.spyOn(StorageUtils, 'loadState').mockReturnValue({
      leads: mockLeads,
      settings: mockSettings,
      lastSyncAt: new Date().toISOString(),
    });
    
    vi.spyOn(AppContext, 'useAppContext').mockReturnValue({
      leads: mockLeads,
      settings: mockSettings,
      navigate: vi.fn(),
      navigateToLead: vi.fn(),
      screen: 'error',
      selectedLeadId: null,
      storageError: 'Storage error',
      lastSyncAt: new Date().toISOString(),
      addLead: vi.fn(),
      updateLead: vi.fn(),
      deleteLead: vi.fn(),
      updateSettings: vi.fn(),
      dismissStorageError: mockDismissStorageError,
    });
    
    render(<StorageErrorState onDismiss={mockOnDismiss} />);
    
    const retryButton = screen.getByText('Retry');
    fireEvent.click(retryButton);
    
    expect(mockOnDismiss).toHaveBeenCalled();
  });

  it('calls dismissStorageError when retry succeeds without onDismiss', () => {
    vi.spyOn(StorageUtils, 'loadState').mockReturnValue({
      leads: mockLeads,
      settings: mockSettings,
      lastSyncAt: new Date().toISOString(),
    });
    
    setupMock();
    render(<StorageErrorState />);
    
    const retryButton = screen.getByText('Retry');
    fireEvent.click(retryButton);
    
    expect(mockDismissStorageError).toHaveBeenCalled();
  });

  it('changes export button text after clicking export', () => {
    setupMock();
    render(<StorageErrorState />);
    
    const exportButton = screen.getByText('Export Data');
    fireEvent.click(exportButton);
    
    expect(screen.getByText('Exported!')).toBeInTheDocument();
  });

  it('renders cloud off icon', () => {
    setupMock();
    render(<StorageErrorState />);
    
    expect(screen.getByText('cloud_off')).toBeInTheDocument();
  });
});
