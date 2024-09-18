<script setup lang="ts">
import SendIcon from '../icons/SendIcon.vue';
</script>

<template>
  <div class="bg-white p-4 flex items-center">
    <input
      type="text"
      placeholder="Type your message..."
      class="flex-1 border rounded-full px-4 py-2 focus:outline-none"
    />
    <button
      class="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none"
    >
      <SendIcon />
    </button>
  </div>
</template>
