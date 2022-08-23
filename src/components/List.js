"use strict";
import Context from "../context/context";
import { useContext , useState } from "react";


export default function List(props) {

    const { globalList, displaySetting ,visibleItems} = useContext(Context);

    return (
                    <div key={props.item.id}>
                    <p>{props.item.id}</p>

                        <p>{props.item.text}</p>
                        <p><small>Assigned to: {props.item.assignee}</small></p>
                        <p><small>Difficulty: {props.item.difficulty}</small></p>
                        <div onClick={() => toggleComplete(item.id)}>Complete: {props.item.complete.toString()}</div>
                        <hr />
                    </div>
        
    );
}