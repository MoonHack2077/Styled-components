import { roundTemp } from './roundTemp.js'

/**
 * Function to do convert the temperature from celsius to farhenheit
 * @param temp 
 * @return the temp converted 
 */
export const convertToFh = temp => roundTemp( ( temp * 1.8 ) + 32 );