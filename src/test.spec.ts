import { multiply } from './test-sample';

describe('Sample', () => {
  it('should success', () => {
    expect(true).toBe(true);
  });
});

describe('When multiplying numbers', () => {
  it('Should be able to compute result', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
