window.onload = function() {
    var iframe = document.createElement('iframe');
    window._iframe = iframe;
    iframe.src = "iframe-1.html";
    document.body.appendChild(iframe);

    //setTimeout(function() {
    //    iframe.remove();
    //}, 1000);
};
