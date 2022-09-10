export class Chart {
    charts!: ChartData[];
}

export class ChartData {
    chart?: {
        type: string;
    }
    credits?: {
        enabled: boolean
    }
    title?: {
        text: string;
    };
    xAxis?: {
        categories: any[]
    }
    yAxis?: {
        min: number,
        title: {
            text: string;
        }
    }
    legend?: {
        reversed: boolean;
    }
    plotOptions?: {
        series: {
            stacking: string
        }
    }
    series?: Series[]
    date?: Date
}

export class Series {
    type?: string;
    name?: string;
    data?: any;
    color?: string;
}

export class Charts {
    title!: any;
    dates!: any;
    type!: any;
}