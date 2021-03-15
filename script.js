function validar() {
    var inputs = document.getElementsByClassName("inputs");
    var valid = true;
    var erros = 0;
    document.querySelector(".avisoText").innerHTML = "";
    for (var i = 0; i < inputs.length; i++) {
        valid = true;
        if (!inputs[i].value) {
            valid = false;
        }
        if (!valid) {
            document.querySelector(".avisoText").innerHTML += "Informe " + inputs[i].name + " <br>";
            erros++;
        }
    }
    if (erros > 0) {
        return false;
    } else {
        return true;
    }
};
function valida_form() {
    if (document.getElementById("name").value == "") {
        alert('Por favor, preencha o campo nome');
        document.getElementById("name").focus();
        return false
    }
};
function teste() {
    var inputs = document.getElementsByClassName('inputs');
    var len = inputs.length;
    var valid = true;
    for (var i = 0; i < len; i++) {
        if (!inputs[i].value) { valid = false; }
    }
    if (!valid) {
        alert('Por favor preencha todos os campos.');
        return false;
    } else { return true; }
};

function soma() {
    var x = document.querySelector(".x").value;
    var y = document.querySelector(".y").value;

    var resultado = parseInt(x) + parseInt(y);
    document.querySelector(".resp").innerHTML = resultado;
};