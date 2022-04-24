/**
 * Function to get the image of the abreviation
 * @param abbr abbreviation
 * @return url with the respective image for the weather
 */
export function getImage( abbr ){
    if( abbr === 'sn' ) return 'https://i.imgur.com/uVZbhka.png';  //Snow
    if( abbr === 'sl' ) return 'https://i.imgur.com/vsDBwCe.png';  //Sleet
    if( abbr === 'h'  ) return 'https://i.imgur.com/GH1e2sZ.png';  //Hail
    if( abbr === 't'  ) return 'https://i.imgur.com/wqLHFQw.png';  //Thunderstorm
    if( abbr === 'hr' ) return 'https://i.imgur.com/0gCakwm.png';  //Heavy Rain
    if( abbr === 'lr' ) return 'https://i.imgur.com/y4Bf6Zx.png';  //Light Rain
    if( abbr === 's'  ) return 'https://i.imgur.com/wX884Co.png';  //Shower
    if( abbr === 'hc' ) return 'https://i.imgur.com/Ap944Ql.png';  //Heavy Cloud
    if( abbr === 'lc' ) return 'https://i.imgur.com/e0cvGPA.png';  //Light Cloud
    if( abbr === 'c'  ) return 'https://i.imgur.com/LAdBKwt.png';  //Clear
}
