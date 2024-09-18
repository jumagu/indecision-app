<script setup lang="ts">
// import { ref, computed } from 'vue';

// ? forma tradicional de hacerlo en JS
// const props = defineProps({
//   value: { type: Number, required: true },
// });

interface Props {
  value: number;
  text: string;
}

const props = defineProps<Props>();

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);

import { useCounter } from '../composables/useCounter';

const { counter, squareCounter } = useCounter(props.value);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};
</script>

<template>
  <section>
    <h3>{{ props.text }}</h3>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>

  <div>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
  </div>
</template>

<!-- scoped: estilos aplicados solo a este componente -->
<style scoped>
h1 {
  color: red;
}
</style>
