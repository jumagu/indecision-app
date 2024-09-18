<script setup lang="ts">
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<template>
  <h1 class="text-3xl">My first Vue application</h1>

  <hr />

  <MyCounter :value="1" text="Counter script setup" />
  <MyCounterScript :value="2" text="Counter traditional component" />
  <MyCounterScript2 :value="3" text="Counter separed logic" />
</template>
