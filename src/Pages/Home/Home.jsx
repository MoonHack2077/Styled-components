import React , { useState , useEffect } from 'react';
import { Main , City , Others } from './Home.style.js';

import { locationSearch } from '../../Services/fetches.js';

function Home(){
    const [ city , setCity ] = useState({});
    const london = 'london';

    const fetched = () =>{
        locationSearch(london)
        .then(setCity)
        .catch(console.log)
    }
    useEffect(()=>{
        fetched();
    },[])
    return(
        <Main>
            <City>
                <ul>
                    <li>{city}</li>
                    <li>{city}</li>
                </ul>
            </City>
            <Others>
                XDD
            </Others>
        </Main>
    );
}

export { Home }