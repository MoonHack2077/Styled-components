import React , { useState , useEffect } from 'react';
import { Main , City , HighLights , BackImg , Footer , SearchCity , SearchForm , SearchInput , SearchButton , WeatherImages , StateImg , Details , Span , StyledH2 , StyledH3 , Stats , Days , RecentSearches , Searched , StatusContainer } from './Home.style.js';
import { NextDay } from '../../Components/NextDay/NextDay.jsx';
import { Status } from '../../Components/Status/Status.jsx';

import { locationSearch , locationId } from '../../Services/fetches.js';
import { getImage } from '../../Helpers/getImage.js';
import { fixed } from '../../Helpers/fixed.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Home(){
    //Declaring states
    const [ days , setDays ] = useState([]);
    const [ city , setCity ] = useState({});
    const [ search , setSearch ] = useState('');
    const [ recentSearches , setRecentSearches ] = useState([]);
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

    const searchXD = () =>{
        if( !search ) return 
        console.log(search);
        fetched(search);
        setSearch('');
    } 

    const fetched = searched => {
        setLoading(true);

        locationSearch(searched)
        .then(res => {
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

    useEffect( () => {
        fetched(london);
    },[])

    useEffect( () => {
        setShow(false);
    },[city])

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
                        />
                    </SearchForm>


                    <RecentSearches>
                        <StyledH3 fz='Ypx'>Recent searches</StyledH3>
                        {
                            recentSearches.map( search =>{
                                return <Searched> { `${search.title } ${<Span fz='30px' className='arrow'> &gt; </Span>}` } </Searched>
                            } )
                        }
                    </RecentSearches>

                </SearchCity>    }   

                <SearchButton 
                    className='toggleButton' 
                    type='button' 
                    value='Search for cities'  
                    bg_color='#888'
                    left='20px'   
                    top='20px'
                    onClick={ changeShow }
                />

                <WeatherImages >
                    <BackImg src='https://i.imgur.com/tQD1Cvm.png'/>
                    <StateImg src={ city.state_img }/>
                </WeatherImages>

                <Details>
                    <Span fz='40px'>{`${ city.the_temp } °C`}</Span>
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

                <HighLights>
                    <Span className='indicator' fz='30px'>Today´s highlights</Span>
                    <StatusContainer>
                        <Status type='Wind status' num={ city.wind_speed } measure={ city.wind_direction_compass }/>
                        <Status type='Humidity' num={ city.humidity } measure='%'/>
                        <Status type='Visibility' num={ city.visibility } measure='miles'/>
                        <Status type='Air pressure' num={ city.air_pressure } measure='mb'/>
                    </StatusContainer>
                </HighLights>
                

                <Footer>
                    <Span>created by <Span className='username' fz='17px'>MoonHack2077</Span> - devChallenges.io</Span>
                </Footer>
            </Stats>
        </Main>
    }
    </>
    );
}

export { Home }