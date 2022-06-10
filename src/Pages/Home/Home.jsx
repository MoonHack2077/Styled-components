import React , { useState , useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Main , City , MyGitHub , Announce , SearchContainer , SwitchTemperature ,RightSide , HighLights , BackImg , Footer , SearchCity , SearchForm , SearchInput , SearchButton , WeatherImages , Img , Details , Span , Stats , Days , RecentSearches , Searched , StatusContainer } from './Home.style.js';
import { NextDay } from '../../Components/NextDay/NextDay.jsx';
import { Status } from '../../Components/Status/Status.jsx';
import { Circle } from '../../Components/Circle/Circle.jsx';
import { Loading } from '../../Components/Modal/Loading.jsx';
import { gray , textColor , KEY } from '../../constants.js';

import { searchByCityName , searchByWoeid , searchByLattLong } from '../../Services/fetches.js';
import { useSetRecentSearches } from '../../Services/recentSearches.js'
import { getImage } from '../../Helpers/getImage.js';
import { roundValue } from '../../Helpers/roundValue.js';
import { convertToFh } from '../../Helpers/convertToFh.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt , faCrosshairs } from '@fortawesome/free-solid-svg-icons';



function Home(){
    //Declaring states
    const [ days , setDays ] = useState([]);
    const [ city , setCity ] = useState({});
    const [ search , setSearch ] = useState('');
    const [ recentSearches , setRecentSearches ] = useSetRecentSearches();
    const [ loading , setLoading ] = useState(false);
    const [ showSearch , setShowSearch ] = useState(false);
    const [ counter , setCounter ] = useState(0);
    const [ isCelcius , setIsCelcius ] = useState(true);

    const navigate = useNavigate();
    const changeSearch = e => {
        setSearch(e.target.value);
    }

    const changeShowSearch = () => {
        setShowSearch(!showSearch);
    }

    //In order to the user will have a good experience, he could display the search form just pushing the key : '/' 
    window.addEventListener( 'keyup' , e => {
        if( e.key === '/' ) changeShowSearch();
    } );

    const searchCity = e => {
        e.preventDefault();
        if( !search ) return;
        const recents = [ ...recentSearches ].map( cities => cities.toLowerCase() );
        const searchLower = search.toLowerCase().trim();

        if( recents.some( cities =>  (cities === searchLower) || (cities.includes(searchLower)) ) ) return;

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

    const fetchCity = searched => {
        setLoading(true);

        searchByCityName(searched)
        .then(response => {
            searchByWoeid(response[0]?.woeid)
            .then(resolve => {
                const nextDays = [ ...resolve?.consolidated_weather ];
                const today = resolve?.consolidated_weather[0];
                const img = getImage(today?.weather_state_abbr);
                const windDirection = today?.wind_direction;
                const visibility = today?.visibility;
                const temp = today?.the_temp;
                const humidity = today?.humidity;
                const airPressure = today?.air_pressure;

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
                setCounter( currCounter => currCounter + 1 );
                setLoading(false);
            })
        })
        .catch(() =>{
            navigate('*');
        })
    }

    const currentPosition = () => {
        const { geolocation } = navigator;

        const getPosition = position => {
            const { latitude , longitude } = position.coords;
            searchByLattLong( latitude , longitude ).then( response => {
                fetchCity(response[0].title);
            });
        };
        const err = error => {
            //If the user doesn´t allow his location, the app will display san francisco´s stats
            if( error.code === 1 ) return fetchCity('london');

            //If the error exists, it will return the same called until it get the correct position
            if( error.code ) return geolocation.getCurrentPosition( getPosition , err , options );
        };
        const options = { enableHighAccuracy: true , timeout: 5000 , maximumAge: 0 };     

        geolocation.getCurrentPosition( getPosition , err , options );
    }

    //UseEffects
    useEffect( () => {
        currentPosition();
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
        { ( !loading && counter>0 ) ? <Main>
            <City>
                
                { showSearch && <SearchCity>

                    <SearchButton 
                        className='toggleButton' 
                        type='button' 
                        value='X'
                        bg_color='transparent'
                        right='150px'   
                        top='10px'
                        fz='18px'
                        onClick={ changeShowSearch }
                    />
                    <SearchForm onSubmit={ searchCity }>
                        <SearchInput value={ search } onChange={ changeSearch } placeholder='Search a City'/>
                        <SearchButton 
                        className='inputForm' 
                        type='submit' 
                        value='Search' 
                        bg_color='#3e4af0'               
                        />
                    </SearchForm>

                    <RecentSearches>
                        <Span fz='20px' className='recents'>Recent searches</Span>
                        { !recentSearches.length ? 
                            <Span fz='14px'>You´ve not done any search</Span>
                            :
                            recentSearches.map( ( search , index ) =>{
                                return <Searched 
                                onClick={()=>fetchCity(search)} 
                                key={ index }>
                                    { search }<Span fz='20px' className='arrow'>{'>'}</Span> 
                                </Searched>
                            } )
                        }
                    </RecentSearches>

                </SearchCity> }   

                <SearchContainer>
                    <SearchButton 
                        className='toggleButton' 
                        type='button' 
                        value='Search for cities'  
                        bg_color={ gray }
                        onClick={ changeShowSearch }
                    />
                    <Circle content={<FontAwesomeIcon icon={ faCrosshairs }/>} onClick={ currentPosition } bg_color={ gray } />
                </SearchContainer>
                
                <WeatherImages >
                    <BackImg src='https://i.imgur.com/tQD1Cvm.png'/>
                    <Img height='200px' width='200px' src={ city.img }/>
                </WeatherImages>

                <Details>
                    <Span fz='40px'>{ isCelcius ? `${ roundValue(city.the_temp) }°C` : `${ convertToFh(city.the_temp) }°F`}</Span>
                    <Span fz='1.5rem'>{ city.weather_state_name }</Span>
                    <Span fz='20px'>Today - { turnToDay(city.applicable_date) }</Span>
                    <Span fz='20px'><FontAwesomeIcon icon={ faMapMarkerAlt }/>  {`${ city.title }, ${ city.parent?.title }`}</Span>
                </Details>

            </City>
            <RightSide>
                <SwitchTemperature>
                    <Circle content='°C' onClick={ () => setIsCelcius(true) }  bg_color={ isCelcius ? textColor : gray } />
                    <Circle content='°F' onClick={ () => setIsCelcius(false) } bg_color={ !isCelcius ? textColor : gray } />
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
                    <Span>created by <MyGitHub href='https://github.com/MoonHack2077' target='_blank' fz='17px'>MoonHack2077</MyGitHub> - devChallenges.io <Img src='https://i.imgur.com/2mvyYYQ.png' height='10px' width='10px' /> </Span>                    
                    <Announce>
                        <Span className='announce'>Toggle the search view pushing the key " / "</Span>
                    </Announce>
                </Footer>
            </RightSide>
        </Main>
        : <Loading/>
    }
    </>
    );
}

export { Home }