import React from "react";

export default function ClearComplete({clear}){
    return(
       <>
        <button onClick={clear}>Clear Completed Tasks</button>
       </>
    );
}