import { describe, expect, test } from 'vitest';

import { sum, sumArray } from '../../src/utils/sum';

describe('Tests in sum function', () => {
  test('adds 7 + 5 to equal 12', () => {
    // Arrange
    const a = 7;
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(a + b);

    //   if (sum(1, 2) !== 3) {
    //     throw new Error('Test not passed');
    //   }
  });
});

describe('Tests in sumArray function', () => {
  test('Should return 0 if array is empty', () => {
    // arrange
    const numbers: number[] = [];

    // act
    const result = sumArray(numbers);

    // Assert
    expect(result).toBe(0);
  });

  test('Should return the sum of an array elements if the array contains numbers', () => {
    // arrange
    const a = 8,
      b = 15,
      c = 74,
      d = 69;
    const numbers = [a, b, c, d];

    // act
    const result = sumArray(numbers);

    // Assert
    expect(result).toBe(a + b + c + d);
  });
});
