import React from 'react';
import Navbar from './Navbar';
import '../style/Home.css';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <h2>Welcome !</h2>
            <h3>Get into childhood again !</h3>
            <p>Looking for some fun and magic ?</p>
            <p>Get to become a master in our Circus and beat our wild clown to earn credits.
                And the more you learn about the circus, the more credits you earn so you might become a very advanced clown !
                Join the competition and compare yourself with others wanabe clowns </p>

        </div>
    )
}

export default Home;