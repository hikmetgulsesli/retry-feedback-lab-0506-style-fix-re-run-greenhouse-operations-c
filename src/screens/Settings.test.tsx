import { describe, it, expect, beforeEach } from 'vitest';
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

  it('renders settings page', async () => {
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
});
