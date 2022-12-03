let url = `http://localhost:4000/locals`;

let data;
let list = document.getElementById("localeList");
let searchTerm = document.getElementById("searchTerm");
let searchList = [];


fetch(url)
    .then(response => response.json())
    .then(item =>{
        data = item;
        main1();
    })

const main1 = () =>{
    console.log(data);
    buildLocaleList(data);
}

let className = '"localeName"';
let classZones = '"localeZones"';
let classCamps = '"localeCamps"';

function search(){
    //findByRarity or searchTerm for any

    list.innerHTML = "";
    data.forEach(element => {
        if(element.name.toLowerCase().includes(searchTerm.value)){
            searchList.push(element);
        }
    });
    
    buildLocaleList(searchList)


    var clearButton = document.createElement("BUTTON");
    clearButton.innerHTML("Reset List");
    document.getElementById("clearButton").appendChild(clearButton);
}

function buildLocaleList(data)
{
    ul = document.createElement('ul');
    document.getElementById('localeList').appendChild(ul);

    let li = document.createElement('li');
    li.innerHTML += 
    `<h2 class=${className}> Name </h2>` + 
    `<h2 class=${classZones}> Zones </h2>` +
    `<h2 class=${classCamps}> Camps </h2>`;
    ul.appendChild(li);

    for (var I = 0; I < 14; I++)
    {
        let li = document.createElement('li');
        li.innerHTML += "<p class =" + className + ">" + data[I].name + "</p>" + 
        "<p class =" + classZones + ">" + data[I].zoneCount + "</p>";
        if (data[I].camps[1] != null)
        {
            li.innerHTML += "<p class =" + classCamps + ">" + data[I].camps[1].name +  "  Zone: " + data[I].camps[1].zone + "</p>";
        }
        ul.appendChild(li);
    };
}
