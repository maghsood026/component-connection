import React, { Component } from "react";

export default class SideBar extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const toggle = this.props.BoxesInfo.map((box, key)=>{
                    return(
                            <div className="toggle">
                                            <span>{box.title}</span>
                                            <label className="toggle-control">
                                                <input key={key} type="checkbox" checked={this.props.ActiveBoxes.includes(box.id)}/>
                                                <span onClick={(e)=> this.props.handle_toggle_button(box.id)} className="control"></span>
                                            </label>
                                        </div>
                    )
                })
        return(
            <aside>
                        {toggle}
            </aside>
        )
    }
}