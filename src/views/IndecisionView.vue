<script setup lang="ts">
import { useChat } from '@/composables/useChat';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatMessageBox from '@/components/chat/ChatMessageBox.vue';

const { messages, isLoading, sendMessageHandler } = useChat();
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Anonymous</span>
    </div>

    <!-- Messages Section -->
    <ChatMessages :messages="messages" :is-loading="isLoading" />

    <!-- Message Box -->
    <ChatMessageBox @send-message="sendMessageHandler" />
  </div>
</template>
