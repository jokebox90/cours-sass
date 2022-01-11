let listH1 = document.querySelectorAll("h2");
let h1 = listH1[0];
// h1.outerHTML="<h2>1- Revision HTML, CSS et Javascript:</h2>";

// Modifier l'element
h1.innerText = "1- Revision HTML, CSS et Javascript:";
h1.style.color = "red";
h1.style.borderBottom = "1px solid red"

//Selectionner tous les h2.
//Changer leurs couleurs. Ajouter une borderBottom. margin.

// for(let i = 0; i< listH2.length; i++){
//     listH2[i].style.color="blue";
//     listH2[i].style.borderBottom="1px solid green"
//     listH2[i].style.margin = "10px 0 20px 0"
// }

function createSection(title, listeTexts){
    //Selectionner la balise main
    let main = document.querySelectorAll('main')[0];

    //Créer un element section:
    let newSection = document.createElement("section")

    //Créer un element h2
    let newH2 = document.createElement('h2')
    //Modifier ajoute le texte de h2
    newH2.innerText = title
    newSection.append(newH2);

    listeTexts.forEach( (element)=>{
    //Créer deux element p et modification de texte
    let newP = document.createElement("p")
    newP.innerHTML = element;
    newSection.append(newP)
    })
    main.append(newSection)
}

// createSection("1.5/ Javascript", [
//     "Pour selectionner un élément en Javascript on utilise principalement le fonction <strong>document.querySelectorAll()</strong>.",
//     "Pour créer un élément en Javascript on utilise la fonction <strong>document.createElement()</strong> ."])
// createSection("1.6/ Test", ['exemple', "test", "ttttt"])

function getAllH1() {
    return document.querySelectorAll('h1');
}

function getAllH2() {
    return document.querySelectorAll('h2');
}

function getAllP() {
    return document.querySelectorAll('p');
}

function setGreen(el) {
    el.style.color="green";
    el.style.borderBottom="1px solid green"
    el.style.margin = "10px 0 20px 0"
}

function setRed(el) {
    el.style.color="red";
    el.style.borderBottom="1px solid red"
    el.style.margin = "10px 0 20px 0"
}

getAllH2().forEach( setGreen );
getAllP().forEach( setRed );
