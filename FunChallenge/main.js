import React from 'react';
import { render } from 'react-dom';
import {NewC} from './NewC'

class Hello extends React.Component {
constructor() {
super();
this.state = {Handle: "Your TC Handle"};
}
render() {
const pi = 3.14;
const weekdays = ['Mon','Tue','Wed','Thurs','Fri']; 
const clock = new Date();
return (<div>
<h1>Hello World!</h1>
<h2>My topcoder handle is {this.state.Handle}</h2> 
<a className = "try">The value of pi is:- {pi}
<br/><br/></a>
Current time is:- {clock.toString()} 
<p className="Con"> The value of pi is: {pi}</p>
<ul>
{weekdays.map( (day, i) => <li key={i}>{day}</li>)}
</ul>
<NewC Name = {"TOPCODER"} pi = {pi}/>
</div>);
}
}

render(<Hello/>, document.getElementById('app'));