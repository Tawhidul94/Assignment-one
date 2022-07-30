import React from "react";

const SceondCompnent = ({sendID,sendName,sendDepartment}) =>{

    const  OnclickEvent =()=>{
        alert ("well come every one")
           

        
    }

    return(
        <div>
            <h1>The user Id:{sendID}</h1>
            <h1>The user Name:{sendName}</h1>
            <h1>The user Department:{sendDepartment}</h1>
            <button onClick={OnclickEvent}>Click Me</button>
        </div>

    );

};

export default SceondCompnent;
