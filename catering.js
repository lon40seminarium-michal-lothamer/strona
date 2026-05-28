validTab=[0,0,0,0,0]; //0-nieprawidĹowe, 1-prawidĹowe
function dodatek(){
    var dodatek = document.getElementById('dodatek').value;
    var pattern = /^[A-Za-ząęółśćżź]{3,40}$/;
    if(pattern.test(dodatek)){
        document.getElementById('cdodatek').checked = true;
        validTab[0]=1;
    }else{
        document.getElementById('cdodatek').checked = false;
        validTab[0]=0;
    }
    if(checkValidTab()){
        document.getElementById('send').disabled = false;
    }else{
        document.getElementById('send').disabled = true;
    }
}
function ulica(){
    var ulica = document.getElementById('ulica').value;
    var pattern = /^[A-Z][a-ząęółśćżź]{2,30}$/;
    if(pattern.test(ulica)){
        document.getElementById('culica').checked = true;
        validTab[1]=1;
    }else{
        document.getElementById('culica').checked = false;
        validTab[1]=0;
    }
        if(checkValidTab()){
        document.getElementById('send').disabled = false;
    }else{
        document.getElementById('send').disabled = true;
    }
}
function numer(){
    var numer = document.getElementById('numer').value;
    var pattern = /^(([1-9]{1,})|([1-9][0-9]{1,}))$/;
    if(pattern.test(numer)){
        document.getElementById('cnumer').checked = true;
        validTab[2]=1;
    }else{
        document.getElementById('cnumer').checked = false;
        validTab[2]=0;
    }
        if(checkValidTab()){
        document.getElementById('send').disabled = false;
    }else{
        document.getElementById('send').disabled = true;
    }
}
function telefon(){
    var telefon = document.getElementById('telefon').value;
    var pattern = /^(([1-9][0-9]{2}\-[0-9]{3}\-[0-9]{3})|([1-9][0-9]{8})|([1-9][0-9]{2}\s[0-9]{3}\s[0-9]{3}))$/;
    if(pattern.test(telefon)){
        document.getElementById('ctelefon').checked = true;
        validTab[3]=1;
    }else{
        document.getElementById('ctelefon').checked = false;
        validTab[3]=0;
    }
        if(checkValidTab()){
        document.getElementById('send').disabled = false;
    }else{
        document.getElementById('send').disabled = true;
    }
}
function waga(){
    var waga = document.getElementById('waga').value;
    var pattern = /^(([1-9])|([1-2][0-9])|([3][0]))$/;
    if(pattern.test(waga)){
        document.getElementById('cwaga').checked = true;
        validTab[4]=1;
    }else{
        document.getElementById('cwaga').checked = false;
        validTab[4]=0;
    }
    if(checkValidTab()){
        document.getElementById('send').disabled = false;
    }else{
        document.getElementById('send').disabled = true;
    }
}
function checkValidTab(){
    for(let i=0;i<5;i++){
        if(validTab[i]==0) return false;
    }
    return true;
}
function pokazDodatek(){
    document.getElementById('dodatek').style.display = 'block';
    document.getElementById('cdodatek').style.display = 'block';
    validTab[0]=0;
}
function ukryjDodatek(){
    document.getElementById('dodatek').style.display = 'none';
    document.getElementById('cdodatek').style.display='none';
    validTab[0]=1;
}
function zamow(){
    document.getElementById('status').innerHTML="Zamówienie zostało przyjęte do realizacji";

}