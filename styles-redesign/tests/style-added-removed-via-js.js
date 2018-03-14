let link;

setInterval(function() {
    if (!link) {
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "style-added-removed-via-js.css";
        document.body.append(link);
    } else {
        link.remove();
        link = null;
    }
}, 3000);