import React from 'react'
import "./style.css"

import db from "../../db.json";
import Products from "./products";
import Filter from "./filter";


class StorePage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            products: db.products,
            device: db.device,
            model: "",
            price: "",
            sort: "",
            }
        }
    sortProducts = (event) =>{
        console.log(event.target.value)
        const sort = event.target.value;
        this.setState((state) => ({
            sort:sort,
            products: this.state.products.slice().sort((a,b)=>
                sort === "low"
                    ? a.price > b.price
                      ? 1
                      :-1
                    :sort === "high"
                    ? a.price < b.price
                      ? 1
                      :-1
                    : a.id < b.id
                    ? 1
                    : -1
            ),
        }))
    }
    filterProducts = (event) =>{
        console.log(event.target.value)
        if(event.target.value === ""){
            this.setState({
                model: event.target.value,
                products: db.products
            })
        }else {
            this.setState({
                model: event.target.value,
                products: db.products.filter(
                    (product) => product.capability.indexOf(event.target.value) >= 0
                )
            })
        }

    }


    render() {
        return (
            <section className="store_section">
                <div className="Filters">
                    <Filter
                        device = {this.state.device}
                        count={this.state.products.length}
                        model={this.state.model}
                        sort={this.state.sort}
                        filterProducts = {this.filterProducts}
                        sortProducts = {this.sortProducts}
                    />
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
