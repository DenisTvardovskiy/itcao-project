import React from 'react'
import "./style.css"

import db from "../../db.json";
import Products from "./products";


class StorePage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            products: db.products,
            model: "",
            manufacturer: "",
            price: "",
            sort: "",
        }
        }

    render() {
        return (
            <section className="store_section">
                <div className="Filters">

                </div>
                <div className="Store">
                    <Products products = {this.state.products}/>
                </div>


                <div className="modal_root">

                </div>
            </section>

        );
    }
}

export default StorePage;
