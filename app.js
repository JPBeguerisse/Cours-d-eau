const urlStation = "https://hubeau.eaufrance.fr/api/v1/temperature/station?code_departement=33&size=20&exact_count=true&format=json&pretty";

let APIcode = function(code){
    const urlTemp = `https://hubeau.eaufrance.fr/api/v1/temperature/chronique?code_station=${code}&size=5&sort=desc&pretty`;

    fetch(urlTemp)
    .then(response => response.json())
    .then(data => {

       
        const city = document.querySelector(".city");
        const libelle_station = document.createElement("div");
        const date = document.createElement("div");
        const time = document.createElement("div");
        const temp = document.createElement("div");
        const hr = document.createElement("hr");
        libelle_station.classList.add("nom");
        libelle_station.innerHTML = "Station: "+data.data[0].libelle_station;
        date.innerHTML = "Date: " + data.data[0].date_mesure_temp;
        time.innerHTML = "Heure: " + data.data[0].heure_mesure_temp;
        temp.innerHTML = "Température: " + data.data[0].resultat.toFixed(2) + data.data[0].symbole_unite;


        const date1 = document.createElement("div");
        const time1 = document.createElement("div");
        const temp1 = document.createElement("div");
        const hr1 = document.createElement("hr");
        date1.innerHTML = "Date: " + data.data[1].date_mesure_temp;
        time1.innerHTML = "Heure: " + data.data[1].heure_mesure_temp;
        temp1.innerHTML = "Température: " + data.data[1].resultat.toFixed(2) + data.data[0].symbole_unite;


        const date2 = document.createElement("div");
        const time2 = document.createElement("div");
        const temp2 = document.createElement("div");
        const hr2 = document.createElement("hr");
        date2.innerHTML = "Date: " + data.data[2].date_mesure_temp;
        time2.innerHTML = "Heure: " + data.data[2].heure_mesure_temp;
        temp2.innerHTML = "Température: " + data.data[2].resultat.toFixed(2) + data.data[0].symbole_unite;


        city.append(libelle_station, date, time, temp, hr);
        city. append(date1, time1, temp1, hr1);
        city. append(date2, time2, temp2, hr2);



        console.log(data)
    })
}

let APIstation =function(array){
    fetch(urlStation)
    .then(response => response.json())
   .then(data => {console.log(data)
        //const city = document.querySelector(".city");
        const city = document.createElement("div")
        const cityContainer = document.querySelector(".city-container");
        cityContainer.append(city)  
        let code1 = data.data[array].code_station;
        APIcode(code1);
        
    });
}

APIstation(0);
APIstation(1);
APIstation(2);
APIstation(3);
APIstation(4);
APIstation(5);








