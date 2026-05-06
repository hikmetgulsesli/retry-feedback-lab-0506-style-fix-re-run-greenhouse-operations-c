import { vi } from 'vitest';
import '@testing-library/jest-dom';

Object.assign(globalThis, {
  URL: {
    ...URL,
    createObjectURL: vi.fn(() => 'blob:mock-url'),
    revokeObjectURL: vi.fn(),
  },
});

// jsdom does not implement location.reload
Object.defineProperty(window, 'location', {
  value: { ...window.location, reload: vi.fn() },
  writable: true,
});
