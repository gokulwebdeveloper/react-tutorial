import React  from 'react';

function HOC3 (NewComponent){
    
class updatedComponent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        count: 0
      }

    }
    
   increment = () =>{       
       this.setState({
           count: this.state.count + 1
       });
   }
    
   render(){

     return(
       <div>
           <NewComponent increment={this.increment} count={this.state.count}  />
       </div>
     )
   }
    
}
   return updatedComponent;
}

export default HOC3;
