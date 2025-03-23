const weatherData = {
    "Hà Nội": { temperature: 25, humidity: 70, windSpeed: 5, description: "Có mây", icon: "☁️" },
    "Hồ Chí Minh": { temperature: 32, humidity: 75, windSpeed: 7, description: "Nắng", icon: "☀️" },
    "Đà Nẵng": { temperature: 28, humidity: 82, windSpeed: 12, description: "Mưa rào", icon: "🌧️" }
};

let btn = document.getElementById("searchBtn");
let container = document.querySelector(".container");

btn.onclick = function () {
    let input = document.getElementById("search").value;
    let city = weatherData[input];
    if (city) {
        container.innerHTML = `
            <b class="name">${input}</b>
            <div class="info">
                <span class="icon">${city.icon}</span>
                <b class="temp">${city.temperature}<sup>o</sup>C</b>
                <div class="description">
                    <span class="desc">${city.description}</span>
                    <span class="desc">Độ ẩm: ${city.humidity}%</span>
                    <span class="desc">Tốc độ gió: ${city.windSpeed} km/h</span>
                </div>
            </div>`;
    } else {
        container.innerHTML = "";
    }
};
