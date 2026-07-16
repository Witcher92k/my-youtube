import { formatCount, timeAgo } from './utils/helpers';

describe('formatCount', () => {
  it('formats large numbers compactly', () => {
    expect(formatCount(1234)).toBe('1.2K');
    expect(formatCount(4567890)).toBe('4.6M');
  });

  it('returns null for non-numeric input', () => {
    expect(formatCount(undefined)).toBeNull();
    expect(formatCount('not-a-number')).toBeNull();
  });
});

describe('timeAgo', () => {
  it('returns a relative time for a past date', () => {
    const twoHoursAgo = new Date(Date.now() - 2 * 3600 * 1000).toISOString();
    expect(timeAgo(twoHoursAgo)).toBe('2 hours ago');
  });

  it('returns null for missing input', () => {
    expect(timeAgo(undefined)).toBeNull();
  });
});
