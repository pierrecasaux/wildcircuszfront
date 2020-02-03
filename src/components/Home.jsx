import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/home.css';

function Home() {
    return (
        <div>
            <div className="backgroundStyle">
                <Navbar />
                <h2>Welcome !</h2>
                <h3>Get into childhood again !</h3>
                <p>Looking for some fun and magic ?</p>
                <p>Get to become a master in our Circus and beat our wild clown to earn credits.
                    And the more you learn about the circus, the more credits you earn so you might become a very advanced clown !
                Join the competition and compare yourself with others wanabe clowns </p>
            </div>
            <Footer />
        </div>

    )
}

export default Home;