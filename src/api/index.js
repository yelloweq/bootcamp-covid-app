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
function endpointGraph() {
    const
        AreaType = "nation",
        AreaName = "england";
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
    // const
    //     apiParams = `filters=${filters.join(";")}&structure=${JSON.stringify(structure)}`,
    //     encodedParams = encodeURI(apiParams);
    // return `https://api.coronavirus.data.gov.uk/v1/data?${encodedParams}`;
    const
        apiParams = {
            filters: filters.join(";"),
            structure: JSON.stringify(structure),
            // latestBy: "newCasesByPublishDate"
        };
    return apiParams;
}

export const graphData = async () => {
    try {
        const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data';

        const { data: {data} } = await axios.get(
            endpoint, {
            params: endpointGraph(),
            timeout: 10000
            }
        );
        const sctructuredData = data;
        return sctructuredData;

    } catch (error) {
        console.log("Testing");
        console.log(error);
    }
}