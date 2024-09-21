import { mount } from '@vue/test-utils';

import ChatMessageBox from '@/components/chat/ChatMessageBox.vue';

describe('Tests in <ChatMessageBox />', () => {
  const wrapper = mount(ChatMessageBox);

  test('Should render input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('Should send a message when click send button and a message exist', async () => {
    const message = 'Hello World';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('Should send a message when press enter key and a message exist', async () => {
    const message = 'Hello World';

    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('Should not send a message when press enter key and message does not exist', async () => {
    const wrapper = mount(ChatMessageBox);

    const input = wrapper.find('input');
    const sendButton = wrapper.find('button');

    await input.trigger('keypress.enter');
    await sendButton.trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
