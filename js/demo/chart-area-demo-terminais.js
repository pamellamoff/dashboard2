// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChartTerminais");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Gustavo", "Pâmella", "Rangel", "Thalles"],
    datasets: [{
      label: "Meta",
      lineTension: 0.3,
      backgroundColor: "rgba(28,11,219,1)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(28,11,219,0.5)",
      pointBorderColor: "rgba(28,11,219,0.5)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(28,11,219,0.25)",
      pointHoverBorderColor: "rgba(28,11,219,0.25)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [30000, 35000, 20000, 25000],
    },
    {
      label: 'Realizado',
      lineTension: 0.3,
      backgroundColor: "rgba(7,186,160,0.5)",
      borderColor: "rgba(7,186,160,0.5)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(7,186,160,0.5)",
      pointBorderColor: "rgba(7,186,160,0.5)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(7,186,160,1)",
      pointHoverBorderColor: "rgba(7,186,160,1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [40000, 25000, 15000, 30000],
    },
    {
      label: 'Projeção',
      lineTension: 0.3,
      backgroundColor: "rgba(11,219,101,1)",
      borderColor: "rgba(11,219,101,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(11,219,101,1)",
      pointBorderColor: "rgba(11,219,101,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(11,219,101,0.5)",
      pointHoverBorderColor: "rgba(11,219,101,0.5)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [20000, 30000, 18000, 35000],
    }],
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '$' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});