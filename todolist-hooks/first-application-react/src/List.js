import React from 'react'
import NamedCard from './NamedCard'

const List = (props) => {
    //props={ deleteName(),editName(),names:[]}
    return (
      <div>
        {props.names.map((el) => (
          <NamedCard el={el} key={el} editName={props.editName} deleteName={props.deleteName}  />
        ))}
      </div>
    );
}

export default List
