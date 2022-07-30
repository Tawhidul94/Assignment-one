import React from "react";
import SceondCompnent from "./SceondCompnent";

const FirstComonent = () =>{

    
    const id="1234"
    const name="Kamrul  islam"
    const department="Software engenier"

    return(
        <div>
    <SceondCompnent sendID={id} sendName={name} sendDepartment={department}/>
        </div>

    );

};
export  default FirstComonent
