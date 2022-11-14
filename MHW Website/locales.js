let url = `https://mhw-db.com/locations`;

let data;
let list = document.getElementById("localeList");

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



function buildLocaleList(data)
{
    ul = document.createElement('ul');
    document.getElementById('localeList').appendChild(ul);

    let li = document.createElement('li');
    li.innerHTML += "<h2 class =" + className + ">" + "Name" + "</h2>" + 
    "<h2 class =" + classZones + ">" + "Zones" + "</h2>" +
    "<h2 class =" + classCamps + ">" + "Camps" + "</h2>";
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
