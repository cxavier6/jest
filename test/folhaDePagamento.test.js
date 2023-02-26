/* eslint-disable linebreak-style */
import { overtime, calculateDiscounts } from '../index.js';

test('Should be able to return overtime amount', () => {
  const expected = 2500;
  const returned = overtime(2000, 500);

  expect(returned).toBe(expected);
});

test('Should be able to discount overtime pay', () => {
  const expected = 2300;
  const returned = calculateDiscounts(2500, 200);

  expect(returned).toBe(expected);
});
