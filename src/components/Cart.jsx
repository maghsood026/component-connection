import React from "react";


export default function Cart(props) {
    console.log(props.BoxesInfo)
    const check = props.BoxesInfo.map((box, key)=>{
                if (props.ActiveBoxes.includes(box.id)) {
                    return(
                        <div key={key} className="box">{box.title}</div>
                    )
                }
            })
    return (
        <div className="box-wrapper">
            {check}
        </div>
    )
}