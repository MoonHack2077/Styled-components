import React , { useEffect } from 'react';
import { useSetRecentSearches } from '../../Services/recentSearches.js';
import { Container , Img , Div , P , List , City } from './Error.style.js';

function Error(){    
    const [ recentSearches ] = useSetRecentSearches();
    const list = [];
    const randomNum = () => Math.floor(Math.random() * recentSearches.length);
    const set = () =>{
        const city = recentSearches[randomNum()];
        if( list.length === 3 ) list.splice(-1);
        if( !list[city] ) list.push(city);       
    }
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