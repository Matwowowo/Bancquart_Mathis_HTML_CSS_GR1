let form = document.querySelector("form");

let errContainer = document.querySelector(".message-error");
let errList = document.querySelector(".message-error ul");
let successContainer = document.querySelector(".message-success");

errList.innerHTML = "";
errContainer.classList.remove("visible");
successContainer.classList.remove("visible");

let email = document.querySelector("#email");
let fName = document.querySelector("#fName");
let lName = document.querySelector("#lName");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#password2");

let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])"
);

form.addEventListener("submit", (event) => 
{   
    event.preventDefault();

    if(email.value == "")
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le champ email ne peut pas être vide";
    
        errList.appendChild(err);
    }
    else 
    {
        email.classList.add("success");
    }

    if(fName.value == "")
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le champ Prénom ne peut pas être vide";
    
        errList.appendChild(err);
    }
    else 
    {
        fName.classList.add("success");
    }

    if(lName.value == "")
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le champ Nom ne peut pas être vide";
    
        errList.appendChild(err);
    }
    else 
    {
        lName.classList.add("success");
    }

    if(password.value.length < 10 || passCheck.test(password.value) == false)
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Le mot de passe doit contenir au minimum 10 caractères avec un minuscule, un majuscule, un chiffre, un caractère spécial";
    
        errList.appendChild(err);
    }
    else 
    {
        password.classList.add("success");
    }

    if(password.value != verifPassword.value)
    {
        errContainer.classList.add("visible");

        let err = document.createElement("li");
        err.innerText = "Les deux mots de passes sont différents";
    
        errList.appendChild(err);
    }
    else 
    {
        rePassword.classList.add("success");
    }

    if(
        pseudo.classList.contains("success") &&
        email.classList.contains("success") &&
        password.classList.contains("success") &&
        rePassword.classList.contains("success")
    ) {
        successContainer.classList.add("visible");
    }
})