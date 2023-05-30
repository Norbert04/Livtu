function buttonfindclick() {
    document.querySelectorAll(".findContent").forEach(function(button){button.classList.toggle("open");});
    document.querySelectorAll(".teachContent.open").forEach(function(button){button.classList.remove("open");});
    document.querySelectorAll("#menu.open").forEach(function(button){button.classList.remove("open");});
    updatemenubar();
}

function buttonteachclick() {
    document.querySelectorAll(".teachContent").forEach(function(button){button.classList.toggle("open");});
    document.querySelectorAll(".findContent.open").forEach(function(button){button.classList.remove("open");});
    document.querySelectorAll("#menu.open").forEach(function(button){button.classList.remove("open");});
    updatemenubar();
}

function menuclick() {
    document.querySelectorAll("#menu").forEach(function(button){button.classList.toggle("open");});
    document.querySelectorAll(".findContent.open").forEach(function(button){button.classList.remove("open");});
    document.querySelectorAll(".teachContent.open").forEach(function(button){button.classList.remove("open");});
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