import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LeadsDashboard } from '../screens/LeadsDashboard';
import { AppProvider, useAppContext } from '../contexts/AppContext';

function TestWrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe('LeadsDashboard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders dashboard with stats', async () => {
    render(
      <TestWrapper>
        <LeadsDashboard />
      </TestWrapper>
    );
    await waitFor(() => {
      expect(screen.getByText('Leads Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Total Leads')).toBeInTheDocument();
    });
  });

  it('filters leads by search query', async () => {
    render(
      <TestWrapper>
        <LeadsDashboard />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('AgriTech Solutions')).toBeInTheDocument());
    const searchInput = screen.getByPlaceholderText('Search leads...');
    fireEvent.change(searchInput, { target: { value: 'Verdant' } });
    await waitFor(() => {
      expect(screen.queryByText('AgriTech Solutions')).not.toBeInTheDocument();
      expect(screen.getByText('Verdant Farms Corp')).toBeInTheDocument();
    });
  });

  it('shows empty state when no leads match', async () => {
    render(
      <TestWrapper>
        <LeadsDashboard />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByPlaceholderText('Search leads...')).toBeInTheDocument());
    const searchInput = screen.getByPlaceholderText('Search leads...');
    fireEvent.change(searchInput, { target: { value: 'zzzzzzz' } });
    await waitFor(() => {
      expect(screen.getByText('No leads match your search.')).toBeInTheDocument();
    });
  });

  it('navigates to pipeline via sidebar', async () => {
    function ScreenTracker() {
      const { screen } = useAppContext();
      return <div data-testid="current-screen">{screen}</div>;
    }
    render(
      <TestWrapper>
        <LeadsDashboard />
        <ScreenTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('Pipeline')).toBeInTheDocument());
    const pipelineLink = screen.getByText('Pipeline');
    fireEvent.click(pipelineLink);
    await waitFor(() => expect(screen.getByTestId('current-screen').textContent).toBe('pipeline'));
  });

  it('opens lead form for new lead', async () => {
    function ScreenTracker() {
      const { screen } = useAppContext();
      return <div data-testid="current-screen">{screen}</div>;
    }
    render(
      <TestWrapper>
        <LeadsDashboard />
        <ScreenTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('New Lead')).toBeInTheDocument());
    const newLeadBtn = screen.getAllByText('New Lead')[0];
    fireEvent.click(newLeadBtn);
    await waitFor(() => expect(screen.getByTestId('current-screen').textContent).toBe('lead-form'));
  });
});
