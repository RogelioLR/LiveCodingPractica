// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

const lista = document.getElementById("lista");
const btn = document.getElementById("button");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
    const inputValue = input.value;
    bigWords(inputValue, myArray);
})

const bigWords = (word, wordArr) => {

    const n = word.length;
    const m = wordArr.length;

    let res = "";

    for(let i=0; i<m; i++) {
        if(wordArr[i].length > n) {
            res += "<li> " + wordArr[i] + "</li>";
        }
    }

    lista.innerHTML = res;

}


// const word = 'bocina';
// bigWords(word, myArray);