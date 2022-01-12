let playground = document.querySelector('body');

playground.addEventListener('keydown', function(ev){
    let square = document.getElementById('square');
    switch (ev.key) {
        case "ArrowDown":
            square.parentElement.style.alignItems = 'flex-end';

            break;

        case "ArrowUp":
            square.parentElement.style.alignItems = 'flex-start';

            break;

        case "ArrowLeft":
            square.parentElement.style.justifyContent = 'flex-start';

            break;

        case "ArrowRight":
            square.parentElement.style.justifyContent = 'flex-end';

            break;

        default:
            break;
    }
});

playground.addEventListener('keyup', function(ev){
    let square = document.getElementById('square');

    square.parentElement.style.alignItems = 'center';
    square.parentElement.style.justifyContent = 'center';
});