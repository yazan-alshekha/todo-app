"use strict";
import Context from "../context/context";
import { useContext , useState } from "react";

import { Button, Card, Elevation } from "@blueprintjs/core";

export default function List(props) {

    const { globalList, displaySetting ,visibleItems} = useContext(Context);

    return (
                    // <div key={props.item.id}>
                    // <p>{props.item.id}</p>

                    //     <p>{props.item.text}</p>
                    //     <p><small>Assigned to: {props.item.assignee}</small></p>
                    //     <p><small>Difficulty: {props.item.difficulty}</small></p>
                    //     <div onClick={() => toggleComplete(item.id)}>Complete: {props.item.complete.toString()}</div>
                    //     <hr />
                    // </div>
                    <>
                    {props.list.map(item => (
                        <Card key={item.id} elevation={Elevation.TWO} interactive={true} className=".bp4-card">
                        <h5><a href="#">Card heading</a></h5>
                        {/* <div key={item.id}> */}
                          <p>{item.text}</p>
                          <p><small>Assigned to: {item.assignee}</small></p>
                          <p><small>Difficulty: {item.difficulty}</small></p>
                          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
                          <hr />
                        {/* </div> */}
                        </Card>
                      )) } 
                      </>
                    
        
    );
}