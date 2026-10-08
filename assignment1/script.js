const LOCATIONS = {
    portland:  { name: 'Portland, OR',  lat: 45.5234, lon: -122.6762, tz: 'America/Los_Angeles' },
    dublin:    { name: 'Dublin, Ireland', lat: 53.3498, lon: -6.2603,  tz: 'Europe/Dublin' },
    worcester: { name: 'Worcester, MA', lat: 42.2626, lon: -71.8023,  tz: 'America/New_York' },
};

let current = LOCATIONS.portland;
let requestId = 0; 

function build_url(loc) {
    return 'https://api.open-meteo.com/v1/forecast'
        + `?latitude=${loc.lat}&longitude=${loc.lon}`
        + '&current=temperature_2m,cloud_cover,is_day'
        + '&hourly=temperature_2m,precipitation_probability'
        + `&forecast_days=1&timezone=${encodeURIComponent(loc.tz)}`;
}
function update_time(){
    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric', 
        timeZone: current.tz
    });

   document.getElementById('time').textContent = `${formatter.format(new Date())}`;
}

function to_f(temp){
    return Math.floor(temp * (9/5) + 32).toFixed(1);

}

function load_weather(loc){
    const myRequest = ++requestId;
    current = loc;

    document.getElementById('place').textContent = loc.name;
    document.getElementById('place2').textContent = loc.name;
    update_time(); 

    fetch(build_url(loc))
    .then((response) => response.json())

    .then((data) => {
        if(myRequest !== requestId) return; 

        //set cloudcover params
        let cover = data.current.cloud_cover;
        console.log(loc.name, 'cover =', cover, 'cloud classes:', document.getElementById('cloud').className);
        document.getElementById('cloud').classList.toggle('active', cover>30);
        document.getElementById('overlay').classList.toggle('active', cover>50);
        document.getElementById('look').className = data.current.is_day === 1 ? 'day' : 'night';
        
        //temperature & conversion
        let temp = data.current.temperature_2m;
        document.getElementById('temp').textContent =`${temp}°C / ${to_f(temp)}°F`;

        //calc high and low
        let temps = data.hourly.temperature_2m;
        let precip = data.hourly.precipitation_probability;
        let max = Math.max(...temps)
        let min = Math.min(...temps);
        let max_precip = Math.max(...precip)


        document.getElementById('high').textContent = `${max}°C / ${to_f(max)}°F`
        document.getElementById('low').textContent = `${min}°C / ${to_f(min)}°F`        
        document.getElementById('precip').textContent = `${max_precip}%`


    })
    .catch((err) => console.error('Cannot fetch weather data', err));

}


document.querySelectorAll('#buttons button').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#buttons button')
            .forEach((b) => b.classList.toggle('selected', b===btn));
        load_weather(LOCATIONS[btn.dataset.loc]);
    });
});

setInterval(update_time, 10000);
document.querySelector('#buttons button[data-loc="portland"]').click(); 




