import React from 'react'
import backgroundVideo from '../assets/BrisketCut.mp4'

const Main = () => {
    return (
        <div className='main'>
        <div className='overlay'></div>

            <video src={backgroundVideo} autoPlay loop muted/>
            <div className='content'>
                <h1>Beards & Barbeque</h1>
                <p>About to set Northern Virginia ABLAZE!</p>
            </div>
        </div>
    )
}

export default Main