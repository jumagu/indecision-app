<script src="./MyCounterScript2" lang="ts"></script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>

  <div class="flex gap-2">
    <button class="btn" @click="decrement">-1</button>
    <button class="btn" @click="increment">+1</button>
  </div>
</template>

<!-- scoped: estilos aplicados solo a este componente -->
<style scoped>
.btn {
  @apply p-1 bg-blue-300 rounded;
}
</style>
