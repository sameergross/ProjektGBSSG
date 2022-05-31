n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;


function handleclose() {
    var x = document.getElementById("activemenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function switchaufgabenext_organisation() {
    let a1 = document.getElementById("aufgabe1")
    let a2 = document.getElementById("aufgabe2")
    let a3 = document.getElementById("aufgabe3")
    if (a1.style.display == "block") {
        a1.style.display = "none"
        a2.style.display = "block"
        
    }
    else if (a2.style.display == "block") {
        a3.style.display = "block"
        a2.style.display = "none"
        
    }
    else if (a3.style.display == "block") {
        a3.style.display = "none"
        a1.style.display = "block"
        
    }
    else {
        a1.style.display = "block";
    }
}

function swiththeme() {
    let theme1 = document.getElementById("organisation")
    let theme2 = document.getElementById("projekt")
    let theme3 = document.getElementById("iperka")
    let theme4 = document.getElementById("informationsbeschaffung")
    let theme5 = document.getElementById("planung")
    let theme6 = document.getElementById("vortrag")

    if (theme1.style.display == "block") {
        theme1.style.display = "none"
        theme2.style.display = "block"
    }
    else if (theme2.style.display == "block") {
        theme2.style.display = "none"
        theme3.style.display = "block"
    }
    else if (theme3.style.display == "block") {
        theme3.style.display = "none"
        theme4.style.display = "block"
    }
    else if (theme4.style.display == "block"){
        theme4.style.display = "none"
        theme5.style.display = "block"

    }
    else if (theme5.style.display == "block"){
        theme5.style.display = "none"
        theme6.style.display = "block"

    }
    else if (theme6.style.display == "block"){
        theme6.style.display = "none"
        theme1.style.display = "block"

    }
    else {
        theme1.style.display = "block"
    }
}