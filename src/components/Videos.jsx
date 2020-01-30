import React, { useEffect, useState } from "react";
import "../style/Video.css"
import Navbar from './Navbar';
import axios from 'axios';

export default function Videos() {
    let [sta, setState] = React.useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/video")
            .then(response => setState(response.data));
    }, [])



    return (
        <div>
            <Navbar />
            <h3>Videos</h3>
            <div className="containerVideo">
                <div>
                    {sta[0] && sta[0].name}
                    <a href={sta[0] && sta[0].lien} target="_blank">
                        <img className="img" src={sta[0] && sta[0].image} alt="image1" />
                    </a>
                </div>
                <div>
                    {sta[1] && sta[1].name}
                    <a href={sta[1] && sta[1].lien} target="_blank">
                        <img className="img" src={sta[1] && sta[1].image} alt="image2" />
                    </a>
                </div>
                <div>
                    {sta[2] && sta[2].name}
                    <a href={sta[2] && sta[2].lien} target="_blank">
                        <img className="img" src={sta[2] && sta[2].image} alt="image3" />
                    </a>
                </div>
                <div>
                    {sta[3] && sta[3].name}
                    <a href={sta[3] && sta[3].lien} target="_blank">
                        <img className="img" src={sta[3] && sta[3].image} alt="image4" />
                    </a>
                </div>
            </div>
        </div>
    );
}

