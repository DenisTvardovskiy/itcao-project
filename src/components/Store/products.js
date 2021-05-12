import React, {Component} from 'react';




class Products extends Component {
    render() {
        return (
            <>
                <ul className="products">
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div className="product">
                                {product.quantity > 0
                                    ?<div>
                                    <a href={'#' + product.id}>
                                        <img src={product.image} alt={product.name}/>

                                            <div className={"info"}>
                                                <p>{product.name}</p>

                                                <h3>{product.quantity} left</h3>

                                            </div>
                                        </a>

                                        <div className="product-price">
                                            <div>{product.price}{product.currency}</div>
                                            <button onClick={()=> this.props.addToCart(product)} className="button primary">Add to cart</button>
                                        </div>
                                    </div>
                                    :<div>
                                    <a href={'#' + product.id}>
                                        <img src={product.image} alt={product.name}/>

                                        <div className={"info"}>
                                            <p>{product.name}</p>

                                            <h3>{product.quantity} left</h3>

                                        </div>
                                    </a>
                                    <div className="product-price">
                                        <div>Out of stock</div>
                                    </div>
                                    </div>
                                }


                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Products;

