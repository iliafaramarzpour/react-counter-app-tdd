import App from "./../components/functionComponent/AppFunction";
import { shallow } from "enzyme";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

describe("Functional App Component", () => {
  const wrapper = setup();

  test("it should render the app component", () => {
    expect(wrapper).toBeTruthy();
  });

  test("should render App component div", () => {
    const appComponent = findByTestAttr(wrapper, "app").length;
    expect(appComponent).toBe(1);
  });

  test("should app label equal to : Counter Input", () => {
    const appLabel = findByTestAttr(wrapper, "app-label").length;
    expect(appLabel).toBe(1);
  });

  test("should counter result input type is type=number", () => {
    let counterResultInputType = findByTestAttr(wrapper, "counter-result").prop(
      "type"
    );
    expect(counterResultInputType).toBe("number");
  });

  test("should render counter result input", () => {
    const appLabel = findByTestAttr(wrapper, "counter-result").length;
    expect(appLabel).toBe(1);
  });

  test("should render increment button", () => {
    const appLabel = findByTestAttr(wrapper, "increment").length;
    expect(appLabel).toBe(1);
  });

  test("should render decrement button", () => {
    const appLabel = findByTestAttr(wrapper, "decrement").length;
    expect(appLabel).toBe(1);
  });

  test("should counter at 0", () => {
    let initialCounterState = findByTestAttr(wrapper, "counter-result").prop(
      "value"
    );
    expect(initialCounterState).toBe(0);
  });

  test("should increment button work", () => {
    const button = findByTestAttr(wrapper, "increment");
    button.simulate("click");

    let counterResultAfterChange = findByTestAttr(
      wrapper,
      "counter-result"
    ).prop("value");

    expect(counterResultAfterChange).toBe(1);
  });

  test("should decrement button work", () => {
    const button = findByTestAttr(wrapper, "decrement");
    button.simulate("click");

    let counterResultAfterChange = findByTestAttr(
      wrapper,
      "counter-result"
    ).prop("value");

    expect(counterResultAfterChange).toBe(0);
  });
});
