import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Settings } from '../screens/Settings';
import { AppProvider, useAppContext } from '../contexts/AppContext';

function TestWrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe('Settings', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders settings page with display tab active', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Settings' })).toBeInTheDocument();
      expect(screen.getByText('Display Preferences')).toBeInTheDocument();
    });
  });

  it('renders all settings tabs', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => {
      expect(screen.getByText('Display')).toBeInTheDocument();
      expect(screen.getByText('Notifications')).toBeInTheDocument();
      expect(screen.getByText('Data')).toBeInTheDocument();
    });
  });

  it('switches to notifications tab', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Notifications')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Notifications'));
    await waitFor(() => {
      expect(screen.getByText('Notification Preferences')).toBeInTheDocument();
      expect(screen.getByText('New Lead Alerts')).toBeInTheDocument();
      expect(screen.getByText('Action Required Alerts')).toBeInTheDocument();
    });
  });

  it('switches to data tab', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Data')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Data'));
    await waitFor(() => {
      expect(screen.getByText('Data Management')).toBeInTheDocument();
      expect(screen.getByText('Export Data')).toBeInTheDocument();
      expect(screen.getByText('Import Data')).toBeInTheDocument();
      expect(screen.getByText('Reset Application')).toBeInTheDocument();
    });
  });

  it('saves density and currency settings', async () => {
    function SettingsTracker() {
      const { settings } = useAppContext();
      return <div data-testid="currency">{settings.currency}</div>;
    }
    render(
      <TestWrapper>
        <Settings />
        <SettingsTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Save Preferences')).toBeInTheDocument());
    const select = screen.getByDisplayValue('USD ($)');
    fireEvent.change(select, { target: { value: 'EUR' } });
    fireEvent.click(screen.getByText('Save Preferences'));
    await waitFor(() => expect(screen.getByTestId('currency').textContent).toBe('EUR'));
  });

  it('saves notification preferences', async () => {
    function SettingsTracker() {
      const { settings } = useAppContext();
      return (
        <div>
          <div data-testid="newLead">{settings.notifyNewLead ? 'on' : 'off'}</div>
          <div data-testid="action">{settings.notifyActionRequired ? 'on' : 'off'}</div>
        </div>
      );
    }
    render(
      <TestWrapper>
        <Settings />
        <SettingsTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Notifications')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Notifications'));
    await waitFor(() => expect(screen.getByText('Notification Preferences')).toBeInTheDocument());

    const toggles = screen.getAllByRole('checkbox');
    expect(toggles.length).toBeGreaterThanOrEqual(2);
    fireEvent.click(toggles[0]);
    fireEvent.click(toggles[1]);
    fireEvent.click(screen.getByText('Save Preferences'));
    await waitFor(() => {
      expect(screen.getByTestId('newLead').textContent).toBe('off');
      expect(screen.getByTestId('action').textContent).toBe('off');
    });
  });

  it('discards changes', async () => {
    function SettingsTracker() {
      const { settings } = useAppContext();
      return <div data-testid="density">{settings.density}</div>;
    }
    render(
      <TestWrapper>
        <Settings />
        <SettingsTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Discard Changes')).toBeInTheDocument());
    const standardOption = screen.getByText('Standard');
    fireEvent.click(standardOption);
    fireEvent.click(screen.getByText('Discard Changes'));
    await waitFor(() => expect(screen.getByTestId('density').textContent).toBe('compact'));
  });

  it('disables save button when no changes', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Save Preferences')).toBeInTheDocument());
    const saveButton = screen.getByText('Save Preferences');
    expect(saveButton).toBeDisabled();
  });

  it('enables save button after making changes', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Save Preferences')).toBeInTheDocument());
    const standardOption = screen.getByText('Standard');
    fireEvent.click(standardOption);
    const saveButton = screen.getByText('Save Preferences');
    expect(saveButton).not.toBeDisabled();
  });

  it('exports data when export button clicked', async () => {
    const createElementSpy = vi.spyOn(document, 'createElement');
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Data')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Data'));
    await waitFor(() => expect(screen.getByText('Export Backup')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Export Backup'));
    expect(createElementSpy).toHaveBeenCalledWith('a');
    createElementSpy.mockRestore();
  });

  it('shows import error for invalid file', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Data')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Data'));
    await waitFor(() => expect(screen.getByText('Import Backup')).toBeInTheDocument());
    const fileInput = screen.getByText('Import Backup').closest('label')?.querySelector('input[type="file"]') as HTMLInputElement;
    const invalidFile = new File(['not json'], 'bad.json', { type: 'application/json' });
    fireEvent.change(fileInput, { target: { files: [invalidFile] } });
    await waitFor(() => expect(screen.getByText('Invalid backup file format.')).toBeInTheDocument());
  });

  it('shows import success for valid file', async () => {
    render(
      <TestWrapper>
        <Settings />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Data')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Data'));
    await waitFor(() => expect(screen.getByText('Import Backup')).toBeInTheDocument());
    const fileInput = screen.getByText('Import Backup').closest('label')?.querySelector('input[type="file"]') as HTMLInputElement;
    const validJson = JSON.stringify({ leads: [], settings: { density: 'standard', currency: 'EUR', darkMode: true, notifyNewLead: true, notifyActionRequired: true }, lastSyncAt: '2024-01-01T00:00:00Z' });
    const validFile = new File([validJson], 'backup.json', { type: 'application/json' });
    fireEvent.change(fileInput, { target: { files: [validFile] } });
    await waitFor(() => expect(screen.getByText('Import successful! Settings restored.')).toBeInTheDocument());
  });

  it('navigates to leads from sidebar', async () => {
    function NavTracker() {
      const { screen } = useAppContext();
      return <div data-testid="screen">{screen}</div>;
    }
    render(
      <TestWrapper>
        <Settings />
        <NavTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Leads')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Leads'));
    await waitFor(() => expect(screen.getByTestId('screen').textContent).toBe('leads'));
  });

  it('navigates to pipeline from sidebar', async () => {
    function NavTracker() {
      const { screen } = useAppContext();
      return <div data-testid="screen">{screen}</div>;
    }
    render(
      <TestWrapper>
        <Settings />
        <NavTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Pipeline')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Pipeline'));
    await waitFor(() => expect(screen.getByTestId('screen').textContent).toBe('pipeline'));
  });
});
