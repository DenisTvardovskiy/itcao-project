import React from 'react'
import {Link} from "react-router-dom";
import './style.css'


function ConstructorSection() {
    return (
        <section className="constructor_section">
            <div className="info-side">
                <h2> Create <br/> unique <br/> present <br/>yourself</h2>
                <Link to="/constructor">Create now</Link>
            </div>
            <div className="show">

            </div>


        </section>
    );
}

export default ConstructorSection;
