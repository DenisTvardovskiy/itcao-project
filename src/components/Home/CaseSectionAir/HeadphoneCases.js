import React from 'react'
import {Link} from "react-router-dom";
import './style.css'
import pic from "../../../../src/assets/external-content.png"

function HeadphoneCases() {
    return (
        <section className="headphone_cases">
            <div className="sec pc_photo">
                <img src={pic} />

            </div>
                <div className="sec info-side">
                    <h2> Choose <br/> one <br/> for every <br/>day</h2>
                    <Link to="/store">Shop now</Link>
                </div>

        </section>
    );
}

export default HeadphoneCases;
