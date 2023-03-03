<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="assets/style.css" rel="stylesheet" type="text/css">
    <script src="app/app_connect.js" defer></script>
    <title>SMILE CLICKER</title>
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
    <h1>SMILE CLICKER</h1>
</div>
<div id="presentation">
    <p></p>
</div>

<div class="connect">
    <p>Inscrivez-vous et/ou connectez vous pour jouer.</p>
</div>
<section>
    <div class="div-form">
        <!-- Div qui vont accueillir les formulaires d'inscription et de connexion -->
        <div id="forms"></div>
        <!-- Span qui accueille les messages d'échecs et de réussites JS -->

    </div>
</section>
<span id="registerSuccess"></span>
<section class="container-regles">

    <div class="regles">
        <h3>Règles du jeu :</h3>
        <p>Le joueur doit accumuler le plus de smiles possible. Un smile équivaut à 1 clique en début de partie.</p>
        <p>Les smiles peuvent être utilisés dans le shop pour obtenir des bonus. En achetant des bonus, vous obtenez ainsi un nombre de smiles par clique plus conséquent.</p>
    </div>
</section>
</body>
</html>