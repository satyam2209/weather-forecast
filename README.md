# Getting Started with Create React App

## Install Dependencies
Run the following command to install all the dependencies:
npm install

Dependencies
1. Tailwind CSS: For styling.
2. Luxon: For displaying date and time.
3. React Toastify: For showing toast notifications.

Once all dependencies are installed successfully, you can start the project.

## Starting the Project Locally
Run the following command to start the project locally:

npm run start

The application will then be available at http://localhost:3000.

## How to Use the Application

When the application starts, it defaults to showing weather data for New York, including the current weather, a 3-hour forecast, and a 5-day forecast.

API => OpenWeatherMap: https://openweathermap.org/

### Components

DefaultCity.jsx: This component displays five default cities. By clicking on a city name, users can view its weather and forecast.

Inputs.jsx: This component includes an input box for searching any city by clicking on a search icon. It also features a location icon that allows users to get weather data for their current location, along with toggle buttons for Fahrenheit and Celsius.

TimeAndLocation.jsx: This component shows the local time, date, city name, and country.

TempAndDetails.jsx: This component displays detailed weather information, including temperature, sunrise, sunset, high and low temperatures, real feel, humidity, and wind speed.

Forecast.jsx: This component presents a 3-hour weather forecast and a 5-day forecast.

weatherService.js: This module fetches and formats weather data from the OpenWeatherMap API. It includes functions to retrieve current and forecast weather data based on location, format the data for easier use (including local time and weather conditions), and generate URLs for weather icons. The main function, getFormattedWeatherData, combines these functionalities to provide structured weather information ready for display.

useWindowWidth.js: This is a custom hook for checking the browser width, which helps ensure responsiveness across different screen sizes.

