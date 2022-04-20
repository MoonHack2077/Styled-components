const API_URL = 'https://www.metaweather.com/api/location';

const fetchData = async url =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const locationSearch = async city => {
    const url = `${API_URL}/search/?query=${city}`;
    return await fetchData(url);
}

export const locationId = async id => {
    const url = `${API_URL}/${id}/`;
    return await fetchData(url);
}

export const locationDate = async (id , date) => {
    const url = `${API_URL}/${id}/${date}`;
    return await fetchData(url);
}


