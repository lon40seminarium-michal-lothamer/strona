<?php
var_dump(%_POST['order']);
var_dump(%_POST['dodatek']);
var_dump(%_POST['nazwa_dodatku']);
var_dump(%_POST['ulica']);
var_dump(%_POST['nr']);
var_dump(%_POST['telefon']);
var_dump(%_POST['waga']);

@order = $_POST['order'];
@dodatek = $_POST['dodatek'];
@nazwa_dodatku = $_POST['nazwa_dodatku'];
@ulica = $_POST['ulica'];
@nr = $_POST['nr'];
@telefon = $_POST['telefon'];
@waga = $_POST['waga'];

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'catering';

$conn = new mysqli($host, $user, $password, $database);
if($conn->connect_error){
    echo "Brak połączenia z bazą danych";
}else{
    echo "Połączono z bazą danych";
    $sql = "insert into zamowienia(nazwa,dodatki,ulica,nr,telefon,waga) values('$order','$nazwa_dodatku','$ulica','$nr','$telefon','$waga'")
}
?>