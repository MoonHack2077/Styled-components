import { API_URL } from '../API.js';

const fetchData = async url => {
    try{
        const response = await fetch( url );
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export const searchByCityName = async cityName => {
    const url = `${API_URL}/search/?query=${ cityName }`;
    return await fetchData(url);
}

export const searchByWoeid = async woeid => {
    const url = `${API_URL}/${ woeid }/`;
    return await fetchData(url);
}

export const searchByLattLong = async ( latt , long ) => {
    const url = `${API_URL}/search/?lattlong=${ latt },${ long }`;
    return await fetchData(url);
}