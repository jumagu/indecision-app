import { mount } from '@vue/test-utils';

import ChatMessageBubble from '@/components/chat/ChatMessageBubble.vue';

describe('Tests in <ChatMessageBubble />', () => {
  test('Should render sent message correctly', () => {
    const message = 'Hello World';

    const wrapper = mount(ChatMessageBubble, {
      props: {
        message,
        isSender: true,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('Should render received message correctly', () => {
    const message = 'YES';

    const wrapper = mount(ChatMessageBubble, {
      props: {
        message,
        isSender: false,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBeFalsy();
  });

  test('Should render received message with an image correctly', () => {
    const message = 'NO';
    const image = 'https://placeholder-image/example.jpg';

    const wrapper = mount(ChatMessageBubble, {
      props: {
        media: image,
        message,
        isSender: false,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();

    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
