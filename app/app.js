/* DÉCLARATIONS DOM */
const scoreDisplay = document.querySelector("#score");
const btnClicker = document.querySelector(".btnClicker");
const itemBonus = document.querySelector(".bonus");
const itemAuto = document.querySelector(".auto-buy");
const itemMultiply = document.querySelector('.multiple-buy');
const itemMultiplyDeux = document.querySelector('.multiple-deux-buy');
const btnLoad = document.querySelector(".load");
const btnSave = document.querySelector(".save");
const btnReset = document.querySelector(".reset");
const recap = document.querySelector("#clics-recap");


/* BTN CLICKER */

/* COMPTEURS */
let score = 0;
//variable de score
if(localStorage.getItem("score") == null){
    score = 0;
    scoreDisplay.innerHTML = score;
}else{
    score = localStorage.getItem("score");
    scoreDisplay.innerHTML = score;
}

//variables click item
let clickCost = 15;
let click = 1;

//variable auto item
let autoCost = 100;
let autoClick = 0;

//variable multiply item
let multiplyCost = 200;
let multiplyClick = 0;

//variable multiplayDeux item
let multiplyDeuxCost = 400;
let multiplyDeuxClick = 0;

/* FUNCTIONS */

/* Un fonction qui permet d'ajouter au score un autre montant de clics
   Ainsi, le paramètre amount contiendra l'addition des différents bonus achetés
   Cela permet d'incrémenter notre score avec les bonus actifs
*/
function addToScore(amount){
    score = score + amount;
    scoreDisplay.innerHTML = score;

}

/* La fonction recapBonus est appelée à chaque fois qu'un achat est fait
   Cela permet d'incrémenter le bonus à chaque achat.
 */
let recapClicBonus;
function recapBonus(){
    let recapClicBonus = click + autoClick + multiplyClick + multiplyDeuxClick;
    recap.innerHTML = recapClicBonus;
}

