function nwd1(a,b) {
    while(a!=b){
        if(a>b){
            a=a-b
        } else {
            b=b-a
        }
     }
    return a;
}

function skracajulamek(){
    let a = parseInt(document.getElementById('licznik').value);
    let b = parseInt(document.getElementById('mianownik').value);
    let nwd = nwd1(a,b);
    if(nwd==1){
        document.getElementById('ulsk').innerHTML = "Ułanka nie da sie skrócić";
        document.getElementById('licznik').value = "";
        document.getElementById('mianownik').value = "";
    }else{
        document.getElementById('liczniksk').value = a/nwd;
        document.getElementById('mianowniksk').value = b/nwd;
        document.getElementById('ulsk').innerHTML = "Ułanek skrócony ma postać:";
    }
}

function dodajUlamki(){
    let l2 = parseInt(document.getElementById('l2').value);
    let m2 = parseInt(document.getElementById('m2').value);
    let l3 = parseInt(document.getElementById('l3').value);
    let m3 = parseInt(document.getElementById('m3').value);
    let nwd = nwd1(m2,m3);
    let nww = (m2*m3)/nwd;
    let zl2 = (nww/m2)*l2;
    let zl3 = (nww/m3)*l3;
    let sumaLicznikow = zl2+zl3;
    document.getElementById('lw').value = sumaLicznikow;
    document.getElementById('mw').value = nww;
}

function odejmijUlamki(){
    let f8 = parseInt(document.getElementById('f8').value);
    let f9 = parseInt(document.getElementById('f9').value);
    let g8 = parseInt(document.getElementById('g8').value);
    let g9 = parseInt(document.getElementById('g9').value);
    let nwd = nwd1(f9,g9);
    let nww = (f9*g9)/nwd;
    let zf8 = (nww/f9)*f8;
    let zg8 = (nww/g9)*g8;
    let sumaLicznikow = zf8-zg8;
    document.getElementById('jj').value = sumaLicznikow;
    document.getElementById('kk').value = nww;
}
