function sayHello(){
    alert("Hello")
}

let orangeButton = document.querySelector("#orange");
orangeButton.addEventListener("click", function(){
    alert('Orange')
})

let vertButton = document.querySelector("#vert")
vertButton.addEventListener("click", function(){
    console.log('vert')
})

function createUserMessage(champs, titre) {
    let p = document.createElement('p');
    let valeur = document.getElementById(champs).value;
    p.setAttribute('id', `${champs}Message`)
    p.innerText = titre;
    p.innerText += ': ';
    p.innerText += valeur;
    return p
}

function userFormSubmitted(ev) {
    ev.preventDefault();

    let userForm = ev.target;

    if (document.getElementById('userFormMessages')) {
        document.getElementById('userFormMessages').remove();
    }

    let userFormMessages = document.createElement('div');
    userFormMessages.setAttribute('id', 'userFormMessages');

    userFormMessages.append(createUserMessage('username', 'Votre nom d\'utilisateur'));
    userFormMessages.append(createUserMessage('email', 'Votre adresse e-mail'));

    userForm.append(userFormMessages);
}

let userForm = document.getElementById('userForm');
userForm.addEventListener('submit', userFormSubmitted);