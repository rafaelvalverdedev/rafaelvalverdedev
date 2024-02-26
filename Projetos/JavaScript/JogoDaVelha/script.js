letra = "X"

function joga(celula) {
    console.log(letra)

    celulaclicada = document.getElementById(celula).innerHTML;

    if (celulaclicada == "X" || celulaclicada == "O") {
        console.log("Opa, este quadrado já foi escolhido!");
    } else {
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X") {
            letra = "O";
        } else {
            letra = "X";
        }
    }

    a1 = document.getElementById('a1').innerHTML;
    a2 = document.getElementById('a2').innerHTML;
    a3 = document.getElementById('a3').innerHTML;

    b1 = document.getElementById('b1').innerHTML;
    b2 = document.getElementById('b2').innerHTML;
    b3 = document.getElementById('b3').innerHTML;

    c1 = document.getElementById('c1').innerHTML;
    c2 = document.getElementById('c2').innerHTML;
    c3 = document.getElementById('c3').innerHTML;


    // primeira linha
    if (a1 != "" && a2 != "" && a3 != "") {
        if (a1 == a2 && a2 == a3) {
            geraVencedor(a1);
        }
    }

    // segunda linha
    if (b1 != "" && b2 != "" && b3 != "") {
        if (b1 == b2 && b2 == b3) {
            geraVencedor(b1);
        }

    }

    // terceira linha
    if (c1 != "" && c2 != "" && c3 != "") {
        if (c1 == c2 && c2 == c3) {
            geraVencedor(c1);
        }

    }


    // primeira coluna
    if (a1 != "" && b1 != "" && c1 != "") {
        if (a1 == b1 && b1 == c1) {
            geraVencedor(c1)    ;
        }

    }

    // segunda coluna
    if (a2 != "" && b2 != "" && c2 != "") {
        if (a2 == b2 && b2 == c2) {
            geraVencedor(a2)    ;
        }

    }

    // terceira coluna
    if (a3 != "" && b3 != "" && c3 != "") {
        if (a3 == b3 && b3 == c3) {
            geraVencedor(a3)    ;
        }

    }

    // primeira diagonal
    if (a1 != "" && b2 != "" && c3 != "") {
        if (a1 == b2 && b2 == c3) {
            geraVencedor(a1)    ;
        }

    }    

    // segunda diagonal
    if (a3 != "" && b2 != "" && c1 != "") {
        if (a3 == b2 && b2 == c1) {
            geraVencedor(a3)    ;
        }

    } 
}

function geraVencedor(letra) {
    document.getElementById('grid-sup').className = "grid-sup";
    document.getElementById('vencedor').innerText = "Vencedor: "+ letra;
}

function limpa_tudo() {
   
    document.getElementById('grid-sup').className = "grid-sup-some";
    document.getElementById('vencedor').innerText = "";

    document.getElementById('a1').innerHTML = "";
    document.getElementById('a2').innerHTML = "";
    document.getElementById('a3').innerHTML = "";

    document.getElementById('b1').innerHTML = "";
    document.getElementById('b2').innerHTML = "";
    document.getElementById('b3').innerHTML = "";

    document.getElementById('c1').innerHTML = "";
    document.getElementById('c2').innerHTML = "";
    document.getElementById('c3').innerHTML = "";
}
