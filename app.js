var flag = 0;
var city="";
var temp;
var pressure;
var description;
function findLocation() {
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude)
        console.log(longitude)
        const geolocation = `https://api.bigdatacloud.net/data/reverse-geocode-client?              latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(geolocation)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            city = data.locality;
            console.log(city)
            const query = city;
            getData(query);
            flag=1;
                })
        }
    const error = (err) => {
        console.log(err);
    }
    navigator.geolocation.getCurrentPosition(success , error);
    console.log(city);
    
}
function getData(cityName) {
    const query2 = cityName;
    const appid = "13810f004da6a9e4c505adb6010576e9";
            const units = "metric";
            const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query2 +"&units="+ units +"&appid=" + appid;
            fetch(url, {
                mode: 'cors'})
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    var weatherData = data;
                    const temp = weatherData.main.temp
                    const feels = weatherData.main.feels_like
                    const description = weatherData.weather[0].description
                    const icon = weatherData.weather[0].icon
                    const humidity=weatherData.main.humidity
                    const pressure=weatherData.main.pressure
                    const visibility=weatherData.visibility
                    const windspeed=weatherData.wind.speed                 
                    const imgURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
                    const date = new Date();
                    const today = date.toLocaleDateString();
                    const time = date.toLocaleTimeString();
                
                    // alert("Success");
                    console.log(visibility);
                    document.querySelector(".name").innerHTML = cityName;
                    document.querySelector(".temp").innerHTML=feels+" °C";
                    document.querySelector(".pressure").innerHTML = ` Pressure -${pressure} ATM`;
                    document.querySelector(".humidity").innerHTML=`Humidity -${humidity} %`;
                    document.querySelector(".condition").innerHTML=description;
                    document.querySelector(".Visibility").innerHTML=`Visibility - ${visibility} meters`;
                    document.querySelector(".wind-speed").innerHTML=`Wind Speed - ${windspeed} meter/sec`;
                    document.querySelector(".date").innerHTML=today;
                    document.querySelector(".time").innerHTML=time;
                    document.getElementById("weather-icon").setAttribute("src", imgURL)
                })
}

function checkAgain(){
    const citySearch = document.getElementById('getCityName').value;
    getData(citySearch);
}
function chamba(){
    getData("Chamba");
}
function bharmour(){
    getData("Shimla");
}
function nurpur(){
    getData("Nurpur");
}
function chandigarh(){
    getData("Chandigarh");
}

