import React , { useState , useEffect } from 'react';
import { Main , City , SearchCity , SearchForm , SearchInput , SearchButton , WeatherImages , StateImg , Details , StyledSpan , StyledH2 , StyledH3 , Stats , Days , StatusContainer } from './Home.style.js';
import { NextDay } from '../../Components/NextDay/NextDay.jsx';
import { Status } from '../../Components/Status/Status.jsx';

import { locationSearch } from '../../Services/fetches.js';
import { getImage } from '../Home/Helpers/getImage.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Home(){
    //latt_long , location_type , title , woeid
    const [ days , setDays ] = useState([]);
    const [ city , setCity ] = useState({ title: '' , parent: '' , state_img: ''  });
    const london = 'london';

    const fetched = () =>{
        locationSearch(london)
        .then(res => {
            const nextDays = res.consolidated_weather;
            const today = nextDays[0];
            const img = getImage(today.weather_state_abbr);
            setDays(nextDays);
            setCity({ 
                title: res.title ,  
                parent: res.parent.title , 
                state_img: img, 
                ...today 
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
                <SearchCity>
                    <SearchForm>
                        <SearchInput placeholder='Search a City'/>
                        <SearchButton type='submit' value='Search' />
                    </SearchForm>
                </SearchCity>                
                <SearchButton type='button' value='Search for cities'  bg_color='#777'/>
                <WeatherImages bg_img='https://i.imgur.com/tQD1Cvm.png'>
                    <StateImg src={ city.state_img }/>
                </WeatherImages>
                <Details>
                    <StyledSpan fz='30px'>{`${ city.the_temp } °C`}</StyledSpan>
                    <StyledH2 fz='1.5rem'>{ city.weather_state_name }</StyledH2>
                    <StyledH3 fz='Ypx'>{`Today - ${ city.applicable_date }`}</StyledH3>
                    <StyledH3 fz='Ypx'>{`${ <FontAwesomeIcon icon={ faMapMarkerAlt }/> } ${ city.title }, ${ city.parent }`}</StyledH3>
                </Details>
            </City>
            <Stats>
                <Days>
                    { days.map( day => {
                        const img = getImage(day.weather_state_abbr);
                        return <NextDay 
                            date={ day.applicable_date } 
                            min_temp={ day.min_temp }
                            max_temp={ day.max_temp } 
                            img={ img }/
                        >
                    } ) }
                </Days>
                <StatusContainer>
                    <Status type={ city.wind_speed } measure={ city.wind_direction_compass }/>
                    <Status type={ city.humidity } measure='%'/>
                    <Status type={ city.visibility } measure='miles'/>
                    <Status type={ city.air_pressure } measure='mb'/>
                </StatusContainer>
            </Stats>
        </Main>
    );
}

export { Home }