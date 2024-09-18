import { computed, ref } from 'vue';

// ? Súper poder de Vue!
// Crear está varibale globalmente quiere decir que será usada
// en todos los lugares donde se llame useCounter.
// Es como un estado global!!!
// const counter = ref(10);

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value);

  return { counter, squareCounter };
};
