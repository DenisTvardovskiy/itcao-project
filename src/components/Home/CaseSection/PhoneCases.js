import React from 'react'
import {Link} from "react-router-dom";
import './style.css'
import pic from "../../../../src/assets/external-content.png"

function PhoneCases() {
    return (
        <section className="phone_cases">
                <div className="sec info-side">
                    <h2>Go <br/>find <br/>something <br/>for you</h2>
                    <Link to="/store">Get it now</Link>
                </div>
                <div className="sec pc_photo">
                    <img src={pic} />

                </div>
        </section>
    );
}

export default PhoneCases;
