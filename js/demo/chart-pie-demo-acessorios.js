// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChartAcessorios");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Gustavo", "Pâmella", "Rangel","Thalles"],
    datasets: [{
      data: [40, 20, 30, 10],
      backgroundColor: ['#5B0BDB', '#9D0BDB', '#0B7FDB','#0bdbb9'],
      hoverBackgroundColor: ['#5B0BDB', '#9D0BDB', '#0B7FDB','#0bdbb9'],
      hoverBorderColor: "rgba(220, 224, 224, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
     
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});