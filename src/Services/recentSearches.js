import  { useState } from 'react';
import { KEY } from '../constants.js';

function useSetRecentSearches(){
    //Variable to kwon if there are searches at the localStorage
    const searches = localStorage.getItem( KEY ) ? JSON.parse( localStorage.getItem( KEY ) ) : [];

    //Declaring states
    const [ recentSearches , setRecentSearches ] = useState(searches);

    return [ recentSearches , setRecentSearches ]
}

export { useSetRecentSearches }