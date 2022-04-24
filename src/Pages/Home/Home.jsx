import React , { useState , useEffect } from 'react';
import { Main , City , Search , WeatherImages , StateImg , Details , StyledSpan , Others } from './Home.style.js';

import { locationSearch , locationId } from '../../Services/fetches.js';
import { getImage } from '../Home/Helpers/getImage.js';

function Home(){
    //latt_long , location_type , title , woeid
    const [ city , setCity ] = useState({});
    const [ data , setData ] = useState({});
    const london = 'london';

    const fetched = () =>{
        locationSearch(london)
        .then(res => {
            setCity(res[0]);
            locationId(city.woeId)
            .then(res => {
                setData(res.consolidated_weather.pop())
                })
            .catch(console.log)
        })
        .catch(console.log)
    }

    useEffect(()=>{
        fetched();
    },[])

    return(
        <Main>
            <City>                
                <Search bg_color='#777'>Search for places</Search>
                <WeatherImages bg_img='https://i.imgur.com/tQD1Cvm.png'>
                    <StateImg src={getImage(data.weather_state_abbr)}/>
                </WeatherImages>
                <Details>
                    <StyledSpan fz='Ypx'>temperature C</StyledSpan>
                    <StyledSpan fz='Ypx'>weather</StyledSpan>
                    <StyledSpan fz='Ypx'>day - date</StyledSpan>
                    <StyledSpan fz='Ypx'>icon - city - parent</StyledSpan>
                </Details>
            </City>
            <Others>
                XDD
            </Others>
        </Main>
    );
}

export { Home }