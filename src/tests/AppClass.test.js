import App from "./../components/classComponent/AppClass";
import { shallow } from "enzyme";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

describe("Class App Component", () => {
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

  test("should counter result tag is span", () => {
    let counterResultInputType = findByTestAttr(
      wrapper,
      "counter-result"
    ).type();
    expect(counterResultInputType).toBe("span");
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
    let initialCounterState = findByTestAttr(wrapper, "counter-result").text();
    expect(parseInt(initialCounterState)).toBe(0);
  });

  test("should increment button work", () => {
    const initialCounter = 10;
    const app = setup(null, { count: initialCounter });

    const button = findByTestAttr(app, "increment");
    button.simulate("click");

    const counterResultAfterChange = findByTestAttr(app, "counter-result");

    expect(parseInt(counterResultAfterChange.text())).toBe(initialCounter + 1);
  });

  test("should decrement button work", () => {
    const initialCounter = 5;
    const app = setup(null, { count: initialCounter });

    const button = findByTestAttr(app, "decrement");
    button.simulate("click");

    let counterResultAfterChange = findByTestAttr(app, "counter-result");

    expect(parseInt(counterResultAfterChange.text())).toBe(initialCounter - 1);
  });
});
