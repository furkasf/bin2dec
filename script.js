const input = document.getElementById('bin');
const output = document.getElementById('dec');
const button = document.getElementById('btn');
const clear = document.getElementById('clear');

button.addEventListener('click',convert);
clear.addEventListener('click',clears)

function convert(){
    output.value = parseInt(input.value, 2);//it work hahahahaha
    if(isNaN(output.value)){
        alert('enter binary num')
    }
}

function clears(){
    input.value = '';
    output.value = '';
}