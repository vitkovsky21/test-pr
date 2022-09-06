import { Options } from "highcharts";

export const testChartOptions: Options[] = [
    {
      chart: {
          type: 'bar'
      },
      credits: {
          enabled: false
      },
      title: {
        text: 'UEFA CL top scorers by season'
      },
      xAxis: {
        categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Goals'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        type: 'line',
        name: 'Cristiano Ronaldo',
        data: [4, 4, 6, 15, 12]
      }, {
        type: 'line',
        name: 'Lionel Messi',
        data: [5, 3, 12, 6, 11]
      }, {
        type: 'line',
        name: 'Robert Lewandowski',
        data: [5, 15, 8, 5, 8]
      }]
    },
    {
        chart: {
            type: 'bar'
        },
        credits: {
            enabled: false
        },
        title: {
          text: 'UEFA CL top scorers by season'
        },
        xAxis: {
          categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Goals'
          }
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          type: 'line',
          name: 'Cristiano Ronaldo',
          data: [4, 4, 6, 15, 12]
        }, {
          type: 'line',
          name: 'Lionel Messi',
          data: [5, 3, 12, 6, 11]
        }, {
          type: 'line',
          name: 'Robert Lewandowski',
          data: [5, 15, 8, 5, 8]
        }]
    }
]