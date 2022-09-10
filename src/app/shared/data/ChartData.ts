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
            series: [],
            date: new Date()
        }
}