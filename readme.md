# 🔍 API Testing O' Tool

## Overview:

This API Testing Tool is a modern, browser-based application designed to help developers and learners interactively test, analyze, and understand RESTful APIs. Inspired by tools like Postman but built for simplicity and accessibility, this tool is implemented using **HTML**, **CSS**, and **JavaScript**. It requires no installation or backend server, making it ideal for quick API exploration, debugging, and learning.

---

## Features

### 1. **Comprehensive HTTP Request Support**
- **Methods:** Supports all major HTTP methods including `GET`, `POST`, `PUT`, and `DELETE`, allowing you to test a wide range of API endpoints.
- **Custom API URLs:** Enter any API endpoint you wish to test, from public APIs to your own backend services.

### 2. **Flexible Request Configuration**
- **Custom Headers:** Add any HTTP headers in JSON format, such as `Authorization`, `Content-Type`, or custom headers required by specific APIs.
- **Authorization Token:** Quickly add a bearer token or API key for endpoints that require authentication, streamlining the process for protected APIs.
- **Request Body:** For `POST` and `PUT` requests, input JSON data directly into the request body field, enabling you to create or update resources as needed.

### 3. **Performance Charting**
- **Response Time Chart:** Visualize the response times of your last 10 requests using a dynamic line chart powered by Chart.js. This helps you spot trends, outliers, or performance regressions in real time.

---

## How to Use

1. **Clone or Download:**  
   Download or clone the repository to your local machine.
   ```bash
   git clone https://github.com/JeraldPascual/api-testing-tool.git
   cd api-testing-tool
   ```
2. **Open in Browser:**  
   Open `index.html` in any modern browser(Chrome, Firefox, Edge, Safari). No installation or server setup is required.
3. **Configure Your Request**  
  - Enter the API URL.
  - Select the HTTP method.
  - (Optional) Add an authorization token or custom headers in JSON format.
  - (Optional) For `POST/PUT`, enter a JSON request body.

---

## Example APIs to Try

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - `https://jsonplaceholder.typicode.com/posts/1`
- [GitHub API](https://api.github.com/)
  - `https://api.github.com/users/octocat`
- [PokeAPI](https://pokeapi.co/)
  - `https://pokeapi.co/api/v2/pokemon/ditto`

---

## Headers Format (Example)

```json
{
  "Authorization": "Bearer your_token_here",
  "Content-Type": "application/json"
}
```

---

## Technologies Used
  - HTML5 & CSS3: For responsive, accessible, and visually appealing layouts.
  - JavaScript (Vanilla): Handles all logic, API requests, and dynamic UI updates.
  - Chart.js: Renders the interactive response time chart.
  - Custom Fonts: Uses Bebas Neue and Nunito for a modern look.



