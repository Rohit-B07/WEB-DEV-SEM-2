function calculateSI() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    let si = (p * r * t) / 100;

    document.getElementById("result").innerHTML =
        "Simple Interest = " + si;
}