<?php
session_start();

// Conexión a la base de datos
$conn = new mysqli('localhost', 'root', '', 'usuarios_db');

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Capturar los datos del formulario
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];

// Buscar al usuario en la base de datos
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();

    // Verificar la contraseña
    if (password_verify($contrasena, $usuario['contrasena'])) {
        $_SESSION['nombre_usuario'] = $usuario['nombre_usuario'];
        $_SESSION['email'] = $usuario['email'];
        header("Location: perfil.php");
    } else {
        echo "Contraseña incorrecta. <a href='index.html'>Volver</a>";
    }
} else {
    echo "Usuario no encontrado. <a href='index.html'>Volver</a>";
}

$conn->close();
?>
