import React  from 'react';
import { UserConsumer } from './Context';

class ConsumeContext extends React.Component { 
   render(){
 
     return(
       <div>
         <UserConsumer>
            {
               
              (s) =>{           
                  return (                
                    <div>
                      Hello {s.count}
                      <button onClick={s.ftype}>Update value</button>
                    </div>
                  )
              }
            }
         </UserConsumer>
         
       </div>
     )
   }
    
}


export default ConsumeContext;