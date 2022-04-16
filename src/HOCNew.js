import React  from 'react';

function HOCNew(OldCompoenent){
    class NewUpdatedComponent extends React.Component {
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
         return  <OldCompoenent count = {this.state.count} increment={()=>this.submit()} />
       }
        
    }

   return NewUpdatedComponent;
}
export default HOCNew;

