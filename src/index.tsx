import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div>
        Hello world!
      </div>
    );
  }
}

const el = document.querySelector("#app");

ReactDOM.render(<App />,el);
