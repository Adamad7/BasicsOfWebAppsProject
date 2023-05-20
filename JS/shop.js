const items = {
    spinning_rods: [
        {
            name: "Wędka Jaxon Tenesa Easy Spin",
            img: "img/item_images/spinning_rod_1.jpg",
            manufacturer: "Jaxon",
            price: [60, 80, 90, 100],
            length: [210, 240, 270, 300],
            castingWeight: [20, 30, 40, 60, 75],
            sections: [2, 2, 3, 3],
            transportlength: [120, 130, 150, 190],
            weight: [260, 280, 300, 340],
        },
        {
            name: "Wędka Dragon Express Spinn 35",
            img: "img/item_images/spinning_rod_2.jpg",
            manufacturer: "Dragon",
            price: [160, 180, 190, 210],
            length: [190, 220, 245, 305],
            castingWeight: [18, 25, 30, 35, 42],
            sections: [2, 2, 3, 3],
            transportlength: [110, 125, 142, 180],
            weight: [180, 210, 250, 290],
        },
        {
            name: "Wędka Mikado Bixlite Spin",
            img: "img/item_images/spinning_rod_3.jpg",
            manufacturer: "Mikado",
            price: [100, 120, 150, 160],
            length: [198, 214, 244, 260],
            castingWeight: [7, 9, 12, 14, 16],
            sections: [2, 2, 2, 3],
            transportlength: [105, 116, 133, 150],
            weight: [80, 110, 119, 135],
        }
    ],
    carp_rods: [
        {
            name: "Wędka Mikado Sasori Feeder",
            img: "img/item_images/carp_rod_1.jpg",
            manufacturer: "Mikado",
            price: [160, 180],
            length: [220, 255],
            castingWeight: [20, 30],
            sections: [2, 2],
            transportlength: [150, 180],
            weight: [230, 245],
        },
        {
            name: "Wędka Zaffira Tele Carp Rt Jaxon",
            img: "img/item_images/carp_rod_2.jpg",
            manufacturer: "Jaxon",
            price: [260, 280, 300],
            length: [170, 190, 230],
            castingWeight: [60, 70, 100],
            sections: [2, 2, 3],
            transportlength: [180, 190, 210],
            weight: [280, 300, 325],
        },
        {
            name: "Wędka Mikado Ultraviolet Feeder",
            img: "img/item_images/carp_rod_3.jpg",
            manufacturer: "Mikado",
            price: [190, 215],
            length: [185, 212],
            castingWeight: [70, 85],
            sections: [2, 2],
            transportlength: [130, 145],
            weight: [195, 235],
        }
    ],
    front_reels: [
        {
            name: "Kołowrotek DAM Runshift 3L",
            img: "img/item_images/front_reel_1.jpg",
            manufacturer: "DAM",
            price: [130, 150],
            size: [4000, 5000],
            ratio: "5:1",
            spoolCapacity: ["0.28/250", "0.33/265"],
            brakeForce: [8, 11],
            length: [215, 265],
            bearing: "2+1"
        },
        {
            name: "Kołowrotek Dragon Magnum FD230i",
            img: "img/item_images/front_reel_2.jpg",
            manufacturer: "Dragon",
            price: [60, 70],
            size: [3000, 4000],
            ratio: "6:1",
            spoolCapacity: ["0.28/210", "0.33/180"],
            brakeForce: [6, 8],
            length: [190, 210],
            bearing: "2"
        },
        {
            name: "Kołowrotek Jaxon Bonzo PRI",
            img: "img/item_images/front_reel_3.jpg",
            manufacturer: "Jaxon",
            price: [50, 90],
            size: [2000, 3000],
            ratio: "4:1",
            spoolCapacity: ["0.28/220", "0.33/250"],
            brakeForce: [5, 10],
            length: [220, 240],
            bearing: "2+1"
        }
    ],
    back_reels: [
        {
            name: "Kołowrotek Jaxon Piano VM",
            img: "img/item_images/back_reel_1.jpg",
            manufacturer: "Jaxon",
            price: [40, 60],
            size: [3000, 5000],
            ratio: "5.5:1",
            spoolCapacity: ["0.28/190", "0.33/235"],
            brakeForce: [5, 9],
            length: [210, 235],
            bearing: "2"
        },
        {
            name: "Kołowrotek Jaxon Piano VS",
            img: "img/item_images/back_reel_2.jpg",
            manufacturer: "Jaxon",
            price: [45, 68],
            size: [3000, 4000],
            ratio: "5.0:1",
            spoolCapacity: ["0.28/215", "0.33/240"],
            brakeForce: [8, 10],
            length: [245, 260],
            bearing: "4+1"
        },
        {
            name: "Kołowrotek Mikado Sasori RD",
            img: "img/item_images/back_reel_3.jpg",
            manufacturer: "Mikado",
            price: [55, 72],
            size: [2000, 3000],
            ratio: "5.2:1",
            spoolCapacity: ["0.28/235", "0.33/270"],
            brakeForce: [3, 5],
            length: [280, 310],
            bearing: "1"
        }
    ],
    main_strings: [
        {
            name: "Żyłka Dragon Millenium Szczupak",
            img: "img/item_images/main_string_1.jpg",
            manufacturer: "Dragon",
            price: [10, 15],
            diameter: [0.20, 0.24],
            length: [200, 300],
        },
        {
            name: "Żyłka Jaxon Crocodile Spinning",
            img: "img/item_images/main_string_2.jpg",
            manufacturer: "Jaxon",
            price: [8, 19],
            diameter: [0.25, 0.3],
            length: [100, 150],
        },
        {
            name: "Żyłka Mikado Dino Dynamic II",
            img: "img/item_images/main_string_3.jpg",
            manufacturer: "Mikado",
            price: [25, 32],
            diameter: [0.3, 0.34],
            length: [500, 750],
        },
        {
            name: "Żyłka Dragon Guide Select",
            img: "img/item_images/main_string_4.jpg",
            manufacturer: "Dragon",
            price: [39, 45],
            diameter: [0.24, 0.3],
            length: [750, 1000],
        }
    ],
    artificial_baits: [
        {
            name: "Guma Savage Gear Slender Scoop Shad",
            img: "img/item_images/artificial_bait_1.jpg",
            manufacturer: "Savage Gear",
            price: [8, 9, 10],
            color: ["Czerwony", "Zielony", "Niebieski"],
            length: [9, 11, 13],
            weight: [7, 10, 12],
        },
        {
            name: "Guma Mikado Angry CrayFish",
            img: "img/item_images/artificial_bait_2.jpg",
            manufacturer: "Mikado",
            price: [2, 4, 5],
            color: ["Różowy", "Złoty", "Zielony"],
            length: [3.5, 5, 6],
            weight: [4, 5, 7],
        }
    ],
    natural_baits: [
        {
            name: "Kulki haczykowe Jaxon Method Ground 16mm",
            img: "img/item_images/natural_bait_1.jpg",
            price: [9],
            manufacturer: "Jaxon",
            flavor: ["Truskawka", "Wanilia", "Amur"]
        },
        {
            name: "Kukurydza wędkarska w puszce Traper",
            img: "img/item_images/natural_bait_2.jpg",
            price: [3.5],
            manufacturer: "Traper",
            flavor: ["Truskawka", "Tutti-frutti", "Miód"]
        }

    ],
}


