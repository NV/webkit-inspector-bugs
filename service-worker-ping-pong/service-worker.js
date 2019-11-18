self.addEventListener("message", (ev) => {
    console.info("Service worker", ev);
    debugger;
    ev.source.postMessage("pong");
});
