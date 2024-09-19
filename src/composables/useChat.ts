import { ref } from 'vue';

import { delay } from '@/utils/delay';

import type { IChatMessage } from '@/interfaces/chat-message.interface';
import type { IYesNoAPIResponse } from '@/interfaces/yesno-api-response.interface';

export const useChat = () => {
  const isLoading = ref(false);
  const messages = ref<IChatMessage[]>([]);

  const fetchResponse = async () => {
    const res = await fetch('https://yesno.wtf/api');
    const data: IYesNoAPIResponse = await res.json();

    return data;
  };

  const sendMessageHandler = async (msg: string) => {
    isLoading.value = false;

    if (!msg.length) return;

    messages.value.push({
      id: new Date().getTime(),
      message: msg,
      isSender: true,
    });

    if (!msg.endsWith('?')) return;

    isLoading.value = true;

    await delay(1.5);

    const { image, answer } = await fetchResponse();

    isLoading.value = false;

    messages.value.push({
      id: new Date().getTime(),
      media: image,
      message: answer,
      isSender: false,
    });
  };

  return {
    messages,
    isLoading,
    sendMessageHandler,
  };
};
