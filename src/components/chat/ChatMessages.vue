<script setup lang="ts">
import ChatMessageBubble from './ChatMessageBubble.vue';
import type { IChatMessage } from '@/interfaces/chat-message.interface';

interface IChatMessagesProps {
  messages: IChatMessage[];
}

defineProps<IChatMessagesProps>();
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatMessageBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>
