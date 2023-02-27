<?php
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="app/app.js" defer></script>
    <link rel="stylesheet" href="assets/style.css">
    <title>Clicker Game</title>
</head>
<body>
<h1>Clicker Game</h1>
<section class="clicker-section">
    <div><p id="score"></p> </div>
    <div class="clicker-container"></div>
</section>
<section class="shop-section">
    <div class="semi-auto shop">
        <h2>Semi-auto</h2>
        <p class="description-shop">La description de mon bonus sera ici</p>
        <button id="semi-auto-buy">Acheter</button>
    </div>
    <div class="auto shop">
        <h2>Auto</h2>
        <p class="description-shop">La description de mon bonus sera ici</p>
        <button id="auto-buy">Acheter 100 bites</button>

    </div>
    <div class="multiple shop">
        <h2>Multiple x1.2</h2>
        <p class="description-shop">La description de mon bonus sera ici</p>
        <button id="multiple-buy">Acheter</button>

    </div>
    <div class="multiple-deux shop">
        <h2>Multiple x2</h2>
        <p class="description-shop">La description de mon bonus sera ici</p>
        <button id="multiple-deux-buy">Acheter</button>

    </div>
</section>

</body>
</html>
