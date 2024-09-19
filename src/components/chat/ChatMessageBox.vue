<script setup lang="ts">
import { ref } from 'vue';

import SendIcon from '../icons/SendIcon.vue';

// Events definition
const emit = defineEmits<{ sendMessage: [text: string] }>();

const message = ref('');

const sendMessage = () => {
  if (!message.value.trim().length) return;

  emit('sendMessage', message.value);

  message.value = '';
};
</script>

<template>
  <div class="bg-white p-4 flex items-center">
    <input
      type="text"
      v-model="message"
      placeholder="Type your message..."
      class="flex-1 border rounded-full px-4 py-2 focus:outline-none"
      @keypress.enter="sendMessage"
    />
    <button
      class="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none"
      @click="sendMessage"
    >
      <SendIcon />
    </button>
  </div>
</template>
