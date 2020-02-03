import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../style/instructions.css"

function Instructions() {
    return (
        <div>
            <div className="bck">
                <Navbar />
                <h2>Instructions</h2>
                <p>Play our game and defeat our master !
                    Whenever you win, you get credits !
            </p>
                <p> Or... If you increase your knowledges, you will be rewarded as well and earn credits every time you learn something from our circus !</p>
            </div>
            <Footer />
        </div>
    )
}

export default Instructions;