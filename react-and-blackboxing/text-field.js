'use strict';

const e = React.createElement;

class TextField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let onInput = (event) => {
      console.info("onInput", event);
    }

    return e(
      "input",
      {autofocus: "autofocus", onInput}
    );
  }
}

const domContainer = document.getElementById("root");
ReactDOM.render(e(TextField), domContainer);
