function rectangle(){
    let a = document.getElementById('rectA').value;
    let b = document.getElementById('rectB').value;

    let area = a * b;
    let perimeter = (2 * (a + b));

    document.getElementById("rectResult").innerHTML =
        "Pole: " + area + "<br>Obwód: " + perimeter;
}

function triangleArea() {
    let a = parseFloat(document.getElementById("triA").value);
    let h = parseFloat(document.getElementById("triH").value);

    let area = (a * h) / 2;

    document.getElementById("triResult").innerHTML =
        "Pole: " + area;
}

function trianglePerimeter() {
    let a = parseFloat(document.getElementById("2triA").value);
    let b = parseFloat(document.getElementById("2triB").value);
    let c = parseFloat(document.getElementById("2triC").value);

    let perimeter = (a + b + c);

    document.getElementById("2triResult").innerHTML =
        "Obwód: " + perimeter;
}

function trapezoidArea() {
    let a = parseFloat(document.getElementById("trapA").value);
    let b = parseFloat(document.getElementById("trapB").value);
    let h = parseFloat(document.getElementById("trapC").value);

    let area = ((a + b) * h) / 2;

    document.getElementById("trapResult").innerHTML =
        "Pole: " + area;
}

function trapezoidPerimeter() {
    let a = parseFloat(document.getElementById("2trapA").value);
    let b = parseFloat(document.getElementById("2trapB").value);
    let c = parseFloat(document.getElementById("2trapC").value);
    let d = parseFloat(document.getElementById("2trapD").value);

    let perimeter = (a + b + c + d);

    document.getElementById("2trapResult").innerHTML =
        "Obwód: " + perimeter;
}

function circle() {
    let r = parseFloat(document.getElementById("circleR").value);

    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    document.getElementById("circleResult").innerHTML =
        "Pole: ~" + area.toFixed(2) +
        "<br>Obwód: ~" + perimeter.toFixed(2);
}