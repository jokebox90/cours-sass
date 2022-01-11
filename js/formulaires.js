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

function userFormSubmitted(ev) {
    ev.preventDefault();

    let usernameInput = document.getElementById('username');


    let userForm = ev.target;

    let userFormMessages = document.createElement('div');
    userFormMessages.setAttribute('id', 'userFormMessages');

    if (document.getElementById('userFormMessages')) {
        document.getElementById('userFormMessages').remove();
    }

    let usernameOutput = document.createElement('p');
    usernameOutput.innerText = 'Votre nom d\'utilisateur: ';
    usernameOutput.innerText += usernameInput.value;

    userFormMessages.prepend(usernameOutput);
    userForm.append(userFormMessages);

    // usernameOutput.innerText = usernameInput.value;

}

let userForm = document.getElementById('userForm');
userForm.addEventListener('submit', userFormSubmitted);