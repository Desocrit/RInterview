import Either from './Either';
import CombinedWith from './CombinedWith';

it('calculates either correctly for 0x0', () => {
    const result = new Either().apply(0, 0);
    expect(result).toBe(0);
});

it('calculates either correctly for 1x1', () => {
    const result = new Either().apply(1, 1);
    expect(result).toBe(1);
});

it('calculates either correctly for 0.6x0.3', () => {
    const result = new Either().apply(0.6, 0.3);
    expect(result).toBe(0.72);
});

it('calculates combinedwith correctly for 0x0', () => {
    const result = new CombinedWith().apply(0, 0);
    expect(result).toBe(0);
});

it('calculates combinedwith correctly for 1x1', () => {
    const result = new CombinedWith().apply(1, 1);
    expect(result).toBe(1);
});

it('calculates combinedwith correctly for 0.6x0.3', () => {
    const result = new CombinedWith().apply(0.6, 0.3);
    expect(result).toBe(0.18);
});