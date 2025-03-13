import React, { Component } from "react";
import Greeting from "./Greeting";
import Loggedout from "./Loggedout";
import Loggedin from "./Loggedin";

export default class Condtional extends Component {


    state = {
        isLoggedin: false
    }
    handleLogout () {
        this.setState({
            isLoggedin: false
        })
    }
    handleLogin () {
        this.setState({
            isLoggedin: true
        })
    }

    render(){
            let button = null
            
            if (this.state.isLoggedin) {
               button =  <Loggedout handleClick={()=>this.handleLogout()}/>
            } else {
              button = <Loggedin handleClick={()=>this.handleLogin()}/>
            }
        
            return (
                <div>
             <Greeting isLoggedin={this.state.isLoggedin} />
             {this.state.isLoggedin ?  <Loggedout handleClick={()=>this.handleLogout()}/> : <Loggedin handleClick={()=>this.handleLogin()}/> }
                </div>
            )
    }
}