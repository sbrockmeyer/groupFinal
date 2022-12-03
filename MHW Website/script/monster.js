let url = `http://localhost:4000/monsters`;

const testtext = document.getElementById('testtext');

let data;
let list = document.getElementById("monsterInfo");
let searchTerm = document.getElementById("searchTerm");
let searchList = [];

fetch(url)
    .then(response => response.json())
    .then(monster =>{
        data = monster;
        main1();
    })

const main1 = () =>{
    console.log(data);
    buildMonList(data);
}

let className = '"monsterName"';
let classType = '"monsterType"';
let classSpecies = '"monsterSpecies"';
let classDescription = '"monsterDescription"';

function search(){
    //findByRarity or searchTerm for any

    list.innerHTML = "";
    data.forEach(element => {
        if(element.name.toLowerCase().includes(searchTerm.value)){
            searchList.push(element);
        }
    });
    
    buildMonList(searchList)


    var clearButton = document.createElement("BUTTON");
    clearButton.innerHTML("Reset List");
    document.getElementById("clearButton").appendChild(clearButton);
}

function buildMonList(data)
{
    ul = document.createElement('ul');
    document.getElementById('monsterInfo').appendChild(ul);

    let li = document.createElement('li');
    li.innerHTML += 
    `<h2 class=${className}> Name </h2>` +
    `<h2 class=${classType}> Type </h2>` +
    `<h2 class=${classSpecies}> Species </h2>` +
    `<h2 class=${classDescription}> Description </h2>`;
    ul.appendChild(li);

    for (var I = 0; I < 58; I++)
    {
        let li = document.createElement('li');
        li.innerHTML += "<p class =" + className + ">" + data[I].name + "</p>" + 
        "<p class =" + classType + ">" + data[I].type + "</p>" +
        "<p class =" + classSpecies + ">" + data[I].species + "</p>" +
        "<p class =" + classDescription + ">" + data[I].description + "</p>";
        ul.appendChild(li);
    };
}
