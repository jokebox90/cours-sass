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

let form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault();

    let usernameInput = document.querySelector("#username");
    console.log(usernameInput.value);

    let selectFruits = document.querySelector('#fruits')
    console.log(selectFruits.value)

    let checkHtml = document.querySelectorAll('#checkHtml')
    console.log(checkHtml)

    let checkCss = document.querySelectorAll('#checkCss')
    console.log(checkCss)

    let date = document.querySelector("#date")
    console.log(date.value)
    
})
