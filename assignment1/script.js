let data_src = "https://api.open-meteo.com/v1/forecast?latitude=45.5234&longitude=-122.6762&current=temperature_2m&hourly=temperature_2m,precipitation_probability&forecast_days=1";

function update_time(){
    const now = new Date(); 
    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric', 
        timeZone: 'America/Los_Angeles'
    });

   document.getElementById('time').textContent = `${formatter.format(now)}`;
}

function to_f(temp){
    return Math.floor(temp * (9/5) + 32).toFixed(1);

}

setInterval(update_time, 10000);
update_time(); 



fetch(data_src)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //class change for colors goes here 
       if(data.isDay){
            document.getElementById('look').setAttribute('class', 'day');
        } else {
            document.getElementById('look').setAttribute('class', 'night');
        }



        let temp = data.current.temperature_2m;
        let f = to_f(temp);
        document.getElementById('temp').textContent =
            `${temp}°C / ${f}°F`;

        let arr = data.hourly.temperature_2m;
        let arr_precip = data.hourly.precipitation_probability;
        let max = arr[0]; 
        let min = arr[0];
        let max_precip = arr_precip[0];

        for(let i = 1; i<arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }

            if(min > arr[i]){
                min = arr[i];
            }

            if(max_precip < arr_precip[i]){
                max_precip = arr_precip[i];
            }

        }

        document.getElementById('high').textContent = `${max}°C / ${to_f(max)}°F`
        document.getElementById('low').textContent = `${min}°C / ${to_f(min)}°F`        
        document.getElementById('precip').textContent = `${max_precip}%`


    })
    .catch((err) => console.error('Cannot fetch weather data', err));

