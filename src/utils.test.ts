import { add, multiply, subtract } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiply', () => {
  expect(multiply(2, 3)).toBe(6);
});
