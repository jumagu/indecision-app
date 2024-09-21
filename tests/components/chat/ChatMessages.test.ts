import { mount } from '@vue/test-utils';

import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { IChatMessage } from '@/interfaces/chat-message.interface';

const MESSAGES: IChatMessage[] = [
  {
    id: 1,
    message: 'Hello?',
    isSender: true,
  },
  {
    id: 1,
    media: 'https://placeholder-image.com/example.jpg',
    message: 'NO',
    isSender: false,
  },
];

describe('Tests in <ChatMessages />', () => {
  test('Should render chat messages correctly', () => {
    const wrapper = mount(ChatMessages, {
      props: {
        isLoading: false,
        messages: MESSAGES,
      },
    });

    const chatBubbles = wrapper.findAllComponents({ name: 'ChatMessageBubble' });

    expect(chatBubbles.length).toBe(MESSAGES.length);
  });

  test('Should render loading indicator if isLoading prop is true', () => {
    const wrapper = mount(ChatMessages, {
      props: {
        isLoading: true,
        messages: MESSAGES,
      },
    });

    const loadingIcon = wrapper.findComponent({ name: 'ThreeDotsIcon' });

    expect(loadingIcon.exists()).toBe(true);
  });

  test('Should scroll to top with a smooth behavior when messages prop value changes', async () => {
    const wrapper = mount(ChatMessages, {
      props: {
        isLoading: false,
        messages: MESSAGES,
      },
    });

    /**
     * Mock function for the `scrollTo` method.
     *
     * This mock is created using `vi.fn()` from the Vitest testing framework.
     * It can be used to simulate and test the behavior of the `scrollTo` method
     * in a controlled environment.
     */
    const scrollToMock = vi.fn();

    const msgContainerRef = wrapper.vm.$refs.msgContainerRef as HTMLElement;
    msgContainerRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...MESSAGES, { id: 3, message: 'WTF', isSender: true }],
    });

    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(scrollToMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({ top: expect.any(Number), behavior: 'smooth' });
  });
});
