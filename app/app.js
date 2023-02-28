/* DÉCLARATIONS DOM */
const body = document.querySelector("body");
const clickerSection = document.querySelector(".clicker-section");
const shopSection = document.querySelector(".shop-section");
const clickerContainer = document.querySelector(".clicker-container")
const btnSemiAutoBuy = document.querySelector("#semi-auto-buy");
const btnAutoBuy = document.querySelector("#auto-buy");
const btnMultipleBuy = document.querySelector("#multiple-buy");
const btnMultipleDeuxBuy = document.querySelector("#multiple-deux-buy");

/* BUTTON CLICKER */
const btnClicker = document.createElement("button");
btnClicker.classList.add("btnClicker");
clickerContainer.appendChild(btnClicker);

if(localStorage.getItem('countStock') == null){
    btnClicker.innerHTML = `Bitter ${localStorage.getItem('countStock', 0)}`;
}else{
    btnClicker.innerHTML = `Bitter ${localStorage.getItem('countStock')}`;
}

/* LISTENER CLICKER */
btnClicker.addEventListener("click", () => {
    countClick();
})

/* LISTENER SHOP */
    /* ~~ semi auto ~~ */
btnSemiAutoBuy.addEventListener("click", () => {
    console.log("btnSemiAuto")
})

    /* ~~ auto ~~ */

btnAutoBuy.addEventListener("click", () => {
    autoBuy();
})


    /* ~~ multiple  ~~ */
btnMultipleBuy.addEventListener("click", () => {
    console.log("multiple")
})

    /* ~~multiple 2 ~~ */
btnMultipleDeuxBuy.addEventListener("click", () => {
    multipleDeux();
})


function countClick() {
    // initialisation de count
    let count;
    // si localstorage == null
    if (localStorage.getItem('countStock') == null) {
        count = 0;

    // si countStock est différent de null alors on récupère la valeur
    } else {
        count = parseInt(localStorage.getItem('countStock'));
    }
    count++;
    localStorage.setItem('countStock', count.toString());
    btnClicker.innerHTML = `Bitter ${localStorage.getItem('countStock')}`;
}


/* FUNCTIONS SHOP */

    /* ~~ function semi auto ~~ */
function semiAutoBuy(){
}
    /* ~~ function auto ~~ */
function autoBuy(){
    // Si le countStock est inférieur à 100 alors on affiche une alerte
    if(localStorage.getItem('countStock') < 100){
        alert("Vous n'avez pas assez de bittes");
    }else{
        // sinon on enlève 100 au total (parseInt car ce sont des strings)
        let count = parseInt(localStorage.getItem('countStock'));
        count -= 100;
        localStorage.setItem('countStock', count.toString());

        let interval = setInterval(() => {
            count++
            localStorage.setItem("countStock", count++);
            btnClicker.innerHTML = `Bitter ${localStorage.getItem('countStock')}`;
        }, 1000);
    }
}
    /* ~~ function multiple ~~ */
function multipleBuy(){
    if(localStorage.getItem('countStock') < 200){
        alert("Vous n'avez pas assez de bittes");
    }else{
        let count = parseInt(localStorage.getItem('countStock'));
        count -= 200;
        localStorage.setItem('countStock', count.toString());
    }

}
    /* ~~ function multiple 2  ~~ */

function multipleDeux(){


}



