import React, {Component} from 'react';
//import de bootstrat après son installation : npm install --save bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div className = "card m-3">
                <div className="card-header"> 
                <strong> 
                {this.props.title} : {this.props.value}
                </strong>
                </div>
                <div className="card-body">
                    <img width ={100} src={this.props.image1} />
                    <img width ={100} src={this.props.image2} />
                    <img width ={100} src={this.props.image3} />
                </div>

            </div>
        );
    }
}

//counter.propTypes = {};
export default Counter;
