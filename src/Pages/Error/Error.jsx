import React from 'react';
import { Container , Img , Div , P , List , City } from './Error.style.js';

function Error(){
    const offeredCities = ['London', 'Calarca', 'Eren'];
    return(
        <Container>
            <Div>
                <P>
                    The city that you have searched is unreachable by our satellites                    
                </P>
                <P>Try searching these cities:</P>
                <List>
                    {
                        offeredCities.map( (city,id) =>{
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