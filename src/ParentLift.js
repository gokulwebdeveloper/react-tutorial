import React  from 'react';
import Stateup from './Stateup';
import Stateup2 from './Stateup2';
import { UserProvider } from './Context';
class PartentLift extends React.Component {
    constructor(props){
      super(props);
      this.state ={
          count: 0
      }
    }

    submit = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    
   render(){
     return(
       <div>
         <UserProvider value={{ count : this.state.count,
                                ftype: this.submit }}>
            <Stateup />  
            <Stateup2 /> 
         </UserProvider>
  

       </div>
     )
   }
    
}

export default PartentLift;



