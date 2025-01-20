<?php
// Conexión a la base de datos
$conn = new mysqli('localhost', 'root', '', 'usuarios_db');

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Capturar los datos del formulario
$nombre_usuario = $_POST['nombre_usuario'];
$email = $_POST['email'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

// Insertar datos en la tabla
$sql = "INSERT INTO usuarios (nombre_usuario, email, contrasena) VALUES ('$nombre_usuario', '$email', '$contrasena')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso. <a href='index.html'>Volver</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