// $(document).ready(function () {
//     updateCartValue();
// });

// function updateCartValue() {
//     var cart = JSON.parse(localStorage.getItem('cart'));
//     if (cart == null) {
//         cart = {
//             totalValue: 0,
//             items: []
//         };
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     document.getElementById('cart_value').innerHTML = `<i class="fas fa-shopping-cart"></i> (${cart.totalValue}zł)`;
// }

function showCategory(categoryId) {
    var displayedItems;
    var itemsDescriptions;
    const categoryNames = [
        "Wędziska spinningowe",
        "Wędziska karpiowe",
        "Kołowrotki z przednim hamulcem",
        "Kołowrotki z tylnym hamulcem",
        "Żyłki główne",
        "Przynęty sztuczne",
        "Przynęty naturalne"
    ];
    switch (categoryId) {

        case 1:
            displayedItems = items.spinning_rods;
            itemsDescriptions = getRodsDescription(displayedItems);
            break;
        case 2:
            displayedItems = items.carp_rods;
            itemsDescriptions = getRodsDescription(displayedItems);
            break;
        case 3:
            displayedItems = items.front_reels;
            itemsDescriptions = getReelsDescription(displayedItems);
            break;
        case 4:
            displayedItems = items.back_reels;
            itemsDescriptions = getReelsDescription(displayedItems);
            break;
        case 5:
            displayedItems = items.main_strings;
            itemsDescriptions = getStringsDescription(displayedItems);
            break;
        case 6:
            displayedItems = items.artificial_baits;
            itemsDescriptions = getArtificialBaitsDescription(displayedItems);
            break;
        case 7:
            displayedItems = items.natural_baits;
            itemsDescriptions = getNaturalBaitsDescprition(displayedItems);
            break;

        default:
            return null;
    }
    // console.log(itemsDescriptions);
    var html = '';

    for (let i = 0; i < displayedItems.length; i++) {
        html +=
            `
        <div class="item">
            <div class="item_image">
                <img src="${displayedItems[i].img}" alt="123">
            </div>
            <div class="item_name">${displayedItems[i].name}</div>
            <div class="item_description">
                ${itemsDescriptions[i]}
            </div>
            <dvi class="item_price_details">
                <div class="item_price">${displayedItems[i].price[0]} zł</div>
                <div class="item_details" onClick="showItemDetails(${categoryId}, ${i})">Szczegóły</div>
            </dvi>
        </div>
        `
    }
    document.getElementsByClassName('selected_category')[0].innerHTML = categoryNames[categoryId - 1];
    document.getElementById('items_display').innerHTML = html;
}

