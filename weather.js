const input = document.querySelector("input");
const search = document.getElementById("search");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const speed = document.getElementById("speed");
const image = document.getElementById("icon");
const cityName = document.getElementById("city");
async function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2108ca26873baf7ea072025466969a88`;
    const data = await fetch(`${url}`).then(Response=>Response.json());
    temp.innerText = Math.round(data.main.temp-273.15)+"°C";
    desc.innerText = data.weather[0].description;
    feels_like.innerText = "feels like " + Math.round(data.main.feels_like - 273.15) + "°C";
    humidity.innerText=data.main.humidity+"%";
    speed.innerText=Math.round(data.wind.speed)+" " +"kl/hr";
    console.log(data);

    const image = document.getElementById("icon");

switch (data.weather[0].main) {
    case 'Clear':
        image.innerHTML = '<i class="fa-solid fa-sun"></i>';
        break;
    case 'Rain':
        image.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
        break;
    case 'Mist':
        image.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        break;
    case 'Snow':
        image.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
        break;
    case 'Drizzle':
        image.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
        break;
    case 'Haze':
        image.innerHTML = '<i class="fa-solid fa-smog"></i>';
        break;
    case 'Clouds':
        image.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        break;    
    default:
        image.innerHTML = '<i class="fa-solid fa-cloud"></i>'; // تفريغ العنصر في حالة عدم توفر حالة مناسبة
}
}
search.addEventListener("click", ()=>{
    getWeather(input.value);
})
search.addEventListener("click", ()=>{
    const newCityName=input.value;
    cityName.innerText=newCityName;
})

async function calculateSumAsync(a, b) {
  let result = a + b;
  return result;
}

calculateSumAsync(5, 10).then(result => {
  console.log(result);
});
console.log("This will be printed before the sum is calculated.");
