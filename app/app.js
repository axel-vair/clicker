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
btnClicker.innerHTML = `Clicker ${localStorage.getItem('countStock')}`;
clickerContainer.appendChild(btnClicker);


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


function countClick(){
    count++;
    localStorage.setItem('countStock', JSON.stringify(count));
    btnClicker.innerHTML = `Clicker ${localStorage.getItem('countStock')}`;
}

/* FUNCTIONS SHOP */

    /* ~~ function semi auto ~~ */
function semiAutoBuy(){
    count = count * 0.1;
}
    /* ~~ function auto ~~ */
function autoBuy(){
    if()
    let interval = setInterval(() => {
        localStorage.setItem("countStock",count++);
        btnClicker.innerHTML = `Clicker ${localStorage.getItem('countStock')}`;
    }, 1000);
}
    /* ~~ function multiple ~~ */
function multipleBuy(){

}
    /* ~~ function multiple 2  ~~ */

function multipleDeux(){
    localStorage.setItem('keyValue', JSON.stringify(count+2));

}



/* SCORE */
let count;
if(localStorage.getItem('countStock') != null){
    count = localStorage.getItem('countStock');
}else{
    count = 0;
}