function getRodsDescription(rods) {
    var descriptions = [];
    for (let i = 0; i < rods.length; i++) {
        descriptions.push(`Długość [mm]: ${rods[i].length[0]}<br>
        C.W. [g]: ${rods[i].castingWeight[0]}<br>
        Waga [g]: ${rods[i].weight[0]}<br>`);
    }
    return descriptions;
}

function getReelsDescription(reels) {
    var descriptions = [];
    for (let i = 0; i < reels.length; i++) {
        descriptions.push(`Wielkość: ${reels[i].size[0]}<br>
        Przełożenie.: ${reels[i].ratio}<br>
        Poj. szpuli: ${reels[i].spoolCapacity[0]}<br>
        Siła hamulca [kg]: ${reels[i].brakeForce[0]}<br>`);
    }
    return descriptions;
}

function getStringsDescription(strings) {
    var descriptions = [];
    for (let i = 0; i < strings.length; i++) {
        descriptions.push(`Średnica [mm]: ${strings[i].diameter[0]}<br>
        Długość [m]: ${strings[i].length[0]}<br>`);
    }
    return descriptions;
}

function getArtificialBaitsDescription(baits) {
    var descriptions = [];
    for (let i = 0; i < baits.length; i++) {
        descriptions.push(`Kolor: ${baits[i].color[0]}<br>
        Długość [mm]: ${baits[i].length[0]}<br>
        Ciężar [g]: ${baits[i].weight[0]}<br>`);
    }
    return descriptions;
}

function getNaturalBaitsDescprition(baits) {
    var descriptions = [];
    for (let i = 0; i < baits.length; i++) {
        descriptions.push(`Smak: ${baits[i].flavor[0]}<br>`);
    }
    return descriptions;
}

var currentMainOptionIndex = 0;
var currentAdditionalOptionIndex = 0;
var currentItem;

function showItemDetails(categoryId, itemIndex) {
    currentMainOptionIndex = 0;
    currentAdditionalOptionIndex = 0;

    var item;
    var mainOptions = '';
    var additionalOptions = '';
    // console.log(categoryId);
    switch (categoryId) {

        case 1:
            item = items.spinning_rods[itemIndex];
            mainOptions = getOptions('length', item.length, "Długość", true, categoryId);
            additionalOptions = getOptions('cw', item.castingWeight, "C.W.", false, categoryId);
            break;
        case 2:
            item = items.carp_rods[itemIndex];
            mainOptions = getOptions('length', item.length, "Długość", true, categoryId);
            additionalOptions = getOptions('cw', item.castingWeight, "C.W.", false, categoryId);
            break;
        case 3:
            item = items.front_reels[itemIndex];
            mainOptions = getOptions('size', item.size, "Rozmiar", true, categoryId);
            break;
        case 4:
            item = items.back_reels[itemIndex];
            mainOptions = getOptions('size', item.size, "Rozmiar", true, categoryId);
            break;
        case 5:
            item = items.main_strings[itemIndex];
            mainOptions = getOptions('length', item.length, "Długość", true, categoryId);
            additionalOptions = getOptions('diameter', item.diameter, "Średnica", false, categoryId);
            break;
        case 6:
            item = items.artificial_baits[itemIndex];
            mainOptions = getOptions('length', item.length, "Długość", true, categoryId);
            additionalOptions = getOptions('color', item.color, "Kolor", false, categoryId);
            break;
        case 7:
            item = items.natural_baits[itemIndex];
            additionalOptions = getOptions('flavor', item.flavor, "Smak", false, categoryId);
            break;

        default:
            return null;
    }
    currentItem = item;
    var html = `
    <div id="details">
        <div id="img_and_options">
            <img src="${item.img}">
            
            <div id="name_and_options">
                <h2 class="product_details">${item.name}</h2>
                <div id="item_price">${item.price[currentMainOptionIndex]}zł</div>
                <div id="product_options">
                    <div class="product_option">
                        ${mainOptions}

                        </div>
                    <div class="product_option">
                        
                        ${additionalOptions}
                    </div>
                    <div class="product_option">
                        <div class="option_name">Ilość:</div>
                        <div id="options_quantity" class="options">
                            <input id="quantity" type="number" max="10" min="1" value="1">
                            <div id="quantity_error"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div id="product_details">
        </div>

        <div id="back_and_cart">
            <button id="go_back" onclick="goBack(${categoryId})"><i class="fa-solid fa-arrow-left-long"></i> Wróć</button>
            <button id="add_to_cart" onclick="addToCart()"><i class="fa-solid fa-cart-arrow-down"></i> Do koszyka</button>
        </div>
    </div>
    `;


    document.getElementsByTagName('main')[0].innerHTML = html;
    updateDetails(categoryId);
}

