export class Notes {
    
    renderNotes(note: any) {
        const HTMLNote  = document.createElement('div');
        HTMLNote.className="oneNote";

        const HTMLCity = document.createElement('h1');
        const HTMLWeather = document.createElement('h5');
        const HTMLContent = document.createElement('h2');
        const HTMLDetails = document.createElement('h4');

        HTMLCity.innerHTML = note.name;
        HTMLContent.innerHTML = Math.round(note.main.temp-273.15) + "℃"; 
        HTMLWeather.innerHTML = note.weather[0].main;
        var img = document.createElement("img"); 
        img.src = `http://openweathermap.org/img/wn/${note.weather[0].icon}@2x.png`;
        console.log(note);
        HTMLContent.appendChild(img); 
        HTMLDetails.innerHTML = "Wilgotność: " + note.main.humidity + "%";
        HTMLDetails.appendChild(document.createElement("br"));
        HTMLDetails.innerHTML += "Ciśnienie: " + note.main.pressure + "hPA";

        HTMLNote.appendChild(HTMLCity);
        HTMLNote.appendChild(HTMLContent);
        HTMLNote.appendChild(HTMLDetails);
        HTMLNote.appendChild(HTMLWeather);

        const cont = document.querySelector('section');
        cont.appendChild(HTMLNote);

    }
}