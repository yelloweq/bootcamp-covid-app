import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (data) => {

    var dataArray = data.data.props;
    var areaEngland = dataArray[0].name;
    var casesEngland = new Array(dataArray.length);
    var maxDate = new Date(dataArray[0].date).getTime();
    var minDate = new Date(dataArray[dataArray.length - 1].date).getTime();

    for (var i = 0; i < dataArray.length; i++) {
        casesEngland[i] = [
            new Date(dataArray[i].date).getTime(), 
            dataArray[i].cases.cumulative 
        ];
    }
    console.log(casesEngland);

    const options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'COVID-19 cases by area'
        },
        xAxis: {
            type: 'datetime',
            min: minDate,
            max: maxDate,
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'Cummulative cases'
            }
        },
        series: [
            {
                name: areaEngland,
                type: undefined,
                data: casesEngland
            }
        ]
    };

    return(
        <div id="container">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default Chart;