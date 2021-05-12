import React from "react";

class ProductPopUP extends React.Component{

    render() {
        console.log(this.props.item_id);
        return(

            <div className="product_details">
                <h1>{this.props.item_id}</h1>

            </div>
        )
    }
}

export default ProductPopUP;