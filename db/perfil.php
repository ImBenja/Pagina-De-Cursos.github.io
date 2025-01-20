<?php
session_start();

if (!isset($_SESSION['nombre_usuario'])) {
    header("Location: index.html");
    exit();
}

echo "<h1>Bienvenido, " . $_SESSION['nombre_usuario'] . "!</h1>";
echo "<p>Correo: " . $_SESSION['email'] . "</p>";
echo "<a href='cerrar_sesion.php'>Cerrar Sesión</a>";
?>
