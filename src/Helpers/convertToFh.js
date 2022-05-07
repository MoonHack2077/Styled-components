import { roundValue } from './roundValue.js'

/**
 * Function to do convert the temperature from celsius to farhenheit
 * @param temp 
 * @return the temp converted 
 */
export const convertToFh = temp => roundValue( ( temp * 1.8 ) + 32 );