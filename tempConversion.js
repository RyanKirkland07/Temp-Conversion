const C_TO_F_CONVERT = document.querySelector("#convert-C-to-F");
const F_TO_C_CONVERT = document.querySelector("#convert-F-to-C");

C_TO_F_CONVERT.addEventListener('click', convertToF);
F_TO_C_CONVERT.addEventListener('click', convertToC);

function convertToF(){
    let celsius = document.querySelector("#C-to-F").value;

    let display = document.querySelector("#C-to-F-display");

    let out = (celsius * (9/5)) + 32
    
    if(out >= 86){
        display.style.color = "red";
    }
    else{
        display.style.color = "blue";
    }

    out = out.toFixed(1);
    display.textContent = `${out} F\u00B0`;
}

function convertToC(){
    let fahrenheit = document.querySelector("#F-to-C").value;

    let display = document.querySelector("#F-to-C-display");

    let out = (fahrenheit - 32) * 5/9;
    

    
    if(out >= 30){
        display.style.color = "red";
    }
    else{
        display.style.color = "blue";
    }
    
    out = out.toFixed(1);
    display.textContent = `${out} C\u00B0`;
}