var cart;


$(document).ready(function () {
    updateCartValue();
    if (document.getElementById('cart_content') != null) {
        showCartContent();
    }
});


function updateCartValue() {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
        cart = {
            totalValue: 0,
            itemsInCart: []
        };
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    document.getElementById('cart_value').innerHTML = `<i class="fas fa-shopping-cart"></i> (${cart.totalValue}zł)`;
}


function showCartContent() {
    var html = '<table><thead><tr><th>Nazwa produktu</th><th>Liczba sztuk</th><th>Cena</th><th></th></tr></thead><tbody>';
    if (cart.itemsInCart.length == 0) {
        html += '<tr><td colspan="4">Brak produktów w koszyku</td></tr>';
        document.getElementById('submit_delivery').disabled = true;
    }
    else {
        document.getElementById('submit_delivery').disabled = false;
        for (let i = 0; i < cart.itemsInCart.length; i++) {
            html += `
            <tr>
                <td>${cart.itemsInCart[i].item.name}</td>
                <td>${cart.itemsInCart[i].quantity}</td>
                <td>${cart.itemsInCart[i].totalPrice}zł</td>
                <td>
                <div class="item_edit_buttons">
                    <button class="edit_cart" onclick="editItem(${i})">Edytuj</button>
                    <button class="remove_item" onclick="removeItem(${i})">Usuń</button>
                </div>
            </td>
            </tr>
            `
        }
    }

    html += '</tbody></table>';

    document.getElementById('cart_content').innerHTML = html;
}


function editItem(itemId) {
    var html = '<table><thead><tr><th>Nazwa produktu</th><th>Liczba sztuk</th><th>Cena</th><th></th></tr></thead><tbody>';
    for (let i = 0; i < cart.itemsInCart.length; i++) {
        if (i == itemId) {
            html += `
        <tr>
            <td>${cart.itemsInCart[i].item.name}</td>
            <td><input id="updated_quantity" type="number" min="1" max="10" value="${cart.itemsInCart[i].quantity}"></td>
            <td>${cart.itemsInCart[i].totalPrice}zł</td>
            <td>
                <div class="item_edit_buttons">
                    <button class="edit_cart" onclick="saveUpdatedItem(${itemId})">Zapisz</button>
                </div>
            </td>
        </tr>
        `
        }
        else {
            html += `
        <tr>
            <td>${cart.itemsInCart[i].item.name}</td>
            <td>${cart.itemsInCart[i].quantity}</td>
            <td>${cart.itemsInCart[i].totalPrice}zł</td>
            <td></td>
        </tr>
        `
        }

    }
    html += '</tbody></table>';

    document.getElementById('cart_content').innerHTML = html;
}


function removeItem(itemId) {
    console.log("Delete");
    cart.itemsInCart.splice(itemId, 1);
    showCartContent();
    calculateCartValue();
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartValue();
}


function saveUpdatedItem(itemId) {
    var newQuantity = document.getElementById('updated_quantity').value;
    if (newQuantity < 1 || newQuantity > 10) {
        alert("Możesz zamówić od 1 do 10 sztuk produktu");
        return;
    }

    cart.itemsInCart[itemId].quantity = newQuantity;
    cart.itemsInCart[itemId].totalPrice = newQuantity * cart.itemsInCart[itemId].item.price[cart.itemsInCart[itemId].mainOption];
    showCartContent();
    calculateCartValue();
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartValue();
}


function calculateCartValue() {
    var value = 0;
    for (let i = 0; i < cart.itemsInCart.length; i++) {
        value += cart.itemsInCart[i].quantity * cart.itemsInCart[i].item.price[cart.itemsInCart[i].mainOption];
    }
    console.log(value);
    cart.totalValue = value;
}


function isFieldOk(fieldId, regex) {
    var fieldValue = document.getElementById(fieldId).value;
    return regex.test(fieldValue);
}


function checkDeliveryDetails() {
    firstNameRegex = /^([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?)$/;
    lastNameRegex = /^([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?)$/;
    postalCodeRegex = /^[0-9]{2}-[0-9]{3}$/;
    localityRegex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\- ]{1,50}$/;
    addressRegex = /^[0-9]{1,6}[a-zA-Z]{0,2}$/;
    emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    phoneRegex = /^[0-9]{3}[\- ]?[0-9]{3}[\- ]?[0-9]{3}$/;

    var detailsCorrect = true;
    var errorDescription = '';
    if (!isFieldOk('first_name', firstNameRegex)) {
        detailsCorrect = false;
        errorDescription += 'Nieprawidłowe imię\n';
    }
    if (!isFieldOk('last_name', lastNameRegex)) {
        detailsCorrect = false;
        errorDescription += 'Nieprawidłowe nazwisko\n';
    }
    if (!isFieldOk('postal', postalCodeRegex)) {
        detailsCorrect = false;
        errorDescription += 'Nieprawidłowy kod pocztowy\n';
    }
    if (!isFieldOk('locality', localityRegex)) {
        detailsCorrect = false;
        errorDescription += 'Nieprawidłowa miejscowość\n';
    }
    if (!isFieldOk('address', addressRegex)) {
        detailsCorrect = false;
        errorDescription += 'Nieprawidłowy adres\n';
    }
    if (!isFieldOk('email', emailRegex)) {
        detailsCorrect = false;
        errorDescription += 'Nieprawidłowy email\n';
    }
    if (!isFieldOk('phone', phoneRegex)) {
        detailsCorrect = false;
        errorDescription += 'Nieprawidłowy numer telefonu\n';
    }

    if (detailsCorrect) {
        return true;
    }
    else {
        alert("Podano nieprawidłowe dane:\n" + errorDescription);
        return false;
    }


}


function sendDelivery() {
    if (checkDeliveryDetails()) {
        var deliveries = JSON.parse(localStorage.getItem('deliveries'));
        if (deliveries == null) {
            deliveries = [];
        }

        deliveries.push(
            {
                firstName: document.getElementById('first_name').value,
                lastName: document.getElementById('last_name').value,
                postal: document.getElementById('postal').value,
                locality: document.getElementById('locality').value,
                address: document.getElementById('address').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                payment: document.getElementById('payment').value,
                delivery: document.getElementById('delivery_method').value,
                cart: cart,
            }
        );
        localStorage.setItem('deliveries', JSON.stringify(deliveries));

        cart.totalValue = 0;
        cart.itemsInCart = [];

        showCartContent();
        calculateCartValue();
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartValue();
        alert("Twoje zamówienie zostało przekazane do reazliacji!");
        return true;
    }
    else {
        return false;
    }

}