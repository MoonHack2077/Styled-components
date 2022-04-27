import React , { useState , useEffect } from 'react';
import { Main , City , BackImg , SearchCity , SearchForm , SearchInput , SearchButton , WeatherImages , StateImg , Details , Span , StyledH2 , StyledH3 , Stats , Days , RecentSearches , Searched , StatusContainer } from './Home.style.js';
import { NextDay } from '../../Components/NextDay/NextDay.jsx';
import { Status } from '../../Components/Status/Status.jsx';

import { locationSearch , locationId } from '../../Services/fetches.js';
import { getImage } from '../../Helpers/getImage.js';
import { fixed } from '../../Helpers/fixed.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Home(){
    //latt_long , location_type , title , woeid
    const [ days , setDays ] = useState([]);
    const [ city , setCity ] = useState({});
    const [ search , setSearch ] = useState('');
    const [ recentSearches , setRecentSearches ] = useState([]);
    const [ loading , setLoading ] = useState(false);
    const london = 'san';

    const foo = e => {
        setSearch(e.target.value);
    }
    const getFormData = e => {
        e.preventDefaul();

        if( !search )  return;

        //Getting the form data
        const locationSearched = Object.fromEntries(
            new FormData(e.target)
        )
        //First console.log to look out with this, it´s the first time that i use it
        console.log(locationSearched);
        // const newSearches = [...recentSearches];
        // newSearches.push(data);
        // setRecentSearches(newSearches);
    }

    const fetched = () =>{
        setLoading(true);
        locationSearch(london)
        .then(res => {
            console.log(res[0]);
            locationId(res[0].woeid)
            .then(resolve => {
                const nextDays = [ ...resolve.consolidated_weather ];
                const today = resolve.consolidated_weather[0];
                const img = getImage(today.weather_state_abbr);
                setDays(nextDays.slice(1));
                setCity({ 
                    title: resolve.title ,  
                    parent: resolve.parent.title , 
                    state_img: img,
                    the_temp: fixed(today.the_temp) ,
                    ...today 
                });
                setLoading(false);
            })
        })
        .catch(console.log)
    }

    useEffect(()=>{
        fetched();
    },[])

    return(
        <>
        { !loading && <Main>
            <City>
                
                {/* <SearchCity>

                    <SearchForm onSubmit={ getFormData }>
                        <SearchInput value={ search } onChange={ foo } placeholder='Search a City'/>
                        <SearchButton className='inputForm' type='submit' value='Search' bg_color='#3e4af0'/>
                    </SearchForm>

                    <StyledH3 fz='Ypx'>Recent searches</StyledH3>

                    <RecentSearches>
                        {
                            recentSearches.map( search =>{
                                return <Searched> { `${search.title } ${<Span fz='30px' className='arrow'> &gt; </Span>}` } </Searched>
                            } )
                        }
                    </RecentSearches>

                </SearchCity>        */}

                <SearchButton className='toggleButton' type='button' value='Search for cities'  bg_color='#777'/>

                <WeatherImages >
                    <BackImg src='https://i.imgur.com/tQD1Cvm.png'/>
                    <StateImg src={ city.state_img }/>
                </WeatherImages>

                <Details>
                    <Span fz='30px'>{`${ city.the_temp } °C`}</Span>
                    <StyledH2 fz='1.5rem'>{ city.weather_state_name }</StyledH2>
                    <StyledH3 fz='Ypx'>{`Today - ${ city.applicable_date }`}</StyledH3>
                    <StyledH3 fz='Ypx'> <FontAwesomeIcon icon={ faMapMarkerAlt }/> {`${ city.title }, ${ city.parent }`}</StyledH3>
                </Details>

            </City>
            <Stats>

                <Days>
                    { days.map( day => {
                        const img = getImage(day.weather_state_abbr);
                        return <NextDay
                            key={ day.id } 
                            date={ day.applicable_date } 
                            min_temp={ fixed(day.min_temp) }
                            max_temp={ fixed(day.max_temp) } 
                            img={ img }
                         />
                    } ) }
                </Days>

                <StatusContainer>
                    <Status type='Wind status' num={ city.wind_speed } measure={ city.wind_direction_compass }/>
                    <Status type='Humidity' num={ city.humidity } measure='%'/>
                    <Status type='Visibility' num={ city.visibility } measure='miles'/>
                    <Status type='Air pressure' num={ city.air_pressure } measure='mb'/>
                </StatusContainer>

            </Stats>
        </Main>
    }
    </>
    );
}

export { Home }