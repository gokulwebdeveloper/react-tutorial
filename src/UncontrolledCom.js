import React  from 'react';


class UncontrolledCom extends React.Component {
    constructor(props){
      super(props);
      this.name = React.createRef();
      this.password = React.createRef();
    }

    submit = (e) =>{
        e.preventDefault();
        console.log(this.name.current.value);
        console.log(this.password.current.value);
    }

    
   render(){
     return(
       <div>
          <form onSubmit={(e)=> this.submit(e)}>
             <input type="text" placeholder='name' name="name"  ref={this.name}  /> <br />
             <input type="password" placeholder='email' name="password"  ref={this.password} /> <br />
              <button type='submit'>Submit</button>
          </form> 
       </div>
     )
   }
    
}

export default UncontrolledCom;



