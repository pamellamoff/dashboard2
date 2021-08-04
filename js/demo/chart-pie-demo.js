// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["G1", "G2", "G3","G4", "G5","G6"],
    datasets: [{
      data: [10, 20, 30, 10, 10, 10],
      backgroundColor: ['#0bdb65', '#0bdbb9', '#1c0bdb', '#5b0bdb','#9d0bdb', '#07baa0'],
      hoverBackgroundColor: ['#0bdb65', '#0bdbb9', '#1c0bdb', '#5b0bdb','#9d0bdb', '#07baa0'],
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