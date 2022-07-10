import { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div
        data-test="app"
        className="App w-full h-full text-center flex items-center justify-center"
      >
        <div className="custom-number-input h-10 w-32">
          <label
            data-test="app-label"
            className="w-full text-gray-700 text-sm font-semibold"
          >
            Counter Input
          </label>
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              data-test="decrement"
              onClick={() => this.decrement()}
              data-action="decrement"
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <span
              data-test="counter-result"
              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none"
            >
              {this.state.count}
            </span>
            <button
              data-test="increment"
              onClick={() => this.increment()}
              data-action="increment"
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
