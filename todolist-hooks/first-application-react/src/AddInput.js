import React ,{useState}from 'react'
import {Col,Row,Container} from "react-bootstrap"

const AddInput = (props) => {
    const [text,setText]=useState("")
    // const Add=()=>{
    //     props.add({id:Date.now(),name:text,editable:false})
    // }

    //text is myinput 
    return (
      <Container>
        <Row>
          <Col md={4}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Col>
          <Col md={4}>
            {/* <button onClick={Add}>Add</button> */}
            <button
              onClick={() =>
                props.add({ id: Date.now(), name: text, editable: false })
              }
            >
              Add
            </button>
          </Col>
        </Row>
      </Container>
    );
}

export default AddInput
