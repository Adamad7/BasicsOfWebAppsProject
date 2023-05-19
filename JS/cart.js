$(document).ready(function () {
    updateCartValue();
    if (document.getElementById('cart_content') != null) {
        showCartContent();
    }
});

var cart;

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
    for (let i = 0; i < cart.itemsInCart.length; i++) {
        html += `
        <tr>
            <td>${cart.itemsInCart[i].item.name}</td>
            <td>${cart.itemsInCart[i].quantity}</td>
            <td>${cart.itemsInCart[i].totalPrice}zł</td>
            <td><button class="edit_cart" onclick="editItem(${i})">Edytuj</button></td>
        </tr>
        `
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
            <td><button class="edit_cart" onclick="saveUpdatedItem(${itemId})">Zapisz</button></td>
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

function saveUpdatedItem(itemId) {
    var newQuantity = document.getElementById('updated_quantity').value;
    if (newQuantity < 1 || newQuantity > 10) {
        alert("Możesz zamówić od 1 do 10 sztuk produktu");
        return;
    }
    // console.log(cart);
    // console.log(cart.itemsInCart);
    // console.log(cart.itemsInCart[itemId].quantity);
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