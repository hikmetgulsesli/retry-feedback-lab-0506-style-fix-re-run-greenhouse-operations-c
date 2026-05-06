import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LeadDetailsForm } from '../screens/LeadDetailsForm';
import { AppProvider, useAppContext } from '../contexts/AppContext';

function TestWrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe('LeadDetailsForm', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders create form', async () => {
    render(
      <TestWrapper>
        <LeadDetailsForm />
      </TestWrapper>
    );
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Create New Lead' })).toBeInTheDocument();
      expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument();
    });
  });

  it('submits a new lead', async () => {
    function LeadCounter() {
      const { leads } = useAppContext();
      return <div data-testid="lead-count">{leads.length}</div>;
    }
    render(
      <TestWrapper>
        <LeadDetailsForm />
        <LeadCounter />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument());
    fireEvent.change(screen.getByLabelText(/Company Name/i), { target: { value: 'Greenhouse Inc' } });
    fireEvent.change(screen.getByLabelText(/Contact Name/i), { target: { value: 'Alice' } });
    fireEvent.change(screen.getByLabelText(/Contact Email/i), { target: { value: 'alice@greenhouse.example' } });
    const saveBtn = screen.getByText('Save Lead');
    fireEvent.click(saveBtn);
    await waitFor(() => expect(screen.getByTestId('lead-count').textContent).toBe('5'));
  });

  it('cancels and returns to leads', async () => {
    function ScreenTracker() {
      const { screen: current } = useAppContext();
      return <div data-testid="current-screen">{current}</div>;
    }
    render(
      <TestWrapper>
        <LeadDetailsForm />
        <ScreenTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Cancel')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Cancel'));
    await waitFor(() => expect(screen.getByTestId('current-screen').textContent).toBe('leads'));
  });
});
