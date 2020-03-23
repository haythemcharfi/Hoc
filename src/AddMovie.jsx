import React, { Component } from 'react';
class ADD extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            img:"",
            rating:"",
         }
    }
    render() { 
        let movie={
            name:this.state.name,
            img:this.state.img,
            rating:this.state.rating
        }
        return ( <div className={this.props.display?"display":"hide"}>
    <input type="text" placeholder="name" onChange={(e)=>this.setState({name:e.target.value})}/>
    <input type="text" placeholder="image" onChange={(e)=>this.setState({img:e.target.value})}/>
    <input type="text" placeholder="rating" onChange={(e)=>this.setState({rating:e.target.value})}/>
    <button onClick={()=>this.props.Function(movie)}>ADD FILM</button>
        </div> );
    }
}
 
export default ADD;