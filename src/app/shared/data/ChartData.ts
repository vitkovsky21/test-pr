import { ChartData } from "../chart";

export class ChartTemp {

    static charts: ChartData = 
        {
            chart: {
                type: ''
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ["2020/21", "2019/20", "2018/19", "2017/18", "2016/17"]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: "normal"
                }
            },
            series: [
            {
                type: "line",
                name: "Cristiano Ronaldo",
                data: [4, 4, 6, 15, 12]
              }, {
                type: "line",
                name: "Lionel Messi",
                data: [5, 3, 12, 6, 11]
              }, {
                type: "line",
                name: "Robert Lewandowski",
                data: [5, 15, 8, 5, 8]
              }
            ],
            date: new Date()
        }
}