import React  from 'react';
import HOCNew from './HOCNew';

class Stateup extends React.Component {    
   render(){
     return(
       <div>
          <button onClick={this.props.increment}> Button {this.props.count} clicked</button>
       </div>
     )
   }
    
}

export default   HOCNew(Stateup);



