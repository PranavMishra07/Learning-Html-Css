
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let input = document.querySelector('#input')
console.log(plus, minus, input)

plus.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
});
minus.addEventListener('click', () => {
    if (input.value <= 0) {
        input.value = 0;
    }
    else {
        input.value = parseInt(input.value) - 1;
    }

});
