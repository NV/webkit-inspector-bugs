'use strict';

const e = React.createElement;

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.onClickBound = this.onClick.bind(this);
    console.trace("constructor");
  }

  onClick(e) {
    console.info("onclick", e);
  }

  render() {
    let onInput = (event) => {
      console.info("onInput", event);
    }

    return e(
      "input",
      {autoFocus: "autofocus", onInput, onClick: this.onClick}
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e("div", {className: "App"}, [
        e(TextField)
    ])
  }
}


const domContainer = document.getElementById("root");
ReactDOM.render(e(App), domContainer);
