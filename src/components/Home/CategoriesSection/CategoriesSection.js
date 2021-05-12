import React from 'react';
import {Link} from "react-router-dom";



function CategoriesSection() {
    return (
        <section className="categories">
            <ul>
                <li>
                    <h3>Phone Cases</h3>
                   <Link to="/store">GO</Link>
                </li>
                <li>
                    <h3>Headphone Cases</h3>
                    <Link to="/store">GO</Link>
                </li>
                <li>
                    <h3>Bundle Constructor</h3>
                    <Link to="/constructor">GO</Link>
                </li>

            </ul>

        </section>
    );
}

export default CategoriesSection;
