const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const titles = document.querySelector('#title')

var dollar = 10700;
var rubl = 138
var euro = 12800

btn.addEventListener("click", () =>{
    const select = document.querySelector("#select");
    const selectValue = select.value
    if(selectValue == 'dollar'){
       var results =  result.value * dollar
       titles.textContent = results
    } 
    else if(selectValue == 'rubl'){
        var results = result.value * rubl
        titles.textContent = results
    }
    else if(selectValue == 'euro'){
        var results = result.value * euro
        titles.textContent = results
    }
})