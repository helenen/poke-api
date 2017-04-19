import React from 'react';
import './jon.css';
import blue from '../img/blue.png';

class Jon extends React.Component {

    render() {
        return (
            <div className='pokemon'>
                <div className='card'>
                    <img className='img' src={this.props.img} alt="" />
                    <div className='title-description'>
                        <h3 className='title'>{this.props.name}</h3>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            qui officia t laborum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Jon;
