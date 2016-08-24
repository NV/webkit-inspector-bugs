var input = document.getElementById("input");

input.oninput = input.onpaste = window.onload = function(e) {
    update();
};

function update() {
    isMinified(document.getElementById("input").value);
}

function isMinified(content) {
    let definitelyMinified = false;

    let whiteSpaceCount = 0;
    let ratio = 0;

    let i = 0;
    let size = Math.min(5000, content.length);
    for (; i < size; i++) {
        let char = content[i];

        if (char === " ")
            whiteSpaceCount++;
        else if (char === "\t")
            whiteSpaceCount += 4;
        else if (char === "\n")
            whiteSpaceCount += 8;

        if (i >= 500) {
            ratio = whiteSpaceCount / i;
            if (ratio < 0.05) {
                definitelyMinified = true;
                break;
            }
        }
    }

    if (!definitelyMinified) {
        ratio = whiteSpaceCount / i;
    }

    if (definitelyMinified)
        document.getElementById("answer").textContent = "Definitely minified!";
    else {
        ratio = whiteSpaceCount / i;
        if (ratio < 0.1)
            document.getElementById("answer").textContent = "Looks.";
        else
            document.getElementById("answer").textContent = "Looks not minified.";
    }

    document.getElementById("ratio").textContent = ratio * 100 + "%";
    document.getElementById("spaces").textContent = whiteSpaceCount + "";
    document.getElementById("non-spaces").textContent = i - whiteSpaceCount + "";
}
