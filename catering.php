<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Catering</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="funkcje.js" defer></script>
</head>

<body>
    <div id="container">
        <h1>Catering - dania na zamówienie</h1>
        <fieldset id="f1">
            <legend>Dane zamówienia</legend>
            <form method="POST" action="zapisz.php">
            <select name="order" id="order">
                <optgroup label="Pizza">
                    <option value="PM">Margharitta</option>
                    <option value="PP">Pepperoni</option>
                </optgroup>
                <optgroup label="Zupa">
                    <option value="ZR">Rosół</option>
                    <option value="ZP">Pomidorowa</option>
                </optgroup>
                <optgroup label="Sałatka">
                    <option value="SG">Grecka</option>
                    <option value="SW">Włoska</option>
                </optgroup>
                <optgroup label="Napoje zimne">
                    <option value="NSP">Sok pomarańczowy</option>
                    <option value="NSJ">Sok jabłkowy</option>
                </optgroup>
                <optgroup label="Napoje ciepłe">
                    <option value="NK">Kawa</option>
                    <option value="NH">Herbata</option>
                </optgroup>
            </select><br>
            <fieldset id="f2">
                <legend>Dodatki</legend>
            <input type="radio" name="dodatek" value="dod" onclick="pokazDodatek();" checked>
            <label for="brak">z dodatkiem</label>
            <input type="radio" name="dodatek" value="bez-dod" onclick="ukryjDodatek();">
            <label for="z-dodatkiem">brak</label>
            <input type="text" id="dodatek" onkeyup="dodatek();" style="display: block; width: 100px;">
            <input type="checkbox" id="cdodatek" style="display: block;" disabled><br>
            
            </fieldset>
            

            
            <label for="ulica">Ulica</label>
            <input type="text" id="ulica" onkeyup="ulica();">
            <input type="checkbox" id="culica" disabled><br>

            <label for="nr">Nr</label>
            <input type="text" id="numer" onkeyup="numer();">
            <input type="checkbox" id="cnumer" disabled><br>

            <label for="telefon">Telefon</label>
            <input type="text" id="telefon" onkeyup="telefon();">
            <input type="checkbox" id="ctelefon" disabled><br>

            <label for="waga">Waga</label>
            <input type="text" id="waga" onkeyup="waga();">
            <input type="checkbox" id="cwaga" disabled><br>

            <input type="submit" value="Wyślij" id="send" onclick="zamow();" disabled>
</form>
            <p id="status">Status zamówienia</p>
            <textarea name="dane" id="dane" rows="2" cols="30"></textarea>
        </fieldset>

    </div>
    
</body>

</html>