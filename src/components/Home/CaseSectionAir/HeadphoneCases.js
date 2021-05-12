import React from 'react'
import {Link} from "react-router-dom";



function HeadphoneCases() {
    return (
        <section className="headphone_cases">
            <div className="sec pc_photo">


            </div>
                <div className="sec info-side">
                    <h2> Choose <br/> one <br/> for every <br/>day</h2>
                    <Link to="/store">Shop now</Link>
                </div>

        </section>
    );
}

export default HeadphoneCases;
