# leaflet-challenge
## Occurance of Magnitude 2.5+ Earthquakes in the United States, past 30 days

The source data collected for this project was provided by the United States Geological Survey Earthquake Hazards Program.

## Installation and Run Instructions:
To avoid the **index.html** being blocked by your computer's Cross-Origin Resource Sharing (CORS) policy, you may need to run the following steps before opening Google Chrome:
1. Open **Gitbash**  and activate your virtual environment
2. Type: **python -m http.server 8000**
3. In your web browser, navigate to: **http://localhost:8000**
4. Next, navigate through your directories within your web browser to the folder containing the **index.html** file
5. Double-click on the **index.html** file to launch the map in Google Chrome

## Usage Instructions:
This repo contains the following:
1. **index.html:** the script to recreate the visualisation in Google Chrome
2. **logic.js:** located within the **static** subfolder, this is called by the **index.html** to support the visualisation
3. **style.css:** located within the **static** subfolder, this is called by the **index.html** to support the visualisation

Once launched, the Google Chrome page should look something like this:
![LaunchScreenshot](https://github.com/K-G-Witt/leaflet-challenge/assets/156146173/4b9c1622-007e-4e7d-bfd3-d854221c6841)

## Credits:
This code was compiled and written by me for the leaflet-challenge for the 2024 Data Analytics Boot Camp hosted by Monash University. 

## Additional credits are declared below:

### Creating legends on white barkgrounds, appropriately coloured to the depth of the earthquake:
I modified jonkwiatkowski's code to the colours used in my visualisation: https://github.com/jonkwiatkowski/Leaflet/tree/main/Leaflet-Part-1 (accessed 21 June 2024).

### Reference material:
US Geological Survey Earthquake Hazards Program, Magnitude 2.5+ Earthquates, Past 30 Days: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson (accessed 21 June 2024).



