import React , { useState , useEffect } from 'react';
import { Main , City , Search , BackgroundImg , Others } from './Home.style.js';

import { locationSearch } from '../../Services/fetches.js';
const clouds = new URL('../../Assets/Cloud-background.png', import.meta.url);

function Home(){
    //latt_long , location_type , title , woeid
    const [ city , setCity ] = useState({});
    const london = 'london';

    const fetched = () =>{
        locationSearch(london)
        .then(res => {
            setCity(res[0])
        })
        .catch(console.log)
    }

    useEffect(()=>{
        fetched();
    },[])

    return(
        <Main>
            <City style={{backgroundImage:'../../Assets/Cloud-background.png'}} >
                <BackgroundImg src={clouds} />
                <Search bg_color='#777'>Search for places</Search>
            </City>
            <Others>
                XDD
            </Others>
        </Main>
    );
}

export { Home }