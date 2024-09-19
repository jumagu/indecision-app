<script setup lang="ts">
import { ref, watch } from 'vue';

import ThreeDotsIcon from '../icons/ThreeDotsIcon.vue';
import ChatMessageBubble from './ChatMessageBubble.vue';
import type { IChatMessage } from '@/interfaces/chat-message.interface';

interface IChatMessagesProps {
  isLoading?: boolean;
  messages: IChatMessage[];
}

const { messages } = defineProps<IChatMessagesProps>();

const messagesRef = ref(messages);
const msgContainerRef = ref<HTMLDivElement | null>(null);

watch(messagesRef.value, () => {
  setTimeout(() => {
    msgContainerRef.value?.scrollTo({
      top: msgContainerRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>

<template>
  <div ref="msgContainerRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatMessageBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <div v-if="isLoading" class="flex justify-center">
        <ThreeDotsIcon width="64px" fill="#3b82f6" />
      </div>
    </div>
  </div>
</template>
