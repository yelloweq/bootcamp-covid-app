import axios from 'axios';


const endpoint = (
    'https://covid19.mathdro.id/api'
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