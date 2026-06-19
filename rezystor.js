function calculateResistance(value1, value2, value3, value4, value5) {
    const c1 = colors[value1];
    const c2 = colors[value2];
    const c3 = colors[value3];
    const c4 = colors[value4];
    const c5 = colors[value5];

    if (!c1 || !c2 || !c3 || !c4 || !c5) {
        return { error: "Invalid color value(s)" };
    }
    if (typeof c1.cyfra !== 'number' || typeof c2.cyfra !== 'number' || typeof c3.cyfra !== 'number' || typeof c4.mnoznik !== 'number') {
        return { error: "Invalid band for resistance calculation" };
    }
    const resistance = ((c1.cyfra * 100) + (c2.cyfra * 10) + c3.cyfra) * c4.mnoznik;

    const tolerance = c5.tolerancja;

    return {
        resistance: resistance,
        tolerance: tolerance
    };
}
const colors = {
    czarny: { color: "black", mnoznik: 1, cyfra: 0, tolerancja: null },
    brazowy: { color: "brown", mnoznik: 10, cyfra: 1, tolerancja: 1 },
    czerwony: { color: "red", mnoznik: 100, cyfra: 2, tolerancja: 2 },
    pomaranczowy: { color: "orange", mnoznik: 1000, cyfra: 3, tolerancja: null },
    zolty: { color: "yellow", mnoznik: 10000, cyfra: 4, tolerancja: null },
    zielony: { color: "green", mnoznik: 1000000, cyfra: 5, tolerancja: null },
    niebieski: { color: "blue", mnoznik: 10000000, cyfra: 6, tolerancja: null },
    fioletowy: { color: "violet", mnoznik: 10000000, cyfra: 7, tolerancja: null },
    szary: { color: "grey", mnoznik: 100000000, cyfra: 8, tolerancja: null },
    bialy: { color: "white", mnoznik: null, cyfra: 9, tolerancja: null },
    zloty: { color: "gold", mnoznik: 0.1, cyfra: null, tolerancja: 5 },
    srebny: { color: "silver", mnoznik: 0.01, cyfra: null, tolerancja: 10 }
};

function showMenu(which){
    for (let i = 1; i <= 5; i++) {
        const select = document.getElementById(`value${i}`);
        if (select) select.style.display = 'none';
    }
    const currentSelect = document.getElementById(`value${which}`);
    if (currentSelect) currentSelect.style.display = 'block';

    let selected = currentSelect ? currentSelect.value : 'czerwony';
    if (!selected) selected = 'czerwony';
    const belt = document.getElementById(`belt${which}`);
    if (belt) belt.style.backgroundColor = colors[selected].color;
}

function readValue(which) {
    var a = document.getElementById(`value${which}`).value;
    var belt = document.getElementById(`belt${which}`);
    belt.style.backgroundColor = colors[a].color;

    var v1 = document.getElementById('value1').value || 'czerwony';
    var v2 = document.getElementById('value2').value || 'czerwony';
    var v3 = document.getElementById('value3').value || 'czerwony';
    var v4 = document.getElementById('value4').value || 'czerwony';
    var v5 = document.getElementById('value5').value || 'czerwony';

    if (v1 && v2 && v3 && v4 && v5) {
        var result = calculateResistance(v1, v2, v3, v4, v5);
        var resultDiv = document.getElementById('result');
        if (result.error) {
            resultDiv.textContent = result.error;
        } else {
            let res = result.resistance;
            let resStr = '';
            if (res >= 1e6) {
                resStr = (res/1e6) + ' MΩ';
            } else if (res >= 1e3) {
                resStr = (res/1e3) + ' kΩ';
            } else {
                resStr = res + ' Ω';
            }
            let tol = result.tolerance;
            let tolStr = tol ? `±${tol}%` : '';
            let min = tol ? (res * (1 - tol/100)) : res;
            let max = tol ? (res * (1 + tol/100)) : res;
            let rangeStr = tol ? `Toleracja: ${min.toFixed(2)} Ω – ${max.toFixed(2)} Ω` : '';
            resultDiv.textContent = `Rezystancja: ${resStr} ${tolStr} ${rangeStr}`;
        }
    }
}

