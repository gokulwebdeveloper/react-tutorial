import React  from 'react';
import App from './App';

class HOC extends React.Component {
    constructor(props){
      super(props);
      this.state={
        count: 0
      }

    }
    
   increment(){
       this.setState({
           count: this.state.count + 1
       });
   }
    
   render(){

     return(
       <div>
            <button onClick={()=>this.increment()}>{this.state.count} is clicked</button>
       </div>
     )
   }
    
}

export default HOC;



