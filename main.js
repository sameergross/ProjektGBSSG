n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

//menumobile
function handleclose() {
    var x = document.getElementById("activemenu");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//themawechsel
function swiththemenext() {
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

function swiththemeback() {
    let theme1 = document.getElementById("organisation")
    let theme2 = document.getElementById("projekt")
    let theme3 = document.getElementById("iperka")
    let theme4 = document.getElementById("informationsbeschaffung")
    let theme5 = document.getElementById("planung")
    let theme6 = document.getElementById("vortrag")

    if (theme1.style.display == "block") {
        theme1.style.display = "none"
        theme6.style.display = "block"
    }
    else if (theme6.style.display == "block") {
        theme6.style.display = "none"
        theme5.style.display = "block"
    }
    else if (theme5.style.display == "block") {
        theme5.style.display = "none"
        theme4.style.display = "block"
    }
    else if (theme4.style.display == "block"){
        theme4.style.display = "none"
        theme3.style.display = "block"

    }
    else if (theme3.style.display == "block"){
        theme3.style.display = "none"
        theme2.style.display = "block"

    }
    else if (theme2.style.display == "block"){
        theme2.style.display = "none"
        theme1.style.display = "block"

    }
    else {
        theme1.style.display = "block"
    }
}

//aufgabewechselnorganisation

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

function switchaufgabeback_organisation() {
    let a1 = document.getElementById("aufgabe1")
    let a2 = document.getElementById("aufgabe2")
    let a3 = document.getElementById("aufgabe3")
    if (a1.style.display == "block") {
        a1.style.display = "none"
        a3.style.display = "block"
        
    }
    else if (a3.style.display == "block") {
        a2.style.display = "block"
        a3.style.display = "none"
        
    }
    else if (a2.style.display == "block") {
        a2.style.display = "none"
        a1.style.display = "block"
        
    }
    else {
        a1.style.display = "block";
    }
}

function switchaufgabenext_projekt() {
    let a4 = document.getElementById("aufgabe4")
    let a5 = document.getElementById("aufgabe5")
    let a6 = document.getElementById("aufgabe6")
    if (a4.style.display == "block") {
        a4.style.display = "none"
        a5.style.display = "block"
    }
    else if (a5.style.display == "block") {
        a5.style.display = "none"
        a6.style.display = "block"
    }
    else if (a6.style.display == "block") {
        a6.style.display = "none"
        a4.style.display = "block"
    }
    else {
        a4.style.display = "block"
    }

}

function switchaufgabeback_projekt() {
    let a4 = document.getElementById("aufgabe4")
    let a5 = document.getElementById("aufgabe5")
    let a6 = document.getElementById("aufgabe6")
    if (a4.style.display == "block") {
        a4.style.display = "none"
        a6.style.display = "block"
    }
    else if (a6.style.display == "block") {
        a6.style.display = "none"
        a5.style.display = "block"
    }
    else if (a5.style.display == "block") {
        a5.style.display = "none"
        a4.style.display = "block"
    }
    else {
        a4.style.display = "block"
    }

}

function switchaufgabenext_iperka() {
    let a7 = document.getElementById("aufgabe7")
    let a8 = document.getElementById("aufgabe8")
    if (a7.style.display == "block") {
        a7.style.display = "none"
        a8.style.display = "block"
    }
    else if (a8.style.display == "block") {
        a8.style.display = "none"
        a7.style.display = "block"
    }
    else {
        a7.style.display = "block"
    }
    
}

function switchaufgabeback_iperka() {
    let a7 = document.getElementById("aufgabe7")
    let a8 = document.getElementById("aufgabe8")
    if (a7.style.display == "block") {
        a7.style.display = "none"
        a8.style.display = "block"
    }
    else if (a8.style.display == "block") {
        a8.style.display = "none"
        a7.style.display = "block"
    }
    else {
        a7.style.display = "block"
    }
    
}

function switchaufgabenext_informationsbeschaffung() {
    let a9 = document.getElementById("aufgabe9")
    let a10 = document.getElementById("aufgabe10")
    if (a9.style.display == "block") {
        a9.style.display = "none"
        a10.style.display = "block"
    }
    else if (a10.style.display == "block") {
        a10.style.display = "none"
        a9.style.display = "block"
    }
    else {
        a9.style.display = "block"
    }
    
}

function switchaufgabeback_informationsbeschaffung() {
    let a9 = document.getElementById("aufgabe9")
    let a10 = document.getElementById("aufgabe10")
    if (a9.style.display == "block") {
        a9.style.display = "none"
        a10.style.display = "block"
    }
    else if (a10.style.display == "block") {
        a10.style.display = "none"
        a9.style.display = "block"
    }
    else {
        a9.style.display = "block"
    }
    
}

function switchaufgabenext_planung() {
    let a11 = document.getElementById("aufgabe11")
    let a12 = document.getElementById("aufgabe12")
    if (a11.style.display == "block") {
        a11.style.display = "none"
        a12.style.display = "block"
    }
    else if (a12.style.display == "block") {
        a12.style.display = "none"
        a11.style.display = "block"
    }
    else {
        a11.style.display = "block"
    }
    
}
function switchaufgabeback_planung() {
    let a11 = document.getElementById("aufgabe11")
    let a12 = document.getElementById("aufgabe12")
    if (a11.style.display == "block") {
        a11.style.display = "none"
        a12.style.display = "block"
    }
    else if (a12.style.display == "block") {
        a12.style.display = "none"
        a11.style.display = "block"
    }
    else {
        a11.style.display = "block"
    }
    
}

function switchaufgabenext_vortrag() {
    let a13 = document.getElementById("aufgabe13")
    let a14 = document.getElementById("aufgabe14")
    if (a13.style.display == "block") {
        a13.style.display = "none"
        a14.style.display = "block"
    }
    else if (a14.style.display == "block") {
        a14.style.display = "none"
        a13.style.display = "block"
    }
    else {
        a13.style.display = "block"
    }
    
}

function switchaufgabeback_vortrag() {
    let a13 = document.getElementById("aufgabe13")
    let a14 = document.getElementById("aufgabe14")
    if (a13.style.display == "block") {
        a13.style.display = "none"
        a14.style.display = "block"
    }
    else if (a14.style.display == "block") {
        a14.style.display = "none"
        a13.style.display = "block"
    }
    else {
        a13.style.display = "block"
    }
    
}

