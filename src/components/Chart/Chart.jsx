import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (data) => {
    const { data: { props } } = data;
    var dataArray = props;

    var maxDate = new Date(dataArray[0][0].date).getTime();
    // console.log("Max: " + maxDate);
    var innerLength = dataArray[0].length;
    var minDate = new Date(dataArray[0][innerLength - 1].date).getTime();
    // console.log("Min: " + minDate);

    var areaName = new Array(dataArray.length);
    var areaCumulativeCases = new Array(dataArray.length);
    for (var i = 0; i < dataArray.length; i++) {
        areaName[i] = dataArray[i][0].name;
        areaCumulativeCases[i] = new Array(innerLength);
        for (var j = 0; j < innerLength; j++) {
            areaCumulativeCases[i][j] = [
                new Date(dataArray[i][j].date).getTime(),
                dataArray[i][j].cases.cumulative
            ];
        }
    }
    console.log(areaName);
    console.log(areaCumulativeCases);
    // var dataArray = data.data.props;
    // var areaEngland = dataArray[0].name;
    // var casesEngland = new Array(dataArray.length);
    // var maxDate = new Date(dataArray[0].date).getTime();
    // var minDate = new Date(dataArray[dataArray.length - 1].date).getTime();

    // for (var i = 0; i < dataArray.length; i++) {
    //     casesEngland[i] = [
    //         new Date(dataArray[i].date).getTime(), 
    //         dataArray[i].cases.cumulative 
    //     ];
    // }
    // console.log(casesEngland);

    const options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'COVID-19 cumulative cases by area'
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
                // (IBN) England
                name: areaName[0],
                type: undefined,
                data: areaCumulativeCases[0]
            },
            {
                // (IBN) Scotland
                name: areaName[1],
                type: undefined,
                data: areaCumulativeCases[1]
            },
            {
                // (IBN) Wales
                name: areaName[2],
                type: undefined,
                data: areaCumulativeCases[2]
            },
            {
                // (IBN) Northern Ireland
                name: areaName[3],
                type: undefined,
                data: areaCumulativeCases[3]
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