import axios from 'axios';


const endpoint = (
    'https://covid19.mathdro.id/api'
);

const url = (
    'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england'
);

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(endpoint);
        const sctructuredData = { confirmed, recovered, deaths, lastUpdate }

        // const { data } = await axios.get(endpoint);
        // const sctructuredData = { data }

        return sctructuredData;

    } catch (error) {
        console.log(error);
    }
}

// (IBN) Using the same API file to fetch data for Graph page
// (IBN) Get API 
function getAPIdata(code) {
    const AreaType = "nation";
    var AreaName;
    switch (code) {
        case 0:
            AreaName = "england";
            break;
        case 1:
            AreaName = "scotland";
            break;
        case 2:
            AreaName = "wales";
            break;
        case 3:
            AreaName = "northern ireland";
            break;
    }    
        
    const
        filters = [
            `areaType=${AreaType}`,
            `areaName=${AreaName}`
        ],
        structure = {
            date: "date",
            name: "areaName",
            cases: {
                daily: "newCasesByPublishDate",
                cumulative: "cumCasesByPublishDate"
            },
            deaths: {
                daily: "newDeaths28DaysByPublishDate",
                cumulative: "cumDeaths28DaysByPublishDate"
            }
        };
    const
        apiParams = {
            filters: filters.join(";"),
            structure: JSON.stringify(structure),
        };
    return apiParams;
}

export const graphData = async () => {
    try {
        const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data';

        const areaData = new Array(4);
        for (let i = 0; i < areaData.length; i++) {
            const { data: {data} } = await axios.get(
                endpoint, {
                params: getAPIdata(i),
                timeout: 10000
                }
            );
            areaData[i] = data;
        }
        return areaData;
        // const { data: {data} } = await axios.get(
        //     endpoint, {
        //     params: getAPIdata(),
        //     timeout: 10000
        //     }
        // );
        // const sctructuredData = data;
        // return sctructuredData;

    } catch (error) {
        console.log("Testing");
        console.log(error);
    }
}