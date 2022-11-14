let url = `https://mhw-db.com/items`;

let data;
let list = document.getElementById("itemList");

fetch(url)
    .then(response => response.json())
    .then(item =>{
        data = item;
        main1();
    })

const main1 = () =>{
    console.log(data);
    buildItemList(data);
}

let className = '"itemName"';
let classRarity = '"itemRarity"';
let classValue = '"itemValue"';
let classDescription = '"itemDescription"';

function buildItemList(data)
{
    ul = document.createElement('ul');
    document.getElementById('itemList').appendChild(ul);

    // data.forEach(item => {
    //     let li = document.createElement('li');
    //     li.innerHTML += data[item].name; //+ " " + data[I].type + " " + data[I].species + " " + data[I].description;
    //     ul.appendChild(li);
    // });
    let li = document.createElement('li');
    li.innerHTML += "<h2 class =" + className + ">" + "Name" + "</h2>" + 
    "<h2 class =" + classRarity + ">" + "Rarity" + "</h2>" +
    "<h2 class =" + classValue + ">" + "Value" + "</h2>" +
    "<h2 class =" + classDescription + ">" + "Description" + "</h2>";
    ul.appendChild(li);

    for (var I = 0; I < 1186; I++)
    {
        let li = document.createElement('li');
        li.innerHTML += "<p class =" + className + ">" + data[I].name + "</p>" + 
        "<p class =" + classRarity + ">" + data[I].rarity + "</p>" +
        "<p class =" + classValue + ">" + data[I].value + "</p>" +
        "<p class =" + classDescription + ">" + data[I].description + "</p>";
        ul.appendChild(li);
    };
}
