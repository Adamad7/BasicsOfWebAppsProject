function checkIfDataCorrect() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var nameRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,30}$/;

    var errorEmail = document.getElementById('error_email');
    var errorName = document.getElementById('error_name');
    var errorFreq = document.getElementById('error_frequency');
    var errorSub = document.getElementById('error_subjects');
    var errorFav = document.getElementById('error_fav_fishing_type');

    var ok = true;


    if (!isTextCorrect('email', emailRegex)) {
        errorEmail.textContent = 'Niepoprawny adres email';
        ok = false;
    }
    else {
        errorEmail.textContent = '';
    }

    if (!isTextCorrect('name', nameRegex)) {
        errorName.textContent = 'Niepoprawne imię';
        ok = false;
    }
    else {
        errorName.textContent = '';
    }

    if (!isRadioCorrect('frequency')) {
        errorFreq.textContent = 'Wybierz jedną z opcji';
        ok = false;
    }
    else {
        errorFreq.textContent = '';
    }

    if (!isBoxCorrect('subjects')) {
        errorSub.textContent = 'Wybierz przynajmniej jeden temat';
        ok = false;
    }
    else {
        errorSub.textContent = '';
    }

    if (!isRadioCorrect('fav_fishing_type')) {
        errorFav.textContent = 'Wybierz jedną z opcji';
        ok = false;
    }
    else {
        errorFav.textContent = '';
    }

    console.log("AAAA");

    return ok;
}


function isTextCorrect(id, regex) {
    var text = document.getElementById(id);
    return regex.test(text.value);
}
function isRadioCorrect(name) {
    var radio = document.getElementsByName(name);
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) return true;
    }
    return false;
}
function isBoxCorrect(className) {
    var box = document.getElementsByClassName(className);
    for (i = 0; i < box.length; i++) {
        if (box[i].checked) return true;
    }
    return false;
}