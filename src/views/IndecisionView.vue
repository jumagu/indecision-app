<script setup lang="ts">
import { useChat } from '@/composables/useChat';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatMessageBox from '@/components/chat/ChatMessageBox.vue';
import TrashCanIcon from '@/components/icons/TrashCanIcon.vue';

const { messages, isLoading, clearChat, sendMessageHandler } = useChat();
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div>
        <img
          class="inline-block h-9 w-9 rounded-full object-cover ring-2 ring-white"
          src="../../public/anonymous.jpg"
          alt="Anonymous"
        />
        <span class="ml-2">Anonymous</span>
      </div>

      <button
        class="bg-red-500 text-white rounded-full p-2 ml-2 hover:bg-red-600 focus:outline-none disabled:opacity-80 disabled:pointer-events-none"
        :disabled="!messages.length"
        @click="clearChat"
      >
        <TrashCanIcon />
      </button>
    </div>

    <!-- Messages Section -->
    <ChatMessages :messages="messages" :is-loading="isLoading" />

    <!-- Message Box -->
    <ChatMessageBox @send-message="sendMessageHandler" />
  </div>
</template>
