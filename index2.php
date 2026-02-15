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
  <body id = "background">
<h1 class="title">Obliczanie pól</h1>
  <div class="container">
    <a class="button" href="index.php" title="1">Powrót</a>
  </div><br>
<div id="container1">
<table class="srodek">
    <tr>
    <td>
    <div>
        <fieldset id = "fig1">
        <h2 style="color:White">Pole i obwód Prostokąta</h2>
        <input type="number" id="rectA" placeholder="Bok a">
        <input type="number" id="rectB" placeholder="Bok b">
        <br><button onclick="rectangle()">Oblicz</button>
        <div class="result" id="rectResult" style="color:White"></div>
        </fieldset>
    </div>
    </td>

    <td>
    <div>
        <fieldset id = "fig1">
        <h2 style="color:White">Okrąg</h2>
        <input type="number" id="circleR" placeholder="Promień r">
        <br><button onclick="circle()">Oblicz</button>
        <div class="result" id="circleResult" style="color:White"></div>
        </fieldset>
    </div>
    </td>
    </tr>
</table>

    <table class="srodek">
    <tr>
    <td>
    <div>
        <fieldset id = "fig1">
        <h2 style="color:White">Pole Trójkąta</h2>
        <input type="number" id="triA" placeholder="Podstawa a">
        <input type="number" id="triH" placeholder="Wysokość h">
        <br><button onclick="triangleArea()">Oblicz</button>
        <div class="result" id="triResult" style="color:White"></div>
        </fieldset>
    </div>
    </td>

    <td>
    <div>
        <fieldset id = "fig1">
        <h2 style="color:White">Obwód Trójkąta</h2>
        <input type="number" id="2triA" placeholder="Bok a">
        <input type="number" id="2triB" placeholder="Bok b">
        <input type="number" id="2triC" placeholder="Bok c">
        <br><button onclick="trianglePerimeter()">Oblicz</button>
        <div class="result" id="2triResult" style="color:White"></div>
        </fieldset>
    </div>
    </td>
    </tr>
    </table>
    
    <table class="srodek">
    <tr>
    <td>
    <div>
        <fieldset id = "fig1">
        <h2 style="color:White">Pole Trapezu</h2>
        <input type="number" id="trapA" placeholder="Podstawa a">
        <input type="number" id="trapB" placeholder="Podstawa b">
        <input type="number" id="trapC" placeholder="Wysokość h">
        <br><button onclick="trapezoidArea()">Oblicz</button>
        <div class="result" id="trapResult" style="color:White"></div>
        </fieldset>
    </div>
    </td>

    <td>
    <div>
        <fieldset id = "fig1">
        <h2 style="color:White">Obwód Trapezu</h2>
        <input type="number" id="2trapA" placeholder="Podstawa a">
        <input type="number" id="2trapB" placeholder="Podstawa b">
        <input type="number" id="2trapC" placeholder="Bok a">
        <input type="number" id="2trapD" placeholder="Bok b">
        <br><button onclick="trapezoidPerimeter()">Oblicz</button>
        <div class="result" id="2trapResult" style="color:White"></div>
        </fieldset>
    </div>
    </td>
    </tr>
    </table>
</div>

</body>
</html>