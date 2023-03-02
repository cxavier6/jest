/* eslint-disable import/extensions *//* eslint-disable no-undef */

import { overtime, calculateDiscounts } from '../index.js';

describe('Overtime amount tests', () => {
  it('Should be able to return overtime amount', () => {
    const expected = 2500;
    const returned = overtime(2000, 500);

    expect(returned).toBe(expected);
  });

  it('Should be able to discount overtime pay', () => {
    const expected = 2300;
    const returned = calculateDiscounts(2500, 200);

    expect(returned).toBe(expected);
  });
});
