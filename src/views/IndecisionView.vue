<script setup lang="ts">
import { ref } from 'vue';

import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatMessageBox from '@/components/chat/ChatMessageBox.vue';
import type { IChatMessage } from '@/interfaces/chat-message.interface';

const messages = ref<IChatMessage[]>([
  {
    id: new Date().getTime(),
    media: '',
    message: 'Hola?',
    isSender: true,
  },
  {
    id: new Date().getTime(),
    media: '',
    message: 'NO',
    isSender: false,
  },
]);
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Anonymous</span>
    </div>

    <!-- Messages Section -->
    <ChatMessages :messages="messages" />

    <!-- Message Box -->
    <ChatMessageBox />
  </div>
</template>
