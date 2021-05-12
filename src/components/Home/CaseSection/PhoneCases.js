import React from 'react'
import {Link} from "react-router-dom";


function PhoneCases() {
    return (
        <section className="phone_cases">
                <div className="sec info-side">
                    <h2>Go <br/>find <br/>something <br/>for you</h2>
                    <Link to="/store">Get it now</Link>
                </div>
                <div className="sec pc_photo">


                </div>
        </section>
    );
}

export default PhoneCases;
