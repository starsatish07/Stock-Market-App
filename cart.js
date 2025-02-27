// Sample dataset (replace with actual API or JSON data)
const indices = [
    {
        "index_name": "Nifty 50",
        "index_date": "2024-03-22",
        "open_index_value": 21932.2,
        "high_index_value": 22180.7,
        "low_index_value": 21883.3,
        "closing_index_value": 22096.75,
        "points_change": 84.8,
        "change_percent": 0.39,
        "volume": 388656439,
        "turnover_rs_cr": 39023.19,
        "pe_ratio": 22.81,
        "pb_ratio": 3.87,
        "div_yield": 1.21
    },
    {
        "index_name": "Nifty Bank",
        "index_date": "2024-03-22",
        "open_index_value": 46634.9,
        "high_index_value": 46974.15,
        "low_index_value": 46566.8,
        "closing_index_value": 46863.75,
        "points_change": 178.85,
        "change_percent": 0.38,
        "volume": 172184807,
        "turnover_rs_cr": 10851.42,
        "pe_ratio": 15.56,
        "pb_ratio": 2.73,
        "div_yield": 0.79
    },
    {
        "index_name": "Nifty IT",
        "index_date": "2024-03-22",
        "open_index_value": 35256.6,
        "high_index_value": 35419.25,
        "low_index_value": 34701.75,
        "closing_index_value": 35188.4,
        "points_change": -838.4,
        "change_percent": -2.33,
        "volume": 48826144,
        "turnover_rs_cr": 8475.18,
        "pe_ratio": 30.1,
        "pb_ratio": 7.64,
        "div_yield": 2.02
    },{
        "index_name": "NIFTY Smallcap 100",
        "index_date": "2024-03-22",
        "open_index_value": 14955.65,
        "high_index_value": 15092.95,
        "low_index_value": 14918.35,
        "closing_index_value": 15056.75,
        "points_change": 96.45,
        "change_percent": 0.64,
        "volume": 331447979,
        "turnover_rs_cr": 7266.15,
        "pe_ratio": 27.74,
        "pb_ratio": 3.71,
        "div_yield": 0.78
      },
      {
        "index_name": "Nifty50 Dividend Points",
        "index_date": "2024-03-22",
        "open_index_value": "NaN",
        "high_index_value": "NaN",
        "low_index_value": "NaN",
        "closing_index_value": 220.59,
        "points_change": 0,
        "change_percent": "NaN",
        "volume": "NaN",
        "turnover_rs_cr": "NaN",
        "pe_ratio": "NaN",
        "pb_ratio": "NaN",
        "div_yield": "NaN"
      },
      {
        "index_name": "Nifty Auto",
        "index_date": "2024-03-22",
        "open_index_value": 20706.4,
        "high_index_value": 21177.4,
        "low_index_value": 20622.8,
        "closing_index_value": 21046.4,
        "points_change": 346.15,
        "change_percent": 1.67,
        "volume": 52410949,
        "turnover_rs_cr": 6130.82,
        "pe_ratio": 26.91,
        "pb_ratio": 6.02,
        "div_yield": 0.86
      },
      {
        "index_name": "Nifty Bank",
        "index_date": "2024-03-22",
        "open_index_value": 46634.9,
        "high_index_value": 46974.15,
        "low_index_value": 46566.8,
        "closing_index_value": 46863.75,
        "points_change": 178.85,
        "change_percent": 0.38,
        "volume": 172184807,
        "turnover_rs_cr": 10851.42,
        "pe_ratio": 15.56,
        "pb_ratio": 2.73,
        "div_yield": 0.79
      },
      {
        "index_name": "Nifty Energy",
        "index_date": "2024-03-22",
        "open_index_value": 38314.05,
        "high_index_value": 38618.05,
        "low_index_value": 38107.95,
        "closing_index_value": 38411.55,
        "points_change": 83.2,
        "change_percent": 0.22,
        "volume": 119522088,
        "turnover_rs_cr": 6535.16,
        "pe_ratio": 12.99,
        "pb_ratio": 2.48,
        "div_yield": 2.26
      },
      {
        "index_name": "Nifty Financial Services",
        "index_date": "2024-03-22",
        "open_index_value": 20693.75,
        "high_index_value": 20846.05,
        "low_index_value": 20667.35,
        "closing_index_value": 20783.55,
        "points_change": 68.75,
        "change_percent": 0.33,
        "volume": 119873388,
        "turnover_rs_cr": 12281,
        "pe_ratio": 17.34,
        "pb_ratio": 3.25,
        "div_yield": 0.81
      }, {
        "index_name": "Nifty IT",
        "index_date": "2024-03-22",
        "open_index_value": 35256.6,
        "high_index_value": 35419.25,
        "low_index_value": 34701.75,
        "closing_index_value": 35188.4,
        "points_change": -838.4,
        "change_percent": -2.33,
        "volume": 48826144,
        "turnover_rs_cr": 8475.18,
        "pe_ratio": 30.1,
        "pb_ratio": 7.64,
        "div_yield": 2.02
      },
      {
        "index_name": "Nifty Media",
        "index_date": "2024-03-22",
        "open_index_value": 1823.45,
        "high_index_value": 1858.8,
        "low_index_value": 1821.45,
        "closing_index_value": 1849.8,
        "points_change": 22.85,
        "change_percent": 1.25,
        "volume": 84690718,
        "turnover_rs_cr": 488.1,
        "pe_ratio": "NaN",
        "pb_ratio": 1.97,
        "div_yield": 0.48
      },
      {
        "index_name": "Nifty Metal",
        "index_date": "2024-03-22",
        "open_index_value": 8029.85,
        "high_index_value": 8169.45,
        "low_index_value": 7983.35,
        "closing_index_value": 8130.8,
        "points_change": 78.05,
        "change_percent": 0.97,
        "volume": 179125574,
        "turnover_rs_cr": 4023.56,
        "pe_ratio": 26.8,
        "pb_ratio": 2.39,
        "div_yield": 2.37
      },
      {
        "index_name": "Nifty MNC",
        "index_date": "2024-03-22",
        "open_index_value": 25184.85,
        "high_index_value": 25490.5,
        "low_index_value": 25133.3,
        "closing_index_value": 25455.6,
        "points_change": 241.45,
        "change_percent": 0.96,
        "volume": 33412580,
        "turnover_rs_cr": 4738.69,
        "pe_ratio": 42.04,
        "pb_ratio": 8.83,
        "div_yield": 1.82
      },
      {
        "index_name": "Nifty Pharma",
        "index_date": "2024-03-22",
        "open_index_value": 18594.75,
        "high_index_value": 18881.25,
        "low_index_value": 18583.75,
        "closing_index_value": 18815.6,
        "points_change": 233,
        "change_percent": 1.25,
        "volume": 21427168,
        "turnover_rs_cr": 2429.73,
        "pe_ratio": 35.92,
        "pb_ratio": 5.13,
        "div_yield": 0.73
      },
      {
        "index_name": "Nifty PSU Bank",
        "index_date": "2024-03-22",
        "open_index_value": 6831.05,
        "high_index_value": 6909.95,
        "low_index_value": 6810.6,
        "closing_index_value": 6888.5,
        "points_change": 65.85,
        "change_percent": 0.97,
        "volume": 153374001,
        "turnover_rs_cr": 3042.58,
        "pe_ratio": 9.4,
        "pb_ratio": 1.59,
        "div_yield": 1.54
      },
      {
        "index_name": "Nifty Realty",
        "index_date": "2024-03-22",
        "open_index_value": 863.5,
        "high_index_value": 876.8,
        "low_index_value": 860.4,
        "closing_index_value": 874.5,
        "points_change": 15.1,
        "change_percent": 1.76,
        "volume": 12555449,
        "turnover_rs_cr": 1267.1,
        "pe_ratio": 54.72,
        "pb_ratio": 5.56,
        "div_yield": 0.26
      },
      {
        "index_name": "Nifty India Consumption",
        "index_date": "2024-03-22",
        "open_index_value": 9889.35,
        "high_index_value": 10022.3,
        "low_index_value": 9872.35,
        "closing_index_value": 9994.55,
        "points_change": 107.15,
        "change_percent": 1.08,
        "volume": 95608065,
        "turnover_rs_cr": 11942.69,
        "pe_ratio": 45.72,
        "pb_ratio": 8.56,
        "div_yield": 1.03
      },
    // Add more indices as needed
];

// Initialize Chart.js
let stockChart;

// Function to render the chart
function renderChart(index) {
    const ctx = document.getElementById('stockChart').getContext('2d');
    if (stockChart) {
        stockChart.destroy(); // Destroy existing chart
    }
    stockChart = new Chart(ctx, {
        type: 'line', // Line chart
        data: {
            labels: ['Open', 'High', 'Low', 'Close'], // X-axis labels
            datasets: [{
                label: `${index.index_name} Index Values`,
                data: [
                    index.open_index_value,
                    index.high_index_value,
                    index.low_index_value,
                    index.closing_index_value
                ],
                borderColor: '#007BFF',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart to resize
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// Function to populate the index list
function populateIndexList() {
    const indexList = document.getElementById('indexList');
    indices.forEach(index => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = index.index_name;
        a.addEventListener('click', () => {
            document.getElementById('selectedIndex').textContent = index.index_name;
            renderChart(index);
        });
        li.appendChild(a);
        indexList.appendChild(li);
    });
}

// Initialize the page
function init() {
    populateIndexList();
    if (indices.length > 0) {
        document.getElementById('selectedIndex').textContent = indices[0].index_name;
        renderChart(indices[0]); // Render chart for the first index by default
    }
}

// Load the page
init();