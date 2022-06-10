import React , { useEffect , useState } from 'react';
import { useSetRecentSearches } from '../../Services/recentSearches.js';
import { Container , Img , Div , P , List , City } from './Error.style.js';

function Error(){    
    const [ recentSearches ] = useSetRecentSearches();
    const [ list , setList ] = useState([]);
    const randomCity = () =>{ 
        const randomIndex = Math.floor(Math.random() * recentSearches.length);
        return recentSearches[randomIndex];
    }
    const set = () =>{
        const cities = [ ...list ];
        while( cities.length <= 3 ){
            const city = randomCity();
            if( !cities.includes(city) ) cities.unshift(city);
        }
        
        if( cities.length === 4 ) cities.splice(-1);
        setList(cities);
    }
    useEffect( ()=>{
        set();
    },[])
    useEffect( ()=>{
        set();
    },[recentSearches] )

    return(
        <Container>
            <Div>
                <P>
                    The city that you have searched is unreachable by our satellites                    
                </P>
                <P>Try searching these cities:</P>
                <List>
                    {
                        list.map( (city,id) =>{
                            return <City key={id}>{city}</City>
                        } )
                    }        
                </List>
            </Div>
            <Img className='first' src='https://www.freeiconspng.com/uploads/satellite-png-5.png' />
            <Img className='second' src='https://www.freeiconspng.com/uploads/satellite-png-5.png' />
        </Container>
    );
}

export { Error }