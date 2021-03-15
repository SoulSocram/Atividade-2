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
