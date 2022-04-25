import React , { useState , useEffect } from 'react';
import { Main , City , Search , WeatherImages , StateImg , Details , StyledSpan , StyledH2 , StyledH3 , Others } from './Home.style.js';
import { NextDay } from '../../Components/NextDay/NextDay.jsx';
import { Status } from '../../Components/Status/Status.jsx';

import { locationSearch } from '../../Services/fetches.js';
import { getImage } from '../Home/Helpers/getImage.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Home(){
    //latt_long , location_type , title , woeid
    const [ days , setDays ] = useState([]);
    const [ city , setCity ] = useState({ title: '' , parent: '' , state_name: '' , state_abbr: '' , date: '' , the_temp: ''});
    const london = 'london';

    const fetched = () =>{
        locationSearch(london)
        .then(res => {
            const nextDays = res.consolidated_weather;
            setDays(nextDays);
            setCity({ 
                title: res.title , 
                parent: res.parent.title , 
                state_name: nextDays[0].weather_state_name,
                state_abbr: nextDays[0].weather_state_abbr,
                date: nextDays[0].applicable_date,
                the_temp:  nextDays[0].the_temp
            });
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
                    <StateImg src={ () => getImage(city.state_abbr) }/>
                </WeatherImages>
                <Details>
                    <StyledSpan fz='30px'>{`${ city.the_temp } °C`}</StyledSpan>
                    <StyledH2 fz='1.5rem'>{ city.state_name }</StyledH2>
                    <StyledH3 fz='Ypx'>{`Today - ${ city.date }`}</StyledH3>
                    <StyledH3 fz='Ypx'>{`${ <FontAwesomeIcon icon={faMapMarkerAlt}/> } ${ city.title }, ${ city.parent }`}</StyledH3>
                </Details>
            </City>
            <Others>
                { days.map( day => {
                    return <NextDay/>
                } ) }
                <Status/>
            </Others>
        </Main>
    );
}

export { Home }