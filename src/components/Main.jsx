import React, { Component,  Fragment } from "react";

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

    

    render(){
        const toggle = this.state.BoxesInfo.map(box=>{
            return(
                    <div className="toggle">
                                    <span>{box.title}</span>
                                    <label className="toggle-control">
                                        <input type="checkbox" checked={this.state.ActiveBoxes.includes(box.id)}/>
                                        <span className="control"></span>
                                    </label>
                                </div>
            )
        })
        const check = this.state.BoxesInfo.map(box=>{
            return(
                <div className="box">{box.title}</div>
            )
        })
        return (
            <Fragment>
            <aside>
            
            {toggle}

        </aside>
        <div className="box-wrapper">
            {check}
        </div>
        </Fragment>
        )
    }
}