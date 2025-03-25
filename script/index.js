// const apiKey = "e5931b767b8f27e94d39355ece5c2a2f";
// const apiUrl =
//   " https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
// const searchInput = document.getElementById("search-input");
// const searchBtn = document.getElementById("search-button");
// const temp = document.getElementById("temp");
// const country = document.getElementById("country");
// const humidity = document.getElementById("humidity");
// const windSpeed = document.getElementById("wind-speed");
// const container = document.querySelectorAll(".hidden")
// const imageHolder = document.querySelector(".image-holder")

// async function getWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   const data = await response.json();

//   if (response.status === 404) {
//     imageHolder.innerHTML = "<p>No data found for this country</p>"
//     humidity.innerHTML =""
//     windSpeed.innerHTML =""
//     temp.innerHTML = ""
//     country.innerHTML = ""
//    container[0].style.display = "hidden"
//      container[1].style.display = "hidden"

//   } else {
//     temp.textContent = Math.round(data.main.temp) + "°C";
//     country.textContent = data.name;
//     humidity.textContent = data.main.humidity + "%";
//     windSpeed.textContent = data.wind.speed + "km/hr";
//     container[0].style.display = "block"
//      container[1].style.display = "block"
//   }

//   if (data.weather[0].main === "Clouds") {
//     imageHolder.innerHTML = `<img src= "/images/yellowcloud-removebg-preview.png" width="200" height="200" />`;
//   } else if (data.weather[0].main === "Clear") {
//     imageHolder =  `<img src= "/images/smily-removebg-preview.png" width="200" height="200" />`;
//   } else if (data.weather[0].main === "Rain") {
//     imageHolder.innerHTML =   `<img src= "/images/rainy-removebg-preview.png" width="200" height="200" />`;
//   } else if (data.weather[0].main === "Mist") {
//     imageHolder.innerHTML =  `<img src= "/images/mist-removebg-preview.png" width="200" height="200" />`;
//   } else {
//     imageHolder.innerHTML =  `<img src= "/images/yellowcloud-removebg-preview.png" width="200" height="200" />`;
//   }
// }

// searchBtn.addEventListener("click", function () {
//   searchValue = searchInput.value;
//   getWeather(searchValue);
//   searchInput.value = ""
// });
 