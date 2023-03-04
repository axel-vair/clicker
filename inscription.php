<?php
require_once 'src/User.php';
if(isset($_POST) && !empty($_POST['login']) && !empty($_POST['password'])) {
    $new_user = new User();
    $new_user->register($_POST['login'], $_POST['password']);
    die(); // permet que le code s'arrête avant d'afficher le formulaire pour éviter de poser problème avec le json
}

?>

<h2 class="title-form">Inscription</h2>
<form id="form-register" method="post">
    <label for="login"></label>
    <input id="login" name="login" type="text" placeholder="login" required>
    <label for="password"></label>
    <input id="password" name="password" type="password" placeholder="mot de passe" required>
    <button type="submit" class="register_form_button" id="envoie" name="envoie">S'inscrire</button>
</form>



