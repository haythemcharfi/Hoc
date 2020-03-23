import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            {this.props.List.filter(el=>(el.name.toLowerCase().includes(this.props.inputsearch.toLowerCase().trim())&&(el.rating<=this.props.searchStar))).map(el=><div>
            <h3>{el.name}</h3>
            <span>{''.padStart(el.rating,"⭐")}</span>
            <img src={el.img}/>
            </div>)}
        </div> );
    }
}
 
export default Card;