document.getElementById("calculate").addEventListener("click", function () {
    let max = document.getElementById("input").value;
    max = parseFloat(max);
    let result = []
    for (let i = 0; i <= max; i = i + 1) {
        if (max % i == 0) {
            result.push(i);
        }
    }
    document.getElementById("display").innerHTML = "";
    for (let j = 0; j < result.length; j = j + 1) {
        let item = document.createElement("li");
        item.innerText = result[j].toString();
        document.getElementById("display").appendChild(item);
    }
})