import React from 'react'
import "./style.css"

import db from "../../db.json";
import Products from "./products";
import Filter from "./filter";
import Cart from "./cart";



class StorePage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            products: db.products,
            device: db.device,
            cartItems: JSON.parse(localStorage.getItem("cartItems"))? JSON.parse(localStorage.getItem("cartItems")):[],
            model: "",
            price: "",
            sort: "",
            showCart: false
            }
        }

        cartModal(){
        if(this.state.showCart){
            this.setState({showCart:false})
        }else{
            this.setState({showCart:true})
        }
        }

    createOrder = (order) =>{
        alert("Need to save order for" + order.name)
    }

    removeFromCart = (product) =>{
        const cartItems = this.state.cartItems.slice()

        this.setState({
            cartItems: cartItems.filter((x)=> x.id !== product.id)
        })
        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x)=> x.id !== product.id)))
    }
    addToCart = (product) =>{
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item.id === product.id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart ){
            cartItems.push({...product, count: 1})
        }
        this.setState({cartItems})
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
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
                <nav>
                    <div className="navSector">

                    </div>
                    <div className="navSector">
                        <h1>Case Pile</h1>
                    </div>
                    <div className="cart navSector">
                        <div onClick={()=>this.cartModal()} className="cart-link">Cart {this.state.cartItems.length}</div>
                    </div>



                </nav>
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
                    <Products products = {this.state.products} addToCart={this.addToCart}/>
                </div>

                {this.state.showCart && (
                    <div className="modal_root">
                        <Cart cartItems = {this.state.cartItems}
                              removeFromCart = {this.removeFromCart}
                              createOrder = {this.createOrder}/>
                    </div>
                )}

            </section>

        );
    };
};

export default StorePage;
