import React, { useEffect } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import "../style/classement.css"

import Axios from 'axios';


export default function Classement() {

    let [state, setState] = React.useState([]);
    let [sta, setSta] = React.useState([]);


    useEffect(() => {
        Axios.get("http://localhost:8000/api/user")
            .then(response => setState(response.data));
    }, [])

    useEffect(() => {
        Axios.get("http://localhost:8000/api/credit")
            .then(response => setSta(response.data));
    }, [])


    return (
        <div>
            <div className="background">
                <Navbar />
                <h2>Classement</h2>
                <div>
                    <ol>
                        <li>
                            {state[0] && state[0].pseudo} : {sta[0] && sta[0].total}

                        </li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}
