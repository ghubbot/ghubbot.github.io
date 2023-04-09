var screen = document.getElementById("screen");

function btnclick(char){
    screen.value+=char;
}

function clearscreen(){
    screen.value = "";
}

function getresult(){
    var result = eval(screen.value);
    screen.value = result;
}