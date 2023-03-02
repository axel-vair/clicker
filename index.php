<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="assets/style.css" rel="stylesheet" type="text/css">
    <script src="app/app_connect.js" defer></script>
    <title>CLICKER</title>
</head>
<body>
<?php
require_once "includes/header.php";
session_start();
$utilisateur = new User();
if($utilisateur->isConnected()){
    header('Location: clicker.php');
}
?>
<div id="container-logo">

</div>

<div id="title-div">
    <h1>CLICKER</h1>
</div>
<div id="presentation">
    <p></p>
</div>

<div>
    <div class="div-form">
        <!-- Div qui vont accueillir les formulaires d'inscription et de connexion -->
        <div id="forms"></div>
        <!-- Span qui accueille les messages d'échecs et de réussites JS -->
        <span id="registerSuccess"></span>
    </div>
</div>

<footer class="foot">
    <p>Fait avec <span id="coeur">❤</span></p>
    <p>© 2023 - <a href="https://github.com/axel-vair" target="_blank" class="links">Axel Vair</a></p>
</footer>
</body>
</html>