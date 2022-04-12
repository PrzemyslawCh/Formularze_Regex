//Text
const imie = document.getElementById('imie');
const nazwisko = document.getElementById('nazwisko');
const miasto = document.getElementById('miasto');
const ulica = document.getElementById('ulica');
//Text

//Number
const nrdomu = document.getElementById('nrdomu');
const mieszkanie = document.getElementById('mieszkanie');
//Number

//data
const data = document.getElementById('data');
//tel
const telefon = document.getElementById('telefon');

const ulReg = new RegExp(/^(ul.[A-ZŚŁŻŹĆŃ][a-zęóąśłżźćń]{1,25})|([A-ZŚŁŻŹĆŃ][a-zęóąśłżźćń]{1,25})|([a-zęóąśłżźćń]{1,25})$/);
const TextReg = new RegExp(/^[A-ZŚŁŻŹĆŃ][a-zęóąśłżźćń]{1,30}$/);
const liczbaReg = new RegExp(/^[1-9][0-9]{0,5}$/);
const dataReg = new RegExp(/^^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/);
const numerReg = new RegExp(/^[0-9]{9}$/);

imie.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = TextReg.test(curruntValue);

    if(valid){
        imie.style.border = "3px solid greenyellow"
    }
    else{
        imie.style.border = "3px solid red"
    }

})
nazwisko.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = TextReg.test(curruntValue);

    if(valid){
        nazwisko.style.border = "3px solid greenyellow"
    }
    else{
        nazwisko.style.border = "3px solid red"
    }

})
miasto.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = TextReg.test(curruntValue);

    if(valid){
        miasto.style.border = "3px solid greenyellow"
    }
    else{
        miasto.style.border = "3px solid red"
    }

})
ulica.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = ulReg.test(curruntValue);

    if(valid){
        ulica.style.border = "3px solid greenyellow"
    }
    else{
        ulica.style.border = "3px solid red"
    }

})
nrdomu.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = liczbaReg.test(curruntValue);

    if(valid){
        nrdomu.style.border = "3px solid greenyellow"
    }
    else{
        nrdomu.style.border = "3px solid red"
    }

})
mieszkanie.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = liczbaReg.test(curruntValue);

    if(valid){
        mieszkanie.style.border = "3px solid greenyellow"
    }
    else{
        mieszkanie.style.border = "3px solid red"
    }

})
data.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = dataReg.test(curruntValue);

    if(valid){
        data.style.border = "3px solid greenyellow"
    }
    else{
        data.style.border = "3px solid red"
    }

})
telefon.addEventListener('input', function(e) {
    const curruntValue = e.target.value;
    const valid = numerReg.test(curruntValue);

    if(valid){
        telefon.style.border = "3px solid greenyellow"
    }
    else{
        telefon.style.border = "3px solid red"
    }

})

