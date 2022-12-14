
import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function SideAppbar(props) {
  return (
    <>

    <Offcanvas {...props}   backdrop= {false}  scroll= {true} >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      I will not close if you click outside of me.
    </Offcanvas.Body>
  </Offcanvas>
</>
  )
}
