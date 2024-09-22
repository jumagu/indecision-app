import { useChat } from '@/composables/useChat';

describe('Tests in useChat composable', () => {
  test('Should send a message when sendMessageHandler is called', async () => {
    const message = 'Hello World';

    const { messages, sendMessageHandler } = useChat();

    await sendMessageHandler(message);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].isSender).toBe(true);
    expect(messages.value[0].message).toBe(message);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      message,
      isSender: true,
    });
  });

  test('Should not send a message when sendMessageHandler is called with a empty string', async () => {
    const message = '';

    const { messages, sendMessageHandler } = useChat();

    await sendMessageHandler(message);

    expect(messages.value.length).toBe(0);
  });

  test('Should receive a message when sendMessageHandler is called with a text ending with "?"', async () => {
    const message = 'Hola?';

    const { messages, sendMessageHandler } = useChat();

    await sendMessageHandler(message);

    const [sentMessage, receivedMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(sentMessage).toEqual({
      id: expect.any(Number),
      message,
      isSender: true,
    });
    expect(receivedMessage).toEqual({
      id: expect.any(Number),
      media: expect.any(String),
      message: expect.any(String),
      isSender: false,
    });
  });

  // Fetch API mock
  test('Should receive a message when sendMessageHandler is called with a text ending with "?" - Fetch Mock', async () => {
    const mockResponse = {
      answer: 'YES',
      forced: false,
      image: 'https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif',
    };

    const fetchMock = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    (window.fetch as any) = fetchMock;

    const message = 'Hola?';

    const { messages, sendMessageHandler } = useChat();

    await sendMessageHandler(message);

    const [, receivedMessage] = messages.value;

    expect(receivedMessage).toEqual({
      id: expect.any(Number),
      media: mockResponse.image,
      message: mockResponse.answer,
      isSender: false,
    });
  });
});
