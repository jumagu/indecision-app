<script setup lang="ts">
interface ChatMessageBubbleProps {
  media?: string;
  message: string;
  isSender: boolean;
}

defineProps<ChatMessageBubbleProps>();
</script>

<template>
  <!-- Sended Message -->
  <div v-if="isSender" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <p class="capitalize">{{ message }}</p>
      <img v-if="media" :src="media" alt="YesNoImage" class="w-52 h-52 object-cover rounded" />
    </div>
  </div>
</template>
