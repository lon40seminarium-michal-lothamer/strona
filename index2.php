<!DOCTYPE html>
<html lang="en">
<head>
  <body style="font-family: Tahoma"></body>
  <meta charset="UTF-8">
  <title>Pola Figur</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="style.css" rel="stylesheet" type="text/css"/>
  <script src="script.js"></script>
</head>
<body>
<h1 class="title">Obliczanie pól</h1>
  <div class="container">
    <a class="button" href="index.php" title="1">Powrót</a>
  </div><br>

<div id="container1">
    <div id="fig1">
        <fieldset id="f1">
            <legend>prostokąt</legend>
            <label for="pr_a">długość boku A</label></br>
            <input type="text"id="pr_a"name="pr_a"/>
            <label for="pr_b">długość boku B</label></br>
            <input type="text"id="pr_b"name="pr_b"/>
            <input type="button"value="Oblicz" onclick="obliczPr()"/>
            <p id="pr_wynik"></p>
        </fieldset>
    </div>
</div>



</body>
</html>