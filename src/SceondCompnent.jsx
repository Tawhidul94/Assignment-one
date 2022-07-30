import React from "react";

const SceondCompnent = ({sendID,sendName,sendDepartment}) =>{

    const  OnclickEvent =()=>{
        const data=[
            {
                id:"1234",
                name:"kamrul islam",
                differtment:"software engenier"
            }
        ]
        alert("ID :" + data[0].id + "  "+"Name :"+ data[0].name + "  "+"differtment :"+data[0].differtment)
           

        
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
