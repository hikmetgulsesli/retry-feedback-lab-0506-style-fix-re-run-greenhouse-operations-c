import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import App from '../App';
import { AppProvider } from '../contexts/AppContext';

describe('Runtime Verification — no crashes across all screens', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    localStorage.clear();
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    localStorage.clear();
  });

  it('renders App without runtime errors', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );
    expect(screen.getByText('Leads Dashboard')).toBeInTheDocument();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('navigates through all screens without crashing', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    // Navigate to Pipeline via sidebar
    const pipelineLink = screen.getAllByRole('button', { name: /pipeline/i })[0];
    fireEvent.click(pipelineLink);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Pipeline', level: 2 })).toBeInTheDocument();
    });

    // Navigate to Insights via sidebar
    const insightsLink = screen.getAllByRole('button', { name: /insights/i })[0];
    fireEvent.click(insightsLink);
    await waitFor(() => {
      expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    });

    // Navigate to Settings via sidebar
    const settingsLink = screen.getAllByRole('button', { name: /settings/i })[0];
    fireEvent.click(settingsLink);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Settings', level: 2 })).toBeInTheDocument();
    });

    // Navigate back to Leads
    const leadsLink = screen.getAllByRole('button', { name: /leads/i })[0];
    fireEvent.click(leadsLink);
    await waitFor(() => {
      expect(screen.getByText('Leads Dashboard')).toBeInTheDocument();
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('opens lead form and submits without crashing', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /new lead/i }));
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Create New Lead', level: 2 })).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText(/acme corp greenhouse/i), {
      target: { value: 'Test Company' },
    });
    fireEvent.click(screen.getByRole('button', { name: /save lead/i }));

    await waitFor(() => {
      expect(screen.getByText('Leads Dashboard')).toBeInTheDocument();
    });
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('Profile panel renders and closes without crashing', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /notifications/i }));
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Profile', level: 2 })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /close profile/i }));
    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: 'Profile', level: 2 })).not.toBeInTheDocument();
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('settings export button does not crash', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const settingsLink = screen.getAllByRole('button', { name: /settings/i })[0];
    fireEvent.click(settingsLink);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Settings', level: 2 })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /export backup/i }));
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
