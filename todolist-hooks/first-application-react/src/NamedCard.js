import React from 'react'

const NamedCard = (props) => {
    //props={el:{},deleteName(),editName() }
    return (
        <div>
            {props.el.editable ?(
                <>
           <input type="text"/>
           <button>save</button> 
           <button>cancel</button> </>) :
           ( <>
           <p> {props.el.name}</p>
            <button onClick={()=> props.deleteName(props.el.id)}>delete</button> 
            <button onClick={()=>props.editName(props.el.id)}>edit</button> </>)}
        </div>
    )
}

export default NamedCard
