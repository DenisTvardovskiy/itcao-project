import React, {Component} from 'react';




class Products extends Component {
    render() {
        return (
            <>
                <ul className="products">
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div className="product">
                                <a href={'#' + product.id}>
                                    <img src={product.image} alt={product.name}/>
                                    <p>{product.name}</p>
                                </a>
                                <div className="product-price">
                                    <div>{product.price}{product.currency}</div>
                                    <button className="button primary">Add to cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Products;

