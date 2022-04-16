import React  from 'react';
import HOCNew from './HOCNew';
import ConsumeContext from './ConsumeContext';
class Stateup2 extends React.Component { 
   render(){
     return(
       <div>
         test         <h2 onMouseOver={this.props.increment}> Heading {this.props.count} Hover</h2>
         <ConsumeContext />
       </div>
     )
   }
    
}


export default HOCNew(Stateup2);



