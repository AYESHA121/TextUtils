import React from 'react'

export default function Alert(props) {
    const Capitalize=(word)=>{
        const lowWord=word.toLowerCase();
        return lowWord.charAt(0).toUpperCase()+lowWord.slice(1);
    }
    return (
<div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong> {Capitalize(props.alert.type)}:</strong>  {props.alert.msg}
        
        </div>}
        </div>
        // {/* ye oper jo new syntax likha hy && k sath iska mutlb ye hy k sb se pehlay props.alaert evaluate ho gi to next evaluate ho gi 
        // iska mutlb ye k if(props.alert !=null) then next kam ho ga otherwise nhi ho ga */}


    )
}
