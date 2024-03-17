let SearchButn = document.getElementById("search")
let inputUser = document.getElementById("inputText")
let city = document.getElementById("city")
let humidity = document.getElementById("humidity")
let windSpeed = document.getElementById("windSpeed")

let errPart = document.getElementById("errorPart");
let bottomPart = document.getElementById("bottomPart")

function weatherApiData (data){
    let wind = data.wind;
    let naming = data.name;
    console.log(naming)
    windSpeed.textContent = wind.speed;
    city.textContent = naming;
    humidity.textContent = data.main.humidity
}

SearchButn.addEventListener("click", function(){
    console.log("hiii")
    let cityName = inputUser.value;
    console.log(cityName)
    if (cityName === ""){
        errPart.style.display="block";
        errPart.style.color = "white"
        errPart.style.fontSize ="12px"
        bottomPart.style.display = "none"
    }else{
        errPart.style.display="none";
        bottomPart.style.display = "flex"
        const apiKey = "73c8d003f6557411a3f9223b23352bf2"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        
        const options = {
            method:"GET"
        }
        const response = async () => {
            try {
                const result = await fetch(url, options);
                const data = await result.json();
                console.log(data);
                weatherApiData(data)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        response()
    }
    
})



