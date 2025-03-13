import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GustGreeting";

export default function Greeting(props) {
    if(props.isLoggedin) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }

}