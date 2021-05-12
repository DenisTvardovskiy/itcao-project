import React, {Component} from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false,
        };
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    createOrder = (e) => {
        e.preventDefault();
        const  order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
        };
        this.props.createOrder(order);
    }
    render() {
        const {cartItems} = this.props
        return (
            <div className="cart_box">

                {cartItems.length === 0
                    ?   <div className="cart-empty">
                            <div>Cart is empty ;(</div>
                        </div>
                    : <div className="cart_title">Items in your cart:{" "} {cartItems.length} {" "}</div>}
                <div>
                    <div className="cart_body">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <div>
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <div >
                                        <div>{item.name}</div>
                                        <div className={"cart-item-action"}>
                                            {item.price}{" "}{item.currency} x {item.count}{" "}
                                            <button className={"removeButton"} onClick={()=>this.props.removeFromCart(item)} >Remove</button>

                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                    <div className="total">
                        <div>
                            Total:{" "}{cartItems.reduce((a,c)=> a+ c.price * c.count, 0)} {" hrn"}
                        </div>
                        <button onClick={()=>{this.setState({showCheckout:true})}} className={"ProceedButton"}>Proceed</button>

                    </div>
                {this.state.showCheckout &&(
                    <form onSubmit={this.createOrder}>
                        <ul className="form-container">
                            <li>
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    onChange={this.handleInput}
                                ></input>
                            </li>
                            <li>
                                <label>Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    onChange={this.handleInput}
                                ></input>
                            </li>
                            <li>
                                <label>Address</label>
                                <input
                                    name="address"
                                    type="text"
                                    required
                                    onChange={this.handleInput}
                                ></input>
                            </li>
                            <li>
                                <button className="button primary" type="submit">
                                    Checkout
                                </button>
                            </li>
                        </ul>
                    </form>
                )}

            </div>




        );
    }
}

export default Cart;