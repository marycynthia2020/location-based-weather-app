const temp = document.getElementById("temp");
const country = document.getElementById("country");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const container = document.querySelector(".container");
const imageHolder = document.querySelector(".image-holder");

let lat;
let lon;
const apiKey = "e5931b767b8f27e94d39355ece5c2a2f";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      getWeather();
    },
    error => {
      alert("Error getting geolocation" + error.message);
      document.getElementsByTagName(body)[0].textContent = "Refresh and try again"
 
    }
  );
} else {
  alert("geolation is not supported by the browser, please enable geolocation");
  document.getElementsByTagName(body)[0].textContent = "Enable geolocation and try again"
}

async function getWeather() {
  let data;
  if (lat && lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    data = await response.json();
    console.log(data)

    container.style.display = "block";
    temp.textContent = `Temp: ${Math.round(data.main.temp)}°C`;
    country.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity + "%";
    windSpeed.textContent = data.wind.speed + "km/hr";
    document.getElementsByTagName("h1")[0].textContent += `Your Location is ${data.name}` 
  }


  if (data.weather[0].main === "Clouds") {
    imageHolder.innerHTML = `<img src= "/images/yellowcloud-removebg-preview.png" width="200" height="200" />`;
  } else if (data.weather[0].main === "Clear") {
    imageHolder =  `<img src= "/images/smily-removebg-preview.png" width="200" height="200" />`;
  } else if (data.weather[0].main === "Rain") {
    imageHolder.innerHTML =   `<img src= "/images/rainy-removebg-preview.png" width="200" height="200" />`;
  } else if (data.weather[0].main === "Mist") {
    imageHolder.innerHTML =  `<img src= "/images/mist-removebg-preview.png" width="200" height="200" />`;
  } else {
    imageHolder.innerHTML =  `<img src= "/images/yellowcloud-removebg-preview.png" width="200" height="200" />`;
  }

}
