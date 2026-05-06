import { describe, it, expect } from 'vitest';
import { formatCurrency, getStatusColor, getTotalPipelineValue, getHighPriorityCount, getConversionRate, generateLeadId, DEFAULT_LEADS } from '../types/domain';

describe('domain', () => {
  it('formatCurrency formats correctly', () => {
    expect(formatCurrency(150000, 'USD')).toBe('$150,000');
    expect(formatCurrency(85000, 'EUR')).toBe('€85,000');
    expect(formatCurrency(45000, 'GBP')).toBe('£45,000');
  });

  it('getStatusColor returns a string', () => {
    expect(getStatusColor('Initial Contact')).toContain('bg-');
    expect(getStatusColor('Proposal Sent')).toContain('bg-primary');
  });

  it('getTotalPipelineValue sums correctly', () => {
    expect(getTotalPipelineValue(DEFAULT_LEADS)).toBe(600000);
  });

  it('getHighPriorityCount counts negotiation and high value', () => {
    const count = getHighPriorityCount(DEFAULT_LEADS);
    expect(count).toBeGreaterThanOrEqual(1);
  });

  it('getConversionRate calculates percentage', () => {
    expect(getConversionRate(DEFAULT_LEADS)).toBe(0);
    expect(getConversionRate([...DEFAULT_LEADS, { ...DEFAULT_LEADS[0], status: 'Closed Won', id: 'won-1' }])).toBeGreaterThan(0);
  });

  it('generateLeadId returns unique string', () => {
    const id1 = generateLeadId();
    const id2 = generateLeadId();
    expect(id1).not.toBe(id2);
    expect(id1).toContain('lead-');
  });
});
