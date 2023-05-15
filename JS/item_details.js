function selectOption(className, selectedIndex, changePrice) {
    var options = document.getElementsByClassName(className);
    var parentId = options[0].parentElement.id
    // if (changePrice) {
    //     document.getElementById('item_price').innerHTML = changePrice + "zł";
    // }
    var html = ``;
    for (let i = 0; i < options.length; i++) {
        if (i == selectedIndex) {
            html += `<button class="option ${className} selected" onclick="selectOption('${className}', ${i})">${options[i].innerHTML}</button>`
        }
        else {
            html += `<button class="option ${className}" onclick="selectOption('${className}', ${i})">${options[i].innerHTML}</button>`
        }
    }


    document.getElementById(parentId).innerHTML = html;
}