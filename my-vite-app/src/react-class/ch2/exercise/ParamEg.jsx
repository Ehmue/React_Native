import React from "react";

export default class ParamEg extends React.Component{
    render(){
        const enabled='true';
        return(
            <>
                <button disabled='false'>Click</button>
                <button disabled={enabled}>Click</button>
            </>
        )
    }
}