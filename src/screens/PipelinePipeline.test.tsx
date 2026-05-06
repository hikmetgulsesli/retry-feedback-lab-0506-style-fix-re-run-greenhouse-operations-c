import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PipelinePipeline } from '../screens/PipelinePipeline';
import { AppProvider, useAppContext } from '../contexts/AppContext';

function TestWrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe('PipelinePipeline', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders pipeline with stages', async () => {
    render(
      <TestWrapper>
        <PipelinePipeline />
      </TestWrapper>
    );
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Pipeline' })).toBeInTheDocument();
      expect(screen.getAllByText('Initial Contact').length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText('Qualified').length).toBeGreaterThanOrEqual(1);
    });
  });

  it('filters pipeline by search', async () => {
    render(
      <TestWrapper>
        <PipelinePipeline />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByPlaceholderText('Search pipeline...')).toBeInTheDocument());
    const searchInput = screen.getByPlaceholderText('Search pipeline...');
    fireEvent.change(searchInput, { target: { value: 'AgriTech' } });
    await waitFor(() => {
      expect(screen.getByText('AgriTech Solutions')).toBeInTheDocument();
    });
  });

  it('navigates to lead form on card click', async () => {
    function ScreenTracker() {
      const { screen: current } = useAppContext();
      return <div data-testid="current-screen">{current}</div>;
    }
    render(
      <TestWrapper>
        <PipelinePipeline />
        <ScreenTracker />
      </TestWrapper>
    );
    await waitFor(() => expect(screen.getByText('AgriTech Solutions')).toBeInTheDocument());
    const card = screen.getByText('AgriTech Solutions').closest('div');
    if (card) fireEvent.click(card);
    await waitFor(() => expect(screen.getByTestId('current-screen').textContent).toBe('lead-form'));
  });
});
