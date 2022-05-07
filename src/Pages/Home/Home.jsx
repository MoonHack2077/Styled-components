import React , { useState , useEffect } from 'react';
import { Main , City , MyGitHub , SwitchTemperature ,RightSide , HighLights , BackImg , Footer , SearchCity , SearchForm , SearchInput , SearchButton , WeatherImages , StateImg , Details , Span , StyledH2 , StyledH3 , Stats , Days , RecentSearches , Searched , StatusContainer } from './Home.style.js';
import { NextDay } from '../../Components/NextDay/NextDay.jsx';
import { Status } from '../../Components/Status/Status.jsx';
import { Circle } from '../../Components/Circle/Circle.jsx';
import { gray , textColor } from '../../constants.js';

import { locationSearch , locationId , lattlong } from '../../Services/fetches.js';
import { getImage } from '../../Helpers/getImage.js';
import { roundValue } from '../../Helpers/roundValue.js';
import { convertToFh } from '../../Helpers/convertToFh.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const KEY = 'RECENTSEARCHES';

function Home(){
    //Variable to kwon if there are searches at the localStorage
    const searches = localStorage.getItem( KEY ) ? JSON.parse( localStorage.getItem( KEY ) ) : [];

    //Declaring states
    const [ days , setDays ] = useState([]);
    const [ city , setCity ] = useState({});
    const [ search , setSearch ] = useState('');
    const [ recentSearches , setRecentSearches ] = useState(searches);
    const [ loading , setLoading ] = useState(false);
    const [ showSearch , setShowSearch ] = useState(false);
    const [ counter , setCounter ] = useState(0);
    const [ isCelcius , setIsCelcius ] = useState(true);

    //This is the city that will appear by default
    //Even thoug this will become to the user´s current location 
    const cityByDefault = 'san';

    const changeSearch = e => {
        setSearch(e.target.value);
    }

    const changeShowSearch = () => {
        setShowSearch(!showSearch);
    }

    const preventReload = e => {
        e.preventDefault();
    }

    const searchCity = () => {
        if( !search ) return;
        const recents = [ ...recentSearches ] ;
        const recentsLower = recents.map( cities => cities.toLowerCase() );
        const searchLower = search.toLowerCase();
        if( recentsLower.some( cities =>  (cities === searchLower) || 
        (cities.includes(searchLower)) ) ) return;

        fetchCity(search);
        setSearch('');     
    }
    
    const setRecents = () => {
        if( counter < 2 ) return;
        if( !city.title || recentSearches.includes(city.title) ) return;
        const recents = [ ...recentSearches ];

        if( recents.length === 7 ) recents.splice(-1);

        recents.unshift(city.title);
        setRecentSearches(recents);      
    }

    const turnToDay = date => {
        const day = new Date(date);

        //return the first 3 elements (day , month and date), those are what I need to display
        const dayToDisplay = day.toString().split(' ').splice(0,3);
        return `${ dayToDisplay[0] }, ${ dayToDisplay[2] } ${ dayToDisplay[1] }`
    }

    const geo = () => {
        const { geolocation } = navigator;
        const coordinates = pos =>{
            console.log(pos.coords);
        }
        const err = e =>{
            console.log(e)
        }
        const options = {
            enabledHightAccuracy: true,
            timeout: 0,
            maximumAge: 0
        }
        return geolocation.getCurrentPosition(coordinates,err,options);
    }
    console.log(geo());

    const fetchCity = searched => {
        setLoading(true);

        locationSearch(searched)
        .then(response => {
            locationId(response[0]?.woeid)
            .then(resolve => {
                const nextDays = [ ...resolve?.consolidated_weather ];
                const today = resolve?.consolidated_weather[0];
                const img = getImage(today.weather_state_abbr);
                const windDirection = today.wind_direction;
                const visibility = today.visibility;
                const temp = today.the_temp;
                const humidity = today.humidity;
                const airPressure = today.air_pressure;

                setDays(nextDays.slice(1));
                setCity({ 
                    title: resolve?.title,  
                    parent: resolve?.parent, 
                    img,
                    windDirection,
                    temp,
                    humidity,
                    visibility,
                    airPressure,
                    ...today 
                });
                setCounter( currCounter => currCounter + 1 )
                setLoading(false);
            })
        })
        .catch(console.log)
    }

    //UseEffects
    useEffect( () => {
        fetchCity(cityByDefault);
    },[])

    useEffect( () => {
        setShowSearch(false);
        setRecents();
    },[city])

    useEffect( () => {
        localStorage.setItem( KEY, JSON.stringify(recentSearches) );
    },[recentSearches])

    return(
        <>
        { !loading && <Main>
            <City>
                
                { showSearch && <SearchCity>

                    <SearchButton 
                        className='toggleButton' 
                        type='button' 
                        value='X'
                        bg_color='transparent'
                        right='5px'   
                        top='10px'
                        fz='18px'
                        onClick={ changeShowSearch }
                    />
                    <SearchForm onSubmit={ preventReload }>
                        <SearchInput value={ search } onChange={ changeSearch } placeholder='Search a City'/>
                        <SearchButton 
                        className='inputForm' 
                        type='submit' 
                        value='Search' 
                        bg_color='#3e4af0'
                        onClick={ searchCity }                 
                        />
                    </SearchForm>


                    <RecentSearches>
                        <StyledH3 className='recents'>Recent searches</StyledH3>
                        {
                            recentSearches.map( (search,index) =>{
                                return <Searched onClick={()=>fetchCity(search)} key={index}>{search}<Span fz='20px' className='arrow'>{'>'}</Span> </Searched>
                            } )
                        }
                    </RecentSearches>

                </SearchCity>    }   

                <SearchButton 
                    className='toggleButton' 
                    type='button' 
                    value='Search for cities'  
                    bg_color={ gray }
                    left='20px'   
                    top='20px'
                    onClick={ changeShowSearch }
                />

                <WeatherImages >
                    <BackImg src='https://i.imgur.com/tQD1Cvm.png'/>
                    <StateImg src={ city.img }/>
                </WeatherImages>

                <Details>
                    <Span fz='40px'>{ isCelcius ? `${ roundValue(city.the_temp) }°C` : `${ convertToFh(city.the_temp) }°F`}</Span>
                    <StyledH2 fz='1.5rem'>{ city.weather_state_name }</StyledH2>
                    <StyledH3 fz='Ypx'>Today  -   { turnToDay(city.applicable_date) }</StyledH3>
                    <StyledH3 fz='Ypx'> <FontAwesomeIcon icon={ faMapMarkerAlt }/> {`${ city.title }, ${ city.parent?.title }`}</StyledH3>
                </Details>

            </City>
            <RightSide>
                <SwitchTemperature>
                    <Circle content='°C' switchTemp={ () => setIsCelcius(true) }  bg_color={ isCelcius ? textColor : gray } />
                    <Circle content='°F' switchTemp={ () => setIsCelcius(false) } bg_color={ !isCelcius ? textColor : gray } />
                </SwitchTemperature>
                <Stats>
                    <Days>
                        { days.map( day => {
                            const img = getImage(day.weather_state_abbr);
                            return <NextDay
                                key={ day.id } 
                                date={ day===days[0] ? 'Tomorrow' : turnToDay(day.applicable_date) } 
                                min_temp={ isCelcius ? `${roundValue(day.min_temp)}°C` : `${convertToFh(day.min_temp)}°F`}
                                max_temp={ isCelcius ? `${roundValue(day.max_temp)}°C` : `${convertToFh(day.max_temp)}°F`} 
                                img={ img }
                            />
                        } ) }
                    </Days>

                    <HighLights>
                        <Span className='indicator' fz='30px'>Today´s highlights</Span>
                        <StatusContainer>
                            <Status type='Wind direction' num={ city.windDirection } measure={ city.wind_direction_compass }/>
                            <Status type='Humidity' num={ city.humidity } measure='%'/>
                            <Status type='Visibility' num={ city.visibility } measure='miles'/>
                            <Status type='Air pressure' num={ city.airPressure } measure='mb'/>
                        </StatusContainer>
                    </HighLights>
                            
                </Stats>

                <Footer>
                    <Span>created by <MyGitHub href='https://github.com/MoonHack2077' target='_blank' fz='17px'>MoonHack2077</MyGitHub> - devChallenges.io</Span>
                </Footer>
            </RightSide>
        </Main>
    }
    </>
    );
}

export { Home }