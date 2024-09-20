import { useCounter } from '@/composables/useCounter';

describe('Tests in useCounter composable', () => {
  test('Should initialize the counter with default values', () => {
    const { counter, squareCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(25);
  });

  test('Should initialize the counter with a given initial value', () => {
    const initialValue = 10;

    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('Should increment the counter correctly', () => {
    const { counter, squareCounter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(36);
  });
});
