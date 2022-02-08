import { h, Component, render } from 'https://unpkg.com/preact?module';

let onInput = (event) => {
    console.info("onInput", event);
}

// Create your app
const app = h('div', {class: "root"}, [
    h('input', {type: "text", onInput, defaultValue: "blah", autofocus: true})
]);

render(app, document.body);
