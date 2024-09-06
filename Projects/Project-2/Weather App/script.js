const searchBtn = document.querySelector("#search");
const inputSearch = document.querySelector("input");
const tempElem = document.querySelector(".temprature");
const locationElem = document.querySelector(".location");
const timeElem = document.querySelector(".time");
const dayElem = document.querySelector(".day");
const dateElem = document.querySelector(".date")
const iconElem = document.querySelector(".icon");
const conditionElem = document.querySelector(".condition");
searchBtn.addEventListener("click", function () {
    const location = inputSearch.value;
    if (location) {
        // get data
        // update date into dom
        fetchWeather(location).then((data) => {
            if (data == null) {

            } else {
                updateData(data);
            }
        });
        inputSearch.value = "";
    }
})
function updateData(data) {
    //   extract required data
    const temp = data.current.temp_c;
    const location = data.location.name;
    const dateTime = data.location.localtime;
    const [date, time] = dateTime.split(" ");
    const icon = data.current.condition.icon;
    const condition = data.current.condition.text;

    // update data
    tempElem.textContent = temp + "°C";
    locationElem.textContent = location;
    iconElem.src = icon;
    dateElem.innerText = date;
    timeElem.innerText = time;
    conditionElem.innerText = condition;



}
async function fetchWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=dc3cb5b61c3b4d9a9ec144601240409&q=${location}&aqi=no`
    const response = await fetch(url);
    if (response.status == 400) {
        alert("Invalid Location");
    } else if (response.status == 200) {
        const json = await response.json();
        return json;
    }

}