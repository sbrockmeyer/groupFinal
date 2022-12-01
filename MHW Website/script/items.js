let url = `http://localhost:4000/items`;

let data;
let list = document.getElementById("itemList");
let searchTerm = document.getElementById("searchTerm");

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
let classCarryLimit = '"itemCarryLimit"';
let classDescription = '"itemDescription"';

function search(){
    //findByRarity or searchTerm for any
}
function buildItemList(data)
{
    ul = document.createElement('ul');
    document.getElementById('itemList').appendChild(ul);

    //add carryLimit label
    let li = document.createElement('li');
    li.innerHTML += 
    `<h2 class =` + className + `>Name` + `</h2>` + 
    "<h2 class =" + classRarity + ">" + "Rarity" + "</h2>" +
    "<h2 class =" + classValue + ">" + "Value" + "</h2>" +
    "<h2 class =" + classDescription + ">" + "Description" + "</h2>";
    ul.appendChild(li);

      //add carryLimit 
    for (var I = 0; I < 60; I++)
    {
        let li = document.createElement('li');
        li.innerHTML += "<p class =" + className + ">" + data[I].name + "</p>" + 
        "<p class =" + classRarity + ">" + data[I].rarity + "</p>" +
        "<p class =" + classValue + ">" + data[I].value + "</p>" +
        "<p class =" + classDescription + ">" + data[I].description + "</p>";
        ul.appendChild(li);
    };
}
