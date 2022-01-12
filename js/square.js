let playground = document.querySelector('body');

playground.addEventListener('keydown', function(ev){
    let square = document.getElementById('square');
    if (ev.key == "ArrowDown") {
        square.parentElement.style.alignItems = 'flex-end';
    }
});

playground.addEventListener('keyup', function(ev){
    let square = document.getElementById('square');
    if (ev.key == "ArrowDown") {
        square.parentElement.style.alignItems = 'center';
    }
});