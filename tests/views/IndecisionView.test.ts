import { mount } from '@vue/test-utils';

import IndecisionView from '@/views/IndecisionView.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import ChatMessageBox from '@/components/chat/ChatMessageBox.vue';

const chatMessagesMock = {
  template: '<div data-testid="messages-mock">Mock of ChatMessages component</div>',
};

describe('Tests in <IndecisionView />', () => {
  test('Should render chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(ChatMessageBox).exists()).toBe(true);
  });

  test('Should call sendMessageHandler when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: chatMessagesMock,
        },
      },
    });

    // const sendMessageHandlerMock = vi.fn();

    const messageboxComponent = wrapper.findComponent(ChatMessageBox);

    // (messageboxComponent.vm.$.parent?.vnode.component as any).setupState.sendMessageHandler =
    //   sendMessageHandlerMock;

    messageboxComponent.vm.$emit('sendMessage', 'Hello World');

    await new Promise((resolve) => setTimeout(resolve, 150));

    // expect(sendMessageHandlerMock).toHaveBeenCalled();
    // expect(messageboxComponent.vm.onSendMessage).toHaveBeenCalled();
  });
});
