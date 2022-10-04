const apiKey = "c88357e68930a703b244f9011ce5873d";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Roma&appid=${apiKey}`)
    .then( response => response.json())
    .then( data => console.log(data))