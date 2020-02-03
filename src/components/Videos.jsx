import React, { useEffect, useState } from "react";
import "../style/Video.css"
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';



export default function Videos() {

    let [sta, setState] = React.useState([]);
    let [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/video")
            .then(response => setState(response.data));
        axios.get("http://localhost:8000/api/credit")
            .then(response => setCount(response.data[0].total));
    }, [])

    const Compteur = () => {
        setCount(count + 100)
        axios({
            method: 'put',
            url: 'http://localhost:8000/api/credit/1',
            data: {
                total: count + 100
            }
        })

    }

    return (
        <div>
            <div className="bckgrd">
                <Navbar />
                <h2>Videos</h2>
                <h3>Watch the videos to earn credits</h3>
                <div className="containerVideo">
                    <div className="vignettes">
                        <div>
                            {sta[0] && sta[0].name}
                        </div>
                        <a href={sta[0] && sta[0].lien} target="_blank">
                            <img className="img" src={sta[0] && sta[0].image} alt="image1" onClick={() => Compteur()} />
                        </a>
                    </div>
                    <div className="vignettes">
                        <div>
                            {sta[1] && sta[1].name}
                        </div>
                        <a href={sta[1] && sta[1].lien} target="_blank">
                            <img className="img" src={sta[1] && sta[1].image} alt="image2" onClick={() => Compteur()} />
                        </a>
                    </div>
                    <div className="vignettes">
                        <div>
                            {sta[2] && sta[2].name}
                        </div>
                        <a href={sta[2] && sta[2].lien} target="_blank">
                            <img className="img" src={sta[2] && sta[2].image} alt="image3" onClick={() => Compteur()} />
                        </a>
                    </div>
                    <div className="vignettes">
                        <div>
                            {sta[3] && sta[3].name}
                        </div>
                        <a href={sta[3] && sta[3].lien} target="_blank">
                            <img className="img" src={sta[3] && sta[3].image} alt="image4" onClick={() => Compteur()} />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

