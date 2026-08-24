async function getWeather() {

    let city = document.getElementById("city").value;

    if (city == "") {
        document.getElementById("result").innerHTML =
            "Enter a city";
        return;
    }

    let geo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    let location = await geo.json();

    if (!location.results) {
        document.getElementById("result").innerHTML =
            "City not found";
        return;
    }

    let lat = location.results[0].latitude;
    let lon = location.results[0].longitude;
    let name = location.results[0].name;

    let weather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`
    );

    let data = await weather.json();

    document.getElementById("result").innerHTML =
        `${name}<br>${data.current.temperature_2m}°C`;
}