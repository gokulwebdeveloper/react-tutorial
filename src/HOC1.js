import React  from 'react';
import HOC3  from './HOC3';

class HOC1 extends React.Component {
    constructor(props){
      super(props);
      }
    
    
   render(){
    console.log(this.props);
     return(
       <div>
            <h1 onMouseOver={()=>this.props.increment()}>{this.props.count} is Hoverred</h1>
       </div>
     )
   }
    
}

export default HOC3(HOC1);



