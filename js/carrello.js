document.addEventListener("DOMContentLoaded", function () {
    let prezzo = 119.99;
    let subtotale = 0;
    let spedizione = 0;
    let totale = 0;
    
    let costo = document.querySelectorAll(".costo");

    for (let i = 0; i < costo.length; i++) {
        costo[i].innerHTML = prezzo + "&#8364;";
        totale = totale + prezzo;
        subtotale = subtotale + prezzo;
    }

    let pSubTotale = document.querySelector("#subtotale");
    let pSpedizione = document.querySelector("#pspedizione");
    let pTotale = document.querySelector("#prezzoTotale");

    pSubTotale.innerHTML = subtotale + "&#8364;";
    pSpedizione.innerHTML = spedizione + "&#8364;";
    pTotale.innerHTML = totale + spedizione + "&#8364;";


    let cestino = document.querySelectorAll(".cestino");
    let articolo = document.querySelectorAll(".divarticolo");

    for (let i = 0; i < cestino.length; i++) {
        cestino[i].addEventListener("click", function () {
            articolo[i].style.display = "none";
            totale = totale - prezzo;
            console.log(totale)
            subtotale = subtotale - prezzo;
            console.log(subtotale);
            pSubTotale.innerHTML = subtotale + "&#8364;";
            pTotale.innerHTML = totale + spedizione + "&#8364;";
        });
    }
})
