import React, {Component} from 'react';




class Filter extends Component {
    render() {
        return (
            <div>
                <div className="filter-result">We found {this.props.count} results</div>
                <div className="filter-sort">Order{" "}
                    <select value={this.props.size} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to low</option>
                    </select>
                </div>
                <div className="filter-model">
                    Model {" "}
                    <select value={this.props.model} onChange={this.props.filterProducts}>
                        <option value=''>All</option>
                        {this.props.device.map((device) => (
                            <option value={device.code} >{device.model} {" "} {device.type}</option>
                            ))}
                    </select>
                </div>



            </div>
        );
    }
}

export default Filter