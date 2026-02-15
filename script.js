function obliczPr(){
    let a = parseFloat(document.getElementById('pr_a').value) || 0;
    let b = parseFloat(document.getElementById('pr_b').value) || 0;
    let pole = a * b;
    console.log("Pole = " + pole);
    const out = document.getElementById('pr_pole');
    if (out) {
        out.textContent = "Pole = " + pole;
    }
}