function save(){
    let gameSave = {
        score: score,
        click: click,
        clickCost: clickCost,
        autoCost: autoCost,
        autoClick: autoClick,
        multiplyClick: multiplyClick,
        multiplyCost: multiplyCost,
        multiplyDeuxClick: multiplyDeuxClick,
        multiplyDeuxCost: multiplyDeuxCost,
        recapClicBonus: recapClicBonus,
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
/* Toutes les 5 secondes le jeu se sauvegarde automatiquement en lançant la fonction save*/
setInterval(function(){
    save();
   scoreDisplay.innerHTML = score;
}, 1000);


/* Fonction qui va permettre de sauvegarder la partie
   Stockage dans la variable saveGame le getItem "gameSave"
   Si la valeur de saveGame.score est différent de undefined alors le score est
   égale à saveGame.score etc
*/
function load(){
    let saveGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof saveGame.score !== "undefined") score = saveGame.score;
    if (typeof saveGame.click !== "undefined") click = saveGame.click;
    if (typeof saveGame.clickCost !== "undefined") clickCost = saveGame.clickCost;
    if (typeof saveGame.autoCost !== "undefined") autoCost = saveGame.autoCost;
    if (typeof saveGame.autoClick !== "undefined") autoClick = saveGame.autoClick;
    if (typeof saveGame.multiplyClick !== "undefined") multiplyClick = saveGame.multiplyClick;
    if (typeof saveGame.multiplyCost !== "undefined") multiplyCost = saveGame.multiplyCost;
    if (typeof saveGame.multiplyDeuxClick !== "undefined") multiplyDeuxClick = saveGame.multiplyDeuxClick;
    if (typeof saveGame.multiplyDeuxCost !== "undefined") multiplyDeuxCost = saveGame.multiplyDeuxCost;
    if (typeof saveGame.recapClicBonus !== "undefined") recapClicBonus = saveGame.recapClicBonus;
    scoreDisplay.innerHTML = score
    recap.innerHTML = saveGame.recapClicBonus;
}
window.onload = function(){
    load();
    recapBonus()
    document.getElementById('click').innerHTML = click;
    document.getElementById('clickCost').innerHTML = clickCost;
    document.getElementById('autoCost').innerHTML = autoCost;
    document.getElementById('autoClick').innerHTML = autoClick + 1;
    document.getElementById('multiplyClick').innerHTML = multiplyClick + 2;
    document.getElementById('multiplyCost').innerHTML = multiplyCost
    document.getElementById('multiplyDeuxClick').innerHTML = multiplyDeuxClick + 4;
    document.getElementById('multiplyDeuxCost').innerHTML = multiplyDeuxCost
}

function reset(){
    if(confirm('Etes-vous certain de vouloir reset le jeu ?'))
    localStorage.clear();
    window.location = 'http://localhost:8888/clicker-game/clicker.php';

}

/* A l'appelle de ma fonction on vérifie si le score est supérieur ou égal à clickCost
   Si cela est vrai, alors le score est égal au score - clickCost
   La variable click vient s'incrémenter, click = click +1
   clickCost est égal à clickCost * 1.15 pour augmenter le prix à chaque achat
   On remplace le score par le nouveau montant
   On remplace click par le nouveau montant de click
   On remplace clickCost par le nouveau montant de clickCost
   Sinon, on affiche une alerte "vous n'avez pas assez de clics"
 */
function buyClick(){
    if(score >= clickCost){
        score = score - clickCost;
        click = click + 1;
        clickCost = Math.round(clickCost * 1.15);
        scoreDisplay.innerHTML = score;
        document.getElementById('click').innerHTML = click;
        document.getElementById('clickCost').innerHTML = clickCost;
        recapBonus();
    }else{
        alert("Vous n'avez pas assez de clics");
    }
}
function buyAutoClick(){
    if(score >= autoCost ){
        score = score - autoCost;
        autoClick = autoClick + 1
        autoCost = Math.round(autoCost * 1.4);
        document.getElementById('autoCost').innerHTML = autoCost;
        document.getElementById('autoClick').innerHTML = autoClick + 1;
        recapBonus();
        setInterval(() => {
            score = score + 1;
            document.querySelector('#score').innerHTML = score;
        }, 1000)
    }else{
        alert("Vous n'avez pas assez de smiles pour faire cet achat !");
    }
}

function buyMultiply(){
    if(score >= multiplyCost){
        score = score - multiplyCost;
        multiplyClick = multiplyClick + 2;
        multiplyCost = Math.round(multiplyCost * 1.4);
        scoreDisplay.innerHTML = score;
        document.getElementById('multiplyClick').innerHTML = multiplyClick + 2;
        console.log(document.getElementById('multiplyClick'))
        document.getElementById('multiplyCost').innerHTML = multiplyCost
        recapBonus();
    }else{
        alert("Vous n'avez pas assez de smiles pour faire cet achat !")
    }
}

function buyMultiplyDeux(){
    if(score >= multiplyDeuxCost){
        score = score - multiplyDeuxCost;
        multiplyDeuxClick = multiplyDeuxClick + 4;
        multiplyDeuxCost = Math.round(multiplyDeuxCost * 1.7);
        scoreDisplay.innerHTML = score;
        document.getElementById('multiplyDeuxClick').innerHTML = multiplyDeuxClick + 4;
        console.log(document.getElementById('multiplyDeuxClick'))
        document.getElementById('multiplyDeuxCost').innerHTML = multiplyDeuxCost
        recapBonus();
    }else{
        alert("Vous n'avez pas assez de smiles pour faire cet achat !")
    }
}

/* ECOUTEURS DE BOUTONS SHOP & COMMANDES */

/* L'écouteur btnClicker permet d'appeler la fonction addScore
   On ajoute aux paramètres de cette fonctions les différents
   montants à rajouter au score
 */
btnClicker.addEventListener('click', () => {
    addToScore(click + multiplyClick + multiplyDeuxClick + autoClick);
})

itemBonus.addEventListener('click', () => {
    buyClick();
})

itemAuto.addEventListener('click', () => {
    buyAutoClick();
})

itemMultiply.addEventListener('click', () => {
    buyMultiply();
})

itemMultiplyDeux.addEventListener('click', () => {
    buyMultiplyDeux();
})

btnReset.addEventListener('click', () => {
    reset();
})