function updateDetails(categoryId) {
    if (categoryId <= 2) {
        updateRodDetails();
    }
    else if (categoryId > 2 && categoryId <= 4) {
        updateReelDetails();
    }
    else if (categoryId > 4 && categoryId <= 5) {
        updateStringDetails();
    }
    else if (categoryId > 5 && categoryId <= 6) {
        updateArtificialBaitDetails();
    }
    else if (categoryId > 6 && categoryId <= 7) {
        updateNaturalBaitDetails();
    }
}

function getOptions(className, options, optionName, isMainOption, categoryId) {
    var html = `
    <div class="option_name">${optionName}:</div>
    <div id="options_${className}" class="options">`;
    html += `<button class="option ${className} selected" onclick="selectOption('${className}', 0, ${isMainOption}, ${categoryId})">${options[0]}</button>`;
    for (let i = 1; i < options.length; i++) {
        html += `<button class="option ${className}" onclick="selectOption('${className}', ${i}, ${isMainOption}, ${categoryId})">${options[i]}</button>`;
    }
    html += '</div>';
    return html;
}

function updateRodDetails() {
    var html = `
    <div>Szczegóły:</div>
            <table>
                <tbody>
                    <tr><td>Producent</td><td>${currentItem.manufacturer}</td></tr>
                    <tr><td>Długość [mm]</td><td>${currentItem.length[currentMainOptionIndex]}</td></tr>
                    <tr><td>C. W. [g]</td><td>${currentItem.castingWeight[currentAdditionalOptionIndex]}</td></tr>
                    <tr><td>Sekcje</td><td>${currentItem.sections[currentMainOptionIndex]}</td></tr>
                    <tr><td>Dł. transportowa [mm]</td><td>${currentItem.transportlength[currentMainOptionIndex]}</td></tr>
                    <tr><td>Waga [g]</td><td>${currentItem.weight[currentMainOptionIndex]}</td></tr>
                </tbody>
            </table>
    `
    document.getElementById('product_details').innerHTML = html;
}


function updateReelDetails() {
    var html = `
    <div>Szczegóły:</div>
            <table>
                <tbody>
                    <tr><td>Producent</td><td>${currentItem.manufacturer}</td></tr>
                    <tr><td>Wielkość</td><td>${currentItem.size[currentMainOptionIndex]}</td></tr>
                    <tr><td>Przełożenie</td><td>${currentItem.ratio}</td></tr>
                    <tr><td>Pojemność szpuli</td><td>${currentItem.spoolCapacity[currentMainOptionIndex]}</td></tr>
                    <tr><td>Siła hamulca [kg]</td><td>${currentItem.brakeForce[currentMainOptionIndex]}</td></tr>
                    <tr><td>Długość [mm]</td><td>${currentItem.length[currentMainOptionIndex]}</td></tr>
                    <tr><td>Łożyska</td><td>${currentItem.bearing}</td></tr>
                </tbody>
            </table>
    `
    document.getElementById('product_details').innerHTML = html;
}


