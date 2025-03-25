// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       function(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log("Latitude: " + latitude + ", Longitude: " + longitude);
//       },
//       function(error) {
//         console.log("Error getting location: " + error.message);
//       }
//     );
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }

// function getPosition(position) {
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;

// }
let lat;
let lon;
const apiKey = "e5931b767b8f27e94d39355ece5c2a2f";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    getWeather()
  }, error =>{
    alert('Error getting geolocation' + error.message)
  }
);
} else{
    alert("geolation is not supported by the browser")
}

async function getWeather() {
    if(lat && lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data)
    }
}