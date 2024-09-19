import { mount } from '@vue/test-utils';

import MyCounter from '@/components/MyCounter.vue';

describe('Tests in MyCounter component', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
        text: 'Hello World',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Should render the counter value correctly', () => {
    // Arrange
    const value = 5;
    const text = 'Hello World';

    //  Act
    const wrapper = mount(MyCounter, {
      props: {
        value,
        text,
      },
    });

    // Assert
    expect(wrapper.find('h3').text()).toContain(text);
    expect(wrapper.find('[data-testid="counter-heading"]').text()).toContain(`Counter: ${value}`);
  });

  test('Should increment the counter value when +1 button is clicked', async () => {
    // Arrange
    const value = 5;
    const text = 'Hello World';

    //  Act
    const wrapper = mount(MyCounter, {
      props: {
        value,
        text,
      },
    });

    const [, btnIncrement] = wrapper.findAll('button');

    await btnIncrement.trigger('click');

    const counterText = wrapper.find('[data-testid="counter-heading"]').text();

    expect(counterText).toBe(`Counter: ${value + 1}`);
  });

  test('Should decrement the value in -2 when -2 button is clicked twice', async () => {
    // Arrange
    const value = 5;
    const text = 'Hello World';

    //  Act
    const wrapper = mount(MyCounter, {
      props: {
        value,
        text,
      },
    });

    const [btnDecrement] = wrapper.findAll('button');

    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    const counterText = wrapper.find('[data-testid="counter-heading"]').text();

    expect(counterText).toBe(`Counter: ${value - 2}`);
  });
});
