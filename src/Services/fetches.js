import { API_URL } from '../API.js';

const fetchData = async url => {
    try{
        const response = await fetch( url );
        const data = await response.json();
        return data;
        ;
    }catch(error){
        console.log(error);
    }
}

export const locationSearch = async city => {
    const url = `${API_URL}/search/?query=${city}`;
    const response = await fetchData(url);
    return response.then( resolve => locationId( resolve.woeid ) )
    // return await locationId( response.woeid )
    // const response = await fetch( url );
    // const data = await response.json();
    // const info = `${API_URL}/${data.woeid}/`;
    // const moreInfo = await fetch( info );
    // const infoxdd = await moreInfo.json();
    // return infoxdd;
}

export const locationId = async id => {
    const url = `${API_URL}/${id}/`;
    return await fetchData(url);
}

export const locationDate = async ( id , date ) => {
    const url = `${API_URL}/${id}/${date}`;
    return await fetchData(url);
}