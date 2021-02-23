import axios from 'axios';

const endpoint = (
    'https://covid19.mathdro.id/api'
);

const url = (
    'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england'
);

export const fetchData = async () =>  {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(endpoint);
        
        const sctructuredData = { confirmed, recovered, deaths, lastUpdate }

        return sctructuredData;

    } catch (error) {
        console.log(error);
    }
}