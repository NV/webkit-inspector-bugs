const h = ["start", "center", "end", "space-between", "space-around", "space-evenly", "stretch"];
const w = ["start", "center", "end", "stretch", "baseline"];

blocks("align-content", h, 5);
blocks("align-items", w, 5);

blocks("justify-content", h, 5);
blocks("justify-items", w, 5);

function blocks(name, values, n=5) {
    let h2 = document.createElement("h2");
    h2.textContent = name;
    h2.id = name;
    document.body.append(h2);

    let section = document.createElement("section");

    for (let value of values) {
        let container = document.createElement("div");
        container.className = "container";
        container.style = name + ": " + value;
        let h3 = document.createElement("h3")
        container.append(h3);
        h3.textContent = value;

        for (let i = 0; i < n; i++) {
            let box = document.createElement("div");
            box.textContent = i.toString();
            container.append(box);
        }
        section.appendChild(container);
    }

    document.body.append(section);
}
