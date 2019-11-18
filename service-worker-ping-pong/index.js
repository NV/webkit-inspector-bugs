if (window.navigator && window.navigator.serviceWorker) {
    window.navigator.serviceWorker.addEventListener("message", (ev) => console.log("Received message:", ev.data));
    window.navigator.serviceWorker.register("service-worker.js");
    window.navigator.serviceWorker.ready.then((reg) => reg.active.postMessage({"method":"ping"}));
}
