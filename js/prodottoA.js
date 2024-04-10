document.addEventListener("DOMContentLoaded", function () {

    let imgScarpe = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    console.log(imgScarpe)

    for (let i = 0; i < imgScarpe.length; i++) {
        document.querySelector("#immagini").innerHTML +=
            '<img src="../immagini/Scarpa/' + imgScarpe[i] + '.jpg" alt=""></img>'
    }

    let img = document.querySelectorAll("#immagini img");
    console.log(img)

    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseover", function () {
            document.querySelector("#scarpa").innerHTML = '<img src="../immagini/Scarpa/' + imgScarpe[i] + '.jpg" alt=""></img>'
        })
    }

    let nScarpe = ["38.5", "39", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5", "45", "45.5", "46", "47", "47.5", "48.5", "49.5"]

    for (let i = 0; i < nScarpe.length; i++) {
        document.querySelector("#taglie ul").innerHTML += "<li>" + "EU " + nScarpe[i] + "</li>"
    }

    let taglie = document.querySelectorAll("#taglie ul li");

    console.log(taglie)

    
    controlloTaglie()

    //ciclo for per selezionare la taglia e mettere colore grigio

    for (let i = 0; i < taglie.length; i++) {

        taglie[i].addEventListener("click", function () {
            console.log("click")

            for (let j = 0; j < taglie.length; j++) {
                taglie[j].style.backgroundColor = ""
            }

            this.style.backgroundColor = "#c4c4c4";

            document.querySelector("#taglie ul").classList.remove("errore");

            document.querySelector("#errorescelta").style.display = "none";

            apriPopup()

            document.querySelector("#popup #taglia").innerHTML = "taglia/misura " + this.textContent
        })
    }

    chiudiPopup()

})

function controlloTaglie() {
    document.querySelector("#aggiunto").addEventListener("click", function () {

        document.querySelector("#taglie ul").classList.add("errore");

        document.querySelector("#errorescelta").style.display = "block";
    })
}

function apriPopup() {
    document.querySelector("#aggiunto").addEventListener("click", function () {
        document.querySelector("#popup").style.display = "block";

        document.querySelector("#taglie ul").classList.remove("errore");

        document.querySelector("#errorescelta").style.display = "none";
    })
}

function chiudiPopup() {
    document.querySelector("#close").addEventListener("click", function () {
        document.querySelector("#popup").style.display = "none"
    })
}