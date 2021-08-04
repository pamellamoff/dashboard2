// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChartServico");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Gustavo", "Pâmella", "Rangel","Thalles"],
    datasets: [{
      data: [40, 20, 30, 10],
      backgroundColor: ['#5b0bdb', '#d61b7c', '#9c27b0','#9b27b09d'],
      hoverBackgroundColor: ['#5b0bdb', '#d61b7c', '#9c27b0','#9b27b09d'],
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