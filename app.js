let i = 1; /* номер попытки*/

var randomNumber = random(1,15);

let but = document.querySelector('#but');

function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

let out = document.getElementById('#text')

function  f1() {

    let val = document.getElementById("input-id").value;

    if (i > 3) {
        $('#text').text('Обновите страницу, чтобы начать заного')
       return alert ('Попытки кончались, обновите страницу, чтобы начать заного')
       
    }
    else {
        if (val == randomNumber) {
            $('#text').text('Угадал')
        }
        else {
            if (val > randomNumber) {
                $('#text').text('Cлишком много')
                i++;
            }
            if (val < randomNumber) {
                $('#text').text('Cлишком мало')
                i++;
            }
        }   
    }
}

but.addEventListener('click', f1)
