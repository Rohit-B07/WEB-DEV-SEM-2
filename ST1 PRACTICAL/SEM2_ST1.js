function Largest() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);
    let d = Number(document.getElementById("n4").value);
    let e = Number(document.getElementById("n5").value);

    let largest;

    if (a >= b && a >= c && a >= d && a >= e) {
        largest = a;
    }
    else if (b >= a && b >= c && b >= d && b >= e) {
        largest = b;
    }
    else if (c >= a && c >= b && c >= d && c >= e) {
        largest = c;
    }
    else if (d >= a && d >= b && d >= c && d >= e) {
        largest = d;
    }
    else {
        largest = e;
    }

    document.getElementById("result").innerHTML = "Largest number is: " + largest;
}