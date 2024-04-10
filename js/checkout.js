document.addEventListener("DOMContentLoaded", function () {
    const moduloConsegna = document.getElementById("opzioni-consegna");
    const nome = document.getElementById("nome");
    const cognome = document.getElementById("cognome");
    const indirizzo = document.getElementById("indirizzo");
    const cap = document.getElementById("cap");
    const citta = document.getElementById("citta");
    const paese = document.getElementById("paese");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const spanTipoDiConsegna = document.getElementById("spanTipoConsegna");
    let TipoConsegna = document.querySelectorAll("#TipoDiConsegna button");

  
    for (let i = 0; i < TipoConsegna.length; i++) {
        TipoConsegna[i].addEventListener("click", function () {
            for (let j = 0; j < TipoConsegna.length; j++) {
                TipoConsegna[j].style.backgroundColor = "";
            }
            TipoConsegna[i].style.backgroundColor = "#c1c1f7";
            spanTipoDiConsegna.innerHTML = "";
            spanTipoDiConsegna.classList.remove("errore");
        });
    }
 

    nome.addEventListener("blur", function () {
        if (inputObbligatorio(nome.value)) {
            if (controlloNome(nome.value)) {
                nome.classList.remove("errore");
                nome.nextElementSibling.innerHTML = "";
            } else {
                nome.classList.add("errore");
                nome.nextElementSibling.innerHTML = "Il nome non è corretto";
            }
        } else {
            nome.classList.add("errore");
            nome.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    cognome.addEventListener("blur", function () {
        if (inputObbligatorio(cognome.value)) {
            if (controlloCognome(cognome.value)) {
                cognome.classList.remove("errore");
                cognome.nextElementSibling.innerHTML = "";
            } else {
                cognome.classList.add("errore");
                cognome.nextElementSibling.innerHTML = "Il cognome non è corretto";
            }
        } else {
            cognome.classList.add("errore");
            cognome.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    indirizzo.addEventListener("blur", function () {
        if (inputObbligatorio(indirizzo.value)) {
            if (controlloIndirizzo(indirizzo.value)) {
                indirizzo.classList.remove("errore");
                indirizzo.nextElementSibling.innerHTML = "";
            } else {
                indirizzo.classList.add("errore");
                indirizzo.nextElementSibling.innerHTML = "L'indrizzo non è corretto";
            }
        } else {
            indirizzo.classList.add("errore");
            indirizzo.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    cap.addEventListener("blur", function () {
        if (inputObbligatorio(cap.value)) {
            if (controlloCap(cap.value)) {
                cap.classList.remove("errore");
                cap.nextElementSibling.innerHTML = "";
            } else {
                cap.classList.add("errore");
                cap.nextElementSibling.innerHTML = "Il CAP non è corretto";
            }
        } else {
            cap.classList.add("errore");
            cap.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    citta.addEventListener("blur", function () {
        if (inputObbligatorio(citta.value)) {
            if (controlloCitta(citta.value)) {
                citta.classList.remove("errore");
                citta.nextElementSibling.innerHTML = "";
            } else {
                citta.classList.add("errore");
                citta.nextElementSibling.innerHTML = "La città non è corretta";
            }
        } else {
            citta.classList.add("errore");
            citta.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    paese.addEventListener("blur", function () {
        if (inputObbligatorio(paese.value)) {
            if (controlloPaese(paese.value)) {
                paese.classList.remove("errore");
                paese.nextElementSibling.innerHTML = "";
            } else {
                paese.classList.add("errore");
                paese.nextElementSibling.innerHTML = "Il paese non è corretto";
            }
        } else {
            paese.classList.add("errore");
            paese.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    email.addEventListener("blur", function () {
        if (inputObbligatorio(email.value)) {
            if (controlloEmail(email.value)) {
                email.classList.remove("errore");
                email.nextElementSibling.innerHTML = "";
            } else {
                email.classList.add("errore");
                email.nextElementSibling.innerHTML = "L'email non è corretta";
            }
        } else {
            email.classList.add("errore");
            email.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    telefono.addEventListener("blur", function () {
        if (inputObbligatorio(telefono.value)) {
            if (controlloTelefono(telefono.value)) {
                telefono.classList.remove("errore");
                telefono.nextElementSibling.innerHTML = "";
            } else {
                telefono.classList.add("errore");
                telefono.nextElementSibling.innerHTML = "Il telefono non è corretto";
            }
        } else {
            telefono.classList.add("errore");
            telefono.nextElementSibling.innerHTML = "Campo obbligatorio";
        }
    });

    moduloConsegna.addEventListener("submit", function (e) {
        e.preventDefault();

        if (inputObbligatorio(nome.value)) {
            nome.classList.remove("errore");
            nome.nextElementSibling.innerHTML = "";
        } else {
            nome.classList.add("errore");
            nome.nextElementSibling.innerHTML = "Campo obbligatorio";
        }

        if (inputObbligatorio(cognome.value)) {
            cognome.classList.remove("errore");
            cognome.nextElementSibling.innerHTML = "";
        } else {
            cognome.classList.add("errore");
            cognome.nextElementSibling.innerHTML = "Campo obbligatorio";
        }

        if (inputObbligatorio(indirizzo.value)) {
            indirizzo.classList.remove("errore");
            indirizzo.nextElementSibling.innerHTML = "";
        } else {
            indirizzo.classList.add("errore");
            indirizzo.nextElementSibling.innerHTML = "Campo obbligatorio";
        }

        if (inputObbligatorio(cap.value)) {
            cap.classList.remove("errore");
            cap.nextElementSibling.innerHTML = "";
        } else {
            cap.classList.add("errore");
            cap.nextElementSibling.innerHTML = "Campo obbligatorio";
        }

        if (inputObbligatorio(citta.value)) {
            citta.classList.remove("errore");
            citta.nextElementSibling.innerHTML = "";
        } else {
            citta.classList.add("errore");
            citta.nextElementSibling.innerHTML = "Campo obbligatorio";
        }

        if (inputObbligatorio(paese.value)) {
            paese.classList.remove("errore");
            paese.nextElementSibling.innerHTML = "";
        } else {
            paese.classList.add("errore");
            paese.nextElementSibling.innerHTML = "Campo obbligatorio";
        }

        if (inputObbligatorio(email.value)) {
            email.classList.remove("errore");
            email.nextElementSibling.innerHTML = "";
        } else {
            email.classList.add("errore");
            email.nextElementSibling.innerHTML = "Campo obbligatorio";
        }

        if (inputObbligatorio(telefono.value)) {
            telefono.classList.remove("errore");
            telefono.nextElementSibling.innerHTML = "";
        } else {
            telefono.classList.add("errore");
            telefono.nextElementSibling.innerHTML = "Campo obbligatorio";
        }



        let buttonIsSelected = false;

        for (let i = 0; i < TipoConsegna.length; i++) {
            if (TipoConsegna[i].style.backgroundColor == "rgb(193, 193, 247)") {
                buttonIsSelected = true;
            }
        }

        if (buttonIsSelected) {
            spanTipoDiConsegna.classList.remove("errore");
            spanTipoDiConsegna.innerHTML = "";

        } else {
            spanTipoDiConsegna.classList.add("errore");
            spanTipoDiConsegna.innerHTML = "Seleziona il tipo di consegna";
        }

        let errori = document.querySelectorAll(".errore");
        console.log(errori);

        if (errori.length == 0) {
            moduloPagamento.style.display = "block";
        }
    }); //submit primo form


    const moduloPagamento = document.getElementById("pagamento");
    const cartaCredito = document.getElementById("carta-credito");
    const paypal = document.getElementById("metodo-paypal");
    const googlePay = document.getElementById("google");
    const numeroCarta = document.getElementById("numero-carta");
    const meseEanno = document.getElementById("mese-anno");
    const cvv = document.getElementById("cvv");

    numeroCarta.addEventListener("blur", function () {
        if (inputObbligatorio(numeroCarta.value)) {
            if (controlloNumeroCarta(numeroCarta.value)) {
                numeroCarta.classList.remove("errore")
                numeroCarta.nextElementSibling.innerHTML = ""
            }
            else {
                numeroCarta.classList.add("errore")
                numeroCarta.nextElementSibling.innerHTML = "Il numero della carta di credito non è corretto"
            }
        }
        else {
            numeroCarta.classList.add("errore")
            numeroCarta.nextElementSibling.innerHTML = "Campo obbligatorio"
        }
    })

    meseEanno.addEventListener("blur", function () {
        if (inputObbligatorio(meseEanno.value)) {
            if (controlloMeseEanno(meseEanno.value)) {
                meseEanno.classList.remove("errore")
                meseEanno.nextElementSibling.innerHTML = ""
            }
            else {
                meseEanno.classList.add("errore")
                meseEanno.nextElementSibling.innerHTML = "La data non è corretta"
            }
        }
        else {
            meseEanno.classList.add("errore")
            meseEanno.nextElementSibling.innerHTML = "Campo obbligatorio"
        }

    })

    cvv.addEventListener("blur", function () {
        if (inputObbligatorio(cvv.value)) {
            if (controlloCVV(cvv.value)) {
                cvv.classList.remove("errore")
                cvv.nextElementSibling.innerHTML = ""
            }
            else {
                cvv.classList.add("errore")
                cvv.nextElementSibling.innerHTML = "Il CVV non è corretto"
            }
        }
        else {
            cvv.classList.add("errore")
            cvv.nextElementSibling.innerHTML = "Campo obbligatorio"
        }
    })

    moduloPagamento.addEventListener("submit", function (e) {

        e.preventDefault()

        if (cartaCredito.checked == false && paypal.checked == false && googlePay.checked == false) {
            document.querySelector("#SpanMetodoDiPagamento").classList.add("errore")
            document.querySelector("#SpanMetodoDiPagamento").innerHTML = "Devi scegliere una delle opzioni di pagamento"
        }
        else {
            document.querySelector("#SpanMetodoDiPagamento").classList.remove("errore")
            document.querySelector("#SpanMetodoDiPagamento").innerHTML = ""
        }

        //carta di credito
        if (inputObbligatorio(numeroCarta.value)) {

            numeroCarta.classList.remove("errore")
            numeroCarta.nextElementSibling.innerHTML = ""
        }
        else {
            numeroCarta.classList.add("errore")
            numeroCarta.nextElementSibling.innerHTML = "Campo obbligatorio"
        }

        //mese e anno carta di credito

        if (controlloMeseEanno(meseEanno.value)) {
            meseEanno.classList.remove("errore")
            meseEanno.nextElementSibling.innerHTML = ""
        }
        else {
            meseEanno.classList.add("errore")
            meseEanno.nextElementSibling.innerHTML = "Campo obbligatorio"
        }

        //CVV

        if (controlloCVV(cvv.value)) {
            cvv.classList.remove("errore")
            cvv.nextElementSibling.innerHTML = ""
        }

        else {
            cvv.classList.add("errore")
            cvv.nextElementSibling.innerHTML = "Campo obbligatorio"
        }

        let errori = document.querySelectorAll(".errore");
        console.log(errori)
        if (errori.length == 0) {
            document.querySelector("#thankyou-page ").style.display = "block"
        }

    })//submit secondo form

}); //DOMContentLoaded



function inputObbligatorio(input) {
    if (input.trim().length == 0) {
        return false;
    } else {
        return true;
    }
}

function controlloNome(nome) {
    let regex = /^[A-Za-z\\s]{1,50}$/;
    return regex.test(nome);
}

function controlloCognome(cognome) {
    let regex = /^[A-Za-z\-']{1,50}$/;
    return regex.test(cognome);
}

function controlloIndirizzo(indirizzo) {
    let regex = /^[A-Za-z]+[A-Za-z\d\s,./]*\d+$/;
    return regex.test(indirizzo);
}

function controlloCap(cap) {
    let regex = /^\d{5}$/;
    return regex.test(cap);
}

function controlloCitta(citta) {
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    return regex.test(citta);
}

function controlloPaese(paese) {
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    return regex.test(paese);
}

function controlloEmail(email) {
    let regex = /[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}/;
    return regex.test(email);
}

function controlloTelefono(telefono) {
    let regex = /^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/;
    return regex.test(telefono);
}

function controlloNumeroCarta(numeroCarta) {
    let regex = /^[0-9]{13,16}$/;
    return regex.test(numeroCarta);
}

function controlloMeseEanno(meseEanno) {
    let regex = /^(0[1-9]|1[0-2])\/(2[2-9]|0[1-9]|[1-9]\d)$/;
    return regex.test(meseEanno);
}

function controlloCVV(cvv) {
    let regex = /^\d{3,4}$/;
    return regex.test(cvv);
}