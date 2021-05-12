import React, {Component} from 'react';

class Cart extends Component {
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
                        <button className={"ProceedButton"}>Proceed</button>
                    </div>

            </div>


        );
    }
}

export default Cart;