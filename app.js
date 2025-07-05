const responseTimes = [];
const maxHistory = 10;

// function to update the chart with new response time
function updateChart(time) {
  if (responseTimes.length >= maxHistory) responseTimes.shift();
  responseTimes.push(time);
  chart.update();
}

// chart object to display response times
const chart = new Chart(document.getElementById("chart").getContext("2d"), {
  type: "line",
  data: {
    labels: Array(maxHistory)
      .fill("")
      .map((_, i) => `#${i + 1}`),
    datasets: [
      {
        label: "Response Time (ms)",
        data: responseTimes,
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "#007bff",
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: { beginAtZero: true },
    },
  },
});

async function analyzeAPI() {
  const url = document.getElementById("url").value;
  const method = document.getElementById("method").value;
  const token = document.getElementById("auth").value.trim();
  const rawHeaders = document.getElementById("headers").value;
  const rawBody = document.getElementById("body").value;
  const resultsDiv = document.getElementById("results");

  let headers = {};
  try {
    if (rawHeaders.trim()) headers = JSON.parse(rawHeaders);
  } catch (e) {
    resultsDiv.innerHTML = `<p style="color: red;">Invalid header JSON</p>`;
    return;
  }

  // checks if the token is provided and adds it to the headers
  if (token) headers["Authorization"] = token;

  let options = { method, headers };

  if (["POST", "PUT"].includes(method.toUpperCase()) && rawBody.trim()) {
    try {
      options.body = JSON.stringify(JSON.parse(rawBody));
    } catch (e) {
      resultsDiv.innerHTML = `<p style="color: red;">Invalid body JSON</p>`;
      return;
    }
  }

  // performance API is used to measure the response time
  const start = performance.now();
  try {
    const response = await fetch(url, options);
    const end = performance.now();

    const responseTime = Math.round(end - start);
    const status = response.status;
    const headersText = [...response.headers.entries()]
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");


    // handle both JSON and text responses
    let data;
    try {
      data = await response.json();
    } catch {
      data = await response.text();
    }

    resultsDiv.innerHTML = `
  <div class="header-response-flex">
    <div class="header-box">
      <p><strong>Status:</strong> ${status}</p>
      <p><strong>Time:</strong> ${responseTime} ms</p>
      <p><strong>Headers:</strong></p>
      <pre class="header">${headersText}</pre>
    </div>
    <div class="response-box">
      <p><strong>Response:</strong></p>
      <pre>${
        typeof data === "string" ? data : JSON.stringify(data, null, 2)
      }</pre>
    </div>
  </div>
`;
    // listen for the response time and update the chart
    updateChart(responseTime);


    // store the API call in local storage for history
    const history = JSON.parse(localStorage.getItem("apiHistory") || "[]");
    history.unshift({ url, method, responseTime });
    localStorage.setItem("apiHistory", JSON.stringify(history.slice(0, 10)));
  } catch (err) {
    resultsDiv.innerHTML = `<p style="color: red;">Error: ${err.message}</p>`;
    alert(`${err.message}`);
  }
}
