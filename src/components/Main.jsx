import React, { Component,  Fragment } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";

export default class Main extends Component {

    state = {
        BoxesInfo: [
            {id: 1, title: "Box 1"},
            {id: 2, title: "Box 2"},
            {id: 3, title: "Box 3"},
            {id: 4, title: "Box 4"},
        ], 
        ActiveBoxes: [1, 3, 4]
    }

    handle_toggle_button(id) {
        const ActiveBoxes = [...this.state.ActiveBoxes]
        console.log(ActiveBoxes)
        if (ActiveBoxes.includes(id)){
            ActiveBoxes.splice(ActiveBoxes.indexOf(id), 1)
        } else {
            ActiveBoxes.push(id)
        }
        this.setState(state => {
            return {
                ...state,
                ActiveBoxes
            }

        }
        )
    }

    render(){

        return (
            <Fragment>
            <SideBar BoxesInfo={this.state.BoxesInfo}
                     ActiveBoxes={this.state.ActiveBoxes}
                     handle_toggle_button={this.handle_toggle_button.bind(this)}/>
        <Cart BoxesInfo={this.state.BoxesInfo}
              ActiveBoxes={this.state.ActiveBoxes}/>
        </Fragment>
        )
    }
}