function updateStringDetails() {
    var html = `
    <div>Szczegóły:</div>
            <table>
                <tbody>
                    <tr><td>Producent</td><td>${currentItem.manufacturer}</td></tr>
                    <tr><td>Długość [m]</td><td>${currentItem.length[currentMainOptionIndex]}</td></tr>
                    <tr><td>Średnica [mm]</td><td>${currentItem.diameter[currentAdditionalOptionIndex]}</td></tr>
                </tbody>
            </table>
    `
    document.getElementById('product_details').innerHTML = html;
}


function updateArtificialBaitDetails() {
    var html = `
    <div>Szczegóły:</div>
            <table>
                <tbody>
                    <tr><td>Producent</td><td>${currentItem.manufacturer}</td></tr>
                    <tr><td>Długość [mm]</td><td>${currentItem.length[currentMainOptionIndex]}</td></tr>
                    <tr><td>Kolor</td><td>${currentItem.color[currentAdditionalOptionIndex]}</td></tr>
                    <tr><td>Ciężar [g]</td><td>${currentItem.weight[currentMainOptionIndex]}</td></tr>
                </tbody>
            </table>
    `
    document.getElementById('product_details').innerHTML = html;
}


function updateNaturalBaitDetails() {
    var html = `
    <div>Szczegóły:</div>
            <table>
                <tbody>
                    <tr><td>Producent</td><td>${currentItem.manufacturer}</td></tr>
                    <tr><td>Smak</td><td>${currentItem.flavor[currentAdditionalOptionIndex]}</td></tr>
                </tbody>
            </table>
    `
    document.getElementById('product_details').innerHTML = html;
}

function updatePrice() {
    document.getElementById('item_price').innerHTML = currentItem.price[currentMainOptionIndex] + "zł";
}

function selectOption(className, selectedIndex, isMainOption, categoryId) {
    var options = document.getElementsByClassName(className);
    if (isMainOption == true) {
        currentMainOptionIndex = selectedIndex;
    }
    else {
        currentAdditionalOptionIndex = selectedIndex;
    }
    var parentId = options[0].parentElement.id
    var html = ``;
    for (let i = 0; i < options.length; i++) {
        if (i == selectedIndex) {
            html += `<button class="option ${className} selected" onclick="selectOption('${className}', ${i}, ${isMainOption}, ${categoryId})">${options[i].innerHTML}</button>`
        }
        else {
            html += `<button class="option ${className}" onclick="selectOption('${className}', ${i}, ${isMainOption}, ${categoryId})">${options[i].innerHTML}</button>`
        }
    }

    updateDetails(categoryId);
    updatePrice();
    document.getElementById(parentId).innerHTML = html;
}


function goBack(categoryId) {
    document.getElementsByTagName('main')[0].innerHTML = `
    <div id="shop">
            <div id="filters">
                <div class="category">
                    <div class="category_name">
                        Wędziska
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(1);">Spinningowe</a></li>
                        <li><a href="javascript:showCategory(2);">Karpiowe</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Kołowrotki
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(3);">Z przednim hamulcem</a></li>
                        <li><a href="javascript:showCategory(4);">Z tylnym hamulcem</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Żyłki
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(5);">Główne</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Przynęty
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(6);">Sztuczne</a></li>
                        <li><a href="javascript:showCategory(7);">Naturalne</a></li>
                    </ul>
                </div>
            </div>
            <div id="items">
                <h2 class="selected_category">Wybierz kategorię</h2>
                <div id="items_display">
                </div>
            </div>
        </div>
    `;
    showCategory(categoryId);
}


function addToCart() {
    // console.log(document.getElementById("quantity").value);
    var itemQuantity = document.getElementById("quantity").value
    if (itemQuantity < 1 || itemQuantity > 10) {
        document.getElementById('quantity_error').innerHTML = "Błąd, możesz kupić od 1 do 10 sztuk produktu";
    }
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
        cart = {
            totalValue: 0,
            itemsInCart: []
        };
    }

    cart.itemsInCart.push(
        {
            item: currentItem,
            quantity: itemQuantity,
            price: currentItem.price[currentMainOptionIndex],
            totalPrice: itemQuantity * currentItem.price[currentMainOptionIndex],
            mainOption: currentMainOptionIndex,
            additionalOption: currentAdditionalOptionIndex,
        }
    )

    cart.totalValue += itemQuantity * currentItem.price[currentMainOptionIndex];
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Dodano produkt do koszyka");
    updateCartValue()
}