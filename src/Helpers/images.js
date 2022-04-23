import { turnToUrl } from './turnToUrl.js'

/**
 * Function to get the image of the abreviation
 * @param abbr abbreviation
 * @return url with the respective image for the weather
 */
export function getImage( abbr ){
    if( abbr === 'sn' ) return  turnToUrl('../Assets/Snow.png')
    if( abbr === 'sl' ) return turnToUrl('../Assets/Sleet.png')
    if( abbr === 'h' ) return turnToUrl('../Assets/Hail.png')
    if( abbr === 't' ) return turnToUrl('../Assets/Thunderstorm.png')
    if( abbr === 'hr' ) return turnToUrl('../Assets/HeavyRain.png')
    if( abbr === 'lr' ) return turnToUrl('../Assets/lightRain.png')
    if( abbr === 's' ) return turnToUrl('../Assets/Showers.png')
    if( abbr === 'hc' ) return turnToUrl('../Assets/HeavyCloud.png')
    if( abbr === 'lc' ) return turnToUrl('../Assets/LightCloud.png')
    if( abbr === 'c' ) return turnToUrl('../Assets/Clear.png')
}
