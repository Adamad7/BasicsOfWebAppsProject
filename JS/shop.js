const items = {
    spinning_rods: [
        {
            name: "Wędka Jaxon Tenesa Easy Spin",
            manufacturer: "Jaxon",
            prices: [60, 80, 90, 100],
            lenghts: [210, 240, 270, 300],
            castingWeights: [20, 30, 40, 60, 75],
            sections: [2, 2, 3, 3],
            transportLenghts: [120, 130, 150, 190],
            weights: [260, 280, 300, 340],
        },
        {
            name: "Wędka Dragon Express Spinn 35",
            manufacturer: "Dragon",
            prices: [160, 180, 190, 210],
            lenghts: [190, 220, 245, 305],
            castingWeights: [18, 25, 30, 35, 42],
            sections: [2, 2, 3, 3],
            transportLenghts: [110, 125, 142, 180],
            weights: [180, 210, 250, 290],
        },
        {
            name: "Wędka Mikado Bixlite Spin",
            manufacturer: "Mikado",
            prices: [100, 120, 150, 160],
            lenghts: [198, 214, 244, 260],
            castingWeights: [7, 9, 12, 14, 16],
            sections: [2, 2, 2, 3],
            transportLenghts: [105, 116, 133, 150],
            weights: [80, 110, 119, 135],
        }
    ],
    carp_rods: [
        {
            name: "Wędka Mikado Sasori Feeder",
            manufacturer: "Mikado",
            prices: [160, 180],
            lenghts: [220, 255],
            castingWeights: [20, 30],
            sections: [2, 2],
            transportLenghts: [150, 180],
            weights: [230, 245],
        },
        {
            name: "Wędka Zaffira Tele Carp Rt Jaxon",
            manufacturer: "Jaxon",
            prices: [260, 280, 300],
            lenghts: [170, 190, 230],
            castingWeights: [60, 70, 100],
            sections: [2, 2, 3],
            transportLenghts: [180, 190, 210],
            weights: [280, 300, 325],
        },
        {
            name: "Wędka Mikado Ultraviolet Feeder",
            manufacturer: "Mikado",
            prices: [190, 215],
            lenghts: [185, 212],
            castingWeights: [70, 85],
            sections: [2, 2],
            transportLenghts: [130, 145],
            weights: [195, 235],
        }
    ],
    front_reels: [
        {
            name: "Kołowrotek DAM Runshift 3L",
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
            name: "Kołowrotek Dragon Magnum FD230i 3000 2bb",
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
            manufacturer: "Dragon",
            price: [10, 15],
            diameter: [0.20, 0.24],
            length: [200, 300],
        },
        {
            name: "Żyłka Jaxon Crocodile Spinning",
            manufacturer: "Jaxon",
            price: [8, 19],
            diameter: [0.25, 0.3],
            length: [100, 150],
        },
        {
            name: "Żyłka Mikado Dino Dynamic II",
            manufacturer: "Mikado",
            price: [25, 32],
            diameter: [0.3, 0.34],
            length: [500, 750],
        },
        {
            name: "Żyłka Dragon Guide Select",
            manufacturer: "Dragon",
            price: [39, 45],
            diameter: [0.24, 0.3],
            length: [750, 1000],
        }
    ],
    artificial_baits: [
        {
            name: "Guma Savage Gear Slender Scoop Shad",
            manufacturer: "Savage Gear",
            price: [8, 9, 10],
            color: ["Czerwony", "Zielony", "Niebieski"],
            length: [9, 11, 13],
            weight: [7, 10, 12],
        },
        {
            name: "Guma Mikado Angry CrayFish",
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
            price: 9,
            manufacturer: "Jaxon",
            flavor: ["Truskawka", "Wanilia", "Amur"]
        },
        {
            name: "Kukurydza wędkarska w puszce Traper",
            price: 3.5,
            manufacturer: "Traper",
            flavor: ["Truskawka", "Tutti-frutti", "Miód"]
        }

    ],
}



function showRods(type) {
    var rods
    if (type == 1) {

        rods = items.spinning_rods;
    }
    else if (type == 2) {
        rods = items.carp_rods;

    }
    else {
        return null;
    }
    console.log(rods);
    var html = '';
    for (let i = 0; i < rods.length; i++) {
        html +=
            `
        <div class="item">
            <div class="item_image">
                <img src="img/test_item.png" alt="123">
            </div>
            <div class="item_name">${rods[i].name}</div>
            <div class="item_description">
                Długość: ${rods[i].lenghts[0]}<br>
                C.W.: ${rods[i].castingWeights[0]}<br>
                Waga: ${rods[i].weights[0]}<br>
            </div>
            <dvi class="item_price_details">
                <div class="item_price">${rods[i].prices[0]} zł</div>
                <div class="item_details">Szczegóły</div>
            </dvi>
        </div>
        `
    }

    document.getElementById('items_display').innerHTML = html;
}



function showReels(type) {
    var reels
    if (type == 1) {

        reels = items.front_reels;
    }
    else if (type == 2) {
        reels = items.back_reels;

    }
    else {
        return null;
    }
    console.log(reels);
    var html = '';
    for (let i = 0; i < reels.length; i++) {
        html +=
            `
        <div class="item">
            <div class="item_image">
                <img src="img/test_item.png" alt="123">
            </div>
            <div class="item_name">${reels[i].name}</div>
            <div class="item_description">
                Rozmiar: ${reels[i].size[0]}<br>
                Przełożenie.: ${reels[i].ratio}<br>
                Poj. szpuli: ${reels[i].spoolCapacity[0]}<br>
                Siła hamulca: ${reels[i].brakeForce[0]}<br>
            </div>
            <dvi class="item_price_details">
                <div class="item_price">${reels[i].price[0]} zł</div>
                <div class="item_details">Szczegóły</div>
            </dvi>
        </div>
        `
    }

    document.getElementById('items_display').innerHTML = html;
}