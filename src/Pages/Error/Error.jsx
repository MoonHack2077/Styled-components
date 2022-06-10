import React from 'react';
import { Container , Img , Div , P } from './Error.style.js';

function Error(){ 
    return(
        <Container>
            <Div>
                <P>
                    The city that you have searched is unreachable by our satellites                    
                </P>
                <Img
                  className='earth'
                  src='https://media2.giphy.com/media/eHjfukOdOLW56vwCMM/giphy.gif?cid=6c09b952033f4c756dfa33989ae244b79e95897832682760&rid=giphy.gif&ct=s' 
                />
            </Div>
            <Img className='first' src='https://www.freeiconspng.com/uploads/satellite-png-5.png' />
            <Img className='second' src='https://www.freeiconspng.com/uploads/satellite-png-5.png' />
        </Container>
    );
}

export { Error }