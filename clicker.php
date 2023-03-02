<?php
session_start();
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="app/app.js" defer></script>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/style.css">
    <script src="/app/app_connect.js" defer></script>
    <script src="app/app.js" defer></script>

    <title>Clicker Game</title>
</head>
<body>
<?php require_once "includes/header.php"; ?>

<h1>Clicker Game</h1>
<div class="container-score">
    <div><p id="score"></p></div>
</div>
<section class="clicker-section">
    <div class="clicker-container">
        <button class="btnClicker">Smiles</button>
    </div>
</section>
<section class="shop-section">
    <div class="auto shop-item">
        <h2>Smiles</h2>
        <p class="description-shop">Vous pouvez augmenter le nombre de smiles par clics en achetant ce bonus. Le nombre
            de smile de base et de 1.</p>
        <div class="btn-shop-item">
            <button class="bonus button-shop">Coût : <span id="clickCost">15</span> smiles - <span id="click">1</span> smiles/click
            </button>
        </div>
    </div>

    <div class="auto shop-item">
        <h2>Auto</h2>
        <p class="description-shop">En achetant ce bonus, vos smiles s'ajouteront de manière automatique chaque seconde. </p>
        <div class="btn-shop-item">
            <button class="auto-buy button-shop">Coût : <span id="autoCost">100</span> smiles - <span id="autoClick">1</span> smile/sec</button>
        </div>

    </div>
    <div class="multiple shop-item">
        <h2>Multiple x1.2</h2>
        <p class="description-shop">En achetant ce bonus, à chaque fois que vous cliquez vous augmenterez vos smiles
            de 1.2.</p>
        <div class="btn-shop-item">
            <button class="multiple-buy button-shop">Coût :<span id="multiplyCost"> 200</span> smiles - <span id="multiplyClick">2</span> smiles/click</button>
        </div>
    </div>
    <div class="multiple-deux shop-item">
        <h2>Multiple x2</h2>
        <p class="description-shop">En achetant ce bonus, à chaque fois que vous cliquez vous augmenterez vos smiles
            de 2.</p>
        <div class="btn-shop-item">
            <button class="multiple-deux-buy button-shop">Coût : <span id="multiplyDeuxCost">400</span>smiles - <span id="multiplyDeuxClick">4</span> smiles/click</button>
        </div>
    </div>
</section>
<section class="game-commands">
    <div>
        <button class="btnCommands load">Load</button>
        <button class="btnCommands save">Save</button>
        <button class="btnCommands reset">Reset</button>
    </div>
</section>

</body>
</html>
