import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AppProvider, useAppContext } from '../contexts/AppContext';

function TestConsumer() {
  const { screen, leads, navigate, addLead, deleteLead, updateSettings, settings } = useAppContext();
  return (
    <div>
      <div data-testid="screen">{screen}</div>
      <div data-testid="leads">{leads.length}</div>
      <div data-testid="currency">{settings.currency}</div>
      <button data-testid="nav-pipeline" onClick={() => navigate('pipeline')}>Go Pipeline</button>
      <button data-testid="add-lead" onClick={() => addLead({ company: 'Test Co', contactName: 'Tester', contactEmail: '', contactPhone: '', estimatedValue: 1000, status: 'Initial Contact', lastContactDate: '2024-01-01', notes: '' })}>Add Lead</button>
      <button data-testid="delete-first" onClick={() => leads.length > 0 && deleteLead(leads[0].id)}>Delete First</button>
      <button data-testid="set-eur" onClick={() => updateSettings({ currency: 'EUR' })}>Set EUR</button>
    </div>
  );
}

describe('AppContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders with default state', async () => {
    render(
      <AppProvider>
        <TestConsumer />
      </AppProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId('screen').textContent).toBe('leads');
      expect(screen.getByTestId('leads').textContent).toBe('4');
    });
  });

  it('navigates between screens', async () => {
    render(
      <AppProvider>
        <TestConsumer />
      </AppProvider>
    );
    await waitFor(() => expect(screen.getByTestId('screen').textContent).toBe('leads'));
    fireEvent.click(screen.getByTestId('nav-pipeline'));
    await waitFor(() => expect(screen.getByTestId('screen').textContent).toBe('pipeline'));
  });

  it('adds a lead', async () => {
    render(
      <AppProvider>
        <TestConsumer />
      </AppProvider>
    );
    await waitFor(() => expect(screen.getByTestId('leads').textContent).toBe('4'));
    fireEvent.click(screen.getByTestId('add-lead'));
    await waitFor(() => expect(screen.getByTestId('leads').textContent).toBe('5'));
  });

  it('deletes a lead', async () => {
    render(
      <AppProvider>
        <TestConsumer />
      </AppProvider>
    );
    await waitFor(() => expect(screen.getByTestId('leads').textContent).toBe('4'));
    fireEvent.click(screen.getByTestId('delete-first'));
    await waitFor(() => expect(screen.getByTestId('leads').textContent).toBe('3'));
  });

  it('updates settings', async () => {
    render(
      <AppProvider>
        <TestConsumer />
      </AppProvider>
    );
    await waitFor(() => expect(screen.getByTestId('currency').textContent).toBe('USD'));
    fireEvent.click(screen.getByTestId('set-eur'));
    await waitFor(() => expect(screen.getByTestId('currency').textContent).toBe('EUR'));
  });
});
