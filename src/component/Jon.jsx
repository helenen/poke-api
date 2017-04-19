import React from 'react';
import './jon.css';
import blue from '../img/blue.png';

class Jon extends React.Component {

    render() {
        return (
            <div className='pokemon'>
                <div className='card'>
                    <h3 className='title'>{this.props.name}</h3>
                    <img className='img' src={this.props.img} alt="" />
                </div>
            </div>
        );
    }

}

export default Jon;
