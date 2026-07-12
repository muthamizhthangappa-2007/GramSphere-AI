const cropCtx =
document.getElementById('cropChart');

new Chart(cropCtx, {
    type: 'bar',
    data: {
        labels: ['Paddy', 'Maize', 'Groundnut'],
        datasets: [{
            label: 'Production (Tons)',
            data: [40, 25, 18],
            borderWidth: 1
        }]
    }
});

const healthCtx =
document.getElementById('healthChart');

new Chart(healthCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'General',
            'Fever',
            'Diabetes'
        ],
        datasets: [{
            data: [50, 20, 16]
        }]
    }
});
