/*window.onload = function() {var testVar = document.getElementById("plantInfo");
    console.log(testVar);  
    testVar.addEventListener("click", function(event) {
        event.preventDefault();*//*
        const value = document.getElementById(plantInfo).value;
        if (value === "")
            return;
        console.log(value);*/

document.getElementById("button").addEventListener("click",
function displayPlant(event) {
    event.preventDefault();
    console.log("string");
    //let output = document.getElementById("plantInfo").innerHTML;
    const url = "https://cors-anywhere.herokuapp.com/" + "trefle.io/api/v1/species?filter%5Bflower_color%5D=red&token=xaCsnN_vdoB6XvreQsyV7NxImBSYdljSwIErIt-eeZI"
    fetch(url)
        .then(function(response) {
            return response.json();
          }).then(function(json) {
              console.log(json);
              let results = "";
              for (let i = 0; i < json.data.length; i++) {
                  if (json.data[i].image_url != undefined) {
                    console.log(json.data[i].image_url);
                    results += '<img src ="' + json.data[i].image_url + '" title = "' + json.data[i].common_name + '">';
                    console.log(results);
                    //results += '<h2>' + json.data[i].common_name + '</h2>';
                  }
              }
              document.getElementById("plantInfo").innerHTML = results;
              /*for (let i = 0; i < output.length; i++) {
                  console.log(output[i])
              }*/
            });

});

/*);
}*/

/*window.onload = function() {var testVar = document.getElementById("weatherSubmit");
console.log(testVar);  
testVar.addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);

  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=22f5389d85f01db8e07b0502e614cfe7";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
        let results = "";
        results += '<h2>Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
      results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;F</h2>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
      results += json.weather[i].description
      if (i !== json.weather.length - 1)
        results += ", "
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
    });

    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=22f5389d85f01db8e07b0502e614cfe7";
    fetch(url2)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let forecast = "";
      for (let i=0; i < json.list.length; i++) {
        forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        forecast += "<p>";
        forecast += "Temp: " + json.list[i].main.temp + " &deg;F, ";
        forecast += "Wind: " + json.list[i].wind.speed + " MPH, ";
        forecast += "Feels like: " + json.list[i].main.feels_like + " &deg;F"; //+ ", ";
        forecast += "</p>";
    }
      document.getElementById("forecastResults").innerHTML = forecast;
      });

    //document.getElementById("jsonResults").innerHTML = json;
  });




}*/