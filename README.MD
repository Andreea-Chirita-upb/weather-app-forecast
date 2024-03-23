# Weather App

Welcome to the Weather App repository! This project provides a user-friendly web application for checking current weather conditions and forecasts for various locations worldwide. The application offers intuitive features such as auto-complete search functionality, real-time weather updates, and a visually appealing interface.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Utilized](#technologies-utilized)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

Here are some screenshots showcasing the Weather App in action:

### Current Weather Display

![Current Weather](./Images/FrontPage.png)

This screenshot demonstrates the current weather display of the Weather App, providing information such as temperature, weather description, wind speed, humidity, and pressure for the selected location.

### 5-Day Forecast

![5-Day Forecast](./Images/FrontPage2.png)

In this screenshot, you can see the 5-day weather forecast feature of the Weather App. It displays the forecast for each day, including the day of the week, weather icon, high and low temperatures, allowing users to plan their activities accordingly.

Feel free to explore the Weather App further by trying it out yourself!


## Features

- **Real-time Weather Updates:** Obtain up-to-date information on current weather conditions, including temperature, humidity, wind speed, and more.
- **5-Day Weather Forecast:** Plan ahead with a detailed forecast for the next five days, enabling users to prepare for upcoming weather changes.
- **Auto-complete Search:** Easily search for locations by country, city, or capital using the auto-complete functionality, powered by the RestCountries API.
- **Responsive Design:** Enjoy a seamless user experience across various devices and screen sizes, ensuring accessibility and usability.

## Technologies Utilized

### HTML5
- **Usage:** HTML5 constitutes the foundational structure of the Weather App's user interface, delineating elements such as search bars, weather cards, and forecast displays.
- **Implementation:** HTML tags and attributes are leveraged to establish the layout and structure of the application's diverse components. Elements such as `<div>`, `<input>`, `<button>`, and `<svg>` tags are employed to define distinct sections and interactive elements within the app.

### CSS3
- **Usage:** CSS3 is harnessed for styling and customizing the visual aesthetics of the Weather App, ensuring an aesthetically pleasing and user-friendly interface.
- **Implementation:** CSS rules and properties are applied to HTML elements to govern aspects such as layout, typography, color schemes, and responsiveness. Selectors target specific elements to apply styles, while classes and IDs provide additional customization options.

### JavaScript
- **Usage:** JavaScript serves as the driving force behind the interactive functionalities of the Weather App, managing user input, fetching data from APIs, and dynamically updating content based on user interactions.
- **Implementation:** JavaScript functions and event listeners are employed to respond to user actions, such as button clicks and text input in search bars. The Fetch API is utilized to initiate HTTP requests to external APIs like OpenWeatherMap and RestCountries, facilitating the retrieval of weather data and country information in real-time.

### Font Awesome
- **Usage:** Font Awesome supplies scalable vector icons utilized to enhance the visual presentation of the Weather App, encompassing icons representing weather conditions, search buttons, and navigation elements.
- **Implementation:** Font Awesome icons are seamlessly integrated into the HTML structure via `<svg>` elements with appropriate classes. These icons are then styled and positioned using CSS to align with the design and functionality requirements of the application.

### OpenWeatherMap API
- **Usage:** The OpenWeatherMap API is employed to acquire weather data for diverse locations, encompassing current weather conditions and forecasts.
- **Implementation:** JavaScript fetch requests are executed to communicate with the OpenWeatherMap API endpoint, specifying the desired location as a parameter. The API responds with JSON data containing comprehensive weather information, which is subsequently parsed and presented to the user within the Weather App's interface.

### RestCountries API
- **Usage:** The RestCountries API is utilized to implement the auto-complete functionality within the Weather App's search bar, furnishing data pertaining to countries and their associated details.
- **Implementation:** JavaScript fetch requests are dispatched to the RestCountries API endpoint to retrieve a catalog of countries along with their respective details. This dataset is then utilized to populate the auto-complete dropdown menu, thereby enabling users to swiftly locate and select their desired location.

## Usage

To use the Weather App, follow these simple steps:

1. **Search for a Location:** Start by typing the name of a country, city, or capital into the search bar at the top of the application.

2. **Auto-complete Suggestions:** As you type, the app provides auto-complete suggestions based on the input. These suggestions include country names, city names, and capital names, making it easier to find your desired location.

3. **Select a Location:** Once you see the desired location in the auto-complete suggestions, either click on it or press Enter to select it.

4. **View Current Weather:** After selecting a location, the Weather App will display the current weather conditions for that location. This includes information such as temperature, weather description, wind speed, humidity, pressure, and more.

5. **Explore Forecast:** Additionally, you can explore the 5-day weather forecast for the selected location. Each day's forecast includes details like the day of the week, weather icon, high and low temperatures, allowing you to plan ahead accordingly.

6. **Responsive Design:** The Weather App is designed to be responsive, meaning it adapts to different screen sizes and devices. Whether you're using a desktop computer, laptop, tablet, or smartphone, you can access the app seamlessly and enjoy its full functionality.

7. **Enjoy Real-time Updates:** The app fetches real-time weather data from OpenWeatherMap API, ensuring that you receive the latest information for your selected location.

Feel free to explore different locations, check their current weather conditions, and plan your activities based on the forecast provided by the Weather App!


## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any features, enhancements, or bug fixes.

## License

[Insert License information here if applicable]



