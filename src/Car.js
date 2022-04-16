import React  from 'react';
import App from './App';

class Car extends React.Component {
    constructor(props){
      super(props);
      this.state={
     
      }
      this.fetchData = this.fetchData.bind(this);
    }
    
    fetchData(e){
    
      console.log(e);
     
      this.setState({
        [e.target.name] : e.target.value
      });
   
    }
    
   render(){
     console.log(this.state);
     return(
       <div>
         <input type="text" name="name" value={this.state.name} onChange={(e)=>this.fetchData(e)} />
          <input type="email" name="email" value={this.state.email} onChange={(e)=>this.fetchData(e)} />
    
       </div>
     )
   }
    
}

export default Car;



