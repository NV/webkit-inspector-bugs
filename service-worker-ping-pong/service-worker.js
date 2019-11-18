self.addEventListener("message", (ev) => {
    console.info("pong");
    ev.source.postMessage("pong");
});
