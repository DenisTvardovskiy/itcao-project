import React, {Component} from 'react';
import Modal from 'react-modal';



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        }
    }
    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = () => {
        this.setState({ product: null });
    };
    render() {
        const {product} = this.state;
        return (
            <>
                <ul className="products">
                    {this.props.products.map((product)=>(
                        <li key={product.id}>
                            <div className="product">
                                {product.quantity > 0
                                    ?<div>
                                    <a href={'#' + product.id}
                                       onClick={() => this.openModal(product)}>
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

                {
                    product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>

                            <button className="close-modal" onClick={this.closeModal}>
                                Close
                            </button>
                            <div className="product-details">
                                <img src={product.image} alt={product.name}/>
                                <div className="product-details-description">
                                    <p>
                                        <strong>{product.name}</strong>
                                    </p>
                                    <p>{product.description}</p>
                                    <p>
                                        Avaiable Sizes:{" "}
                                        {product.capability.map((x) => (

                                            <span>
                        {" "}
                                                <button className="button">{x}</button>
                      </span>
                                        ))}
                                    </p>
                                    <div className="product-price">
                                        <div>{product.price}{" "}{product.currency}</div>
                                        {' '}
                                        <button
                                            className="button buttonModal"
                                            onClick={() => {
                                                this.props.addToCart(product);
                                                this.closeModal();
                                            }}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </Modal>
                )}
            </>
        );
    }
}

export default Products;

