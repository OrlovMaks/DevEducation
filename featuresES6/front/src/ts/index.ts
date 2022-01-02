import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
// @ts-ignore
import Chart from "chart.js/auto";
import { select } from './constants';
const axios = require('axios');
let URL = 'http://localhost:3005/get-historycal-data'
const data = {
    labels: [],
    datasets: [{
        label: '# of Votes',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2,
    }]
};
const config = {
    type: 'line',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
let myChart = new Chart(
    document.getElementById('myChart'),
    config
)
getData()
function validateValue(): void {
    if (select.value === 'Historical data') {
        URL = 'http://localhost:3005/get-historycal-data'
        getData()
    }
    else if (select.value === 'Regional data') {
        URL = 'http://localhost:3005/get-regional-data'
        getData()
    }
}
async function getData(): Promise<void> {
    const resultHistorical = await axios.get(URL);
    sortData(resultHistorical.data.month)
    destroy()
    render()
}
function sortData(resultData: object): void {
    const days = Object.keys(resultData).sort()
    const stonks = Object.values(resultData)
    fillCanvas(days, stonks)
}

function fillCanvas(days: string[], stonks): void {
    data.labels = days;
    data.datasets[0].data = stonks;
}
function destroy(): void {
    myChart.destroy()
}
function render(): void {
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    )
}
select.addEventListener('change', validateValue)