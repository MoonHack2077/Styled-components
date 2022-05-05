import React , { useState , useEffect } from 'react';
import { Main , City , MyGitHub , RightSide , HighLights , BackImg , Footer , SearchCity , SearchForm , SearchInput , SearchButton , WeatherImages , StateImg , Details , Span , StyledH2 , StyledH3 , Stats , Days , RecentSearches , Searched , StatusContainer } from './Home.style.js';
import { NextDay } from '../../Components/NextDay/NextDay.jsx';
import { Status } from '../../Components/Status/Status.jsx';

import { locationSearch , locationId } from '../../Services/fetches.js';
import { getImage } from '../../Helpers/getImage.js';
import { round } from '../../Helpers/roundTemp.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Home(){
    //Declaring states
    const [ days , setDays ] = useState([]);
    const [ city , setCity ] = useState({});
    const [ search , setSearch ] = useState('');
    const [ recentSearches , setRecentSearches ] = useState( [] );
    const [ loading , setLoading ] = useState(false);
    const [ show , setShow ] = useState(false);
    const london = 'san';

    const foo = e => {
        setSearch(e.target.value);
    }

    const changeShow = () => {
        setShow(!show);
    }

    const getFormData = e => {
        e.preventDefault();
    }

    const searchXD = () => {
        if( !search ) return;
        const recents = [ ...recentSearches ] ;
        const recentsLower = recents.map( cities => cities.toLowerCase() );
        const searchLower = search.toLowerCase();
        if( recentsLower.some( cities =>  (cities === searchLower) || 
        (cities.includes(searchLower)) ) ) return;

        fetched(search);
        setSearch('');     
    }
    
    const setRecents = () => {
        if( !city.title || recentSearches.includes(city.title) ) return;
        const recents = [ ...recentSearches ];

        if( recents.length === 7 ) recents.splice(-1);

        recents.unshift(city.title);
        setRecentSearches(recents);      
    }

    const fetched = searched => {
        setLoading(true);

        locationSearch(searched)
        .then(response => {
            locationId(response[0].woeid)
            .then(resolve => {
                const nextDays = [ ...resolve.consolidated_weather ];
                const today = resolve.consolidated_weather[0];
                const img = getImage(today.weather_state_abbr);
                const windDirection = round(today.wind_direction);
                const visibility = round(today.visibility);
                const temp = round(today.the_temp);
                const humidity = round(today.humidity);
                const airPressure = round(today.air_pressure);

                setDays(nextDays.slice(1));
                setCity({ 
                    title: resolve.title,  
                    parent: resolve.parent.title, 
                    img,
                    windDirection,
                    temp,
                    humidity,
                    visibility,
                    airPressure,
                    ...today 
                });   
                setLoading(false);
            })
        })
        .catch(console.log)
    }

    useEffect( () => {
        fetched(london);
    },[])

    useEffect( () => {
        setShow(false);
        setRecents();
    },[city])

    useEffect( () => {
        localStorage.setItem( 'recentSearches', JSON.stringify(recentSearches) );
    },[recentSearches])

    return(
        <>
        { !loading && <Main>
            <City>
                
                { show && <SearchCity>

                    <SearchButton 
                        className='toggleButton' 
                        type='button' 
                        value='X'
                        bg_color='transparent'
                        right='5px'   
                        top='10px'
                        fz='18px'
                        onClick={ changeShow }
                    />
                    <SearchForm onSubmit={ getFormData }>
                        <SearchInput value={ search } onChange={ foo } placeholder='Search a City'/>
                        <SearchButton 
                        className='inputForm' 
                        type='submit' 
                        value='Search' 
                        bg_color='#3e4af0'
                        onClick={ searchXD }
                        bg_color_h='#2d39e0'                  
                        />
                    </SearchForm>


                    <RecentSearches>
                        <StyledH3 className='recents'>Recent searches</StyledH3>
                        {
                            recentSearches.map( (search,index) =>{
                                return <Searched onClick={()=>fetched(search)} key={index}>{search}<Span fz='20px' className='arrow'>{'>'}</Span> </Searched>
                            } )
                        }
                    </RecentSearches>

                </SearchCity>    }   

                <SearchButton 
                    className='toggleButton' 
                    type='button' 
                    value='Search for cities'  
                    bg_color='#888'
                    bg_color_h='#666'
                    left='20px'   
                    top='20px'
                    onClick={ changeShow }
                />

                <WeatherImages >
                    <BackImg src='https://i.imgur.com/tQD1Cvm.png'/>
                    <StateImg src={ city.img }/>
                </WeatherImages>

                <Details>
                    <Span fz='40px'>{`${ city.the_temp } °C`}</Span>
                    <StyledH2 fz='1.5rem'>{ city.weather_state_name }</StyledH2>
                    <StyledH3 fz='Ypx'>{`Today - ${ city.applicable_date }`}</StyledH3>
                    <StyledH3 fz='Ypx'> <FontAwesomeIcon icon={ faMapMarkerAlt }/> {`${ city.title }, ${ city.parent }`}</StyledH3>
                </Details>

            </City>
            <RightSide>
                <Stats>
                    <Days>
                        { days.map( day => {
                            const img = getImage(day.weather_state_abbr);
                            return <NextDay
                                key={ day.id } 
                                date={ day.applicable_date } 
                                min_temp={ round(day.min_temp) }
                                max_temp={ round(day.max_temp) } 
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