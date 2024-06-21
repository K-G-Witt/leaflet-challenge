# leaflet-challenge
## Occurance of Magnitude 2.5+ Earthquakes in the United States, past 30 days

The source data collected for this project was provided by the United States Geological Survey Earthquake Hazards Program.

## Installation and Run Instructions:


### Leaflet:
To avoid the **index.html** being blocked by your computer's Cross-Origin Resource Sharing (CORS) policy, you may need to run the following steps before opening Google Chrome:
1. Open **Gitbash**  and activate your virtual environment
2. Type: **python -m http.server 8000**
3. In your web browser, navigate to: **http://localhost:8000**
4. Next, navigate through your directories within your web browser to the folder containing the **index.html** file
5. Double-click on the **index.html** file to launch the map in Google Chrome

## Usage Instructions:
This repo contains the following:


### Leaflet:
1. **index.html** is the script to recreate the mapping visualisation in Google Chrome
2. **logic.js** is called by the **index.html** to support the mapping visualisation
3. **style.css** is called by the **index.html** to support the mapping visualisation
4. **us-states.json** is called by the **index.html** to define the boundaries of the US States

Once launched, the Google Chrome page should look something like this:




## Credits:
This code was compiled and written by me for the leaflet-challenge for the 2024 Data Analytics Boot Camp hosted by Monash University. 

## Additional credits are declared below:

### Disabling favicon requests in .html:
https://stackoverflow.com/questions/1321878/how-to-prevent-favicon-ico-requests (Accessed June 10 2024).

### Creating dropdown menus in .html:
https://www.w3schools.com/howto/howto_js_dropdown.asp (Accessed June 10 2024).

### Reference material:
US Geological Survey Earthquake Hazards Program, Magnitude 2.5+ Earthquates, Past 30 Days: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson (accessed 21 June 2024).

### Selecting only filtered data from .csv in index.js:
https://stackoverflow.com/questions/10615290/select-data-from-a-csv-before-loading-it-with-javascript-d3-library (Accessed June 13 2024).





