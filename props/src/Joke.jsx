import React from "react";
import cat from "./assets/cat.jpeg"

export default function Joke(props) {
    return (
        <div className="contacts">
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
            <hr />
        </div>
    )
}















