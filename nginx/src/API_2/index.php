<?php

include './views/home.html';

// Declaramos las variables
$nombre = 'Monitores';
$id = 1;
$valor = 100.25;

echo "<h1>".$nombre."</h1>";
echo "<br />";
echo $id;
echo "<br />";
echo $valor;
echo "<br />";

// Cerramos la conexion
die();

?>