function buttonfindclick() {
    document.querySelectorAll("#findbutton").forEach(function(button){button.classList.toggle("open");});
    document.querySelectorAll("#teachbutton.open").forEach(function(button){button.classList.remove("open");});
    document.querySelectorAll("#menu.open").forEach(function(button){button.classList.remove("open");});
    updatemenubar();
}

function buttonteachclick() {
    document.querySelectorAll("#teachbutton").forEach(function(button){button.classList.toggle("open");});
    document.querySelectorAll("#findbutton.open").forEach(function(button){button.classList.remove("open");});
    document.querySelectorAll("#menu.open").forEach(function(button){button.classList.remove("open");});
    updatemenubar();
}

function menuclick() {
    document.querySelectorAll("#menu").forEach(function(button){button.classList.toggle("open");});
    document.querySelectorAll("#findbutton.open").forEach(function(button){button.classList.remove("open");});
    document.querySelectorAll("#teachbutton.open").forEach(function(button){button.classList.remove("open");});
    updatemenubar();
}

function updatemenubar(){
    if(document.getElementById("teachbutton").classList.contains("open")){
        var bar = document.querySelectorAll(".arrow1");
        bar.forEach(function(arrow){
            arrow.classList.add("open");
        });
    }
    else{
        var bar = document.querySelectorAll(".arrow1");
        bar.forEach(function(arrow){
            arrow.classList.remove("open");
        });
    }
    if(document.getElementById("findbutton").classList.contains("open")){
        var bar = document.querySelectorAll(".arrow0");
        bar.forEach(function(arrow){
            arrow.classList.add("open");
        });
    }
    else{
        var bar = document.querySelectorAll(".arrow0");
        bar.forEach(function(arrow){
            arrow.classList.remove("open");
        });
    }
    if(document.getElementById("menu").classList.contains("open")){
        var bar = document.querySelectorAll(".point");
        bar.forEach(function(arrow){
            arrow.classList.add("open");
        });
    }
    else{
        var bar = document.querySelectorAll(".point");
        bar.forEach(function(arrow){
            arrow.classList.remove("open");
        });
    }
}