/* Pointe les différents éléments du DOM */
const btnRegister = document.getElementById('btn-register')
const btnConnection = document.getElementById('btn-connection')
const spanMessage = document.getElementById('registerSuccess')
const btnAdd = document.getElementById('submit')


/* Premier écouteur qui va permettre d'afficher le formulaire d'inscription sur l'index */
if(btnRegister != null){
    btnRegister.addEventListener('click', async () => {

        /* STYLE FORMS REGISTER & CONNECTION */
        const divForm = document.getElementById('forms');
        divForm.style.background = "linear-gradient(335deg, rgba(25,118,210,1) 5%, rgba(26,152,255,1) 81%)";
        divForm.style.padding = "20px";
        divForm.style.borderRadius = "7px";
        divForm.style.boxShadow = "1px 1px 5px 5px rgba(0,0,0,0.22)";


        await fetch('inscription.php')
            /* Promesse qui va retourner la page */
            .then((response) => {
                return response.text()
            })
            /* Promesse qui va afficher la page et la placer à l'aide du DOM dans la div forms */
            .then((content) => {
                const divRegister = document.getElementById('forms')
                divRegister.innerHTML = content;
            })

        /* Écoute du formulaire d'inscription */
        let form = document.querySelector('#form-register')
        form.addEventListener('submit', (e) => {
            e.preventDefault(); //Prévention du caractère par défaut du bouton. On écoute le bouton avec e
            const myRegisterForm = new FormData(form);
            myRegisterForm.append('id', 'form-register')// Nouvel objet FormData pour récupérer les valeurs du formulaire
            fetch('inscription.php', {
                method: "POST", // Envoie des valeurs
                body: myRegisterForm
            })
                /* Promesse visant à vérifier si la réponse est ok. Si elle l'est, alors on return la réponse au format json */
                .then((resp) =>{
                    if(resp.ok){
                        return resp.json();
                    }
                })
                /* Promesse visant à afficher un message de réussite ou d'échec de l'inscription */
                .then((contentResp) => {
                    if(contentResp['response'] === 'ok'){
                        document.getElementById('registerSuccess').innerHTML = contentResp['reussite'];
                        spanMessage.innerText = contentResp['reussite']
                        setInterval(() => {
                            spanMessage.innerText = "";
                        }, 2000);


                    }else{
                        document.getElementById('registerSuccess').innerHTML = contentResp['echoue']
                        spanMessage.innerText = contentResp['echoue'];
                        setInterval(() => {
                            spanMessage.innerText = "";
                        }, 2000);


                    }
                })

        })

    })
}

const displayNav = async () => {

    let response = await fetch('./includes/header.php?textOnly');
    let headerHTML = await response.text();
    const headerEl = document.querySelector('header');
    headerEl.innerHTML = headerHTML;
};

const removeBodyContent = () => {
    let bodyContent = document.querySelector('body > div');
    bodyContent.innerHTML = "";
};



if(btnConnection != null) {
    btnConnection.addEventListener('click', async () => {
        const divForm = document.getElementById('forms');
        divForm.style.background = "linear-gradient(335deg, rgba(25,118,210,1) 5%, rgba(26,152,255,1) 81%)";
        divForm.style.padding = "20px";
        divForm.style.borderRadius = "7px";
        divForm.style.boxShadow = "1px 1px 5px 5px rgba(0,0,0,0.22)";

        await fetch('connexion.php')
            .then((response) => {
                return response.text()
            })
            .then((content) => {
                const divConnection = document.getElementById('forms')
                divConnection.innerHTML = content;
                let formConnection = document.querySelector('#form-connection')
                formConnection.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const myConnectionForm = new FormData(formConnection);
                    fetch('connexion.php', {
                        method: "POST",
                        body: myConnectionForm
                    })
                        .then((response_connect) => {
                            if ((response_connect.ok)) {
                                return response_connect.json();
                            }
                        })
                        .then((contentResponse_connect) => {

                            if (contentResponse_connect['reponse'] === "ok") {
                                document.getElementById('registerSuccess').innerHTML = contentResponse_connect['reussite'];
                                spanMessage.innerText = contentResponse_connect['reussite'];
                                window.location.replace("clicker.php");
                                let headerEl = document.querySelector('header');
                                headerEl.setAttribute('connected', '');
                                displayNav();
                                removeBodyContent();

                            } else {
                                document.getElementById('registerSuccess').innerHTML = contentResponse_connect['echoue']
                                spanMessage.innerText = contentResponse_connect['echoue'];
                            }


                        })

                })


            })


    })
}
