import ReactDOM from "react-dom";
import React from "react";

export class NewC extends React.Component{
PropTypes : { 
Name: React.PropTypes.string,
pi: React.PropTypes.number
};

constructor(props) {
  super();
  this.state = {PIValue: props.pi, count:1 };
}
//function to handle button click event
changePIvalue(){
this.setState({
PIValue:this.state.PIValue + this.props.pi ,
count:this.state.count+1});
}
  render()
  {
      return(
          <div>
              <h2>In a child Component</h2>
			  <h4> Prop passed from Parent component is {this.props.Name}</h4>
			  <h3> Value of {this.state.count} PI is {this.state.PIValue}</h3>
			  <button onClick={()=> this.changePIvalue()}>Change pi value</button>
          </div>
      );
  }
}