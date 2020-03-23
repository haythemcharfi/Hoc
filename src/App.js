import React, { Component } from 'react';
import Hello from './MovieCard'
import Hi from './AddMovie'
import Hhh from './App.css'
import Hoc from './Hoc'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
            input:"",
            searchstar:5,
            FilmList:[{name:"dracola",img:"https://lh3.googleusercontent.com/proxy/zEVZKCSX-YVrGlF_HPuDu4-qJGh3Kofalz12HsQrL2aJ1Oc-qabkP5aW-ur1BAFfrFw3xGlohA2GPfnRRAKDEJbOm1NfHhcrqXVbkQgKd73QnLqOn5K7H78HWWK_yE6d9rA",rating:3},{name:"the legend",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTse_j6oq5JoLKsF1v94ZCOLtLms_pOKUyjlzuht7uQlxUMGV5V",rating:1}],
            display:false
     }
  }
  additems=(newmovie)=>{
    this.setState({
      FilmList:[...this.state.FilmList,newmovie]
    })
  }
  render() { 
    console.log(this.state.input)
    console.log(this.state.searchstar)
    console.log(this.state.FilmList)
    return ( <div>
      <div>
      <input onChange={(e)=>this.setState({input:e.target.value})} />
                    <span onClick={()=>this.setState({searchstar:1})}>⭐</span>
                    <span onClick={()=>this.setState({searchstar:2})}>⭐</span>
                    <span onClick={()=>this.setState({searchstar:3})}>⭐</span>
                    <span onClick={()=>this.setState({searchstar:4})}>⭐</span>
                    <span onClick={()=>this.setState({searchstar:5})}>⭐</span>
      </div>
      <button onClick={()=>this.setState({display:!this.state.display})}>+</button>
      <Hello List={this.state.FilmList} inputsearch={this.state.input} searchStar={this.state.searchstar}/>
      <Hi display={this.state.display} Function={this.additems}/>

    </div> );
  }
}
 
export default Hoc(App);