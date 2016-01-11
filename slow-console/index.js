var MAX = 2000;

function runUniq() {
    var i = 0;
    var MAX = parseInt(document.getElementById("iterations_count").value);

    var id = setInterval(function() {
        console.log(i);

        if (i >= MAX) {
            clearInterval(id);
            i = 0;
        }
        i++;
    }, 1);
}

function runSame() {
    var i = 0;
    var MAX = parseInt(document.getElementById("iterations_count").value);

    var id = setInterval(function() {
        console.log("Zoidberg");

        if (i >= MAX) {
            clearInterval(id);
            i = 0;
        }
        i++;
    }, 1);
}
